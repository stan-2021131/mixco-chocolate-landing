/**
 * ============================================================================
 * CHOCOMIXCO - SCRIPT PRINCIPAL & EXPERIENCIA CINEMATOGRÁFICA
 * Concepto: Rich Dark Cacao & Warm Amber Glow (Fondo Café Cacao)
 * Interacciones: Menú Lateral Desplegable, Flujo de Preparación, Píldoras GitHub,
 *                Carrusel Marketplace, Desplazamiento Suave y Modal UVG.
 * ============================================================================
 */

(function () {
  'use strict';

  let currentLanguage = localStorage.getItem('chocomixco_lang') || 'es';
  let siteContent = null;
  let currentActiveStep = 1;

  // Respaldo de datos bilingüe embebido para ejecución autónoma y sin dependencias
  const fallbackContent = {
    brand: "ChocoMixco",
    es: {
      meta: {
        title: "ChocoMixco | Chocolate de Mesa Artesanal de Mixco",
        description: "Auténtico chocolate de mesa artesanal de Mixco, Guatemala. 100% natural, tabletas redondas de fácil disolución y empaque higiénico sellado para atol casero.",
        keywords: "chocolate artesanal mixco, atol de chocolate tradicional guatemala, cacao puro, chocomixco artesanal, chocolate de mesa"
      },
      banner: {
        tag: "Proyecto UVG",
        text: "Prototipo académico de validación de mercado • Universidad del Valle de Guatemala. Pedidos simulados."
      },
      nav: {
        origin: "Herencia y Tradición",
        prep: "Modo de Preparación",
        why: "¿Por qué nosotros?",
        catalog: "Catálogo de Productos",
        order: "Ruta de Envíos",
        feedback: "Validación Académica",
        cta: "Pedir Q22",
        langBtn: "EN",
        menuBtn: "Menú"
      },
      hero: {
        eyebrow: "HERENCIA ARTESANAL DE MIXCO • GUATEMALA",
        title: "EL AUTÉNTICO CHOCOLATE DE MESA ARTESANAL",
        subtitle: "La receta ancestral mixqueña de cacao puro y canela en rama, en prácticas tabletas redondas de disolución rápida y empaque higiénico sellado.",
        ctaPrimary: "Pedir Paquete Familiar • Q22",
        ctaSecondary: "Explorar la Tradición",
        trust1: "100% Cacao y Canela",
        trust2: "Disuelve en 2 Minutos",
        trust3: "Empaque Hermético Inocuo"
      },
      origin: {
        tag: "Herencia Local",
        title: "Las raíces vivas del chocolate mixqueño",
        subtitle: "Un recorrido visual por el centro colonial de Mixco, los comales de leña y las manos que preservan el sabor original.",
        p1: "Mixco es conocido históricamente en Guatemala por sus leyendas y la maestría culinaria de sus productoras de chocolate. Durante generaciones, las familias mixqueñas han custodiado el secreto del tostado en comal de barro, la molienda rítmica en piedra volcánica y el balance entre cacao selecto y canela aromática.",
        p2: "ChocoMixco une este legado con estándares contemporáneos de higiene y conservación hermética, para que disfrutes de una taza con auténtica memoria gastronómica sin salir de casa.",
        caption1: "Parroquia de Santo Domingo de Guzmán y calles empedradas de Mixco",
        caption2: "Tostado tradicional de cacao sobre comal de barro a fuego de leña",
        caption3: "Moldeado de tabletas artesanales secándose sobre hojas frescas de plátano",
        caption4: "Molienda en metate de piedra volcánica ancestral"
      },
      prep: {
        tag: "El Ritual",
        title: "Modo de preparación en tres pasos",
        subtitle: "Selecciona cada paso para descubrir el secreto de un atol espeso, aromático y sin grumos.",
        step1: {
          num: "01",
          title: "Calentar el Líquido",
          desc: "Hierve de 2 a 3 tazas de leche entera o agua en una olla según la consistencia deseada.",
          badge: "Fuego Medio • 90°C",
          tip: "Consejo: Para una textura cremosa de cafetería artesanal, mezcla mitad leche entera y mitad agua."
        },
        step2: {
          num: "02",
          title: "Disolver la Tableta",
          desc: "Añade una tableta redonda de ChocoMixco directamente al líquido caliente sin necesidad de rallarla.",
          badge: "Sin Rallar • 2 Minutos",
          tip: "Consejo: Nuestra tableta redonda está calibrada para desintegrarse al calor en menos de 120 segundos."
        },
        step3: {
          num: "03",
          title: "Espumar y Servir",
          desc: "Revuelve vigorosamente con molinillo tradicional de madera o cuchara hasta levantar espuma y sirve de inmediato.",
          badge: "Espuma Tradicional",
          tip: "Consejo: El aroma a canela en rama y cacao puro inundará tu cocina como en los días de fiesta mixqueña."
        }
      },
      why: {
        tag: "Nuestra Propuesta",
        title: "¿Por qué elegir ChocoMixco?",
        subtitle: "Superamos las deficiencias de los chocolates industriales y la informalidad de los mercados cantonales.",
        tab1: "Cacao 100% Puro",
        tab2: "Disolución Rápida",
        tab3: "Empaque Hermético",
        tab4: "Oficio Artesanal",
        card1: {
          title: "Receta 100% Natural sin Grasas Añadidas",
          desc: "Las marcas de supermercado sustituyen el cacao por azúcar refinada y mantecas hidrogenadas. ChocoMixco utiliza únicamente cacao criollo selecto, canela en rama y azúcar en su proporción justa.",
          stat1: "0% Grasas Hidrogenadas",
          stat2: "100% Ingredientes Nobles"
        },
        card2: {
          title: "Disolución Rápida en Minutos",
          desc: "Se acabaron los ralladores peligrosos y los trozos duros en el fondo de la taza. El moldeado circular facilita una integración homogénea inmediata.",
          stat1: "120s Tiempo de Fusión",
          stat2: "0% Grumos en Taza"
        },
        card3: {
          title: "Empaque Seguro e Inocuo",
          desc: "El chocolate artesanal tradicional de mercado sufre de humedad, polvo y manipulación. Nuestro empaque sellado protege contra el calor y preserva los aromas esenciales.",
          stat1: "Sellado Térmico Grado Alimentario",
          stat2: "Barrera Anti-Humedad"
        },
        card4: {
          title: "Impacto Directo en Productoras Locales",
          desc: "Cada paquete apoya directamente a mujeres artesanas de Mixco, rescatando una tradición culinaria en peligro de industrializarse.",
          stat1: "Comercio Justo Mixqueño",
          stat2: "Receta Centenaria"
        }
      },
      catalog: {
        tag: "Presentaciones",
        title: "Nuestros Paquetes Artesanales",
        subtitle: "Explora nuestras presentaciones piloto para degustar o compartir en familia.",
        prod1: {
          badge: "Piloto Estrella",
          name: "Paquete Familiar Clásico",
          specs: "200 g netos • 4 tabletas • Rinde 8 a 10 tazas",
          desc: "El balance tradicional de cacao selecto y canela en rama. La opción favorita para las tardes familiares.",
          price: "Q22.00",
          cta: "Pedir WhatsApp"
        },
        prod2: {
          badge: "Versión en Polvo",
          name: "Chocolate en Polvo Artesanal",
          specs: "200 g netos • En polvo • Rinde 8 a 10 tazas",
          desc: "La misma receta tradicional de cacao y canela en fino polvo artesanal. Disolución inmediata para agua o leche.",
          price: "Q22.00",
          cta: "Pedir WhatsApp"
        },
        prod3: {
          badge: "Degustación",
          name: "Pack Dúo Desayuno",
          specs: "100 g netos • 2 tabletas • Rinde 4 a 5 tazas",
          desc: "La porción perfecta para una pareja o para conocer el auténtico sabor mixqueño por primera vez.",
          price: "Q12.00",
          cta: "Pedir WhatsApp"
        },
        prod4: {
          badge: "Regalo Especial",
          name: "Paquete Especial de Mixco",
          specs: "400 g netos • 8 tabletas surtidas",
          desc: "Presentación de regalo con empaque artesanal y molinillo de madera incluido para ocasiones especiales.",
          price: "Q50.00",
          cta: "Pedir WhatsApp"
        }
      },
      order: {
        tag: "Logística",
        title: "¿Cómo pedir y recibir tu chocolate?",
        subtitle: "Un flujo ágil y confiable desde los comales de Mixco hasta la puerta de tu hogar.",
        step1: {
          num: "01",
          title: "SOLICITUD",
          desc: "Selecciona el paquete deseado y haz clic en pedir para iniciar tu orden simulada."
        },
        step2: {
          num: "02",
          title: "COORDINACIÓN",
          desc: "Definimos dirección en la capital o despacho departamental por paquetería."
        },
        step3: {
          num: "03",
          title: "DESPACHO",
          desc: "Tu paquete es embalado en empaque hermético protegido contra calor y golpes."
        },
        step4: {
          num: "04",
          title: "ENTREGA Y PAGO",
          desc: "Recibe en tu puerta y abona cómodamente en efectivo contra entrega o transferencia."
        }
      },
      feedback: {
        tag: "Estudio Académico",
        title: "Tu opinión hace posible este proyecto",
        subtitle: "Ayúdanos con 2 minutos a calibrar el precio, empaque y concepto del chocolate mixqueño.",
        desc: "Este sitio forma parte del estudio de validación de mercado para el proyecto de emprendimiento de la Universidad del Valle de Guatemala (UVG). Tu retroalimentación nos permitirá validar si la calidad, el precio proyectado de Q22.00 y el empaque higiénico satisfacen tus expectativas de compra.",
        formCardTitle: "Cuestionario de Evaluación Académica",
        formPlaceholder: "Espacio preparado para incrustar el formulario interactivo de Google Forms del equipo."
      },
      footer: {
        brandDesc: "Rescate y comercialización digital del auténtico chocolate de mesa artesanal de Mixco, elaborado por mujeres productoras locales con ingredientes 100% naturales.",
        academicNotice: "Proyecto Académico de Validación de Mercado • Universidad del Valle de Guatemala (UVG)",
        origin: "Mixco, Guatemala",
        copyright: "© 2026 ChocoMixco. Todos los derechos reservados."
      },
      modal: {
        tag: "Simulación Académica UVG",
        title: "¡Gracias por tu interés en ChocoMixco!",
        message: "Has pulsado el botón de pedido. Este sitio es un prototipo académico de la Universidad del Valle de Guatemala para evaluar la demanda real del chocolate artesanal de Mixco a Q22.00.",
        message2: "Tu opinión sobre la propuesta de valor y el precio es lo más valioso para nosotros. ¿Nos ayudas contestando nuestra breve encuesta?",
        btnDismiss: "Seguir explorando",
        btnAction: "Responder Encuesta de Validación"
      }
    },
    en: {
      meta: {
        title: "ChocoMixco | Artisanal Table Chocolate from Mixco",
        description: "Authentic artisanal table chocolate from Mixco, Guatemala. 100% natural, fast-dissolving round tablets, and hygienic sealed packaging for homemade hot drinks.",
        keywords: "artisanal chocolate mixco, authentic hot chocolate guatemala, raw cacao, traditional table chocolate, chocomixco"
      },
      banner: {
        tag: "UVG Project",
        text: "Academic market validation prototype • Universidad del Valle de Guatemala. Simulated orders."
      },
      nav: {
        origin: "Heritage & Craft",
        prep: "Preparation Ritual",
        why: "Our Commitment",
        catalog: "Offerings",
        order: "Logistics",
        feedback: "University Study",
        cta: "Order Q22",
        langBtn: "ES",
        menuBtn: "Menu"
      },
      hero: {
        eyebrow: "HANDCRAFTED HERITAGE OF MIXCO • GUATEMALA",
        title: "AUTHENTIC ARTISANAL TABLE CHOCOLATE",
        subtitle: "Mixco's ancestral recipe of pure cacao and cinnamon bark, molded into fast-dissolving round tablets and sealed in hygienic airtight pouches.",
        ctaPrimary: "Order Family Pack • Q22",
        ctaSecondary: "Explore the Heritage",
        trust1: "100% Cacao & Cinnamon",
        trust2: "Dissolves in 2 Minutes",
        trust3: "Airtight Sealed Packaging"
      },
      origin: {
        tag: "Local Heritage",
        title: "The living roots of Mixco's chocolate craft",
        subtitle: "A visual journey across Mixco's colonial heart, firewood clay comales, and the hands keeping ancestral recipes alive.",
        p1: "Mixco is historically renowned in Guatemala for its folklore and the culinary mastery of its local chocolate producers. For generations, families have preserved the art of roasting on clay comales, volcanic stone grinding, and the delicate balance between select cacao and fragrant cinnamon.",
        p2: "ChocoMixco bridges this living heritage with modern food-safety standards and airtight packaging, bringing authentic comfort drinks straight to your household.",
        caption1: "Santo Domingo colonial church and cobblestone streets in Mixco",
        caption2: "Traditional cacao roasting over a clay comal with firewood",
        caption3: "Artisanal chocolate tablets drying on fresh green banana leaves",
        caption4: "Ancestral stone grinding on a volcanic metate"
      },
      prep: {
        tag: "The Ritual",
        title: "Three-step preparation method",
        subtitle: "Select each step to discover the secret to a rich, frothy, clump-free homemade chocolate drink.",
        step1: {
          num: "01",
          title: "Heat the Liquid",
          desc: "Bring 2 to 3 cups of whole milk or water to a boil in your favorite pot.",
          badge: "Medium Heat • 90°C",
          tip: "Tip: For an authentic artisan texture, blend half whole milk and half water."
        },
        step2: {
          num: "02",
          title: "Dissolve the Tablet",
          desc: "Drop in one round tablet of ChocoMixco directly into hot liquid without grating.",
          badge: "No Grating • 2 Minutes",
          tip: "Tip: Our custom tablet shape is engineered to dissolve in hot liquid in under 120 seconds."
        },
        step3: {
          num: "03",
          title: "Whisk & Enjoy",
          desc: "Whisk vigorously with a wooden molinillo or spoon until frothy and serve immediately.",
          badge: "Traditional Froth",
          tip: "Tip: The aroma of toasted cacao and cinnamon will fill your home just like festive mornings in Mixco."
        }
      },
      why: {
        tag: "Our Commitment",
        title: "Why choose ChocoMixco?",
        subtitle: "Bridging the gap between artificial supermarket bars and informal market hurdles.",
        tab1: "100% Pure Cacao",
        tab2: "Fast Dissolution",
        tab3: "Airtight Seal",
        tab4: "Artisan Craft",
        card1: {
          title: "100% Natural Recipe with Zero Added Fats",
          desc: "Supermarket brands substitute cacao with hydrogenated oils and excessive refined sugar. ChocoMixco uses only noble cacao beans, cinnamon bark, and just the right touch of cane sugar.",
          stat1: "0% Hydrogenated Fats",
          stat2: "100% Noble Ingredients"
        },
        card2: {
          title: "Instant Dissolution in Minutes",
          desc: "No more risky graters or un-melted chunks at the bottom of the mug. The circular shape dissolves homogeneously into your hot liquid.",
          stat1: "120s Melt Time",
          stat2: "0% Residue in Cup"
        },
        card3: {
          title: "Hygienic Food-Grade Packaging",
          desc: "Traditional street market chocolate suffers from ambient humidity, dust, and handling. Our heat-sealed packaging locks in freshness and ensures total food safety.",
          stat1: "Food-Grade Heat Seal",
          stat2: "Moisture Barrier"
        },
        card4: {
          title: "Empowering Local Women Artisans",
          desc: "Every pack directly supports local women producers in Mixco, revitalizing a heritage craft that resists mass industrialization.",
          stat1: "Fair Local Trade",
          stat2: "Centennial Recipe"
        }
      },
      catalog: {
        tag: "Offerings",
        title: "Our Artisanal Packs",
        subtitle: "Explore our pilot releases designed for daily breakfast or family sharing.",
        prod1: {
          badge: "Pilot Star",
          name: "Classic Family Pack",
          specs: "200 g net • 4 tablets • Yields 8 to 10 cups",
          desc: "The signature traditional balance of select cacao and cinnamon sticks.",
          price: "Q22.00",
          cta: "WhatsApp Order"
        },
        prod2: {
          badge: "Powder Edition",
          name: "Artisanal Powdered Chocolate",
          specs: "200 g net • Artisanal powder • Yields 8 to 10 cups",
          desc: "The same traditional cacao and cinnamon recipe in fine artisanal powder. Instant dissolution for hot milk or water.",
          price: "Q22.00",
          cta: "WhatsApp Order"
        },
        prod3: {
          badge: "Tasting Pack",
          name: "Duo Breakfast Pack",
          specs: "100 g net • 2 tablets • Yields 4 to 5 cups",
          desc: "The ideal size to discover authentic Mixco chocolate for the first time.",
          price: "Q12.00",
          cta: "WhatsApp Order"
        },
        prod4: {
          badge: "Special Gift",
          name: "Mixco Special Gift Box",
          specs: "400 g net • 8 assorted tablets",
          desc: "Gift presentation with handcrafted box and wooden molinillo included.",
          price: "Q50.00",
          cta: "WhatsApp Order"
        }
      },
      order: {
        tag: "Logistics",
        title: "How to order and receive your chocolate?",
        subtitle: "A reliable, transparent route from Mixco's hearths right to your doorstep.",
        step1: {
          num: "01",
          title: "REQUEST",
          desc: "Choose your preferred pack and click order to start your simulated request."
        },
        step2: {
          num: "02",
          title: "COORDINATION",
          desc: "We coordinate drop-off points in the city or nationwide courier delivery."
        },
        step3: {
          num: "03",
          title: "DISPATCH",
          desc: "Your order is packaged in an airtight container protected against heat."
        },
        step4: {
          num: "04",
          title: "DELIVERY & PAYMENT",
          desc: "Receive at your door and pay comfortably via cash on delivery or transfer."
        }
      },
      feedback: {
        tag: "University Study",
        title: "Your voice shapes this venture",
        subtitle: "Take 2 minutes to evaluate our pricing, packaging, and authentic recipe concept.",
        desc: "This site is part of a market validation experiment by students at Universidad del Valle de Guatemala (UVG). Your objective feedback will help us verify whether our product quality and Q22.00 price point satisfy your household expectations.",
        formCardTitle: "Academic Evaluation Survey",
        formPlaceholder: "Reserved container to embed the team's official Google Forms questionnaire."
      },
      footer: {
        brandDesc: "Digital revitalization of authentic artisanal table chocolate from Mixco, handcrafted by local women producers with 100% natural ingredients.",
        academicNotice: "Academic Market Validation Project • Universidad del Valle de Guatemala (UVG)",
        origin: "Mixco, Guatemala",
        copyright: "© 2026 ChocoMixco. All rights reserved."
      },
      modal: {
        tag: "UVG Academic Simulation",
        title: "Thank you for your interest in ChocoMixco!",
        message: "You clicked the pilot order button. This website is a university prototype created by UVG students to measure real demand for Mixco table chocolate at Q22.00.",
        message2: "Your feedback on our packaging, concept, and pricing is invaluable. Would you take 2 minutes to answer our survey?",
        btnDismiss: "Keep Exploring",
        btnAction: "Answer Validation Survey"
      }
    }
  };

  /**
   * Obtiene una clave anidada de un objeto JSON usando notación de puntos
   */
  function getNestedValue(obj, keyPath) {
    if (!obj || !keyPath) return null;
    const parts = keyPath.split('.');
    let current = obj;
    for (let i = 0; i < parts.length; i++) {
      if (current === undefined || current === null) return null;
      current = current[parts[i]];
    }
    return current;
  }

  /**
   * Carga el archivo content.json o utiliza el fallback embebido
   */
  async function loadContent() {
    try {
      const response = await fetch('data/content.json');
      if (!response.ok) throw new Error('HTTP ' + response.status);
      siteContent = await response.json();
    } catch (err) {
      siteContent = fallbackContent;
    }
    applyLanguage(currentLanguage);
  }

  /**
   * Aplica las cadenas traducidas a los elementos del DOM
   */
  function applyLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('chocomixco_lang', lang);
    document.documentElement.lang = lang;

    const data = (siteContent && siteContent[lang]) ? siteContent[lang] : fallbackContent[lang];
    if (!data) return;

    // Actualizar elementos con data-i18n
    const translatables = document.querySelectorAll('[data-i18n]');
    translatables.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getNestedValue(data, key);
      if (val !== null && val !== undefined) {
        el.textContent = val;
      }
    });

    // Actualizar atributos (como title, content en meta tags)
    const attrElements = document.querySelectorAll('[data-i18n-attr]');
    attrElements.forEach(el => {
      const raw = el.getAttribute('data-i18n-attr');
      const pairs = raw.split(';');
      pairs.forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key) {
          const val = getNestedValue(data, key);
          if (val !== null && val !== undefined) {
            el.setAttribute(attr, val);
          }
        }
      });
    });

    // Actualizar la etiqueta del botón de idioma
    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
      langLabel.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    // Actualizar los datos del paso de preparación activo
    updatePrepDisplay(currentActiveStep, false);
  }

  /**
   * Interacción de Pasos de Preparación (Ref 3 - Diagrama Vertical + Gran Cuadro)
   */
  const prepStepsData = {
    1: {
      img: 'assets/img/hero.jpg',
      badgeKey: 'prep.step1.badge',
      titleKey: 'prep.step1.title',
      tipKey: 'prep.step1.tip',
      counter: { es: '1 de 3', en: '1 of 3' }
    },
    2: {
      img: 'assets/img/packaging.jpg',
      badgeKey: 'prep.step2.badge',
      titleKey: 'prep.step2.title',
      tipKey: 'prep.step2.tip',
      counter: { es: '2 de 3', en: '2 of 3' }
    },
    3: {
      img: 'assets/img/hero_bg.jpg',
      badgeKey: 'prep.step3.badge',
      titleKey: 'prep.step3.title',
      tipKey: 'prep.step3.tip',
      counter: { es: '3 de 3', en: '3 of 3' }
    }
  };

  function updatePrepDisplay(stepNum, animate) {
    currentActiveStep = stepNum;
    const stepInfo = prepStepsData[stepNum] || prepStepsData[1];
    const data = (siteContent && siteContent[currentLanguage]) ? siteContent[currentLanguage] : fallbackContent[currentLanguage];

    const displayImg = document.getElementById('prep-display-img');
    const badgeText = document.getElementById('prep-badge-text');
    const displayTitle = document.getElementById('prep-display-title');
    const displayCounter = document.getElementById('prep-step-counter');
    const displayTip = document.getElementById('prep-display-tip');

    // Actualizar tabs activos
    document.querySelectorAll('.prep-step-card').forEach(card => {
      const cStep = parseInt(card.getAttribute('data-step'), 10);
      const isActive = cStep === stepNum;
      card.classList.toggle('active', isActive);
      card.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    if (displayImg) {
      if (animate && window.gsap) {
        gsap.to(displayImg, {
          opacity: 0.4,
          scale: 0.98,
          duration: 0.12,
          onComplete: () => {
            displayImg.src = stepInfo.img;
            gsap.to(displayImg, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
          }
        });
      } else {
        displayImg.src = stepInfo.img;
      }
    }

    if (badgeText) {
      const badgeVal = getNestedValue(data, stepInfo.badgeKey) || '';
      badgeText.textContent = `Paso 0${stepNum}: ${badgeVal}`;
    }

    if (displayTitle) {
      displayTitle.textContent = getNestedValue(data, stepInfo.titleKey) || '';
    }

    if (displayCounter) {
      displayCounter.textContent = stepInfo.counter[currentLanguage] || `${stepNum} de 3`;
    }

    if (displayTip) {
      displayTip.textContent = getNestedValue(data, stepInfo.tipKey) || '';
    }
  }

  function initPrepTabs() {
    const stepCards = document.querySelectorAll('.prep-step-card');
    stepCards.forEach(card => {
      card.addEventListener('click', () => {
        const step = parseInt(card.getAttribute('data-step'), 10);
        if (step && step !== currentActiveStep) {
          updatePrepDisplay(step, true);
        }
      });
    });
  }

  /**
   * Interacción de Píldoras Segmentadas Estilo GitHub (Ref 4)
   */
  function initGitHubTabs() {
    const pillTabs = document.querySelectorAll('.gh-pill-tab');
    const featurePanels = document.querySelectorAll('.gh-feature-view');

    pillTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');

        // Toggle active en tabs
        pillTabs.forEach(t => {
          const isActive = t === tab;
          t.classList.toggle('active', isActive);
          t.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        // Toggle active en paneles con transición suave
        featurePanels.forEach(panel => {
          const isTarget = panel.id === `why-panel-${targetTab}`;
          if (isTarget) {
            panel.classList.add('active');
            if (window.gsap) {
              gsap.fromTo(panel, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' });
            }
          } else {
            panel.classList.remove('active');
          }
        });
      });
    });
  }

  /**
   * Controles del Carrusel Marketplace
   */
  function initMarketplaceCarousel() {
    const track = document.getElementById('marketplace-carousel');
    const btnPrev = document.getElementById('carousel-btn-prev');
    const btnNext = document.getElementById('carousel-btn-next');

    if (!track) return;

    const scrollAmount = 300;

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }
  }

  /**
   * Modal de Validación Académica UVG con Animación Suave
   */
  function initValidationModal() {
    const modal = document.getElementById('validation-modal');
    const card = modal ? modal.querySelector('.modal-surface-card') : null;
    const closeBtn = document.getElementById('modal-close-btn');
    const dismissBtn = document.getElementById('modal-dismiss-btn');
    const actionBtn = document.getElementById('modal-action-btn');

    if (!modal) return;

    function openModal() {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      if (window.gsap && card) {
        gsap.fromTo(card, 
          { scale: 0.94, opacity: 0, y: 15 }, 
          { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: 'back.out(1.2)' }
        );
      }
    }

    function closeModal() {
      if (window.gsap && card) {
        gsap.to(card, {
          scale: 0.95,
          opacity: 0,
          y: 8,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
          }
        });
      } else {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }

    // Botones de pedido en toda la página
    document.querySelectorAll('.btn-mp-order, .btn-radiant-gold, .btn-nav-order, #floating-whatsapp-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (btn.classList.contains('btn-mp-order') || btn.id === 'floating-whatsapp-trigger') {
          e.preventDefault();
          openModal();
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (dismissBtn) dismissBtn.addEventListener('click', closeModal);

    if (actionBtn) {
      actionBtn.addEventListener('click', (e) => {
        closeModal();
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  /**
   * Menú Lateral (Side Drawer) y Desplazamiento Suave
   */
  function initSideDrawerAndScroll() {
    const menuToggle = document.getElementById('menu-toggle-btn');
    const drawer = document.getElementById('side-drawer-menu');
    const backdrop = document.getElementById('side-drawer-backdrop');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    const drawerLinks = document.querySelectorAll('.drawer-link, .btn-drawer-cta');
    const navBar = document.querySelector('.nav-island-bar');

    function openDrawer() {
      if (!drawer || !backdrop) return;
      drawer.classList.add('drawer-open');
      backdrop.classList.add('backdrop-visible');
      drawer.setAttribute('aria-hidden', 'false');
      menuToggle?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';

      // Animación de entrada de enlaces del menú
      if (window.gsap) {
        gsap.fromTo('.drawer-link', 
          { x: 30, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.35, stagger: 0.05, ease: 'power2.out', delay: 0.1 }
        );
      }
    }

    function closeDrawer() {
      if (!drawer || !backdrop) return;
      drawer.classList.remove('drawer-open');
      backdrop.classList.remove('backdrop-visible');
      drawer.setAttribute('aria-hidden', 'true');
      menuToggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (menuToggle) menuToggle.addEventListener('click', openDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer?.classList.contains('drawer-open')) {
        closeDrawer();
      }
    });

    // Desplazamiento Suave al hacer clic en enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#top') {
          e.preventDefault();
          closeDrawer();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          closeDrawer();

          const offset = 80;
          const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
        }
      });
    });

    // Apariencia compacta del navbar al hacer scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navBar?.classList.add('scrolled');
      } else {
        navBar?.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /**
   * Inicialización Global al Cargar el DOM
   */
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar i18n
    loadContent();

    // 2. Conectar botón de idioma
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const nextLang = currentLanguage === 'es' ? 'en' : 'es';
        applyLanguage(nextLang);
      });
    }

    // 3. Inicializar Componentes de Usuario
    initPrepTabs();
    initGitHubTabs();
    initMarketplaceCarousel();
    initValidationModal();
    initSideDrawerAndScroll();
  });

})();
