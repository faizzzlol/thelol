<div align="center">

<img src="https://faizzzlol.github.io/thelol/assets/img/logo.png" alt="The Legend of Legiona" width="120"/>

# ⚔️ The Legend of Legiona

**Official digital infrastructure of The LoL — a sovereign Minecraft nation on the Skyxion server.**

[![Era](https://img.shields.io/badge/Era-SKYXION%3A%20ALTAER-blueviolet?style=flat-square)](https://faizzzlol.github.io/thelol)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/Visit-thelol-blue?style=flat-square)](https://faizzzlol.github.io/thelol)
[![Gov Portal](https://img.shields.io/badge/Gov-Portal-darkgreen?style=flat-square)](https://faizzzlol.github.io/thelol/gov)
[![ISC](https://img.shields.io/badge/Agency-ISC-red?style=flat-square)](https://faizzzlol.github.io/thelol/gov/isc)

</div>

---

## 🌌 What Is This?

**The Legend of Legiona** (abbr. **The LoL**) is a structured Minecraft nation on the **Skyxion: Altaer Era** server. This repository hosts the full web infrastructure of The LoL — a multi-site ecosystem covering the public-facing hub, government portal, citizenship system, intelligence agency, and the broader Paiz® Corp conglomerate network.

This is not a hobby site. It's a serious civic and community platform built to professional standards.

---

## 🗂️ Ecosystem Overview

| Property | URL | Description |
| :--- | :--- | :--- |
| 🏠 **Main Hub** | `/thelol/` | Public-facing portal: lore, resources, server info |
| 🏛️ **Government Portal** | `/thelol/gov/` | Official legislation, proclamations & policy docs |
| 📜 **Legal Archive** | `/thelol/gov/assets/` | Searchable archive of all official documents |
| 🪪 **Citizenship Portal** | `/thelol/thelol/` | Citizenship applications & information |
| 🕵️ **ISC** | `/thelol/gov/isc/` | Internal Security Control — classified intel agency |
| 🤖 **pAIz Chatbot** | `gov/about-us.html` | Live AI assistant (Anthropic API, BM/EN, multi-turn) |
| 🏢 **Paiz® Corp** | `/PaizCorp/` | Parent conglomerate — five subsidiaries |

---

## 🏗️ Project Structure

```
thelol/
├── index.html              # Main public hub
├── about.html              # Nation overview
├── 404.html                # Custom error page
│
├── gov/                    # Government portal
│   ├── index.html          # Gov landing page
│   ├── about-us.html       # About + pAIz chatbot
│   ├── assets/
│   │   └── index.html      # Legal archive (live search + filters)
│   └── isc/                # Internal Security Control
│       ├── index.html      # ISC public face
│       └── intel.html      # Classified (auth-gated)
│
└── thelol/                 # Citizenship portal
    ├── index.html          # Landing page
    └── apply.html          # Formspree application form
```

---

## 📋 Official Documents

All legislation follows the reference format `LOLGOV-YYYY-###` (Government) or `BH-YYYY-###` (Black House Presidential).

| Doc ID | Title | Status |
| :--- | :--- | :--- |
| `LOLGOV-2026-0001` | Citizenship Act | ✅ Active |
| `LOLGOV-2026-0002` | Citizenship Revocation Ordinance | ✅ Active |
| `LOLGOV-2026-0003` | Citizens' Rights Charter | ✅ Active |
| `LOLGOV-2026-0004` | Government Policy Framework | ✅ Active |
| `BH-2026-0001` | Presidential Proclamation | ✅ Active |
| `BH-2026-0002` | Official Naming & Style Directive | ✅ Active |

> The full archive with live search is available at the [Legal Archive](https://faizzzlol.github.io/thelol/gov/assets/).

---

## 🛠️ Tech Stack

- **Frontend:** Vanilla HTML · CSS · JavaScript (no frameworks)
- **Fonts:** Playfair Display · DM Mono · Outfit · Barlow Condensed
- **Palette:** Charcoal · Emerald · Gold
- **AI:** Anthropic Claude API (`claude-sonnet-4-20250514`) — powers the pAIz chatbot
- **Forms:** Formspree (citizenship applications)
- **Auth:** SHA-256 client-side (ISC intel gate)
- **Hosting:** GitHub Pages

---

## 🤖 pAIz — The National AI Assistant

The LoL's government portal features **pAIz**, a live AI assistant embedded in `gov/about-us.html`.

**Capabilities:**
- 🇲🇾 Bahasa Melayu + English (bilingual)
- 💬 Multi-turn conversation memory
- ⚡ Dynamic follow-up suggestion chips
- 🧠 Powered by the Anthropic Claude API

---

## 🏢 Paiz® Corp Network

The LoL is part of the broader **Paiz® Corp** conglomerate. Sites under the network share a unified topbar and design system.

| Subsidiary | Description |
| :--- | :--- |
| 🚂 **TL Railways** | National transit authority of The LoL |
| 🏗️ **Paiz™ Construction** | Infrastructure & development |
| 🛒 **PaizShop** | E-commerce with GitHub-backed product management |
| 🎬 **PaizProductions** | Media & film division |
| 🍗 **PaizChicken** | Food & beverage brand |

---

## 🚀 Local Development

Static build — no package manager or framework required.

```bash
# Clone the repository
git clone https://github.com/faizzzlol/thelol.git

# Navigate into it
cd thelol

# Open in browser
open index.html
```

> For the pAIz chatbot to function, an Anthropic API key must be present in the environment or configured in the backend proxy.

---

## 🤝 Contributing

1. **Fork** this repository
2. **Create** your branch → `git checkout -b feature/YourFeature`
3. **Commit** your changes → `git commit -m 'feat: add YourFeature'`
4. **Push** → `git push origin feature/YourFeature`
5. **Open** a Pull Request

> Please follow the naming conventions defined in **BH-2026-0002** in all written materials. The approved abbreviation is **The LoL** — never standalone "LoL".

---

## 👥 Leadership

| Role | Handle |
| :--- | :--- |
| 🏛️ **First President & Founder** | `Faiz4224` |
| 🤝 **Co-Founder** | `Imii Kun` |
| 🤝 **Co-Founder** | `Dyno` |

---

## 📬 Contact

| Channel | Link |
| :--- | :--- |
| 🌐 **Official Website** | [faizzzlol.github.io/thelol](https://faizzzlol.github.io/thelol) |
| 🏛️ **Government Portal** | [faizzzlol.github.io/thelol/gov](https://faizzzlol.github.io/thelol/gov) |
| 🐦 **Twitter / X** | [@tlol_gg](https://twitter.com/tlol_gg) |
| 📧 **Email** | [thelegendoflegiona@gmail.com](mailto:thelegendoflegiona@gmail.com) |

---

<div align="center">

**The Legend of Legiona** · Est. Skyxion: Altaer Era · Licensed under [MIT](https://opensource.org/licenses/MIT)

*"Built different. Governed seriously."*

</div>
