# 🤖 Reglas para Codex — Amigo Gigante

Este documento define **reglas estrictas y obligatorias** que todo agente de código (Codex / GPT / AI)
debe seguir al trabajar en el proyecto **Amigo Gigante**.

👉 **Si una regla no está aquí, no se asume.**  
👉 **Si una regla se viola, el cambio se considera inválido.**

Este archivo existe para garantizar:
- Consistencia arquitectónica
- Incrementos seguros
- Resultados predecibles
- Facilidad de revisión humana

---

## 1. Principio fundamental

**Codex NO diseña arquitectura. Codex IMPLEMENTA arquitectura.**

Toda decisión arquitectónica:
- Ya está definida en `docs/01_arquitectura.md`
- O debe ser solicitada explícitamente antes de escribir código

---

## 2. Alcance de Codex

Codex **SÍ puede**:
- Implementar Historias de Usuario existentes
- Crear archivos nuevos según instrucciones
- Escribir tests unitarios
- Refactorizar código existente **sin romper contratos**
- Documentar cambios realizados

Codex **NO puede**:
- Cambiar estructura de carpetas
- Saltarse capas arquitectónicas
- Introducir nuevas dependencias sin autorización
- Mezclar responsabilidades entre capas
- Implementar features no solicitadas

---

## 3. Flujo obligatorio de trabajo

Antes de escribir código, Codex debe:

1. Leer:
   - `docs/00_vision.md`
   - `docs/01_arquitectura.md`
   - La Historia de Usuario asignada
2. Identificar:
   - Capas afectadas
   - Archivos a crear/modificar
   - Contratos existentes
3. Validar:
   - Que la HU es clara y ejecutable
   - Que no hay ambigüedad arquitectónica

Si algo no está claro → **DETENERSE Y PREGUNTAR**

---

## 4. Reglas por capa

### 4.1 Domain Layer

Permitido:
- Modelos de dominio
- Interfaces (repositorios)
- Use Cases
- Errores de dominio

Prohibido:
- Importar React, Redux, Supabase, Axios
- Acceder a `window`, `localStorage`, `fetch`
- Conocer detalles de infraestructura
- Mutar estado global

Reglas:
- Código puro
- Sin efectos secundarios
- Totalmente testeable

---

### 4.2 Infrastructure Layer

Permitido:
- Implementaciones de repositorios
- Servicios Supabase
- Configuración IoC
- Acceso a APIs externas

Prohibido:
- Lógica de UI
- Reglas de negocio complejas
- Acceso directo a Redux desde servicios (solo repositorios)

Reglas:
- Traducir datos externos a modelos de dominio
- Manejar errores técnicos
- Cumplir contratos definidos en Domain

---

### 4.3 Presentation Layer

Permitido:
- Componentes UI
- Hooks
- Redux slices
- Routing

Prohibido:
- Lógica de negocio
- Acceso directo a Supabase
- Instanciar servicios o repositorios manualmente
- **Textos hardcodeados en español o inglés** (usar sistema de traducciones)

Reglas:
- Consumir únicamente Use Cases
- Manejar loading / error / empty states
- UI reactiva, no imperativa
- **TRADUCCIONES OBLIGATORIAS**: Todos los textos visibles deben usar `useTranslations` de `next-intl`
  - Agregar traducciones en `src/messages/es/<namespace>.json` y `src/messages/en/<namespace>.json`
  - Organizar por namespace (common, home, register, [feature])
  - Keys descriptivas y anidadas
  - Mismas keys en ambos idiomas

---

## 5. Historias de Usuario (HUs)

Codex **solo trabaja a partir de Historias de Usuario**.

Formato mínimo esperado:

- Título
- Como / Quiero / Para
- Criterios de aceptación (Given / When / Then)
- Reglas técnicas
- Definición de Hecho

Si falta alguno → **no implementar**

---

## 6. Convenciones obligatorias

### Naming

- Interfaces: `IUserRepository`
- Use Cases: `CreateUserUseCase`
- Repositories: `UserRepository`
- Services: `SupabaseAuthService`
- Hooks: `useUser`
- Redux slices: `userSlice`

### Archivos

- Un Use Case por archivo
- Un repositorio por entidad
- Un slice por feature

---

## 7. IoC y dependencias

Reglas estrictas:

- Toda dependencia debe inyectarse vía Inversify
- `new` está prohibido fuera de Infrastructure
- Presentation obtiene dependencias solo desde el container
- No hardcodear implementaciones

---

## 8. Testing (obligatorio)

Cada entrega debe incluir:

- Tests unitarios para Use Cases
- Mocks para repositorios
- Casos felices y de error

No se acepta:
- Código sin tests (salvo UI simple)
- Tests que dependan de Supabase real

---

## 9. Manejo de errores

Reglas:
- Nunca lanzar errores crudos a la UI
- Usar `AppError` o errores tipados
- Traducir errores por capa

Codex debe:
- Explicar qué errores maneja
- Indicar dónde se capturan

---

## 10. Qué debe entregar Codex

Cada respuesta de implementación debe incluir:

1. Resumen breve de la HU implementada
2. Archivos creados / modificados
3. Explicación del flujo de datos
4. Tests añadidos
5. Checklist de cumplimiento

Ejemplo de checklist:

- [x] Arquitectura respetada
- [x] Capas no violadas
- [x] Tests incluidos
- [x] Naming correcto
- [x] Sin dependencias nuevas

---

## 11. Prohibiciones absolutas

🚫 Saltarse capas  
🚫 Acceder a Supabase desde UI  
🚫 Lógica de negocio en hooks  
🚫 Código sin HU  
🚫 Cambios silenciosos  

---

## 12. Regla final

> **Si el código no es fácil de explicar, no es aceptable.**

Codex debe escribir código:
- Legible
- Predecible
- Fácil de revisar
- Fácil de eliminar o modificar

---

**Este documento es obligatorio para cualquier implementación en Amigo Gigante.**
