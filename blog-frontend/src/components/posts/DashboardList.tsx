import { usePosts } from "../../hooks/usePosts";
import { SquarePost } from "./SquarePost";

export const DashboardList = () => {
  const {LatestPosts, totalPosts} = usePosts()
  return (
    <div className="grid  grid-cols-2 lg:grid-cols-2 gap-12">
      <SquarePost number={totalPosts} text="Entradas Totales" />
      <SquarePost color="orange" number={LatestPosts} text="Últimas Entradas" />
    </div>
  );
};
