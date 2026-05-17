import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
        Hi, I'm Harris
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Full-stack developer with a background in ag-tech. I build with React and AWS, and I care about
        clean architecture and real results.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link
          to="/projects"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-colors"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-400 font-medium transition-colors text-gray-900 dark:text-white"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
