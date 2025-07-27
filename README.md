# Next.js Full Course 2025 Projects

This repository contains multiple Next.js projects and modules that demonstrate various features and concepts of Next.js, including routing, app structure, and UI snippets. Each sub-project is a standalone Next.js app or module with its own focus.

## Sub-Projects

### 1. Discuss

The Discuss project is a full-featured Next.js application designed to build a discussion forum or community platform. It includes user authentication, topic creation, and post management features. The project demonstrates how to build scalable and interactive web applications using Next.js, Prisma for database management, and modern UI components. It also showcases font optimization using the Geist font.

- Location: `discuss/`
- Key Features:
  - User authentication and authorization
  - Topic and post creation, editing, and viewing
  - Responsive UI components and layouts
  - Integration with Prisma ORM and SQLite database
- To run the development server:
  ```bash
  cd discuss
  npm install
  npm run dev
  ```
- Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### 2. Routing

The Routing project focuses on demonstrating Next.js routing capabilities, including file-based routing, client-side navigation, and the new app router features. It serves as a learning and experimentation environment for understanding how routing works in Next.js and how to structure pages and layouts effectively.

- Location: `routing/`
- Key Features:
  - File-based routing with page.tsx and layout.tsx
  - Client-side routing using Link components
  - Examples of nested routes and dynamic routes
  - Usage of Next.js app router and routing best practices
- To run the development server:
  ```bash
  cd routing
  npm install
  npm run dev
  ```

### 3. Snippets

The Snippets project is a collection of reusable UI components, code snippets, and app directory examples for Next.js. It helps in rapid development by providing ready-to-use components like buttons, inputs, labels, and textareas, as well as demonstrating key app directory files such as not-found.tsx, loading.tsx, and error.tsx.

- Location: `snippets/`
- Key Features:
  - Reusable UI components for forms and dialogs
  - Examples of app directory special files (loading, error, not-found)
  - Integration with Prisma for data management
  - Code snippets for common Next.js patterns and utilities
- To run the development server:
  ```bash
  cd snippets
  npm install
  npm run dev
  ```

## Tech Stack

- [Next.js](https://nextjs.org) - React framework for production
- TypeScript (in some projects)
- Prisma (in some projects)
- Tailwind CSS (likely, based on config files)
- Other modern web technologies

## Folder Structure

```
/
├── discuss/    # Full Next.js app with discussion features
├── routing/    # Routing examples and concepts
├── snippets/   # UI snippets and app structure examples
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## License

This project is licensed under the MIT License.
