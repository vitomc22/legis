"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Técnica de aprendizado",
    children:
      "O programa utiliza da técnica de aprendizado chamada repetição espaçada para determinar, através de um algoritmo, o momento de revisão dos cartões de memorização utilizados pelo usuário.",
  },
  {
    icon: HeartIcon,
    title: "Aprendizagem interativa",
    children:
      "O aprendizado de cartão de memória, também conhecido como flashcards, é uma técnica de estudo que consiste em fazer revisões periódicas de conteúdos através de perguntas e respostas.",
  },
  {
    icon: LockClosedIcon,
    title: "Conquista Desbloqueada",
    children:
      "Melhore seu aprendizado de uma forma inteligente e eficaz, com o uso de cartões de memorização.",
  },
  {
    icon: LightBulbIcon,
    title: "Progresso personalizado",
    children:
      "Ao revisar o cartão, o usuário avalia quão bem consegue lembrar-se do conteúdo previsto e, tal, avaliação será utilizada para definir a próxima data de revisão.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Seu aplicativo de aprendizado
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Diversas fontes de estudo
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Acesse seus materias sob demanda onde você estiver! 
          Seja no transporte público, esperando um amigo, ou apenas com alguns minutos de sobra, 
          nosso aplicativo se encaixa perfeitamente em sua vida agitada.
         
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
