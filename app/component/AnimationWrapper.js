"use client";

import { useEffect, useState } from "react";
import Animation from "./Animation.js";

export default function AnimationWrapper() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 2700);
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999 }}>
      <Animation />
    </div>
  );
}