import { ReactNode } from "react";

function StyleProvider({ children }: { children: ReactNode }) {
  return <div className="font-square-round p-10">{children}</div>;
}

export default StyleProvider;
