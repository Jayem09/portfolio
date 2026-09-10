export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 py-8 text-xs text-gray-400 dark:text-gray-500 border-t border-dashed border-gray-200 dark:border-gray-800 mt-10">
      © {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind.
    </footer>
  );
}
