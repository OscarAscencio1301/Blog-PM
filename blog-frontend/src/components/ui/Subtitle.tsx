import { FC } from "react";

interface PropsSubtitle {
  text: string;
}

export const Subtitle: FC<PropsSubtitle> = ({ text }) => {
  return (
    <h3 className="text-2xl py-2 text-center lg:text-left font-bold text-blue-900" >
      {text}
    </h3>
  );
};
