import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BlogLayout } from "../components/layouts/BlogLayout";
import { Post } from "../interfaces/posts/post.interfaces";
import { usePosts } from "../hooks/usePosts";

const AddPostPage = () => {
  const { createPostsAction } = usePosts();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>({});

  const onSubmitForm: SubmitHandler<Post> = (data) => {
    createPostsAction(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogLayout>
      <div className="flex p-5 lg:p-20 flex-col xl:flex-row gap-12 flex-1 xl:items-end">
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-4xl">Agregar Entrada</h3>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div className="flex flex-col gap-2">
              <label>Titulo</label>
              <input
                type="text"
                className="border outline-none p-2 rounded-lg"
                {...register("title", { required: true })}
              />
              {!!errors.title && (
                <span className="text-red-700">{"El título es requerido"}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Autor</label>
              <input
                type="text"
                className="border outline-none p-2 rounded-lg"
                {...register("author", { required: true })}
              />
              {!!errors.author && (
                <span className="text-red-700">{"El autor es requerido"}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Descripción</label>
              <textarea
                className="border outline-none p-2 rounded-lg"
                rows={4}
                {...register("description", { required: true })}
              ></textarea>
              {!!errors.description && (
                <span className="text-red-700">
                  {"La descripción es requerido"}
                </span>
              )}
            </div>
            <button className="bg-primary hover:bg-blue-950 text-white py-3 my-3 px-12 rounded-lg">
              Crear Entrada
            </button>
          </form>
        </div>
        <div className="bg-gray-600/10 w-full xl:w-1/3 h-96 rounded-lg flex flex-col gap-6 justify-center items-center">
          <h2 className="text-gray-600/50 text-4xl">Agregar imagen</h2>
          <h2 className="text-gray-600/50 text-4xl">1000 X 825</h2>
        </div>
      </div>
    </BlogLayout>
  );
};

export default AddPostPage;
