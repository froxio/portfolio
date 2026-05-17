import { useState, useMemo } from 'react'
import { projects } from '../data/projects'

export function useProjects(initialFilter = '') {
  const [filter, setFilter] = useState(initialFilter)

  const filtered = useMemo(
    () =>
      filter
        ? projects.filter((p) =>
            p.stack.some((s) => s.toLowerCase().includes(filter.toLowerCase()))
          )
        : projects,
    [filter]
  )

  return { projects: filtered, filter, setFilter }
}
