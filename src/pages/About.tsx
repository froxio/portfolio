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
          I build for the web — frontend, backend, and the cloud infrastructure in between.
          Mostly Angular and React on the frontend, Node on the backend, AWS for everything else.
        </p>
        <p>
          I'm drawn to software that connects to something real — systems where the output
          actually affects how people interact with the world around them. That's pulled me
          toward environmental and ag-tech, industries where good software genuinely matters.
        </p>
        <p>
          Right now I'm working on expanding this site as a hub for projects I'm building to
          keep learning. New things get added here as they get built.
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
