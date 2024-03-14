import { ChangeEvent, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BlogLayout } from "../components/layouts/BlogLayout";
import { Post } from "../interfaces/posts/post.interfaces";
import { usePosts } from "../hooks/usePosts";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { LoadImage } from "../components/posts/LoadImage";

const AddPostPage = () => {
  const { createPostsAction, loadImagePostAction, imagePost } = usePosts();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>({});

  const onSubmitForm: SubmitHandler<Post> = async (data) => {
    if (imagePost) {
      createPostsAction({ ...data, image: imagePost });
    } else {
      createPostsAction(data);
    }
    toast.success("Entrada Agregada");
    navigate("/posts");
  };

  const onLoadImage = ({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!files) return;
    loadImagePostAction(files[0]);
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
        <LoadImage onLoadImage={onLoadImage} />
      </div>
    </BlogLayout>
  );
};

export default AddPostPage;
