# HU-XXX — <Título>

**Como** <tipo de usuario>  
**Quiero** <necesidad>  
**Para** <beneficio>

---

## Dependencias

- Requiere: HU-00Y, HU-00Z (si aplica)
- Requiere configuración previa: (MUI/Tailwind/IoC/Supabase/etc.)

---

## Contexto / Notas

- Decisiones relevantes (ej: “MUI + Tailwind se usan juntos”).
- Restricciones de arquitectura (Clean Architecture: Domain no depende de Presentation/Infrastructure).
- Si hay consideraciones del entorno (Codex Cloud sin npm), describirlo aquí.

---

## Diseño (OBLIGATORIO si hay UI)

Referencias:
- Diseño: `docs/design/<screen>.png` (o archivos `.md` de diseño)
- Design System: `docs/design/system.md`

Reglas:
- Respetar jerarquía visual del diseño.
- Usar tokens definidos en el Design System (no inventar tamaños/colores).
- Si algo no es claro en el diseño, preguntar antes de asumir.

---
---

## Reglas técnicas

- Arquitectura: ver `docs/01_arquitectura.md`
- Reglas Codex: ver `docs/02_reglas_de_codex.md`

## Alcance

Incluye:
- ...

No incluye:
- ...

---

## Criterios de aceptación (Given / When / Then)

### 1) <Criterio>

- **Dado** ...
- **Cuando** ...
- **Entonces** ...

### 2) <Criterio>

- **Dado** ...
- **Cuando** ...
- **Entonces** ...

---

## Reglas técnicas

### Arquitectura
- Presentation solo consume UseCases vía IoC (no importa repositorios concretos).
- Domain no importa React/Next/MUI/Tailwind/Inversify.
- Infrastructure contiene implementaciones y wiring IoC.

### UI (si aplica)
- UI con MUI.
- Tailwind se usa para layout/spacing/responsive utilities (si está habilitado).
- No agregar librerías de estilos adicionales sin HU específica.

### Traducciones (OBLIGATORIO si hay UI con texto)
- **TODOS los textos visibles en la UI deben estar traducidos** (español e inglés).
- Usar el sistema de traducciones configurado en HU-016 (`next-intl`).
- Agregar traducciones en los archivos correspondientes:
  - `src/messages/es/<namespace>.json` (español)
  - `src/messages/en/<namespace>.json` (inglés)
- Organizar traducciones por namespace:
  - `common.json`: textos comunes (botones, labels, mensajes genéricos)
  - `home.json`: textos de la página home
  - `register.json`: textos de registro
  - `[feature].json`: textos específicos de cada feature
- **NO hardcodear textos en español o inglés** en componentes.
- Usar `useTranslations` hook de `next-intl` para acceder a traducciones.
- Keys descriptivas y anidadas: `home.hero.title`, `register.form.email.label`.
- Mantener consistencia: mismas keys en ambos idiomas.

### Dependencias / Paquetes
- No agregar dependencias nuevas salvo que esta HU lo indique explícitamente.
- Si aparece error 403/conectividad:
  1) Detenerse
  2) Pedir dominios requeridos
  3) Explicar por qué se requieren
  4) No continuar

---

## Implementación sugerida (opcional)

- Archivos/carpetas sugeridas:
  - `src/...`

---

## Validación

Comandos mínimos:
- `npm run dev`
- `npm run build`

(Agregar tests si aplica)

---

## Definición de Hecho

- [ ] Criterios de aceptación cumplidos
- [ ] `npm run dev` OK
- [ ] `npm run build` OK
- [ ] Sin violaciones de capas
- [ ] Sin cambios fuera del alcance
- [ ] **Traducciones incluidas** (si aplica UI con texto):
  - [ ] Textos agregados en `src/messages/es/<namespace>.json`
  - [ ] Textos agregados en `src/messages/en/<namespace>.json`
  - [ ] Componentes usan `useTranslations` (no textos hardcodeados)
  - [ ] Keys consistentes entre idiomas
- Commit sugerido:
  `<tipo>: <mensaje>`