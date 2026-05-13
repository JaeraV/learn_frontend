# React Learning Plan — Weeks 2–5

**Goal:** Build a frontend that connects to a REST API with authentication
**Pace:** 4–5 hours per week
**Starting point:** Week 1 complete — Hello World running locally

---

## Week 2 — React Fundamentals: Components, Props & State

**Hours:** ~4–5 hrs

### Weekly Goal
Understand how React thinks — components, data flow, and re-rendering. Build a few small UIs from scratch so the core model feels natural before adding complexity.

### Topics to Cover
- JSX syntax and how it compiles to JS
- Functional components and how to compose them
- Props — passing data from parent to child
- `useState` — managing local component state
- Conditional rendering and rendering lists with `.map()`
- Handling events (`onClick`, `onChange`, form submit)

### Recommended Resources
- **react.dev/learn** — official tutorial, "Describing the UI" + "Adding Interactivity" sections
- **Scrimba's free "Learn React" course** — interactive in-browser coding, great for beginners
- **YouTube: React Crash Course** (Kevin Powell / Traversy Media) — ~2 hrs, covers all Week 2 topics

### Milestones
- [ ] Build a component that takes props and renders them
- [ ] Build a simple counter with `useState`
- [ ] Render a hardcoded list of items from an array
- [ ] Build a small form that captures and displays user input

---

## Week 3 — Fetching Data, Routing & Project Structure

**Hours:** ~4–5 hrs

### Weekly Goal
Connect React to the outside world — fetch real data from APIs, navigate between pages, and organize my project the way a real app is structured. By end of week I should be pulling live data onto the screen.

### Topics to Cover
- `useEffect` — side effects and the component lifecycle
- Fetching data with `fetch()` / axios inside `useEffect`
- Loading and error states while data is in flight
- React Router v6 — `<Routes>`, `<Route>`, `useNavigate`, `useParams`
- Project folder structure (`pages/`, `components/`, `services/`)
- Environment variables with `.env` (storing your API base URL)

### Recommended Resources
- **react.dev — "Synchronizing with Effects"** — official useEffect deep-dive
  https://react.dev/learn/synchronizing-with-effects
- **React Router v6 official tutorial** — hands-on, uses a contact app as the example
  https://reactrouter.com/en/main/start/tutorial
- **YouTube: Net Ninja's React data fetching series**
- **JSONPlaceholder** (jsonplaceholder.typicode.com) — free fake REST API to practice fetching against

### Milestones
- [ ] Fetch a list from a public API and render it on screen
- [ ] Show a loading spinner and an error message correctly
- [ ] Set up React Router with at least two pages (e.g. Home, Detail)
- [ ] Navigate between pages and pass a param through the URL

---

## Week 4 — Authentication: Login Flow & Protected Routes

**Hours:** ~4–5 hrs 

### Weekly Goal
Implement a real login flow against my own API. Store the auth token, attach it to every request, protect routes so only logged-in users can see them, and handle logout cleanly.

> ⚠️ **This is the most important week.** The React Context + axios interceptor pattern used here is the foundation of the final working app. Take your time and don't rush past any milestone.

### Topics to Cover
- Controlled login form (email + password)
- POST to your API's `/login` endpoint, receive JWT
- Storing the token (`localStorage` or `sessionStorage`)
- React Context + `useContext` — sharing auth state app-wide
- Axios interceptors (or custom fetch wrapper) to attach `Authorization: Bearer` header automatically
- Protected route pattern — redirect to `/login` if not authenticated
- Logout — clear token and redirect

### Recommended Resources
- **react.dev — "Passing Data Deeply with Context"**
  https://react.dev/learn/passing-data-deeply-with-context
- **YouTube: Web Dev Simplified — "React Authentication Tutorial"** — covers JWT + Context pattern
- **Axios docs — Interceptors section**
  https://axios-http.com/docs/interceptors
- **React Router — Auth example**
  https://github.com/remix-run/react-router (see examples folder)

### Milestones
- [ ] Login form POSTs to my API and receives a real token
- [ ] Token is stored and persists on page refresh
- [ ] All API requests automatically include the auth header
- [ ] Visiting a protected page while logged out redirects to `/login`
- [ ] Logout clears the token and the user is redirected

---

## Week 5 — Connect Everything: Full API Integration & Polish

**Hours:** ~4–5 hrs 

### Weekly Goal
Wire my frontend to all of my API's real endpoints. Support reading, creating, and updating data behind auth. End the week with a complete, working app I can demo.

### Topics to Cover
- Building a reusable API service layer (`api.js` with all endpoint calls)
- GET with auth — fetch and display protected resources
- POST / PUT / DELETE — forms that mutate data on your server
- Handling 401 responses globally (auto-logout on token expiry)
- Basic UX polish — loading states, error messages, empty states
- Simple CSS / Tailwind cleanup so it looks presentable

### Recommended Resources
- **Your own API docs / Postman collection** — this week is about your actual project
- **Axios docs — Request config** (setting base URL, default headers)
- **Tailwind CSS Play CDN** — instant styling without a build step
  https://tailwindcss.com/docs/installation/play-cdn
- **React DevTools browser extension** — inspect component state and props while debugging

### Final Milestone Checklist
- [ ] Unauthenticated users see only the login page
- [ ] After login, protected data loads correctly from my API
- [ ] At least one create/update flow works end-to-end
- [ ] 401 / expired token is handled gracefully
- [ ] The app can be demo'd without crashes or console errors

---