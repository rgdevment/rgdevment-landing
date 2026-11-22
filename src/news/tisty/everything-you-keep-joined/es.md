---
title: "Tisty 1.49: todo lo que guardas, unido"
description: "Brainsty dibuja todo lo que guardas como una sola red, cada documento guarda lo que decía antes, y las reglas de tus agentes viven en un solo lugar que tú apruebas."
release: "1.49.0"
page: tisty-todo-lo-que-guardas-unido
cover: ./red.webp
shows: "Brainsty en Tisty: documentos, tareas y etiquetas dibujados de lejos como una sola red en el panel de contenido, con luces que recorren sus líneas, el buscador arriba y la leyenda plegada en la esquina"
---

Comencé a desarrollar Tisty para resolver un problema personal, y fui viendo que ese problema no era solo mío: a todos les pasaba, y cada uno lo resolvía a su manera.

Guardas un documento con los arreglos de la casa, una tarea para pedir el presupuesto del techo y otra sobre la canaleta, y nada te dice que hablan de lo mismo. Cada unión vive dentro de su archivo, y el mapa lo llevas en la cabeza.

Ordenas un documento, o se lo pides a tu agente, y queda fuera la única línea que necesitabas. Una semana después la quieres de vuelta, y nadie la guardó.

Y cada agente que usas lee sus reglas de un archivo propio, CLAUDE.md aquí y AGENTS.md allá, así que la misma regla queda escrita tres veces y cada copia se va por su lado.

**Tisty nació para eso:**

- Lo que guardas queda unido mientras escribes, y Brainsty lo dibuja como una sola red.
- Lo que nadie unió pero habla de lo mismo aparece aparte, con su porqué y sin IA.
- Cada documento guarda lo que decía antes.
- Las reglas de tus agentes viven en un solo lugar, y un cambio que quiere tu agente te espera.
- Tu agente lee y escribe en esa misma memoria, y la recorre por la red en vez de leerlo todo.
- Tus tareas en lenguaje natural, con sus pasos, tus documentos enlazados, Ideas y el Diario quedan en tu equipo, en Markdown y sin cuenta.

También funciona sin agente, a la manera tradicional: tus notas, documentos y tareas, a mano y a tu ritmo. Esto es lo que te quería contar.

## Todo lo que guardas, unido

Marisol tiene «Arreglos de la casa», un documento con el techo, la plomería y los presupuestos. Mientras escribe, pone dos corchetes y unas palabras de un título, y el documento queda enlazado a «Notas de la canaleta»; si después lo renombra, el enlace sigue llegando. En el mismo documento, el menú / cita la tarea «Pedir presupuesto del techo» como una tarjeta viva: su fecha, sus pasos y una casilla que marca ahí mismo. Junto a cada documento, **Enlazado desde** le dice quién lo nombra.

Después abre **Brainsty**, bajo las vistas de tareas en la barra lateral. Todo lo que guarda está ahí como una sola red: los documentos como cuadrados, las tareas como círculos del color de su lista, las etiquetas como puntos tenues. De lejos es un mapa de sus proyectos, que gira despacio como un globo mientras unas luces recorren sus líneas. De cerca aparece cada título y cada cosa es su propio ícono. Un clic abre su ficha, con qué es, sus fechas, lo que apunta a ella y su enlace; **Abrir** la lleva ahí.

Lo que alguien escribió pesa más. Una cita o una mención acercan dos cosas y se ven marcadas; una etiqueta en común casi no las mueve. Y lo que Marisol apartó queda aparte: una tarea que ocultó o descartó, y su diario, no están en la red.

## Lo que se parece, sin IA

Hay cosas que hablan de lo mismo y nadie las unió. Jaime anota «La imrpesora nueva no imprime en color», y una semana después llega una tarea para instalar la impresora nueva. O escribe «Pagar la cuenta del agua» y su agente anota «Pay the water bill».

