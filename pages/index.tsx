import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";


import Layout, { siteTitle } from '@/components/layout/layout';

// Classe & Styles
import classnames from "classnames";
import classes from "@/styles/home.module.scss";

// Local Componentes
type PropsRight = {

}
const RightComponent = ({ }: PropsRight) => {
  return (
    <>Right component</>
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
        <div className={classnames(divStyle, "bg-red-400")}>
          a
        </div>
      </div>
    </Layout>
  )
}

export default Home
