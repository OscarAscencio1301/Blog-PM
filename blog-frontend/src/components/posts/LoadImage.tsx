import { ChangeEvent, FC, useRef } from "react";
import { usePosts } from "../../hooks/usePosts";

interface PropsImage {
  onLoadImage: ({ target: { files } }: ChangeEvent<HTMLInputElement>) => void;
}

export const LoadImage: FC<PropsImage> = ({ onLoadImage }) => {
  const { imagePost } = usePosts();
  const buttonImage = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (buttonImage.current) {
      buttonImage.current.click(); // Simula un clic en el input
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={buttonImage}
        onChange={onLoadImage}
      />
      {imagePost ? (
        <img
          src={imagePost}
          alt="Post"
          className="object-cover w-1/3 rounded-lg"
        />
      ) : (
        <div
          className="bg-gray-600/10 w-full xl:w-1/3 h-96 rounded-lg flex flex-col gap-6 justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          <h2 className="text-gray-600/50 text-4xl">Agregar imagen</h2>
          <h2 className="text-gray-600/50 text-4xl">1000 X 825</h2>
        </div>
      )}
    </>
  );
};
