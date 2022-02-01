import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";

// Icon
import {
  RiLinkedinFill,
  RiTwitterFill,
  RiBehanceFill,
  RiDribbbleLine,
  RiMailFill
} from "react-icons/ri";

import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiLess,
  SiSass,
  SiTypescript,
  SiFlutter,
  SiNextdotjs,
} from "react-icons/si";


import Layout, { siteTitle } from '@/components/layout/layout';

// Classe & Styles
import classnames from "classnames";
import classes from "@/styles/home.module.scss";

const colorIcon = {
  Html5: "text-[#E34F26]",
  Css3: "text-[#1572B6]",
  React: "text-[#61DAFB]",
  Less: "text-[#1D365D]",
  Sass: "text-[#CC6699]",
  Typescript: "text-[#3178C6]",
  Flutter: "text-[#02569B]",
  Nextdotjs: "text-[#000000]",
}

const frontDevIcon = `
  p-3 rounded bg-stone-300
`;

// Local Componentes
type PropsRight = {

}
const RightComponent = ({ }: PropsRight) => {
  return (
    <div className="flex flex-col py-10 px-2 justify-between h-full">
      <ul>
        <li>
          <a className={`
            text-lg base flex flex-row items-center text-neutral-600 px-3 py-1 rounded transition-all
            hover:no-underline hover:cursor-pointer hover:text-primary-500 hover:ml-0.5
          `}>
            <RiMailFill className=" text-xl mr-1" />
            cytsuda@gmail.com
          </a>
        </li>

      </ul>
      <ul>
        <li>
          <a className={`
            text-lg base flex flex-row items-center text-neutral-600 px-3 py-1 rounded transition-all font-semibold
            hover:no-underline hover:cursor-pointer hover:text-[#0077b5] hover:ml-0.5
          `}>
            <RiLinkedinFill className="text-2xl mr-1" />
            cytsuda
          </a>
        </li>
        <li>
          <a className={`
              text-lg base flex flex-row items-center text-neutral-600 px-3 py-1 rounded transition-all font-semibold
              hover:no-underline hover:cursor-pointer hover:text-[#1da1f2] hover:ml-0.5
            `}>
            <RiTwitterFill className="text-2xl mr-1" />
            cytsuda
          </a>
        </li>
        <li>
          <a className={`
            text-lg base flex flex-row items-center text-neutral-600 px-3 py-1 rounded transition-all font-semibold
            hover:no-underline hover:cursor-pointer hover:text-[#1769ff] hover:ml-0.5
          `}>
            <RiBehanceFill className="text-2xl mr-1" />
            cytsuda
          </a>
        </li>
        <li>
          <a className={`
            text-lg base flex flex-row items-center text-neutral-600 px-3 py-1 rounded transition-all font-semibold
            hover:no-underline hover:cursor-pointer hover:text-[#ea4c89] hover:ml-0.5
          `}>
            <RiDribbbleLine className="text-2xl mr-1" />
            cytsuda
          </a>
        </li>

      </ul>
    </div>
  );
}
const divStyle = "w-2/4 flex flex-col";

const Home: NextPage = () => {
  return (
    <Layout contextRight={<RightComponent />}>
      <div className="flex flex-row h-full">
        <div className={classnames(divStyle, "p-10")}>
          <p className="text-sans text-4xl text-neutral-600">
            Carlos Yoshio Tsuda
          </p>
          <div className="w-1/4 bg-neutral-200 h-1 my-4" />
          <p className="text-sans text-lg text-neutral-600">
            Sou um desenvolvedor Frontend. Apaixonado por programação, tecnologia,
            animações e criação de experiencias intuitivas dinâmicas.
          </p>
          <div className="mt-auto flex flex-row gap-4">
            <Link href="/contato">
              <a className={`
                inline-block
                text-sans text-lg font-bold uppercase cursor-pointer tracking-wider 
                text-neutral-50 bg-primary-500 px-5 py-3 rounded
                transition ease-in-out duration-300
                drop-shadow-md
                hover:no-underline hover:bg-primary-700
                hover:-translate-y-1 hover:translate-x-1
                hover:drop-shadow-xl
              `}>
                Contato
              </a>
            </Link>
            <Link href="/portifolio">
              <a className={`
                inline-block
                text-sans text-lg font-bold uppercase cursor-pointer tracking-wider 
                text-neutral-50 bg-neutral-500 px-5 py-3 rounded
                transition ease-in-out duration-300
                drop-shadow-md
                hover:no-underline hover:bg-neutral-700
                hover:-translate-y-1 hover:translate-x-1
                hover:drop-shadow-xl
              `}>
                Portifólio
              </a>
            </Link>
          </div>
        </div>
        <div className={classnames(divStyle)}>
          <div className="bg-stone-900 h-full flex flex-row justify-center items-center" >
            <div className="flex flex-row gap-1 align-middle w-1/2">
              <div className="flex flex-col leading-none">
                <span className="font-serif text-primary-500 text-6xl">M.</span>
                <span className="text-stone-700 font-semibold ">MongoDB</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-primary-500 text-6xl">E.</span>
                <span className="text-stone-700 font-semibold ">Express</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-primary-500 text-6xl">R.</span>
                <span className="text-stone-700 font-semibold ">ReactJS</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-primary-500 text-6xl">N.</span>
                <span className="text-stone-700 font-semibold ">NodeJS</span>
              </div>
            </div>
            <Image className="w-1/2" src="/images/MERN.svg" alt="mern" height={250} width={250} />
          </div>
          <div className="bg-stone-200 h-full flex flex-col justify-center">
            <div className="ml-10 mb-12">
              <h4 className="font-serif text-3xl font-semibold text-primary-500">
                Desenvolvedor Frontend
              </h4>
              <div className="h-1 w-1/4 bg-stone-300 mb-0.5" />
              <div className="h-1 w-14 bg-stone-300 mb-4" />
            </div>
            <div className="flex flex-row gap-2 text-5xl self-end mr-10">
              <SiHtml5 className={classnames(frontDevIcon, colorIcon["Html5"])} />
              <SiCss3 className={classnames(frontDevIcon, colorIcon["Css3"])} />
              <SiReact className={classnames(frontDevIcon, colorIcon["React"])} />
              <SiLess className={classnames(frontDevIcon, colorIcon["Less"])} />
              <SiSass className={classnames(frontDevIcon, colorIcon["Sass"])} />
              <SiTypescript className={classnames(frontDevIcon, colorIcon["Typescript"])} />
              <SiFlutter className={classnames(frontDevIcon, colorIcon["Flutter"])} />
              <SiNextdotjs className={classnames(frontDevIcon, colorIcon["Nextdotjs"])} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
