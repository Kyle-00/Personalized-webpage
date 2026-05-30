# Personalized Webpage – Age, Motivation & LocalStorage

An interactive single-page application where users enter their **name** and **age** to receive:

- A personalized greeting ( stored in `localStorage` ).

- Their **age in months** (calculated dynamically).

- An **adult content eligibility** message using an `if...else` statement.

- A **motivational quote** displayed **5 times** using a JavaScript loop.

- Fully styled with **modern CSS** (responsive, card-based layout, smooth animations).

---

## Project Structure

project-folder/
├── index.html # Main page structure (form, dashboard, quote section)
├── style.css # All styles including responsive design (mobile-first)
├── script.js # Core logic: localStorage, loops, conditional, DOM updates
└── README.md # Project documentation

text

---

## Getting Started (Local Setup)

1. **Clone or download** this repository to your local machine.
2. Ensure all four files (`index.html`, `style.css`, `script.js`, `README.md`) are in the **same folder**.
3. Open `index.html` with any modern web browser (double-click or use a local server).

---

## Features & Implementation Details

| Feature | Implementation |
| --------- | ---------------- |
| Form & localStorage | User data (name, age) saved via `localStorage.setItem()` and retrieved on page reload. |
| Conditional (Adult content) | `if (age >= 18)` displays "You can access adult content", else shows "too young". |
| Personalized greeting | Template literals: ``Hello ${name}`` – updates dynamically with escaped HTML for security. |
| Age in months | Function `calculateAgeInMonths(years)` returns `years * 12`. |
| Motivational quote loop | A `for` loop iterates 5 times and injects the same quote into the DOM. Each repetition has a subtle counter. |
| Styling | Single `style.css` file with responsive grid, card hover effects, animations, and mobile breakpoints. |
| Persistence | After refresh, data remains – dashboard shows last saved user's info. |

---

## Deployment (GitHub Pages)

1. Push your project to a **GitHub repository**.
2. Go to repository **Settings → Pages**.
3. Under **Branch**, select `main` (or your default branch) and `/ (root)` folder.
4. Click **Save**.
5. After a minute, your site will be live at:  
   `https://<your-username>.github.io/<repository-name>/`

---

## Code Best Practices

- **Semantic HTML** – uses `<form>`, `<section>`, `<header>`, `<footer>`.
- **Progressive enhancement** – core functionality relies on JavaScript, but the structure remains accessible.
- **XSS protection** – `escapeHTML()` helper prevents injection when displaying user-provided names.
- **Mobile-first responsive CSS** – breakpoints at 1024px, 768px, 480px, and 360px ensure great UX on any device.
- **Meaningful commit messages** – use conventional commits (e.g., `feat: add age in months calculation`).
- **Clear comments** inside `script.js` explaining loops, conditions, and localStorage logic.

---

## Customization Ideas

- **Change the motivational quote** – edit the `quoteText` variable inside `renderMotivationalQuotesLoop()` in `script.js`.
- **Adjust the adult age threshold** – modify `if (age >= 18)` inside `updateAdultContent()`.
- **Modify color scheme** – update CSS variables or background gradients in `style.css`.
- **Increase or decrease the loop repetitions** – change the `5` in the `for` loop condition.

---

## License

MIT–free to use, modify,and share.
