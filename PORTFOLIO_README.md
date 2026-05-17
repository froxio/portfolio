# Harris's Developer Portfolio & Blog

A personal portfolio site built to showcase projects, skills, and personality. This project serves a dual purpose: it's a public-facing developer hub *and* a living demonstration of React + AWS competency. Every architectural decision should be intentional and defensible in an interview.

---

## Tech Stack

| Layer | Tech | Why |
|---|---|---|
| Framework | React 18 + TypeScript | Hooks, composition, type safety |
| Styling | Tailwind CSS | Utility-first, responsive by default |
| Routing | React Router v6 | Client-side routing, nested routes |
| State | Zustand | Lightweight, modern alternative to Redux |
| Data Fetching | TanStack Query (React Query) | Caching, async state, loading/error handling |
| Build | Vite | Fast dev server, lean production builds |
| Hosting | AWS S3 + CloudFront | Static hosting + CDN |
| CI/CD | GitHub Actions | Auto-deploy on push to main |
| Contact Form | AWS API Gateway + Lambda | Serverless backend touch point |
| DNS (optional) | AWS Route 53 | Custom domain management |

---

## Project Goals

1. Demonstrate real React patterns (not just JSX output)
2. Show AWS integration at the deployment and serverless level
3. Serve as a hub that links to all future portfolio projects
4. Be something you can actually talk through in an interview, end to end

---

## Site Structure

```
/                   → Hero / landing page
/about              → Bio, background, ag-tech story
/projects           → Project index (cards, filterable by stack)
/projects/:slug     → Individual project detail page
/blog               → Optional: dev notes / lessons learned
/contact            → Contact form (hits Lambda via API Gateway)
```

---

## React Architecture Goals

Structure the app so each of these patterns is present and purposeful:

### Component Design
- Separate **UI components** (dumb, reusable) from **feature components** (page-specific, stateful)
- Use **compound components** for anything complex (e.g., project cards with filtering)
- Avoid prop drilling — use Zustand or Context where state needs to be shared

### Custom Hooks
Build at least these:
- `useProjects()` — fetches/filters project data
- `useTheme()` — light/dark toggle, persisted to localStorage
- `useContactForm()` — form state + validation + submission logic

### State Management
- Local state: `useState` for UI interactions
- Global state: Zustand for theme, maybe filters
- Server state: TanStack Query for any fetched data

### TypeScript
- Define types/interfaces for all data shapes (Project, BlogPost, etc.)
- Avoid `any` — use proper generics where needed

### Performance
- `React.lazy()` + `Suspense` for route-level code splitting
- `useMemo` / `useCallback` where it actually matters (not everywhere)
- Image optimization — lazy loading, proper sizing

---

## Project Data Model

```typescript
interface Project {
  slug: string;
  title: string;
  description: string;
  stack: string[];           // e.g. ["React", "AWS Lambda", "DynamoDB"]
  highlights: string[];      // bullet points for what it demonstrates
  repoUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  date: string;
}
```

Start with a local `projects.ts` data file. If you want to level up, move it to a JSON file in S3 and fetch it via TanStack Query.

---

## AWS Architecture

```
Browser
  └── CloudFront (CDN + HTTPS)
        └── S3 Bucket (static site files)

Contact Form
  └── API Gateway (REST endpoint)
        └── Lambda Function (Node.js)
              └── SES or SNS (sends email notification)
```

### S3 Setup
- Enable static website hosting
- Block public access — serve only through CloudFront
- Set up bucket policy for CloudFront origin access

### CloudFront
- Create distribution pointing to S3 origin
- Set default root object to `index.html`
- Add custom error response: 404 → `/index.html` (required for React Router)
- Enable HTTPS with ACM certificate if using custom domain

### Lambda (Contact Form)
- Node.js runtime
- Receives POST body from API Gateway
- Validates input
- Sends email via SES (or just logs to CloudWatch for now)

---

## Suggested File Structure

```
src/
├── components/
│   ├── ui/              # Reusable: Button, Card, Badge, etc.
│   └── features/        # Page-specific: ProjectCard, ContactForm, etc.
├── hooks/               # Custom hooks
├── pages/               # Route-level components
├── data/
│   └── projects.ts      # Local project data
├── types/               # TypeScript interfaces
├── store/               # Zustand store(s)
└── utils/               # Helpers, formatters
```

---

## GitHub Actions — CI/CD

```yaml
# .github/workflows/deploy.yml
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci && npm run build
      - uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - run: aws s3 sync dist/ s3://your-bucket-name --delete
      - run: aws cloudfront create-invalidation --distribution-id ${{ secrets.CF_DIST_ID }} --paths "/*"
```

---

## MVP Build Order

1. **Scaffold** — `npm create vite@latest` with React + TypeScript template
2. **Routing** — Set up React Router, stub out all pages
3. **Layout** — Nav, footer, basic responsive shell
4. **Projects data + page** — Static data file, project cards, detail pages
5. **About page** — Bio, stack highlights, ag-tech backstory
6. **Contact form** — Form UI with custom hook, validation
7. **Theme toggle** — Light/dark, persisted
8. **AWS deploy** — S3 + CloudFront, manual first, then CI/CD
9. **Lambda contact endpoint** — Wire up the form for real
10. **Polish** — Animations, transitions, mobile QA

---

## Interview Talking Points Built Into This Project

| Topic | Where It Shows Up |
|---|---|
| Component architecture | ui/ vs features/ split, composition patterns |
| Custom hooks | `useProjects`, `useContactForm`, `useTheme` |
| State management | Zustand for global, TanStack Query for async |
| TypeScript | Typed data models throughout |
| Performance | Code splitting, lazy loading, memoization |
| AWS hosting | S3 + CloudFront setup and rationale |
| Serverless | Lambda + API Gateway contact endpoint |
| CI/CD | GitHub Actions deploy pipeline |
| React Router | Nested routes, slug-based dynamic routes |

---

## Notes for Claude Code

- Start with `npm create vite@latest portfolio -- --template react-ts`
- Install core deps: `react-router-dom`, `zustand`, `@tanstack/react-query`, `tailwindcss`
- Build mobile-first — the portfolio is seen on phones too
- Keep components small and focused — prefer composition over monoliths
- Every custom hook should have a clear single responsibility
