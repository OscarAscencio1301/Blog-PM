import { FC } from "react";
import { Post } from "../../interfaces/posts/post.interfaces";
import { SinglePostItem } from "./SinglePostItem";

interface PropsPost {
  posts: Post[];
}

export const PostTable: FC<PropsPost> = ({ posts }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Título
            </th>
            <th scope="col" className="px-6 py-3">
              Autor
            </th>
            <th scope="col" className="px-6 py-3">
              Descripción
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <SinglePostItem key={post.id} {...post} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
