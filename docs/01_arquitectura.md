# 🏗️ Arquitectura — Amigo Gigante (Web)

> Basado en la guía `GUIA_ARQUITECTURA_WEB.md` (arquitectura del proyecto móvil Dare adaptada a Web).  
> Este documento es la **fuente de verdad** para construir Amigo Gigante de forma incremental y reutilizable.

---

## 📋 Resumen Ejecutivo

Esta arquitectura define cómo construir **Amigo Gigante** como un proyecto web manteniendo:

- **Clean Architecture** con dependencias unidireccionales
- **Redux Persist** como capa transversal de persistencia y cache
- **IoC con InversifyJS** para inyección de dependencias y testabilidad
- Integración con **Supabase** (Auth + DB + opcional Storage/Realtime) encapsulada en Infrastructure

El objetivo es que el repo sea:
- Reutilizable para futuros proyectos
- Predecible para agentes (Codex)
- Sólido para crecer sin re-trabajo

---

## 🎯 Principios Arquitectónicos Fundamentales

### 1) **Clean Architecture (Arquitectura Limpia)**

La aplicación está organizada en **3 capas principales** con dependencias unidireccionales:

```
┌─────────────────────────────────────────────────────────┐
│              PRESENTATION LAYER                         │
│  (Componentes UI, Hooks, Redux Store)                   │
│  Depende de: Domain                                     │
└─────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│              DOMAIN LAYER                               │
│  (Modelos, Interfaces, Use Cases)                       │
│  NO depende de nada externo                             │
└─────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│           INFRASTRUCTURE LAYER                          │
│  (Repositorios, Servicios, IoC Container)               │
│  Depende de: Domain                                     │
└─────────────────────────────────────────────────────────┘
```

**Regla de oro**: las dependencias siempre apuntan hacia adentro.  
La capa más interna (**Domain**) no conoce nada de capas externas.

---

### 2) **Redux Persist como Capa Transversal**

Redux Persist actúa como una **capa de persistencia** que atraviesa el sistema:

- Cache local para datos
- Rehidratación del estado al iniciar
- Soporte para recuperación ante errores de red

---

### 3) **Server-First con Fallback (Lecturas)**

Estrategia de datos:

- **Lecturas**: intentar servidor primero (si hay conexión) → fallback a Redux Persist si falla
- **Escrituras**: sincronizar directamente con el servidor y reflejar estado en Redux

---

### 4) **Inversión de Control (IoC) con InversifyJS**

Todas las dependencias se inyectan usando un contenedor IoC:

- Testing: fácil mockear repositorios/servicios
- Mantenibilidad: cambios centralizados
- Escalabilidad: añadir features sin tocar código existente

---

## 🔌 Supabase en esta arquitectura

Supabase se usa como **Backend-as-a-Service**, pero con una regla estricta:

✅ **Supabase vive solo en Infrastructure**  
🚫 Presentation y Domain **nunca** importan `@supabase/supabase-js`

Separación recomendada:

- `infrastructure/config/supabase.ts`: inicialización del cliente
- `infrastructure/services/*`: interacción directa con Supabase (Auth/DB/Storage/Realtime)
- `infrastructure/repositories/*`: repositorios con estrategia Server-first/Offline-first
- `domain/repositories/*`: contratos (interfaces) que ocultan Supabase

---

## 📁 Estructura de Carpetas Recomendada (Amigo Gigante)

Mantiene la estructura y convenciones de la guía base, aterrizada a Amigo Gigante.

