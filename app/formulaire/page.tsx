'use client';

import { useState } from 'react';

export default function Formulaire() {
  const [formulaire, setFormulaire] = useState({
    objectif: '',
    idee: '',
    audience: '',
    ton: '',
    contraintes: '',
    format: '',
    longueur: '',
    contexte: '',
    pro: false
  });

  const [prompt, setPrompt] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormulaire({ ...formulaire, [name]: type === 'checkbox' ? checked : value });
  };

  const genererPrompt = () => {
    const { objectif, idee, audience, ton, contraintes, format, longueur, contexte, pro } = formulaire;

    const promptFinal = pro ? `
## 🧠 MÉTA-PROMPT GÉNÉRÉ PAR PROMPTGENIUS
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
` : `
Crée un prompt pour un LLM.
Objectif : ${objectif}
Idée : ${idee}
Audience : ${audience}
Ton : ${ton}
Contraintes : ${contraintes}
Format : ${format}
Longueur : ${longueur}
Contexte temporel : ${contexte}
`;

    setPrompt(promptFinal);
  };

  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">🧾 Générateur de Prompts</h1>

      <div className="grid grid-cols-1 gap-4 max-w-xl">
        {['objectif', 'idee', 'audience', 'ton', 'contraintes', 'format', 'longueur', 'contexte'].map((champ) => (
          <input
            key={champ}
            type="text"
            name={champ}
            value={formulaire[champ as keyof typeof formulaire] as string}
            onChange={handleChange}
            placeholder={champ.charAt(0).toUpperCase() + champ.slice(1)}
            className="border rounded px-3 py-2"
          />
        ))}

        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            name="pro"
            checked={formulaire.pro}
            onChange={handleChange}
          />
          Usage professionnel (active le méta-prompt expert)
        </label>

        <button
          onClick={genererPrompt}
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
        >
          Générer le prompt
        </button>
      </div>

      {prompt && (
        <div className="mt-10 p-4 bg-gray-100 rounded">
          <h2 className="font-bold mb-2">📄 Ton méta-prompt est prêt</h2>
          <pre className="whitespace-pre-wrap">{prompt}</pre>
        </div>
      )}
    </main>
  );
}
