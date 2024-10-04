import { ReactNode } from "react";

function StyleProvider({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen px-8 py-14 bg-butter font-square-round">
      {children}
    </div>
  );
}

export default StyleProvider;
