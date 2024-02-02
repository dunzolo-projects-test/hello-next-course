//import { useRouter } from "next/router";

import { Gadget } from "@/models/gadget";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";

//use my-json-server
const API =
  "https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // use '?' after params because value is possible a NULL
  const id = context.params?.id;

  try {
    const { data } = await axios.get<Gadget>(`${API}/${id}`);
    return {
      props: { data },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

// export default function CatalogDetails() {
//   const router = useRouter();

//   return (
//     <>
//       <h1 className="title-pink">Catalog Details di {router.query.id}</h1>
//     </>
//   );
// }

interface CatalogDetailProps {
  data: Gadget;
}

export default function CatalogDetails({ data }: CatalogDetailProps) {
  return (
    <>
      <h1 className="title-pink">{data.title}</h1>

      <Image src={data.image} alt={data.title} width={300} height={300} />

      <Link href="/catalog" legacyBehavior>
        <a className="text-pink-500 mt-3">Back</a>
      </Link>
    </>
  );
}
