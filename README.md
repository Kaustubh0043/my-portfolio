# Kaustubh Jadhav — Interactive Developer Portfolio

A stunning, premium developer portfolio built with React 19, Vite, TypeScript, and Vanilla CSS. It features custom glassmorphism panels, interactive canvas particle networks, smooth animations, and optimized page flow.

---

## 📸 Live Demo & Repository
* **GitHub Repository:** [https://github.com/Kaustubh0043/my-portfolio](https://github.com/Kaustubh0043/my-portfolio)
* **Vercel Host Target:** Deployable instantly with zero configurations.

---

## 🌟 Key Features

1. **Interactive Network Canvas:**
   * Custom particle node background in `src/components/CanvasBackground.tsx` that links nodes dynamically with hover/movement cursor actions.
2. **Glassmorphic UI Elements:**
   * Modern timelines for **Work Experience** and **Education** featuring blurred glass cards, responsive layouts, and gradient shadows.
3. **Advanced Projects Grid:**
   * Structured showcasing of engineering projects, including **PathPilot AI**, **Lake N Trails**, **College Discovery Platform**, **MindEase**, **Lumina Audit**, and **Smart Appointment Booking**.
   * Hyperlinked repository routing and live-deployment validations.
4. **Interactive Certifications Modal:**
   * Root-level lightbox modal handler that overlays above sticky headers (`z-index: 10000`).
   * Custom document thumbnail card templates for PDF certifications (ServiceNow CSA, etc.).
5. **Real-time AJAX Contact Form:**
   * Dynamic field validation and direct email routing to personal email (`kaustubhjadhav0043@gmail.com`) powered by FormSubmit AJAX endpoints.

---

## 🛠️ Tech Stack & Structure

* **Frontend Framework:** React 19 (Hooks, Context, Viewport Intersection Observers)
* **Build System:** Vite, TypeScript
* **Styling System:** CSS variables (custom dark-mode color tokens, glassmorphism templates, animations)
* **External APIs:** FormSubmit AJAX integration
* **Structure:**
  * `src/components/Navbar.tsx` — Scroll spy navigation
  * `src/components/Hero.tsx` — Interactive Call to Actions, See Resume preview
  * `src/components/Projects.tsx` — Showcases projects list
  * `src/components/Certifications.tsx` — Grid list of PDF and Image certifications
  * `src/components/Contact.tsx` — Contact form with client AJAX submissions

---

## 🚀 Local Development

### 📋 Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 🔧 Installation & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kaustubh0043/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local Vite development server:**
   ```bash
   npm run dev
   ```
   * Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the live reload site.

4. **Verify production compilation:**
   ```bash
   npm run build
   ```
   * This builds the optimized production target in the `/dist` directory.
