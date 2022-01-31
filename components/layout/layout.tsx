import classnames from "classnames"

// Next Components & Utils
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";

// Styles & Classes
import classes from "./layout.module.scss";

const name = 'Yoshio Tsuda'
export const siteTitle = 'Next.js Sample Website'

type LayoutPropType = {
  children: React.ReactNode;
  contextRight?: React.ReactNode;
  contextLeft?: React.ReactNode;
}
// 
const gridRow = "grid grid-cols-6 h-[80px]";

const gridColumnLeft = "col-start-1";
const gridColumnCenter = "col-start-2 col-span-4 boder border-x border-slate-300";
const gridColumnRight = "col-start-6 ";
const placeInCenter = "flex items-center justify-center";

const fullScreen = "min-h-screen bg-slate-100";
const fullWidth = "w-full borde border-slate-300";

const menuAnchor = `
  relative
`

const menuText = `
      font-sans text-2xl uppercase tracking-widest absolute
      hover:font-semibold hover:text-primary-500 hover:no-underline
`
const menuTextContato = `
      font-sans text-2xl uppercase tracking-widest 
      hover:font-semibold hover:text-primary-500 hover:no-underline
`
const menuTextActive = "font-semibold text-primary-500"
const menuTextInactive = "text-slate-300"

export default function Layout({ children, contextRight, contextLeft }: LayoutPropType) {
  const router = useRouter();
  return (
    <div className={classnames(fullScreen, "flex flex-col")}>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={classnames(fullWidth, gridRow, "border-b")}>
        <div className={classnames(gridColumnLeft, placeInCenter, classes.c_t_l)}>
          <Link href="/">
            <a>
              <Image src={"/images/logo.svg"} alt="logo" height={32} width={173} />
            </a>
          </Link>
        </div>
        <div className={classnames(gridColumnCenter, placeInCenter, classes.menu)} >
          <div className={menuAnchor} >
            <Link href="/portifolio">
              <a className={
                classnames(menuText,
                  "mr-[50px] right-0",
                  { [menuTextActive]: router.pathname === "/portifolio" },
                  { [menuTextInactive]: router.pathname !== "/portifolio" }
                )}
              >
                Portfólio
              </a>
            </Link>
            <div className="h-[32px] w-[32px] bg-slate-500" />
            <Link href="/blog">
              <a className={
                classnames(menuText,
                  "ml-[50px] left-0 top-0",
                  { [menuTextActive]: router.pathname === "/blog" },
                  { [menuTextInactive]: router.pathname !== "/blog" })
              }>
                Blog
              </a>
            </Link>
          </div>
        </div>
        <div className={classnames(gridColumnRight, placeInCenter, classes.c_t_r)}>
          <Link href="/contato">
            <a className={
              classnames(menuTextContato,
                { [menuTextActive]: router.pathname === "/contato" },
                { [menuTextInactive]: router.pathname !== "/contato" })
            }>
              Contato
            </a>
          </Link>
        </div>
      </header>

      <main className={classnames(gridRow, "grow")}>
        <div className={classnames(gridColumnLeft)}>
          {contextLeft && contextLeft}
        </div>
        <div className={classnames(gridColumnCenter)} >
          {children}
        </div>
        <div className={classnames(gridColumnRight)}>
          {contextRight && contextRight}
        </div>
      </main>

      <footer className={classnames(fullWidth, gridRow, "border-t")}>
        <div className={classnames(gridColumnLeft, placeInCenter, classes.c_b_l)}>

        </div>
        <div className={classnames(gridColumnCenter, placeInCenter)} >
          <h1 >created by Carlos Yoshio Tsuda</h1>
        </div>
        <div className={classnames(gridColumnRight, placeInCenter, classes.c_b_r)}>

        </div>
      </footer>
    </div >
  )
}
