import { Link } from 'react-router-dom'
import type { Project } from '../../types'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-purple-400 dark:hover:border-purple-500 transition-colors bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm">
        <Link
          to={`/projects/${project.slug}`}
          className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
        >
          Details →
        </Link>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            GitHub ↗
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            Live ↗
          </a>
        )}
      </div>
    </div>
  )
}
