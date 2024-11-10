"use client";
import Image from "next/image";
import { Typography, IconButton } from "@material-tailwind/react";
import logo from "../../public/logos/legis_logo.png"
import Link from "next/link";
const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-5 bg-gray-900 px-5 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center md:flex-col">
            <Typography
              as="a"
              href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Flegis_flashcards%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYkU3tJu3QNqLh1QMk_K_KZVZ53i65VkY1UKc3JAWYY-Ni8Xdt6HYUuh0M_aem_4PSlSL0M6gyJcOAJuT1qOA&e=AT0uv3L063A0OKFDVlLlObn9Foomuc2eY4F7iiK4rpD8KnglGOMmiexg9eclHeL1qop0JTNWkKv-q0BydEJMkWizman6wMe3sFFu3tKVCXxNltzQROQZ_w"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Legis Flash Cards
            </Typography>
            <Typography color="white" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              A recompensa pelo estudo é a aprovação.
            </Typography>
              <Image src={logo} alt="" 
              width={100}
              height={10}
              />
        </div>
        <div className="flex justify-center md:justify-start">
        <IconButton onClick={() => window.open('https://www.linkedin.com/in/victoroliveiranasc/')} variant="text" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
              </IconButton>
              <IconButton onClick={() => window.open('https://github.com/vitomc22')} variant="text" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
              </IconButton>
        </div>
        
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-5 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Material Tailwind
            </a>{" "}
            by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Creative Tim
            </a>{"  "}
            and   {""}
            <a href="https://www.linkedin.com/in/victoroliveiranasc/" target="_blank">
              Victor Oliveira
            </a>
            .
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
