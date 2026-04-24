"use client";

import { useEffect, useRef, useState } from "react";
import type Quill from "quill";
import "quill/dist/quill.core.css";

export function RichProjectBrief() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<Quill | null>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;
    if (!container) return;

    (async () => {
      const { default: QuillCtor } = await import("quill");
      if (cancelled || !container) return;
      container.innerHTML = "";

      const quill = new QuillCtor(container, {
        modules: { toolbar: false },
        placeholder: "Write your brief here. Include the idea, users, timelines, and any useful links.",
      });
      quillRef.current = quill;

      quill.on("text-change", () => {
        setText(quill.getText().trim());
      });
    })();

    return () => {
      cancelled = true;
      quillRef.current = null;
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <div className="rich-brief">
      <div ref={containerRef} className="rich-brief-editor" />
      <input name="details" type="hidden" value={text} />
    </div>
  );
}
