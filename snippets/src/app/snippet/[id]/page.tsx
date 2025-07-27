// File: app/snippet/[id]/page.tsx
import React from "react";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteSnippet } from "@/actions";

// ✅ Pre-generate static pages for each snippet ID at build time
export async function generateStaticParams() {
  const snippets = await prisma.snippet.findMany({
    select: { id: true },
  });

  return snippets.map((snippet) => ({
    id: snippet.id.toString(), // route params must be string
  }));
}

// ✅ This is the dynamic route component for /snippet/[id]
export default async function SnippetDetailPage(props: {
  params: { id: string };
}) {
  const { id: idParam } = props.params;
  const id = Number(idParam);

  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  // ❌ If snippet doesn't exist, show 404 page
  if (!snippet) notFound();

  const deleteAction = deleteSnippet.bind(null, snippet.id);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">{snippet.title}</h1>
      <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
        {snippet.code}
      </pre>

      <div className="flex gap-4 mt-4">
        <form action={deleteAction}>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-6">
            Delete
          </Button>
        </form>

        <Link href={`/snippet/${snippet.id}/edit`}>
          <Button className="px-6">Edit</Button>
        </Link>
      </div>
    </div>
  );
}
