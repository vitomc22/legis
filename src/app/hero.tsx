"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
            Domine Legislação para Concurso com 
            Flashcards
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Os Flashcards são um verdadeiro curso da Legislação
            </Typography>
            <Typography className="mb-4" color="white" variant="h6">
            Você só prescisa de um celular ou 
            computador para estudar 
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
            <a href="https://legisflashcards.catalog.kyte.site">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/legis_logo.webp"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Acessar o Catálogo
              </Button> 
              </a>
              <a href="https://legisflashcards.com.br">
              <Button
                
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/legis_logo.webp"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Vade Mecum de Flashcards
              </Button>
              </a>
            </div>
          </div>
          <Image
            width={470}
            height={577}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            Aplicativo de aprendizado
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Baixe nosso aplicativo para mergulhar em uma vasta biblioteca de cards, 
            e materiais de estudo sobre uma ampla variedade de assuntos - 
            desde a legislação até a história, e muito mais.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
