import { HTMLAttributes } from "react";

const Button = ({
  children,
  className,
  ...args
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`w-full p-3 text-lg text-white rounded bg-green ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
