'use client';
import { useState } from 'react';

export default function Formulaire() {
  const [form, setForm] = useState({
    objectif: '',
    idee: '',
    audience: '',
    ton: '',
    contraintes: '',
    format: '',
    longueur: '',
    contexte: '',
    pro: false,
  });

  const [prompt, setPrompt] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const generatePrompt = () => {
    const { objectif, idee, audience, ton, contraintes, format, longueur, contexte, pro } = form;

    const base = `## 🧠 MÉTA-PROMPT GÉNÉRÉ PAR PROMPTGENIUS
Ce prompt est destiné à un modèle de langage avancé. Il a pour but de générer un contenu parfaitement aligné avec les besoins de l’utilisateur.

### 1. 🎯 Objectif principal
${objectif}

### 2. 💡 Idée à développer
${idee}

---

### 🛠️ Directives pour l’IA
Tu es un assistant IA de haut niveau. Génère le livrable attendu en respectant scrupuleusement tous les éléments ci-dessus.

- Rédige de manière claire et accessible
- Ne donne pas d’explication. Seulement le livrable attendu.
`;

    const enrichissement = `

### 👥 Audience cible
${audience}

### 🎨 Ton souhaité
${ton}

### 🚫 Contraintes
${contraintes}

### 📦 Format attendu
${format}

### 📏 Longueur souhaitée
${longueur}

### ⏳ Contexte temporel
${contexte}
`;

    const final = base + (pro ? enrichissement : '');
    setPrompt(final);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
      <section className="max-w-2xl mx-auto p-6 pt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">🎯 Générateur de Prompts</h2>
        <p className="text-sm text-center text-gray-600 mb-8">
          Utilise la puissance de l’IA pour booster ta créativité et ta productivité.
        </p>
        <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
          {[
            { label: 'Objectif *', name: 'objectif', placeholder: 'Ex : Écrire un article, Créer un script, etc.' },
            { label: 'Idée précise *', name: 'idee', placeholder: 'Ex : Montrer l’importance des prompts pour les LLM' },
            { label: 'Audience cible', name: 'audience', placeholder: 'Ex : Étudiants, Pros du marketing...' },
            { label: 'Ton souhaité', name: 'ton', placeholder: 'Ex : Sérieux, Amical, Inspirant, etc.' },
            { label: 'Contraintes', name: 'contraintes', placeholder: 'Ex : Pas de jargon, en bullet points, etc.' },
            { label: 'Format de sortie', name: 'format', placeholder: 'Ex : Email, Plan d’action, Post LinkedIn...' },
            { label: 'Longueur souhaitée', name: 'longueur', placeholder: 'Ex : Court, Standard, Ultra détaillé...' },
            { label: 'Contexte temporel', name: 'contexte', placeholder: 'Ex : Résultat attendu cette semaine...' },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-sm font-medium mb-1">{f.label}</label>
              <input
                type="text"
                name={f.name}
                value={form[f.name as keyof typeof form] as string}
                onChange={handleChange}
                placeholder={f.placeholder}
                className="w-full border rounded-lg p-3 text-sm"
              />
            </div>
          ))}
          <label className="flex items-center gap-2 mt-2 text-sm">
            <input
              type="checkbox"
              name="pro"
              checked={form.pro}
              onChange={handleChange}
              className="accent-purple-600"
            />
            Usage professionnel (active le méta-prompt expert)
          </label>
          <button
            type="submit"
            onClick={generatePrompt}
            className="mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            Générer le prompt
          </button>
        </form>
      </section>

      {prompt && (
        <section className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-xl mb-10 mt-12">
          <h3 className="text-green-600 font-semibold mb-4 text-center text-lg">✅ Ton méta-prompt est prêt</h3>
          <pre className="whitespace-pre-wrap text-sm bg-white p-4 border rounded">{prompt}</pre>
          <div className="flex justify-center">
            <button
              onClick={() => navigator.clipboard.writeText(prompt)}
              className="mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
            >
              📋 Copier le prompt
            </button>
          </div>
          <p className="text-center mt-4">
            <a href="/" className="text-sm text-purple-600 underline">← Retour à l’accueil</a>
          </p>
        </section>
      )}
    </main>
  );
}
