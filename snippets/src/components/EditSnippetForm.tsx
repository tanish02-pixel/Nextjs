"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { saveSnippet } from "@/actions"; // server action

export default function EditSnippetForm({
  snippet,
}: {
  snippet: { id: number; title: string; code: string };
}) {
  const [code, setCode] = useState(snippet.code);

  const handleSave = () => {
    saveSnippet(snippet.id, code); // just call the server action
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{snippet.title}</h1>
      <Editor
        height="70vh"
        defaultLanguage="cpp"
        defaultValue={snippet.code}
        theme="vs-dark"
        onChange={(value) => setCode(value || "")}
      />
      <Button className="mt-4" onClick={handleSave}>
        Save Changes
      </Button>
    </div>
  );
}
