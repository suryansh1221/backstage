## Backstage – 9‑Day Fitness Challenge UI

Backstage is a polished React + Vite front‑end that recreates a 9‑day fitness challenge feed, including:

- **Day navigation sidebar** with completed/active/locked states
- **Challenge header** that shows the current day and challenge name
- **Your Submission card** that uses the provided mockup image as the hero thumbnail
- **Community feed** with pinned instructions, reactions, and comments

### Running the app locally

1. **Install dependencies**
   - With npm: `npm install`
   - Or with pnpm: `pnpm install`
2. **Start the dev server**
   - `npm run dev`
3. Open the URL printed in the terminal (usually `http://localhost:5173`) to view Backstage.

### Tech stack

- **React 19**
- **Vite 7**
- **CSS Modules** with a custom design system in `styles/variables.css`

The UI is responsive and supports **light/dark themes** via a toggle in the header and challenge bar.
