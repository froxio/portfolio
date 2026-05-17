const stack = [
  'Angular + TypeScript',
  'React 18 + TypeScript',
  'Node.js',
  'AWS (S3, Lambda, CloudFront)',
  'Tailwind CSS',
  'PostgreSQL',
  'GitHub Actions',
  'Vite',
]

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        <p>
          I'm a full-stack developer who builds across the stack — from component architecture to cloud
          infrastructure — using frameworks such as Angular and React on the frontend and AWS on the backend.
        </p>
        <p>
          I spent time in agricultural technology, an industry where software has to hold up in
          real-world conditions, not just in the browser. That background shaped how I think about
          reliability, clarity, and making decisions I can actually defend.
        </p>
      </div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-6">Stack</h2>
      <div className="grid grid-cols-2 gap-3">
        {stack.map((tech) => (
          <div key={tech} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="text-purple-500">▸</span>
            {tech}
          </div>
        ))}
      </div>
    </div>
  )
}
