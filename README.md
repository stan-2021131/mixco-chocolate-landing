# ChocoMixco — Landing Page de Validación de Mercado (v1)

Prototipo web interactivo de alto impacto diseñado para validar la demanda comercial, aceptación de empaque higiénico y calibración de precios para el chocolate de mesa artesanal de Mixco, Guatemala (Estudio de Emprendimiento e Innovación — Universidad del Valle de Guatemala).

---

## 🌟 Características Principales

* **Estética Editorial & Paleta Cacao:** Interfaz diseñada con tonos café chocolate tostado (`#1E130C`, `#271911`) y acentos en ámbar cálido (`#F59E0B`), con tipografías Google Fonts (*Plus Jakarta Sans* y *Playfair Display*).
* **Navegación Fluida:**
  * Barra superior flotante con menú lateral (*Side Drawer*) deslizable y efecto *glassmorphism*.
  * Desplazamiento suave (*smooth scroll*) con compensación automática de cabecera.
  * Botón flotante de WhatsApp con pulso radial para simulación de pedidos directos.
* **Mosaico Cultural e Identidad Mixqueña:** Galería visual que rescata la historia de las choconas, el comal de barro y la arquitectura colonial de Mixco.
* **Flujo Interactivo de Preparación:** Selector vertical por pasos con previsualización dinámica y consejos tradicionales de disolución y batido.
* **Catálogo de Productos en Carrusel:**
  1. **Paquete Familiar Clásico:** 200 g en 4 tabletas tradicionales (Q22.00).
  2. **Chocolate en Polvo Artesanal:** 200 g en doypack sellado de fácil disolución (Q22.00).
  3. **Pack Dúo Desayuno:** 100 g en 2 tabletas para degustación (Q12.00).
  4. **Paquete Especial de Mixco:** 400 g en caja artesanal de madera con molinillo incluido (Q50.00).
* **Embudo de Validación Académica:**
  * Modal interactivo que intercepta las acciones de compra explicando el estudio y guiando al usuario hacia la encuesta.
  * Ventana integrada para **Google Forms** con diseño responsivo tipo documento, badges de anonimato y acceso a pantalla completa.
* **Soporte Bilingüe (i18n):** Alternador Español / Inglés con almacenamiento local (`localStorage`) y sincronización automática vía `data/content.json`.

---

## 📁 Estructura del Repositorio

```text
mixco-chocolate-landing/
├── index.html              # Estructura semántica, metadatos SEO y Schema.org
├── README.md               # Documentación general del proyecto
├── .gitignore              # Configuración de exclusión para control de versiones
├── data/
│   └── content.json        # Diccionario de datos y textos bilingües (ES / EN)
└── assets/
    ├── css/
    │   └── style.css       # Tokens de diseño, layouts CSS Grid/Flexbox y responsividad
    ├── js/
    │   └── main.js         # Controladores de interacción, carrusel, modal y motor i18n
    └── img/                # Fotografía de producto, empaque y tomas culturales de Mixco
```

---

## 🚀 Cómo Ejecutar en Local

Dado que el proyecto utiliza Vanilla HTML/CSS/JS y realiza peticiones `fetch()` para el archivo `data/content.json`, se recomienda levantarlo con un servidor local:

### Opción 1: Python
```bash
python -m http.server 8080
```
Luego abre tu navegador en [http://localhost:8080](http://localhost:8080).

### Opción 2: Node.js (npx serve)
```bash
npx serve .
```

### Opción 3: Extensión Live Server
Abre la carpeta en VS Code y haz clic derecho en `index.html` > **Open with Live Server**.

---

## 🛠️ Tecnologías y Librerías

* **HTML5 Semántico:** Con microdatos Schema.org (`Product`, `Offer`) y etiquetas Open Graph / Twitter Cards para SEO.
* **Vanilla CSS3:** Variables CSS (Custom Properties), efectos de desenfoque de fondo (*backdrop-filter*), CSS Grid asimétrico y consultas de medios para dispositivos móviles.
* **Vanilla JavaScript ES6+:** Fetch API, manipulación ágil de DOM y gestión de accesibilidad (`aria-*`).
* **GSAP 3.12 (GreenSock):** Animaciones y transiciones coordinadas en modales y carruseles vía CDN.