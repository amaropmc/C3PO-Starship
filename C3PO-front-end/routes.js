import { home } from './js/controllers/home.js';
import { planets } from './js/controllers/planets.js';
import { quiz } from './js/controllers/quiz.js';
import { score } from './js/controllers/score.js';

// Define the routes for the pages
const routes = [
    { path: '/', page: home },
    { path: '/planets?user=${userName}', page: planets },
    { path: '/quiz', page: quiz },
    { path: '/score', page: score }
];

// Function to find route and render the appropriate page
export function renderPage(path) {
    const route = routes.find(r => r.path === path);

    if (route) {
        route.page();  // Render the page associated with the path
    } else {
        home();  // Default to home page if route is not found
    }
}

// Handle browser back and forward buttons (back/forward navigation)
window.addEventListener('popstate', () => {
    renderPage(document.location.pathname);  // Re-render the page based on the current URL
});

// Handle initial page load (load the appropriate page on first load)
document.addEventListener('DOMContentLoaded', () => {
    renderPage(document.location.pathname);  // Render the page for the current path
});
