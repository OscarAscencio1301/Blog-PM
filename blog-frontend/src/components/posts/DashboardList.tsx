import { SquarePost } from "./SquarePost";

export const DashboardList = () => {
  return (
    <div className="grid grid-cols-4 gap-12">
      <SquarePost number={40} text="Entradas Totales" />
      <SquarePost color="blue" number={30} text="Entradas Activas" />
      <SquarePost color="green" number={6} text="Entradas Inactivas" />
      <SquarePost color="orange" number={3} text="Últimas Entradas" />
    </div>
  );
};