Brainsty las une con una curva ámbar, aparte de toda línea que alguien escribió, y la ficha dice por qué: dos palabras poco comunes en común, un error de tipeo, como imrpesora por impresora, o una pareja de una lista fija de palabras español–inglés hecha por lingüistas. Detrás no hay ningún modelo. Solo lee la prosa que escribiste, nunca el código ni los archivos de tus agentes, y todo corre en tu equipo.

## Vuelve a lo que decía un documento

Lucas le pide a su agente que ordene «Paseos del sábado» y lo deja sin los horarios. En el panel junto al documento, **Ver el historial** lista sus versiones anteriores, la más nueva primero, con quién escribió cada una: Lucas, o Claude Code. **Qué cambió** marca en rojo lo que el agente quitó y en verde lo que puso, y **Volver a esta versión** lo trae de vuelta. Y si fue Lucas quien borró un párrafo la semana pasada, también sigue en una versión de antes.

Tisty guarda una versión cuando alguien escribe después de media hora sin cambios, o cuando cambia quien escribe, así que lo que reemplazó el agente nunca se mezcla con lo que escribió Lucas. Las versiones quedan en ese equipo, 30 días salvo que elija menos, y **Vaciar el historial** se lleva un texto que borró a propósito.

## Las reglas de tus agentes, en un solo lugar

Yisset trabaja con Claude Code, Codex y GitHub Copilot, y cada uno lee sus reglas de su propio archivo. La carpeta **Agentes**, arriba en la Biblioteca, trae esos archivos a Tisty como documentos, con sus skills y su memoria. **Traer** los copia, para leerlos y ordenarlos; **Traer y sincronizar** además escribe la regla que cambia una vez en el archivo de cada agente, con un respaldo antes de cada sobrescritura.

Una regla en **Global** llega a todos sus asistentes. Un cambio hecho por fuera de Tisty nunca se pisa. Y cuando Yisset le pide a su agente que agregue una regla, no la escribe: el cambio espera en la ficha, junto a lo que ella aprobó, hasta que dice que sí.

![La ventana Tus agentes, en un solo lugar de Tisty: lo que encontró de Claude, Codex y Copilot, un aviso de que Gemini todavía no tiene nada, y los botones Traer y Traer y sincronizar](./agentes.webp)

Cada equipo decide qué aplica, y no se lee nada de sus agentes hasta que hace clic en la carpeta.

## Tu agente la recorre, sin leerlo todo

La red que tú ves es la que recorre tu agente, y lo que escribe queda unido en ella igual que lo tuyo. Mario le pregunta a su agente cómo renovó el certificado del sitio el año pasado, y el agente lo encuentra con una sola búsqueda, el Archivo incluido. De un documento lee primero su ficha, con sus secciones y quién lo cita, y después solo la parte que necesita. Lo que Tisty cree que se parece le llega aparte, así que nunca lo confunde con un enlace que alguien escribió.

GitHub Copilot, Claude Code, Codex o Cursor se conectan por el servidor MCP local de Tisty.

Si agregas los recordatorios de Tisty en **Configuración › Asistentes**, cada sesión empieza con las tareas que tu agente dejó abiertas, y un turno que cambió archivos sin anotar nada en Tisty se le devuelve una vez. Y lo que apartas también queda lejos de él: una tarea oculta nombrada dentro de lo que escribiste le llega como «a task out of sight», y vuelve intacta si reescribe ese documento.

## Pruébalo

Tisty es gratis y lo seguirá siendo, bajo la licencia AGPL-3.0, para Windows y macOS, y se actualiza solo. Si ya lo usas, al abrirlo te cuenta lo nuevo. Si llegas recién, la guía de bienvenida empieza contigo y tu agente, y tiene una página que te deja probar Brainsty sobre la propia guía.

Gracias a quienes lo usan cada día y me cuentan lo que falta. Brainsty es lo que prometí la vez anterior, y ya está aquí.
