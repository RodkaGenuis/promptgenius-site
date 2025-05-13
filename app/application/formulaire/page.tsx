'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    pro: false,
  })

  const [prompt, setPrompt] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormulaire({ ...formulaire, [e.target.name]: e.target.value })
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulaire({ ...formulaire, pro: e.target.checked })
  }

  const genererPrompt = () => {
    const {
      objectif,
      idee,
      audience,
      ton,
      contraintes,
      format,
      longueur,
      contexte,
      pro
    } = formulaire

    const promptFinal = pro
      ? `## 🧠 MÉTA-PROMPT GÉNÉRÉ PAR PROMPTGENIUS
Ce prompt est destiné à un modèle de langage avancé. Il a pour but de générer un contenu parfaitement aligné avec les besoins de l’utilisateur.

### 1. 🎯 Objectif principal
${objectif}

### 2. 💡
