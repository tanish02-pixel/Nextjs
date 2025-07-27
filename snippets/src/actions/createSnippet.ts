"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

type FormState = {
  error: string | null;
};

export async function createSnippet(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const title = formData.get("title")?.toString().trim();
  const code = formData.get("code")?.toString().trim();

  if (!title || !code) {
    return { error: "Please fill in both title and code." };
  }

  await prisma.snippet.create({
    data: { title, code },
  });

  redirect("/");
}