```
amigo-gigante/
├── src/
│   ├── domain/                          # 🟢 CAPA DOMAIN (Núcleo)
│   │   ├── models/                      # Entidades del dominio
│   │   │   ├── AuthUser.ts
│   │   │   ├── UserProfile.ts
│   │   │   ├── GiftExchange.ts          # (ejemplo: módulo del producto)
│   │   │   └── index.ts
│   │   ├── repositories/                # Interfaces de repositorios
│   │   │   ├── IAuthRepository.ts
│   │   │   ├── IUserProfileRepository.ts
│   │   │   ├── IGiftExchangeRepository.ts
│   │   │   └── index.ts
│   │   ├── usecases/                    # Casos de uso
│   │   │   ├── auth/
│   │   │   │   ├── LoginUseCase.ts
│   │   │   │   ├── RegisterUseCase.ts
│   │   │   │   └── LogoutUseCase.ts
│   │   │   ├── profile/
│   │   │   │   ├── GetUserProfileUseCase.ts
│   │   │   │   └── UpdateUserProfileUseCase.ts
│   │   │   ├── gift/
│   │   │   │   ├── CreateExchangeUseCase.ts
│   │   │   │   └── GetExchangeUseCase.ts
│   │   │   └── index.ts
│   │   └── adapters/                    # Mappers (opcional)
│   │       └── mappers/
│   │           ├── UserProfileMapper.ts
│   │           └── GiftExchangeMapper.ts
│   │
│   ├── infrastructure/                  # 🔵 CAPA INFRASTRUCTURE
│   │   ├── config/                      # Configuraciones
│   │   │   ├── api.ts                   # Configuración API (si aplica)
│   │   │   ├── supabase.ts              # Configuración Supabase
│   │   │   └── environment.ts           # Variables de entorno
│   │   ├── ioc/                         # Inversión de Control
│   │   │   ├── container.ts             # Contenedor principal
│   │   │   ├── repositories/
│   │   │   │   ├── repositories.container.ts
│   │   │   │   └── repositories.types.ts
│   │   │   ├── services/
│   │   │   │   ├── services.container.ts
│   │   │   │   └── services.types.ts
│   │   │   └── usecases/
│   │   │       ├── usecases.container.ts
│   │   │       └── usecases.types.ts
│   │   ├── repositories/                # Implementaciones de repositorios
│   │   │   ├── AuthRepository.ts
│   │   │   ├── UserProfileRepository.ts
│   │   │   ├── GiftExchangeRepository.ts
│   │   │   └── index.ts
│   │   ├── services/                    # Servicios de datos
│   │   │   ├── ApiService.ts            # Cliente HTTP (si aplica)
│   │   │   ├── SupabaseAuthService.ts   # Auth Supabase
│   │   │   ├── UserProfileService.ts
│   │   │   ├── GiftExchangeService.ts
│   │   │   ├── SyncService.ts           # Servicio de sincronización
│   │   │   └── index.ts
│   │   └── storage/                     # Adaptadores de almacenamiento
│   │       ├── LocalStorageAdapter.ts   # Web: localStorage
│   │       └── IndexedDBAdapter.ts      # Opcional: IndexedDB para datos grandes
│   │
│   ├── presentation/                    # 🟡 CAPA PRESENTATION
│   │   ├── components/                  # Componentes React
│   │   │   ├── atoms/
│   │   │   ├── molecules/
│   │   │   ├── organisms/
│   │   │   └── layouts/
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   ├── ProfilePage.tsx
│   │   │   └── index.ts
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   ├── useProfile.ts
│   │   │   ├── useExchange.ts
│   │   │   └── index.ts
│   │   ├── store/
│   │   │   ├── store.ts
│   │   │   ├── hooks.ts
│   │   │   ├── slices/
│   │   │   │   ├── authSlice.ts
│   │   │   │   ├── profileSlice.ts
│   │   │   │   ├── exchangeSlice.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   └── router/
│   │       └── router.tsx               # React Router / Next router
│   │
│   ├── lib/
│   │   ├── errors/
│   │   │   ├── AppError.ts
│   │   │   ├── ErrorHandler.ts
│   │   │   └── index.ts
│   │   ├── helpers/
│   │   │   └── index.ts
│   │   └── types/
│   │       └── index.ts
│   │
│   └── App.tsx
│
├── public/
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

---

## 🔧 Diferencias Clave: React Native → Web (según la guía)

### 1) Almacenamiento local

**Web (localStorage):**
```ts
export const localStorageAdapter = {
  getItem: (key: string): Promise<string | null> =>
    Promise.resolve(window.localStorage.getItem(key)),
  setItem: (key: string, value: string): Promise<void> => {
    window.localStorage.setItem(key, value);
    return Promise.resolve();
  },
  removeItem: (key: string): Promise<void> => {
    window.localStorage.removeItem(key);
    return Promise.resolve();
  },
};
```

**Web (IndexedDB - opcional para datos grandes):**
```ts
import localforage from 'localforage';
```

---

### 2) Detección de conexión (Web)

```ts
const isOnline = () => navigator.onLine;

window.addEventListener('online', () => {
  // disparar sync
});

