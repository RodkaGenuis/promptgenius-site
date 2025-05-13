'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-between">
      {/* Header */}
      <header className="text-center py-12 px-4">
        <div className="flex justify-center mb-4">
          <Image src="/logo.png.png" alt="Logo PromptGenius" width={80} height={80} />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Génère des prompts ultra personnalisés avec l’IA
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          PromptGenius te guide pour créer des prompts sur-mesure, adaptés à ton objectif, ton audience et ton style.
        </p>
        <Link
          href="/formulaire"
          className="inline-block mt-8 bg-purple-600 text-white px-8 py-3 rounded-xl shadow hover:bg-purple-700 transition"
        >
          Commencer →
        </Link>
      </header>

      {/* Footer */}
      <footer className="bg-purple-900 text-white text-sm text-center py-6 px-4 mt-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© 2025 PromptGenius. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Mentions légales</a>
            <a href="#" className="hover:underline">Politique de confidentialité</a>
            <a href="mailto:promptgeniusia@gmail.com" className="hover:underline">Contactez-nous</a>
            <a
              href="https://www.linkedin.com/company/promptgenius-ia"
              target="_blank"
              className="hover:underline flex items-center gap-1"
            >
              <svg
                className="w-4 h-4 fill-current text-pink-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340c-31.44 0-57-25.56-57-57s25.56-57 57-57 57 25.56 57 57-25.56 57-57 57zm394.2 340h-92.68V302.4c0-34.7-12.4-58.4-43.32-58.4-23.62 0-37.68 15.88-43.88 31.24-2.28 5.56-2.84 13.24-2.84 20.96V448h-92.8s1.24-261.7 0-288.9h92.8v40.96c-.18.28-.43.56-.61.84h.61v-.84c12.32-19 34.32-46.12 83.48-46.12 60.92 0 106.72 39.88 106.72 125.4V448z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
