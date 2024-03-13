import { FC } from "react";

interface Square {
  color?: string;
  number: number;
  text: string;
}

export const SquarePost: FC<Square> = ({ color = "red", number, text }) => {
  return (
    <div
      className="border rounded-lg gap-4 flex flex-col hover:scale-110 transition-all duration-500 cursor-pointer justify-center items-center min-h-40 text-center"
      style={{ borderColor: color }}
    >
      <h2 className="text-6xl">{number}</h2>
      <h2 className="text-xl font-light">{text}</h2>
    </div>
  );
};
