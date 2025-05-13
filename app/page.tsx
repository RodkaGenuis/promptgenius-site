'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-between">
      <header className="text-center py-10">
        <Image src="/logo.png" alt="Logo PromptGenius" width={80} height={80} className="mx-auto mb-4" />
        <h1 className="text-4xl font-extrabold text-gray-900">Génère des prompts ultra personnalisés avec l’IA</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          PromptGenius te guide pour créer des prompts sur-mesure, adaptés à ton objectif, ton audience et ton style.
        </p>
        <Link href="/formulaire" className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
          Commencer →
        </Link>
      </header>
      <footer className="bg-purple-950 text-white text-sm py-6 text-center">
        <div className="space-x-4">
          <Link href="/mentions-legales" className="hover:underline">Mentions légales</Link>
          <Link href="/confidentialite" className="hover:underline">Politique de confidentialité</Link>
          <a href="mailto:promptgeniusia@gmail.com" className="hover:underline">Contactez-nous</a>
          <a href="https://www.linkedin.com/company/promptgenius-ia" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <i className="ri-linkedin-box-fill text-[#d94f78] ml-1"></i> LinkedIn
          </a>
        </div>
        <p className="mt-2">© 2025 PromptGenius. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
