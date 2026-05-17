import { useState } from 'react'
import { useProjects } from '../hooks/useProjects'
import ProjectCard from '../components/features/ProjectCard'

const filters = ['React', 'TypeScript', 'AWS', 'Node.js']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('')
  const { projects } = useProjects(activeFilter)

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Projects</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-10">Things I've built to learn, ship, and demonstrate.</p>
      <div className="flex gap-2 flex-wrap mb-10">
        <FilterButton label="All" active={!activeFilter} onClick={() => setActiveFilter('')} />
        {filters.map((f) => (
          <FilterButton
            key={f}
            label={f}
            active={activeFilter === f}
            onClick={() => setActiveFilter(activeFilter === f ? '' : f)}
          />
        ))}
      </div>
      {projects.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No projects match that filter yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </div>
  )
}

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
        active
          ? 'bg-purple-600 text-white'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      {label}
    </button>
  )
}
