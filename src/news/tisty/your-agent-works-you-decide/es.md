---
title: "Tisty 1.51: tu agente hace el trabajo, tú decides de una pasada"
description: "Lo que tu agente dice que terminó espera tu palabra en un solo lugar, tus reglas y hooks llegan a cada agente, y tu mitad, escribir, ya no espera."
release: "1.51.0"
page: tisty-1-51-tu-agente-trabaja-tu-decides
video: "/tisty-brainsty-network"
shows: "Brainsty en Tisty: la red entera de documentos, tareas y etiquetas brilla en colores mientras gira, luego se acerca a la etiqueta agent y abre la ficha de una tarea con lo que se une a ella"
---

Cada vez más trabajo es compartido. Tu agente trabaja el detalle: toma la tarea, escribe, prueba, avisa cuando terminó. Tú llevas el rumbo: decides cómo trabaja, revisas lo que hizo y decides qué se cierra. Tisty 1.51 aliviana las dos mitades.

- **Tu agente dice que terminó, tú decides de una pasada.** Todo lo que tus agentes dicen que terminaron espera en una sola lista, con las dos respuestas en cada fila.
- **Tus reglas y tus hooks, en cada agente.** Escribes un hook una vez y llega a cada agente que acepta hooks, y tus reglas llegan también a los agentes que usas dentro de WSL. Nada corre sin tu sí.
- **Tu mitad, sin esperas.** Cada letra que escribes aparece en cuanto pulsas la tecla, corra lo que corra por debajo.
- **Tisty se mantiene al día solo.** Si quieres, una versión nueva se instala al cerrar o al abrir Tisty, nunca mientras trabajas.
- **Carpetas de seis niveles,** con algo que saber si sincronizas más de un equipo.

Todo queda en tu equipo, en Markdown y sin cuenta, y funciona igual si trabajas por tu cuenta.

## Tu agente dice que terminó, tú decides de una pasada

Mario trabaja con un agente en cada uno de tres proyectos. Durante la semana dijeron que tres tareas estaban listas y que una mejor no se hacía. Nada se cierra sin Mario, así que el viernes las cuatro esperaban, cada una en su lista.

En Tareas, después de Todas, un chip **◆ Por confirmar** dice ahora cuántas esperan, y aparece solo mientras alguna espera. Cada fila dice lo que dijo el agente y ofrece las dos respuestas ahí mismo: **Completar**, o **No lo haré** cuando el agente dijo que no se haga, y **Sigue pendiente**, que le quita la marca y deja la tarea abierta. Si acotas la vista a una lista, cuenta solo esa lista. Mario responde las cuatro en un minuto. Los pasos que un agente da por hechos siguen esperando en la página de su tarea, contados aparte hasta que Mario los marque.

También funciona al revés: cuando Mario descarta una tarea, el agente ahora la lee como una que Mario decidió no hacer.

## Tus reglas y tus hooks, en cada agente

Marisol quiere que cada agente corra una revisión corta antes de escribir archivos en un repositorio. Hasta ahora eso era editar a mano los ajustes de cada agente, con un formato distinto cada vez, y esperar que no faltara ninguno.

En **Agentes › Global › Hooks**, el botón **+** pide un nombre, el tipo de script, el momento en que corre (al empezar una sesión, antes o después de una herramienta, al terminar un turno), las herramientas y los agentes. Marisol escribe el script en su propia página. **Registrar** muestra el script entero y cada archivo que va a tocar antes de escribir nada, un sí por hook y por equipo. **Verificar** dice, agente por agente, si está en su lugar, y **Probarlo una vez** lo corre con una entrada de ejemplo. Llega a Claude Code, Codex, Cursor, GitHub Copilot, Antigravity CLI y Gemini CLI.

La línea entre las dos mitades sigue donde estaba: un hook corre código en tu equipo, así que si el script cambia espera un sí nuevo, y ningún agente puede crear ni cambiar uno. Y cuando dos documentos de Agentes escribirían el mismo archivo, Tisty le pregunta a Marisol cuál manda en ese equipo, y no escribe ninguno hasta entonces.

Global además pone primero tus propias reglas, skills y hooks, y los de Tisty aparte. Las skills de Tisty, que le enseñan a tu agente a retomar donde quedó y a dejar el trabajo listo para el siguiente, y sus hooks, que le entregan sus tareas abiertas al empezar una sesión, comparten ahora una fila con un punto que dice si los dos están encendidos. Su ficha, **Tisty en tus agentes**, cuenta en dos líneas qué hacen, y **Encender los dos** lista los archivos que va a escribir antes de escribirlos. Cada skill guarda una sola copia para todos tus agentes, con un botón para actualizarla.

