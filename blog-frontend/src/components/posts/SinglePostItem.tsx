import { FC } from "react";
import { Post } from "../../interfaces/posts/post.interfaces";

export const SinglePostItem: FC<Post> = ({
  author,
  description,
  title,
  isActive,
}) => {
  

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {title}
      </th>
      <td className="px-6 py-4">{author}</td>
      <td className="px-6 py-4">{description.slice(0, 40)}...</td>
      <td className="px-6 py-4">{5}</td>

      <td className="flex items-center gap-3 px-6 py-4">
        <button className="font-medium text-green-600 dark:text-green-500 hover:underline">
          Editar
        </button>
        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          {isActive ? "Desactivar" : "Activar"}
        </button>
        <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
          Eliminar
        </button>
      </td>
    </tr>
  );
};
