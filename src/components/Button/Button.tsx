import type { ReactNode } from "react";
import "./Button.css";

type ButtonSize = "small" | "large";

export function Button({ height = "small", children }: { height?: ButtonSize, children: ReactNode }) {
  return <button className={`btn-${height}`}>{children}</button>;
}
