'use client';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({
    objectif: '',
    idee: '',
    audience: '',
    ton: '',
    contraintes: '',
    format: '',
    longueur: '',
    contexte: '',
  });
  const [prompt, setPrompt] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generatePrompt = () => {
    const { objectif, idee, audience, ton, contraintes, format, longueur, contexte } = form;
    const promptFinal = `Crée un prompt pour un LLM.
Objectif : ${objectif}
Idée : ${idee}
Audience : ${audience}
Ton : ${ton}
Contraintes : ${contraintes}
Format : ${format}
Longueur : ${longueur}
Contexte temporel : ${contexte}`;
    setPrompt(promptFinal);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">🧠 PromptGenius</h1>
        <p className="text-lg mb-8">Générez des prompts optimisés pour LLM, adaptés à vos besoins.</p>
        <a href="#formulaire" className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition">
          Commencer
        </a>
      </section>

      <section id="formulaire" className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-6">🎯 Formulaire de génération</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(form).map(([key, value]) => (
            <input
              key={key}
              name={key}
              placeholder={key}
              value={value}
              onChange={handleChange}
              className="border rounded-lg p-3"
            />
          ))}
        </div>
        <button onClick={generatePrompt} className="mt-6 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
          Générer le prompt
        </button>
      </section>

      {prompt && (
        <section className="max-w-2xl mx-auto p-6 mt-8 bg-gray-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">📋 Prompt généré :</h3>
          <pre className="whitespace-pre-wrap bg-white p-4 rounded border text-sm">{prompt}</pre>
          <button
            onClick={() => navigator.clipboard.writeText(prompt)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Copier le prompt
          </button>
        </section>
      )}

      <footer className="mt-12 p-6 bg-purple-900 text-white text-center">
        <p>Contactez-nous : <a href="mailto:promptgeniusia@gmail.com" className="underline">promptgeniusia@gmail.com</a></p>
        <p><a href="https://www.linkedin.com/company/promptgenius-ia" target="_blank" className="underline">LinkedIn PromptGenius</a></p>
      </footer>
    </main>
  );
}
