'use client'
import { useState } from 'react'

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
  })
  const [prompt, setPrompt] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulaire({ ...formulaire, [e.target.name]: e.target.value })
  }

  const genererPrompt = () => {
    const { objectif, idee, audience, ton, contraintes, format, longueur, contexte } = formulaire
    const promptFinal = `
## 🧠 MÉTA-PROMPT GÉNÉRÉ PAR PROMPTGENIUS
Ce prompt est destiné à un modèle de langage avancé. Il a pour but de générer un contenu parfaitement aligné avec les besoins de l’utilisateur.

### 1. 🎯 Objectif principal
${objectif}

### 2. 💡 Idée à développer
${idee}

---

### 🔧 Directives pour l’IA
Tu es un assistant IA de haut niveau. Génère le livrable attendu en respectant scrupuleusement tous les éléments ci-dessus.

- Rédige de manière claire et accessible
- Ne donne pas d’explication. Seulement le livrable attendu.

${audience ? '\nAudience : ' + audience : ''}
${ton ? '\nTon : ' + ton : ''}
${contraintes ? '\nContraintes : ' + contraintes : ''}
${format ? '\nFormat : ' + format : ''}
${longueur ? '\nLongueur : ' + longueur : ''}
${contexte ? '\nContexte temporel : ' + contexte : ''}
    `
    setPrompt(promptFinal.trim())
  }

  return (
    <main className="min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold text-center mb-4">🧠 Générateur de Prompts</h1>
      <div className="max-w-xl mx-auto space-y-4">
        {Object.entries(formulaire).map(([name, value]) => (
          <input
            key={name}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
            className="w-full border p-2 rounded-md"
          />
        ))}
        <button
          onClick={genererPrompt}
          className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md"
        >
          Générer le prompt
        </button>
        {prompt && (
          <div className="bg-gray-100 p-4 rounded-md whitespace-pre-wrap">
            {prompt}
          </div>
        )}
      </div>
    </main>
  )
}
