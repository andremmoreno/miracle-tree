# Miracle Tree

Miracle Tree is responsive blog application using Next.js and Tailwind CSS. The app fetch and display blog posts from an API, use dynamic routing, and demonstrate interactivity.

## Features

### 1. Navigation Bar
- Links to "Home" and "About" pages.
- Active route highlighting using Tailwind CSS classes.

### 2. Posts Display
- Fetch and display a list of posts from an external API (e.g., JSONPlaceholder).
- Each post includes a title, body, and associated hashtags.
- Posts update dynamically based on selected hashtags.

### 3. Post Details
- View detailed information about a single post by clicking on it.
- Detailed view includes the post title, body.
- Navigate back to the list of posts from the details page.

### 4. Hashtag Filtering
- Dynamically filter posts by clicking on the last hashtag.
- Display only the posts associated with the selected hashtag.
- Clear filter to view all posts.
---

## Tech Stack

- **Next.js**: Framework for server-side rendering and static site generation.
- **TypeScript**: Strongly-typed language for predictable and maintainable code.
- **Tailwind CSS**: Utility-first CSS framework for styling.

---

## Installation

1. **Clone the Repository**
```bash
git clone https://github.com/andremmoreno/miracle-tree.git
cd miracle-tree
```

2. **Install Dependencies**
```bash
npm install
```

3. **Run the Development Server**
```bash
npm run dev
```
- Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## File Structure

```
├── components
│   ├── Navbar.tsx          # Navigation bar component
│   └── Post.tsx            # Post component
├── pages
│   ├── _app.tsx            # App layout with Navbar
│   ├── index.tsx           # Home page with posts and hashtag filtering
│   ├── [id].tsx            # Post details page
│   └── about.tsx           # About page
├── styles
│   └── globals.css         # Global styles with Tailwind CSS
├── public
│   └── assets              # Static assets (images, icons, etc.)
└── package.json            # Project dependencies and scripts
```
##Deployment

This project is deployed on Vercel.

###Live Demo

Visit the live application at:
https://miracle-tree.vercel.app