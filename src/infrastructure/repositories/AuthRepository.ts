import type { PostgrestError, Session, User } from "@supabase/supabase-js";
import { AuthApiError } from "@supabase/supabase-js";

import type {
  CreateProfileParams,
  IAuthRepository,
  SignUpParams,
  SignUpResult,
} from "@/domain/repositories/IAuthRepository";
import type { AuthSession, AuthUser } from "@/domain/types/auth.types";
import { supabaseClient } from "@/infrastructure/config/supabase";

class AuthRepository implements IAuthRepository {
  async signUp(params: SignUpParams): Promise<SignUpResult> {
    const { email, password } = params;

    try {
      const { data, error } = await supabaseClient.auth.signUp({ email, password });

      if (error) {
        throw new Error(this.translateAuthError(error));
      }

      if (!data.user) {
        throw new Error("No se pudo crear el usuario en Supabase.");
      }

      return {
        user: this.mapUser(data.user),
        session: this.mapSession(data.session),
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(this.translateAuthError(error));
      }

      throw new Error("Ocurrió un error desconocido al registrar el usuario.");
    }
  }

  async createProfile(params: CreateProfileParams): Promise<void> {
    const { userId, role } = params;

    try {
      const { error } = await supabaseClient.from("profiles").insert({
        id: userId,
        role,
      });

      if (error) {
        throw new Error(this.translateProfileError(error));
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(this.translateProfileError(error));
      }

      throw new Error("No se pudo crear el perfil del usuario.");
    }
  }

  private mapUser(user: User): AuthUser {
    return {
      id: user.id,
      email: user.email ?? "",
      role: "foundation_user",
    };
  }

  private mapSession(session: Session | null): AuthSession | null {
    if (!session) return null;

    const user = this.mapUser(session.user);

    return {
      accessToken: session.access_token ?? null,
      refreshToken: session.refresh_token,
      expiresAt: session.expires_at,
      user,
    };
  }

  private translateAuthError(error: Error): string {
    const message = error.message?.toLowerCase?.() ?? "";

    if (error instanceof AuthApiError && error.status === 0) {
      return "No pudimos conectarnos al servidor de autenticación. Revisa tu conexión e inténtalo nuevamente.";
    }

    if (message.includes("registered") || message.includes("already")) {
      return "El correo ya está registrado. Intenta iniciar sesión o utiliza otro email.";
    }

    if (message.includes("rate limit")) {
      return "Se han hecho demasiados intentos en poco tiempo. Espera unos minutos y vuelve a intentarlo.";
    }

    return "No se pudo registrar tu cuenta. Inténtalo nuevamente en unos instantes.";
  }

  private translateProfileError(error: PostgrestError | Error): string {
    const message = error.message?.toLowerCase?.() ?? "";

    if (message.includes("connection")) {
      return "No se pudo conectar con la base de datos para crear el perfil.";
    }

    return "No se pudo crear el perfil del usuario. Inténtalo nuevamente.";
  }
}

export { AuthRepository };
