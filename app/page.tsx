import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
    const session = await getServerSession(authOptions)

  return (
      <main>
        <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
          <Link href="/users">Users</Link>
          <ProductCard />
      </main>
  );
}

// TODO: 0068_3_Creating_an_Email_Template
