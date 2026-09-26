# Publicación en grupos de Facebook (marketing matriz)

> Una sola configuración: muchos grupos × muchos textos × muchas cuentas en navegadores fingerprint. Más alcance, menos copiar y pegar.

**Languages:** [English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [ไทย](README.th.md) · [Bahasa Indonesia](README.id.md) · [Bahasa Melayu](README.ms.md) · [Tiếng Việt](README.vi.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md)

**Repositorio:** [https://github.com/yuhaya/facebook-group-post](https://github.com/yuhaya/facebook-group-post) · `git@github.com:yuhaya/facebook-group-post.git`

---

## Qué hace esta automatización

Proyecto de automatización para el cliente de escritorio **AutoAI**. Tras importarlo:

| Capacidad | Resultado |
|---|---|
| **Publicar en grupos de Facebook** | Abrir el grupo y publicar texto + imágenes, o texto + un vídeo |
| **Escala matriz** | Muchas URLs + muchos textos → **cada grupo recibe todos los textos** (tareas = grupos × textos) |
| **Varios navegadores/cuentas** | Las tareas se reparten en **round-robin** entre los fingerprint elegidos (1 navegador = 1 cuenta) |
| **Pools de medios** | Pool de imágenes (N por publicación, cicla) o de vídeos (1 por publicación, cicla) |
| **Anónimo opcional** | Activa «Publicar de forma anónima» si el compositor lo ofrece |
| **Programación realista** | Límite diario, intervalo aleatorio, ventana horaria (soporta ventanas nocturnas) |

### Por qué importa la «matriz»

El marketing manual en grupos no escala.

Ejemplos:

- **20 grupos × 5 textos = 100 tareas**, repartidas en varios navegadores  
- Misma oferta con copy/medios distintos en varias comunidades  
- Ventanas nocturnas para publicar cuando la audiencia está online  

**Las ejecuciones productivas casi no consumen tokens de IA.** Los tokens sirven sobre todo para desarrollar, adaptar o reparar con el agente.

> Use solo cuentas y grupos propios o autorizados. Cumpla las normas de Facebook y la ley local.

---

## Requisitos

- **Cliente de escritorio AutoAI** ([Descargar](https://www.xrobot.tech/es/download/))
  - **Windows:** solo x86 / x64 (no ARM)
  - **macOS:** solo Apple silicon (serie M; no Intel)
- Cuenta AutoAI ([Registro](https://www.xrobot.tech/es/register/) · [Inicio de sesión](https://www.xrobot.tech/es/login/))
- Al menos un **navegador fingerprint** con sesión de Facebook
- **Cuota:** AutoAI incluye **un entorno fingerprint gratuito**. Para matriz/multicuenta, **compre más** en el cliente o en el [centro de cuenta](https://www.xrobot.tech/es/account/)

---

## Inicio rápido

### 1. Descargar el cliente

👉 [https://www.xrobot.tech/es/download/](https://www.xrobot.tech/es/download/)

### 2. Registrarse e iniciar sesión

1. [Regístrese](https://www.xrobot.tech/es/register/) (email + código/contraseña).
2. Opcional en la web. **Debe iniciar sesión con la misma cuenta en el cliente de escritorio.**

### 3. Preparar el navegador Facebook

AutoAI trae **un entorno fingerprint gratuito** (**Navegador de plataforma**). Bastante para una cuenta. La matriz funciona mejor con **varios navegadores (cuentas)** — compre cuota y cree más entornos si lo necesita.

1. Barra lateral **Navegador**.
2. Prefiera **Navegador de plataforma** (gratis integrado); BitBrowser/AdsPower también.
3. **Crear** → **Iniciar** → active **Cast** si quiere ver la pantalla.
4. **Inicie sesión manualmente en Facebook**.
5. Más cuentas: comprar cuota → crear navegadores → login en cada uno → seleccionarlos al crear el grupo de tareas.

### 4. Importar desde GitHub

1. **Automatización → Importar**.
2. Pegue: `https://github.com/yuhaya/facebook-group-post` (también `yuhaya/facebook-group-post` o `git@github.com:yuhaya/facebook-group-post.git`).
3. **Iniciar importación**.
4. Aparece en **Automatización → Mis automatizaciones**.

### 5. Crear grupo de tareas (ejecución matriz)

1. **Mis automatizaciones**.
2. **Clic en el cuerpo de la tarjeta** (no el botón de experto abajo).
3. URLs de grupos, textos (`==sep==`), navegadores, medios, horario.
4. **Crear** → revisar tiempos y cantidad.
5. Active el interruptor maestro **Tareas** arriba a la derecha si se pide.
6. Siga el progreso en **Gestión de grupos de tareas**.

**Regla de cantidad:** `grupos × textos`. Luego round-robin entre navegadores.

---

## Campos del formulario

| Campo | Significado |
|---|---|
| URLs de grupos | Una URL por línea; cada grupo recibe todos los textos |
| Textos | Separar con `==sep==` |
| Publicar anónimo | On → activa el interruptor si existe |
| Tipo de medio | Imágenes (varias) / Vídeo (uno por post) |
| Imágenes/Vídeos | Pool en orden y cíclico |
| Imágenes por post | Cuántas del pool |
| Navegadores | Entornos fingerprint que ejecutan |
| Límite diario | Máx. por navegador en la ventana |
| Intervalo min/max | Espera aleatoria (segundos) |
| Inicio/fin diario | **inicio > fin** = nocturno (p. ej. `22:00`→`06:00`) |

---

## Personalizar

Los scripts oficiales pueden no coincidir con su idioma de UI o región — adapte con el agente integrado.

### Recargar cómputo (para el chat del agente)

Las ejecuciones productivas ≈ 0 tokens. **Cambios/reparación con el agente** consumen **cómputo de IA**.

1. En la web, **recargue saldo USD**.  
2. En el cliente, perfil/cartera → **Comprar cómputo de IA**.  
3. Luego abra el chat del agente.

### Pedir al agente

**A. Modo desarrollo** — tarjeta → **Experto en automatización de navegador** → navegador de depuración iniciado → describir → **prueba de script**.

**B. Modo solución de problemas** — **Gestión de grupos** → **Investigar y reparar**.

### Más

- [Primeros pasos](https://www.xrobot.tech/blog/es/guide/getting-started) · [Crear desde cero](https://www.xrobot.tech/blog/es/guide/custom-automation)
- [Casos](https://www.xrobot.tech/es/cases/) · [Descargar](https://www.xrobot.tech/es/download/) · [Registro](https://www.xrobot.tech/es/register/) · [Login](https://www.xrobot.tech/es/login/)

---

## Consejos

- Prefiera **varios navegadores (cuentas)**. Empiece con el **gratuito**; compre más slots fingerprint al escalar.  
- Intervalos y límites conservadores; ventanas nocturnas para horarios diurnos en el extranjero.  
- Varíe textos y medios.  
- Antes de lotes grandes, verifique login de Facebook.  
- Producción ≈ **0 tokens**.

---

## Info del proyecto

| | |
|---|---|
| ID del paquete | `fb-group-post` |
| Nombre | Publicación en grupo de Facebook |
| Runtime | AutoAI escritorio (automatización de navegador) |

`AGENTS.md` es para desarrolladores del agente en el cliente. Los clientes siguen este README.

---

## Soporte

- Sitio: [https://www.xrobot.tech](https://www.xrobot.tech)

Si falla algo, use primero el **modo desarrollo / solución de problemas**.
