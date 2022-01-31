// NextJS
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';

// CustomComponents
import Loayout from "@/components/layout";

export default function FirstPost() {
  return (
    <Loayout home={false}>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        className="rounded-full"
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </Loayout>
  );
}