### Tus agentes en WSL también trabajan con tus reglas

Jaime usa Claude Code dentro de Ubuntu, en WSL, y ese agente leía su propia carpeta, donde no estaba ninguna de las reglas de Jaime: el mismo proyecto, dos agentes, dos formas de trabajar. Cuando Jaime busca en esa distro desde **Configuración › Agentes**, la distro recibe dos interruptores propios, apagados hasta que Jaime dice que sí: uno para las reglas y skills de Agentes, otro para las skills de Tisty. Tisty las escribe ahí como Linux espera, nunca trae nada de vuelta, y deja la memoria y los hooks en Windows. Un archivo cambiado dentro de Ubuntu se deja tal cual. Y un agente en WSL, o uno instalado de otra forma, sigue encontrando a Tisty.

## Tu mitad, sin esperas

Mientras los agentes trabajan, lo tuyo es leer, decidir y escribir lo que solo tú sabes. Yisset escribe el manual de un sistema, un documento de muchas páginas, en un portátil que además está compilando. Antes, cada tecla esperaba su turno detrás de lo que Tisty estuviera haciendo, y en un equipo ocupado un Enter o un espacio podía aparecer tarde. Ahora la página escribe las letras por sí misma, al instante, y Tisty guarda justo detrás. Ni una vuelta de sincronización ni la hoja de Ideas frenan la página.

Cosas más pequeñas que notarás al escribir:

- Supr o Retroceso junto a una tabla, un diagrama o una nota adhesiva la quita entera, y Ctrl + Z la devuelve de una vez.
- Copiar desde una página les entrega texto con formato a otras aplicaciones, y lo que pegas desde Word, la web, un editor de código o una terminal llega limpio y con formato.
- El clic derecho en la página ofrece las sugerencias de ortografía, cortar, copiar, pegar y lo que puede hacer ese bloque.
- Un documento sigue el ancho de la ventana, hasta su propio ancho, y el aspecto de papel queda para la vista de impresión.

## Tisty se mantiene al día solo

Mario tuvo una versión nueva esperando varios días, porque siempre había una sesión abierta. Ahora **Instalar actualizaciones automáticamente**, en **Configuración › Ayuda y acerca de**, lo hace por ti: la versión nueva se descarga por detrás, comprobada contra su firma, y se instala al cerrar o al abrir Tisty, también al encender el equipo, nunca mientras trabajas. Después de la próxima actualización, Tisty te pregunta una vez si lo quieres así.

La copia de Microsoft Store sigue actualizándose por la Store. Y si una actualización no se puede instalar, un botón te lleva al sitio web para descargarla.

## Una biblioteca tan honda como tus proyectos

Jaime guarda los clientes dentro del trabajo, cada cliente con sus años y cada año con sus auditorías, y las carpetas se quedaban sin niveles. Ahora se anidan hasta seis niveles.

Algo que saber antes de usarlas: cada equipo con el que sincronizas tiene que actualizar a esta versión. Uno que todavía no lo hizo deja de sincronizar hasta que actualice, y mientras tanto no pierde nada.

Ordenar también es más liviano. Eliges varios documentos, con **Elegir** en el menú de un documento o con Shift y las flechas, y el clic derecho actúa sobre todos. Varios documentos preguntan primero. Uno solo se va sin preguntar, y durante diez segundos **Deshacer**, o Ctrl + Z, lo trae de vuelta. Borrar una carpeta mueve lo que tiene a la carpeta de arriba, así que nada se pierde.

## También en esta versión

- **Un solo Historial.** En Agentes, las versiones anteriores de una regla y las copias de su archivo están en la misma lista.
- **Cada lugar guarda lo suyo.** Ideas, el Diario y Agentes guardan solo sus propios documentos.
- **Una barra lateral más ordenada.** Sus menús comparten una misma forma, y Nuevo siempre está a la vista.

## Pruébalo

Tisty es gratis y lo seguirá siendo, bajo la licencia AGPL-3.0, para Windows y macOS. Si ya lo usas, esta es una buena versión para encender las actualizaciones automáticas: las siguientes te llegarán solas. Si recién llegas, la guía de bienvenida empieza contigo y tu agente, y te deja recorrer Brainsty, la red al comienzo de esta página, sobre la misma guía.

Gracias a quienes lo usan todos los días, con un agente o por su cuenta, y me cuentan dónde les estorba. Sigan contándome: así empieza la próxima versión.
