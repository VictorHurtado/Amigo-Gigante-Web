import type { AuthSession, AuthUser, UserRole } from "@/domain/types/auth.types";

export interface SignUpParams {
  email: string;
  password: string;
}

export interface SignUpResult {
  user: AuthUser;
  session: AuthSession | null;
}

export interface CreateProfileParams {
  userId: string;
  role: UserRole;
}

export interface IAuthRepository {
  signUp(params: SignUpParams): Promise<SignUpResult>;
  createProfile(params: CreateProfileParams): Promise<void>;
}
