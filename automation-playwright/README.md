# 🧪 QA Automation – Playwright

Proyecto de automatización de pruebas end-to-end desarrollado con Playwright y TypeScript, enfocado en validar flujos críticos de una aplicación de Crédito Digital, aplicando priorización P0 / P1 / P2 y buenas prácticas de QA Automation.

---

## 📌 Objetivo del proyecto

El objetivo de este proyecto es demostrar:

- Estrategia de automatización
- Organización de pruebas por prioridad
- Uso correcto de Playwright
- Tests estables y desacoplados de backend
- Buenas prácticas para pruebas técnicas y entornos QA

Para evitar dependencias externas, las pruebas se ejecutan sobre páginas HTML mock locales.

---

## 🛠️ Tecnologías utilizadas

- Node.js
- Playwright
- TypeScript
- HTML (mock pages)
- npm

---

## 📂 Estructura del proyecto

automation-playwright/
│
├── pages/
│   ├── register.html
│   ├── simulador.html
│   └── productos.html
│
├── tests/
│   ├── p0_onboarding.spec.ts
│   ├── p1_simulador.spec.ts
│   └── p2_productos.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md

---

## 🧩 Priorización de pruebas

### P0 – Crítico
Flujos que bloquean el negocio si fallan.
- Registro exitoso
- Visibilidad del formulario de onboarding

Archivo: tests/p0_onboarding.spec.ts

---

### P1 – Importante
Funcionalidades clave que impactan la experiencia del usuario.
- Simulación con monto válido
- Validación de monto inválido

Archivo: tests/p1_simulador.spec.ts

---

### P2 – Soporte
Funcionalidades complementarias y validaciones UI.
- Visualización de productos
- Estado deshabilitado de botones

Archivo: tests/p2_productos.spec.ts

---

## ▶️ Instalación del proyecto

Clonar el repositorio:
git clone https://github.com/jhonnatancardonaqa/qa-automation-credito-digital.git

Entrar al proyecto:
cd qa-automation-credito-digital/automation-playwright

Instalar dependencias:
npm install

Instalar navegadores:
npx playwright install

---

## ▶️ Ejecución de pruebas

Ejecutar todas las pruebas:
npx playwright test

Ejecutar un archivo específico:
npx playwright test tests/p1_simulador.spec.ts

---

## 📊 Reporte de resultados

Para abrir el reporte HTML:
npx playwright show-report

---

## 🧠 Consideraciones técnicas

- Las pruebas no dependen de backend ni APIs reales.
- Se utilizan páginas mock locales (file://).
- Los selectores son simples y mantenibles.
- Enfoque orientado a estabilidad y claridad.

---

## 👤 Autor

Jhonnatan Cardona  
QA Automation Engineer  
