"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import iphone from '../../public/image/iphone.png'
import { Typography} from "@material-tailwind/react";

const OPTIONS = [
  {
    title: "Interface intuitiva",
    description: "Aprenda rápido e de qualquer lugar",
  },
  {
    title: "Multipataforma",
    description: "Basta um celular ou computador.",
  },
  {
    title: "Organize-se",
    description: "Organização eficiente para estudos",
  },
  {
    title: "Offline",
    description: "Você consegue usar mesmo sem internet",
  },
];

export function MobileConvenience() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={1920}
          height={1024}
          src={iphone}
          className="col-span-1 h-10/12 w-12/12 object-cover mx-auto"
          alt="iphone-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography variant="h2" color="blue-gray" className="mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Você só prescisa de um celular ou
          computador
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Acesse o material de aprendizado onde for.
          </Typography>

          <div className="col-span-2 grid gap-5 grid-cols-2 ">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MobileConvenience;
