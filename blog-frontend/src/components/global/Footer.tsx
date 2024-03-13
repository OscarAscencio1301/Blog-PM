import { Sponsor } from "./Sponsor";

export const Footer = () => {
  return (
    <>
      <Sponsor />
      <div className="bg-primary text-white p-5 lg:p-20 flex flex-col lg:flex-row justify-between gap-6 lg:gap-20">
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="text-6xl font-bold text-center lg:text-left">
            Blog PM
          </h2>
          <h3 className="text-lg font-light text-center lg:text-left">
            ¡Explora nuestro blog y descubre un mundo de conocimiento y
            sabiduría! Te presentamos algunas de nuestras entradas más
            destacadas que te enseñarán valiosas lecciones. Estas entradas están
            diseñadas para proporcionarte información valiosa y ayudarte a tomar
            decisiones informadas. ¡Sumérgete en nuestro blog y amplía tus
            conocimientos!
          </h3>
        </div>
        <div className="flex flex-col flex-1 text-center gap-5">
          <h2 className="text-3xl font-bold">Enlaces</h2>
          <ol className="text-center">
            <li className="text-xl font-light py-1 hover:text-2xl transition-all cursor-pointer">
              Entradas
            </li>
            <li className="text-xl font-light py-1 hover:text-2xl transition-all cursor-pointer">
              Últimas Entradas
            </li>
            <li className="text-xl font-light py-1 hover:text-2xl transition-all cursor-pointer">
              Agregar Entrada
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};
