"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/solid";
import feedback1 from '../../public/image/feedbacks/feedback1.jpeg';
import feedback2 from '../../public/image/feedbacks/feedback2.jpeg';
import feedback3 from '../../public/image/feedbacks/feedback3.jpeg';
import feedback4 from '../../public/image/feedbacks/feedback4.jpeg';
import feedback5 from '../../public/image/feedbacks/feedback5.jpeg';
import feedback6 from '../../public/image/feedbacks/feedback6.jpeg';
import feedback7 from '../../public/image/feedbacks/feedback7.jpeg';
import feedback8 from '../../public/image/feedbacks/feedback8.jpeg';
import feedback9 from '../../public/image/feedbacks/feedback9.jpeg';
import feedback10 from '../../public/image/feedbacks/feedback10.jpeg';

export function Testimonials() {

  const data = [
    {
      imgelink: feedback1,
    },
    {
      imgelink: feedback2,
    },
    {
      imgelink: feedback3,
    },
    {
      imgelink: feedback4,
    },
    {
      imgelink: feedback5,
    },
    {
      imgelink: feedback6,
    },
    {
      imgelink: feedback7,
    },
    {
      imgelink: feedback8,
    },
    {
      imgelink: feedback9,
    },
    {
      imgelink: feedback10,
    },
  ];
  const [active, setActive] = React.useState(feedback10);
  return (
    <section className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <UserIcon className="h-6 w-6" />
          </div>
          <Typography variant="h2" color="blue-gray" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            O que os clientes dizem
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl text-center !text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Descubra o que nossos valiosos clientes têm a dizer sobre suas experiências com nossos serviços. Temos orgulho em entregar resultados excepcionais
            e promover parcerias duradouras.
          </Typography>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="flex justify-center items-center">
          <Image
            className=" -mt-10 -translate-y-9 hover:scale-150 object-contain rounded-lg object-center md:h-[480px]"
            src={active}
            alt=""
            width={500}
            height={1000}
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          {data.map(({ imgelink }, index) => (
            <Image
              key={index}
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
              width={200}
              height={150}
            />
          ))}
        </div>
      </div>
    </section>


  );
}
export default Testimonials;
