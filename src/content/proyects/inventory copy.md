---
title: "Dashboard"
pubDate: 2021-07-01
description: "Dashboard de eCommerce"
cover: "./dashboard_front.png"
coverAlt: "The full Astro logo."
color: "#6132ed"
---

# Punto Bazar 🛒

Dashboard de eCommerce desarrollado para la una diplomatura en programación de la UTN. Gestiona stock, calcula precios y ofrece analíticas para negocios. ¡Más funcionalidades próximamente!

## 🔑 API Keys

Keys de Supabase necesarios para el funcionamiento de la app. Se agregan en un archivo `.env` en el root del proyecto.



| Parametro                  | Type     | Descripcion             |
|----------------------------|----------|-------------------------|
| `PUBLIC_SUPABASE_URL`      | `string` | Public key              |
| `PUBLIC_SUPABASE_ANON_KEY` | `string` | Anon key                |
| `SUPABASE_ROLE_KEY`        | `string` | Role key                |
| `LOGIN_CODE`               | `string` | Codigo de invitacion    |


## 💻 Deployment

#### Dev

```bash
$ npm install
$ npm run dev
```

#### Build

```bash
$ npm install
$ npm run build
$ npm run preview
```


## 📃 Documentation

Visita la [wiki del repo](https://github.com/bbauti/dashboard/wiki)


## 🧪 Demo

[dash.bbauti.me](https://dash.bbauti.me)

Para el codigo de invitacion de la demo, pedinoslo por MD a mi o a Pato.

## 🔧 Tech Stack

**Client:** Sveltekit, TailwindCSS, DaisyUI, 

**Server:** Node, Sveltekit, Vite

**Database:** Supabase, PostgreSQL


## 📝 Feedback

Si tenes alguna sugerencia, no dudes en abrir un issue o un fork y enviar un pull request!