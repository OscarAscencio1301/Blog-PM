import { BlogLayout } from "../components/layouts/BlogLayout";
import image from "/post.png";

const SinglePage = () => {
  return (
    <BlogLayout>
      <div className="flex p-5 lg:p-20 gap-12">
        <img src={image} alt="Post" className="object-cover w-1/3 rounded-lg" />
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-5xl">Nueva Entrada</h3>
          <h4 className="text-2xl text-primary italic">Autor</h4>
          <span className="font-light text-lg text-gray-600 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            culpa accusantium laborum molestiae natus eos, reprehenderit eum
            recusandae velit quis ab dignissimos, doloremque repudiandae cumque.
            Adipisci voluptas sit at eaque facere, odio maxime excepturi quis
            quibusdam unde reiciendis. Dolorum, consequuntur! Alias, porro
            tenetur sapiente itaque quas facilis saepe vitae? Iste optio, dolor
            cupiditate consequuntur ipsum tempora ut voluptatem accusantium,
            natus assumenda quas exercitationem eius fugit necessitatibus
            perferendis dignissimos itaque officia in? At aliquid ut quibusdam
            quaerat optio. Ipsum consequatur praesentium voluptatum ad,
            distinctio pariatur nobis quibusdam tenetur nesciunt soluta aperiam?
            Accusantium recusandae impedit mollitia aperiam. Doloribus, ad
            pariatur? Illum eius quo quod, nesciunt quam fuga mollitia excepturi
            ex dolorum dolorem ullam voluptate aspernatur hic distinctio veniam
            facilis. Odit ab repellat voluptates fuga autem deleniti
            necessitatibus animi perferendis ducimus, eos explicabo eaque velit
            itaque cupiditate beatae ipsa repellendus. Repellat voluptatibus
            assumenda explicabo aut deserunt. Laudantium, saepe quibusdam
            tempore perferendis nisi voluptate eos autem rem cum voluptatum
            totam ipsum, corrupti magnam architecto! Voluptatibus consequuntur
            officiis tempora non perspiciatis amet neque aliquid enim aspernatur
            suscipit, labore repellendus ad nobis nostrum nesciunt molestiae
            excepturi, quaerat tempore? Mollitia reprehenderit maiores neque
            eligendi, aperiam dolorum facilis eos sint error quod sed. Corporis
            assumenda doloribus nobis quaerat!
          </span>
        </div>
      </div>
    </BlogLayout>
  );
};

export default SinglePage;
