"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createSnippet } from "@/actions/createSnippet";
import React, { useActionState } from "react";

const initialState = {
  error: null,
};

const CreateSnippetPage = () => {
  const [state, formAction] = useActionState(createSnippet, initialState);

  return (
    <form action={formAction} className="max-w-md mx-auto mt-10 space-y-4">
      {/* 🔴 Error Message */}
      {state?.error && (
        <div className="bg-red-100 text-red-700 p-2 rounded">{state.error}</div>
      )}

      <div>
        <Label htmlFor="title" className="block mb-1">
          Title
        </Label>
        <Input type="text" name="title" id="title" />
      </div>

      <div>
        <Label htmlFor="code" className="block mb-1">
          Code
        </Label>
        <Textarea name="code" id="code" />
      </div>

      <Button type="submit" className="w-full rounded-lg">
        Create Snippet
      </Button>
    </form>
  );
};

export default CreateSnippetPage;
