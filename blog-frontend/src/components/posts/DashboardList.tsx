import { usePosts } from "../../hooks/usePosts";
import { SquarePost } from "./SquarePost";

export const DashboardList = () => {
  const {ActivePosts, InactivePosts, LatestPosts, totalPosts} = usePosts()
  return (
    <div className="grid  grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12">
      <SquarePost number={totalPosts} text="Entradas Totales" />
      <SquarePost color="blue" number={ActivePosts} text="Entradas Activas" />
      <SquarePost color="green" number={InactivePosts} text="Entradas Inactivas" />
      <SquarePost color="orange" number={LatestPosts} text="Últimas Entradas" />
    </div>
  );
};
