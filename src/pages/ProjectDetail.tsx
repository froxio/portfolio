import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-4">Project not found.</p>
        <Link to="/projects" className="text-purple-600 dark:text-purple-400 hover:underline">
          ← Back to projects
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link to="/projects" className="text-purple-600 dark:text-purple-400 hover:underline text-sm mb-8 block">
        ← Back to projects
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-10">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Highlights</h2>
      <ul className="space-y-3 mb-10">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-gray-600 dark:text-gray-300">
            <span className="text-purple-500 shrink-0 mt-0.5">▸</span>
            {h}
          </li>
        ))}
      </ul>
      <div className="flex gap-3">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-gray-400 transition-colors"
          >
            GitHub ↗
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors"
          >
            Live Site ↗
          </a>
        )}
      </div>
    </div>
  )
}
