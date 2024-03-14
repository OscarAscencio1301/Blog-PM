import { FC } from "react";
import { Post } from "../../interfaces/posts/post.interfaces";
import { time } from "../../services/date";
import { usePosts } from "../../hooks/usePosts";
import { toast } from "sonner";

export const SinglePostItem: FC<Post> = ({
  id,
  author,
  description,
  title,
  updatedAt,
}) => {
  const { deletePostAction } = usePosts();

  const deletePostButton = () => {
    toast(`Eliminar Entrada ${title.slice(0, 20)}...`, {
      action: {
        label: "Eliminar",
        onClick: () => deletePostAction(+id!),
      },
    });
  };

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
      <td className="px-6 py-4">{time(updatedAt)}</td>

      <td className="px-6 py-4">
        <button
          className="font-medium text-red-600 dark:text-red-500 hover:underline"
          onClick={deletePostButton}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
