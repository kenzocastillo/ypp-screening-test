# YouTube Clone – Screening Test

## Getting Started

```bash
git clone 
cd my-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Framework & Tools Used

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)

## Approach & Technology Choices

Built a simplified YouTube clone with three core pages: a video listing page, a video detail page, and a creator profile page. Used Next.js App Router for file-based routing and dynamic segments (`[id]`, `[creator]`). Static sample data is stored in a custom hook (`useVideos`) to keep things simple without a database. Tailwind CSS was used for styling to move fast while keeping the UI consistent. All pages share a fixed sidebar and sticky navbar via the root layout.

## AI Prompts Used


1. Next.js App Router Structure
- Asked for guidance on organizing a YouTube clone using Next.js App Router.
- Requested recommendations for route naming conventions, page structure, and component organization.

2. Layout and Navigation
- Asked how to implement a shared Navbar and Sidebar across all pages using layout.tsx.
- Requested assistance with responsive layouts and content positioning alongside a persistent sidebar.

3. UI/UX Design
- Requested modernization of the video listing page UI using Tailwind CSS.
- Requested improvements to the navbar styling, color scheme, and profile navigation.
- Asked for responsive design recommendations for desktop, tablet, and mobile devices.

4. Video Listing Page
- Requested generation of mock video data for development and testing.
- Asked for guidance on creating reusable video card components and responsive grid layouts.

5. Video Detail Page
- Requested assistance designing an individual video page similar to YouTube's watch page.
- Asked for implementation ideas for recommended videos and responsive layouts.

6. Profile Page
- Requested creation of a profile page accessible from the navbar.
- Asked for responsive profile page layouts and modern styling patterns.

7. TypeScript and React
- Asked for help resolving TypeScript errors related to props and custom hooks.
- Requested guidance on React hooks usage, component structure, and code organization.

8. Responsive Design
- Asked for recommendations on adapting layouts for mobile, tablet, and desktop breakpoints using Tailwind CSS.

9. General Development Support
- Requested code reviews, UI refinements, layout troubleshooting, and best-practice recommendations throughout development.
