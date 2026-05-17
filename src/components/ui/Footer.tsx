export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>© {new Date().getFullYear()} Harris Langley</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/froxio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
