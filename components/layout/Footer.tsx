export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 py-8 text-xs text-gray-400 dark:text-gray-500 border-t border-dashed border-gray-200 dark:border-gray-800 mt-10 flex flex-col sm:flex-row gap-2 sm:justify-between">
      <span>© {new Date().getFullYear()} John Mark L. Dinglasan. Built with Next.js & Tailwind.</span>
      <span className="flex gap-3"><a href="mailto:johndinglasan12@gmail.com" className="hover:text-gray-900 dark:hover:text-white">johndinglasan12@gmail.com</a> · <a href="tel:+639611678278" className="hover:text-gray-900">+63 961 167 8278</a></span>
    </footer>
  );
}
