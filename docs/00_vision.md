# Amigo Gigante — Visión del Proyecto

## 1. ¿Qué es Amigo Gigante?

**Amigo Gigante** es un proyecto experimental cuyo objetivo principal es servir como
un **laboratorio de arquitectura web moderna**, reusable y escalable, orientado a:

- Clean Architecture
- Server-first / Offline-first
- Alta mantenibilidad
- Automatización de desarrollo asistido por agentes (Codex)

El producto funcional es importante, pero **el verdadero valor del proyecto es la forma
en que está construido**.

---

## 2. Propósito del proyecto

Este repositorio existe para:

1. Diseñar y validar una arquitectura web sólida y reusable.
2. Documentar decisiones técnicas de forma explícita.
3. Probar un flujo de desarrollo incremental guiado por Historias de Usuario claras.
4. Servir como base para delegar implementación a agentes de código de forma segura.
5. Mantener un historial limpio, entendible y educativo en GitHub.

---

## 3. Principios rectores

Amigo Gigante se construye bajo los siguientes principios no negociables:

- **Arquitectura primero**: ninguna feature se implementa sin diseño previo.
- **Separación estricta de capas**: dominio independiente de frameworks y servicios externos.
- **Offline-first**: la aplicación debe funcionar sin conexión siempre que sea posible.
- **Sin dependencias ocultas**: toda dependencia debe ser explícita y controlada.
- **Código legible > código ingenioso**.
- **Documentación viva**: si el código cambia, la documentación también.

---

## 4. Alcance funcional (alto nivel)

En su primera etapa, Amigo Gigante será una aplicación web que permitirá:

- Autenticación de usuarios.
- Gestión de información persistente por usuario.
- Sincronización de datos entre cliente y servidor.
- Evolución incremental de funcionalidades sin romper la arquitectura base.

> El detalle funcional se define y evoluciona a través del backlog de Historias de Usuario.

---

## 5. Público objetivo

Este proyecto está orientado a:

- Desarrolladores que quieran estudiar o reutilizar una arquitectura web bien estructurada.
- Personas interesadas en Clean Architecture aplicada a frontend.
- Experimentos de desarrollo asistido por IA / agentes.
- El propio autor como base para proyectos futuros.

No es un producto comercial en esta etapa.

---

## 6. Enfoque tecnológico (resumen)

A nivel conceptual, el proyecto utilizará:

- Frontend web moderno con TypeScript.
- Arquitectura por capas (Domain, Application, Infrastructure, Presentation).
- Inyección de dependencias.
- Persistencia local + sincronización remota.
- Backend como servicio (Supabase).

Los detalles técnicos específicos se documentan en `docs/01_arquitectura.md`.

---

## 7. Qué NO es Amigo Gigante

Para evitar confusiones, Amigo Gigante **no es**:

- Un proyecto rápido orientado solo a sacar features.
- Un repositorio sin documentación.
- Un monolito acoplado a un framework específico.
- Un ejemplo de “hack rápido” o prototipo desordenado.

---

## 8. Evolución del proyecto

Amigo Gigante se desarrollará de forma:

- Incremental
- Basada en Historias de Usuario
- Con commits pequeños y descriptivos
- Con revisión constante de decisiones arquitectónicas

Cada incremento debe dejar el sistema **en un estado estable y entendible**.

---

## 9. Estado actual

🟡 **Fase actual**: Diseño y definición de fundamentos  
🟢 **Próximo paso**: Definición detallada de la arquitectura base

---

## 10. Autor y contexto

Este proyecto forma parte de un proceso de aprendizaje y experimentación personal.
Las decisiones aquí tomadas pueden evolucionar, pero siempre estarán documentadas.

