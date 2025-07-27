import React from "react";
import EditSnippetForm from "@/components/EditSnippetForm";
import { prisma } from "@/lib/prisma";

const Edit = async (props: { params: { id: string } }) => {
  const id = Number(props.params.id); // ✅ No await here!

  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) return <h1>Snippet not found</h1>;

  return (
    <div>
      <EditSnippetForm snippet={snippet} />
    </div>
  );
};

export default Edit;
