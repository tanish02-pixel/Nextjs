"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

//! ✅ Example Flow: User edits code → clicks "Save Changes",Client component calls saveSnippet(id, code),That function runs on the server, updates the database,Success! Snippet is updated in DB 🎉

export const saveSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippet/${id}`); // after saving, go back to view page
};

//! Deletesnippet-->

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: { id },
  });

  redirect("/"); // go back to homepage or snippets list after delete
};
