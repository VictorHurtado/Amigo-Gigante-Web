# 📌 Backlog — Amigo Gigante

Este documento define el **backlog general** del proyecto **Amigo Gigante** y sirve como
**vista de alto nivel para humanos**.

⚠️ **Importante**  
Este archivo **NO es la fuente directa de trabajo para Codex**.

La ejecución real de las Historias de Usuario se hace **exclusivamente** a través de
archivos individuales ubicados en el directorio:

```
/HUs
```

Cada archivo dentro de `HUs/` representa **una (1) Historia de Usuario autocontenida**.

---

## 🧭 Regla fundamental del Backlog

- `docs/03_backlog.md` → **visión global y orden**
- `HUs/HU-XXX.md` → **fuente única de verdad para implementación**

👉 Codex debe:
- Leer **solo un archivo HU a la vez**
- Ignorar completamente este backlog durante la implementación
- No inferir requisitos desde otras HUs

---

## 🗂️ Estructura oficial de Historias de Usuario

```
HUs/
├── HU-001.md
├── HU-002.md
├── HU-003.md
├── HU-004.md
├── HU-010.md
├── HU-011.md
├── HU-012.md
└── ...
```

Cada archivo HU:
- Es independiente
- No comparte estado con otras HUs
- Contiene toda la información necesaria para implementarse

---

## 🟦 ÉPICA 0 — Fundamentos del Proyecto

**Objetivo:**  
Preparar el repositorio para crecer de forma ordenada, incremental y controlada.

| Orden | HU | Estado | Descripción |
|-----|----|-------|-------------|
| 1 | HU-001 | 🟢 | Inicializar proyecto base Web |
| 2 | HU-002 | 🟢 | Configurar estructura por capas |
| 3 | HU-003 | 🟢 | Configurar IoC Container |
| 4 | HU-004 | 🟢 | Configurar Redux Toolkit + Persist |

---

## 🟦 ÉPICA 1 — Integración Supabase (Base)

**Objetivo:**  
Integrar Supabase respetando la arquitectura definida.

| Orden | HU | Estado | Descripción |
|-----|----|-------|-------------|
| 5 | HU-010 | ⚪ | Configurar cliente Supabase |
| 6 | HU-011 | ⚪ | Implementar AuthRepository |
| 7 | HU-012 | ⚪ | Persistir sesión de usuario |

---

## 🟦 ÉPICA 2 — Dominio Amigo Gigante (MVP)

**Objetivo:**  
Definir y ejecutar el primer flujo funcional del producto.

| Orden | HU | Estado | Descripción |
|-----|----|-------|-------------|
| 8 | HU-020 | ⚪ | Definir modelos de dominio |
| 9 | HU-021 | ⚪ | Crear repositorio de dominio |
| 10 | HU-022 | ⚪ | Implementar casos de uso |

---

## 🟦 ÉPICA 3 — Presentation (End-to-End)

**Objetivo:**  
Conectar UI → UseCases → Repositories → Supabase.

| Orden | HU | Estado | Descripción |
|-----|----|-------|-------------|
| 11 | HU-030 | ⚪ | Crear hooks del flujo principal |
| 12 | HU-031 | ⚪ | Crear páginas del flujo principal |

---

## 🟦 ÉPICA 4 — Calidad y Mantenibilidad

| Orden | HU | Estado | Descripción |
|-----|----|-------|-------------|
| 13 | HU-040 | ⚪ | Manejo de errores global |
| 14 | HU-041 | ⚪ | Documentación y limpieza final |

---

## 📝 Estado de una HU

- ⚪ Pendiente
- 🟡 En progreso
- 🟢 Completada
- 🔴 Bloqueada

---

## 📌 Reglas de modificación del backlog

- Este archivo puede cambiar para **reordenar o explicar**
- Ninguna HU se implementa desde aquí
- Toda HU ejecutable debe existir como archivo en `/HUs`
- Si hay conflicto, **el archivo HU manda**

---

## ✅ Nota final

Este enfoque garantiza:

- Aislamiento de contexto para agentes
- Implementaciones más precisas
- Menos errores por inferencia
- Revisión humana más simple

El backlog existe para **planear**.  
Las HUs existen para **construir**.
