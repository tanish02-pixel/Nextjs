export const revalidate = 30;

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  // Fetch all snippets from the database
  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>

      <div className="flex items-center justify-between mt-4">
        <h1>Snippets</h1>
        <Link href="/snippet/new">
          <Button style={{ borderRadius: "20px", marginRight: "20px" }}>
            New
          </Button>
        </Link>
      </div>

      {/* Show the list of snippets ---> */}
      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="mt-4 p-4 border rounded flex justify-between"
        >
          <h2 className="text-xl font-semibold">{snippet.title}</h2>
          <Link href={`/snippet/${snippet.id}`}>
            <Button className="mt-2">View</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
