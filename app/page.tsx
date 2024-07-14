
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import {getServerSession} from "next-auth";

import Image from "next/image";
import coffee from '@/public/images/espreso.jpg'
import {Metadata} from "next";
import HeavyComponent from "@/app/components/HeavyComponent";
import {authOptions} from "@/app/api/auth/authOptions";

export default async function Home() {
    const session = await getServerSession(authOptions)


  return (
      <main className="relative h-screen">
        <h1>Hello {session && <span>{session.user!.name}</span>}</h1>

          <Link href="/users">Users</Link>
          <ProductCard />

          {/*Optimization*/}
          <Image
              src="https://bit.ly/react-cover"
              alt='coffee'
              fill
              className="object-cover"
              sizes="(max-width: 480px) 100vw, (max-witdth: 768px) 50vw, 33vw"
              quality={100}
              priority
          />
      </main>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//     const product = await fetch('')
//
//     return {
//         title: 'product.title',
//         description: '...'
//     }
// }

// TODO: 0068_3_Creating_an_Email_Template
