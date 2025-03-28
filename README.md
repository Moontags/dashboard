# 🚀 Next.js Dashboard Project (Tutorial Summary)

This project was built using the [Next.js](https://nextjs.org/) App Router architecture, featuring a dynamic dashboard with authentication, invoice management, and PostgreSQL integration.

---

## Technologies Used

- **Next.js 15** (App Router + Turbopack)
- **TypeScript**
- **Tailwind CSS**
- **PostgreSQL** (Neon DB)
- **Vercel Hosting**
- **bcrypt** (for password hashing)
- **next-auth** (for authentication)
- **Zod** (for form validation)

---

## Pages & Routes

- `/login`: Login page with authentication logic
- `/dashboard`: Main dashboard overview
- `/dashboard/invoices`: Invoice list
- `/dashboard/invoices/create`: Create new invoice
- `/dashboard/invoices/[id]/edit`: Edit existing invoice

---

##  Tutorial Topics & Features

### Styling
Different ways to style your app using Tailwind and global CSS modules.

### Optimizations
Built-in optimizations for images, fonts, and links using the Next.js Image and Link components, plus font optimization.

### Routing
Create nested layouts and pages using filesystem-based routing with the App Router.

### Data Fetching
Set up a PostgreSQL database on Vercel (via Neon) and use best practices for fetching and streaming data.

### Search & Pagination
Implement search and pagination using URL search parameters (`searchParams`) and React components.

### Data Mutations
Use React Server Actions for form submissions and update the Next.js cache using `revalidatePath`.

### Error Handling
Learn how to handle common errors, including 404 pages and unexpected runtime errors.

### Form Validation & Accessibility
Perform server-side form validation using Zod and follow accessibility best practices for form elements.

### Authentication
Add authentication using NextAuth.js, credentials provider, bcrypt, and middleware protection.

### Metadata
Add dynamic metadata for SEO and social sharing using the `metadata` object in page and layout files.

---

## Live Demo

👉 [Visit the deployed dashboard on Vercel](https://nextjs-dashboard-six-phi-33.vercel.app/)

---

## Summary

This project provides a hands-on journey through building a full-stack dashboard with Next.js. You’ll gain experience in building scalable layouts, integrating authentication, managing databases, validating forms, and handling server-side rendering with modern best practices.

_Updated: 2025-03-28_