window.addEventListener('offline', () => {
  // modo offline
});
```

---

### 3) Navegación (Web)

- React Router: `useNavigate`
- Next: `useRouter`

---

## 📝 Implementación paso a paso (base)

> Esta sección marca cómo debe construirse el sistema de acuerdo a la guía.

### Paso 1: Configurar Redux Persist para Web

- Crear `LocalStorageAdapter`
- Configurar `store.ts` con `persistReducer` por slice
- Definir `whitelist` por slice y evitar persistir estado efímero

---

### Paso 2: Configurar IoC Container

```ts
import { Container } from 'inversify';
import { repositoriesModule } from './repositories/repositories.container';
import { servicesModule } from './services/services.container';
import { useCaseModules } from './usecases/usecases.container';

const appContainer = new Container();

appContainer.load(servicesModule);      // 1) Services primero
appContainer.load(repositoriesModule);  // 2) Repositories segundo
appContainer.load(...useCaseModules);   // 3) UseCases tercero

export { appContainer };
```

---

### Paso 3: Servicios de infraestructura

Los servicios de infraestructura son responsables de:

- Comunicación con Supabase
- Manejo de errores técnicos
- Abstracción de APIs externas

---

### Paso 4: Implementar Repository con Server-First Strategy (lecturas)

Regla:
- Si hay conexión, intentar servidor y guardar a Redux
- Si falla o no hay conexión, construir desde Redux Persist (fallback)

---

### Paso 5: Implementar Use Case

Regla:
- Los use cases dependen de interfaces (repositorios)
- Se decoran o envuelven para manejo uniforme de errores (`HandleErrors`)

---

### Paso 6: Crear Custom Hook

Regla:
- Los hooks obtienen use cases desde `appContainer`
- La UI llama `execute()` y maneja `loading/error`

---

## 🔄 Flujo de datos (según la guía)

### Escenario 1: Lectura (Server-first con fallback)

1. UI navega y monta vista
2. Hook ejecuta carga
3. UseCase ejecuta la acción
4. Repository aplica estrategia:
   - Online: server → guardar Redux Persist → retornar
   - Offline/falla: construir desde Redux Persist → retornar

### Escenario 2: Escritura (Server)

1. UI ejecuta acción
2. Repository ejecuta operación contra Supabase
3. Estado actualizado en Redux
4. Manejo de errores en capa de presentación

---

## 📦 Dependencias recomendadas

> Se mantiene el listado propuesto en la guía, ajustable según tooling final.

- `react`, `react-dom`
- `@reduxjs/toolkit`, `react-redux`, `redux-persist`
- `inversify`, `reflect-metadata`
- `@supabase/supabase-js`
- Router: `react-router-dom` (si Vite) / Router de Next (si Next)
- HTTP opcional: `axios` (si no todo es Supabase)

---

## 🎯 Convenciones y Mejores Prácticas (según la guía)

### Nomenclatura

- **Interfaces**: prefijo `I` (ej: `IQuestionRepository.ts`)
- **Use Cases**: sufijo `UseCase` (ej: `GetExchangeUseCase.ts`)
- **Services**: sufijo `Service` (ej: `SupabaseAuthService.ts`)
- **Repositories**: sufijo `Repository` (ej: `AuthRepository.ts`)
- **Hooks**: prefijo `use` (ej: `useAuth.ts`)
- **Slices**: sufijo `Slice` (ej: `authSlice.ts`)

---

## 🧪 Testing

Prioridad:
1. Domain
2. Use Cases (unit tests)
3. Infrastructure (mockeando servicios)
4. Presentation (selectivo)

Regla mínima:
- Todo Use Case debe tener al menos un test unitario.

---

## 🚫 Qué está prohibido

- Lógica de negocio en UI
- Acceso directo a Supabase desde Presentation/Domain
- Dependencias circulares
- Mezclar DTOs y entidades del dominio sin mappers/adapters
- Implementar features sin HU / sin criterios de aceptación

---

## ✅ Checklist de implementación (macro)

### Fase 1: Configuración base
- [ ] TypeScript
- [ ] Redux Toolkit + Redux Persist (Web)
- [ ] InversifyJS + reflect-metadata
- [ ] Router
- [ ] environment + supabase config

### Fase 2: Domain
- [ ] Modelos
- [ ] Interfaces de repositorios
- [ ] Use Cases
- [ ] Tests

### Fase 3: Infrastructure
- [ ] Supabase services
- [ ] Repositories con estrategia server/offline
- [ ] SyncService
- [ ] Container IoC

### Fase 4: Presentation
- [ ] Slices
- [ ] Hooks
- [ ] Pages
- [ ] Error/loading states

---

## 📌 Nota

Esta arquitectura es agnóstica del framework web.  
Solo cambia router/build tooling, no cambian capas ni contratos.
