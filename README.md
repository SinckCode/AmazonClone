# 🛒 Amazon Clone

Este proyecto es una **clonación funcional** del sitio web de Amazon, desarrollado con React y Firebase. El objetivo fue replicar la experiencia de usuario de una tienda en línea moderna, incluyendo navegación por productos, carrito de compras, login, procesamiento de pagos y administración de pedidos.

---

## 🌐 Enlaces del Proyecto

- 🔗 Sitio Web: [https://clone-eca80.web.app/](https://clone-eca80.web.app/)
- 💻 Repositorio: [https://github.com/SinckCode/AmazonClone](https://github.com/SinckCode/AmazonClone)

---

## 🧩 Funcionalidades Principales

- 🏠 Página de inicio con productos dinámicos
- 🧾 Carrito de compras con subtotal y gestión de productos
- 🔐 Sistema de autenticación con Firebase Auth
- 💳 Simulación de pagos con Stripe (modo test)
- 📦 Página de órdenes con historial de compras
- 📱 Diseño responsive adaptable a móviles y escritorio

---

## 🛠️ Tecnologías Utilizadas

| Tecnología       | Uso                             |
|------------------|----------------------------------|
| React.js         | Construcción de componentes y SPA |
| Firebase Auth    | Autenticación de usuarios         |
| Firebase Hosting | Despliegue del sitio web          |
| Firebase Functions | Lógica de backend (Stripe)     |
| Stripe API       | Procesamiento de pagos simulados  |
| React Context API| Manejo global del estado (carrito)|
| Axios            | Conexiones con backend            |

---

## 🗂️ Estructura del Proyecto

```
AmazonClone/
├── public/
│   └── index.html, manifest.json, etc.
├── src/
│   ├── App.js
│   ├── Header.js
│   ├── Home.js
│   ├── Product.js
│   ├── Checkout.js
│   ├── CheckoutProduct.js
│   ├── Payment.js
│   ├── Orders.js
│   ├── Login.js
│   ├── StateProvider.js
│   ├── reducer.js
│   └── firebase.js
├── functions/
│   └── index.js (Integración con Stripe)
└── firebase.json
```

---

## 🔐 Autenticación

- Registro e inicio de sesión mediante Firebase Authentication.
- Manejo de sesiones automáticas con persistencia local.
- Login protegido con redirecciones inteligentes.

---

## 💳 Procesamiento de Pagos

- Stripe se integra mediante Firebase Functions para simular pagos reales.
- El proceso se ejecuta en modo **test**, por lo que no se requieren tarjetas reales.
- Los pagos se reflejan en la sección de órdenes una vez completado el flujo.

---

## ▶️ Ejecución Local

```bash
# Clonar el repositorio
git clone https://github.com/SinckCode/AmazonClone.git
cd AmazonClone

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
```

---

## 📦 Notas Finales

- Este proyecto fue desarrollado como práctica avanzada para aprender React y servicios de backend modernos.
- Todo el flujo de e-commerce básico está cubierto de manera profesional.
- Ideal para usar como ejemplo en portafolios, entrevistas o aprendizaje personal.

---

**Desarrollado con pasión por Ángel David Onesto Frías.**
