import { FC } from "react";

interface ITitle {
  text: string;
}
export const Title: FC<ITitle> = ({ text }) => {
  return (
    <h1 className="text-4xl py-12 text-center" id="posts">
      {text}
    </h1>
  );
};
