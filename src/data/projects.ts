import type { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Developer Portfolio',
    description:
      'This site — a React + AWS portfolio built to demonstrate modern frontend patterns and cloud deployment.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'AWS S3', 'CloudFront', 'GitHub Actions'],
    highlights: [
      'React 18 with custom hooks and compound components',
      'Route-level code splitting with React.lazy + Suspense',
      'Zustand for global state, TanStack Query for async data',
      'Deployed to S3 + CloudFront with GitHub Actions CI/CD',
    ],
    repoUrl: 'https://github.com/froxio/portfolio',
    date: '2026-05',
  },
]
