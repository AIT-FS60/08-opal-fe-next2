# Next.js Project Tracker
![Next.js](https://img.shields.io/badge/Next.js-15+-000?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-ready-764abc?logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38B2AC?logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-configured-5A29E4)
![Formik](https://img.shields.io/badge/Formik/Yup-forms%20%26%20validation-5C6AC4)

**Next.js + TypeScript** architecture with:
- **Redux Toolkit** for state management
- **Axios** with a global instance (cookie-based auth ready)
- **Formik + Yup** for robust forms/validation
- **Tailwind CSS** for styling
- Feature-first folder structure (auth, projects, tasks)

---

## 🔗 Live Demo
_Add your deployment link here (Vercel/Netlify)._

---

## ✨ Features
- Next.js (App Router) with server/client components
- Centralized Axios instance: `/src/lib/axiosInstance.ts`
- Cookie-based authentication support in the HTTP layer
- Consistent form handling with **Formik** and **Yup**
- Clear feature boundaries under `/features`
- Tailwind utilities + optional helpers (`clsx`, `tailwind-merge`)
- Example of redirect after successful action (sign-up flow)

---

## 🚀 Getting Started

**Requirements**
- Node.js 18+ and npm

**Install dependencies**
```bash
npm install
```

**Dev server**
```bash
npm run dev
# http://localhost:3000
```

**Build & run**
```bash
npm run build
npm start
```

**Lint**
```bash
npm run lint
```

---

## ⚙️ Environment

Create `.env.local` in the project root:

```
NEXT_PUBLIC_API_URL=<BACKEND_URL>
```

> `NEXT_PUBLIC_*` variables are exposed to the browser (Next.js convention).

---

## 🎨 Styling (Tailwind CSS)

The project ships with **Tailwind CSS** preconfigured.  
Spend a few minutes with the syntax to style quickly and consistently.

- Docs: https://tailwindcss.com/docs

_Optional helpers already used:_
- `clsx` — conditional class names
- `tailwind-merge` — smart class merging

---

## 📡 API Layer (Axios)

Global Axios config lives at:

```
/src/lib/axiosInstance.ts
```

- Base URL reads from `NEXT_PUBLIC_API_URL`
- `withCredentials: true` enables cookie-based auth
- Interceptors are the single place for response/error handling

---

## ⚠️ Error Handling

See a reference implementation in **authSlice**:

```
/features/auth/authSlice.ts
```

Centralized error mapping keeps UI components small and predictable.

---

## ✅ Redirect After Success

The **Sign-up** form demonstrates performing a **redirect** after a successful request  
(e.g., navigate to `/projects` after registration or login).

---

## 🗂️ Project Structure

### Pages & Routes
```
/app/{route}/page.tsx
```
Each folder under `/app` maps to a route.

### Shared UI
```
/components
```
Re-usable presentation components not tied to a single feature.

### Feature-First Modules
```
/features
  auth/        # Authentication
  projects/    # Projects
  tasks/       # Tasks
```
Inside each feature:

| Path         | Purpose                                  |
|--------------|-------------------------------------------|
| `slice.ts`   | Redux Toolkit slice + business logic      |
| `services/`  | API requests for that feature             |
| `types.ts`   | Local types for the feature               |
| `routes.ts`  | Backend route definitions                 |

### Global Types
```
/types
```
Cross-cutting types (e.g., `User`, `Tokens`, `ApiError`).

---

## 📜 NPM Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 🧩 If something didn’t install

```bash
npm install formik yup
npm install @reduxjs/toolkit@latest react-redux
npm install axios clsx tailwind-merge
```

---

## 📷 Screenshots (optional for portfolio)

_Add one or two images of the main screen (e.g., Projects) to showcase the UI._

---

## 📦 Deployment

- **Vercel (recommended for Next.js)**: connect repo → add env vars → Deploy.
- **Netlify**: Import from Git → Build `npm run build` → Publish `.next` (or use the official Next plugin).

---

## © License
MIT — free to use in personal and commercial projects.
