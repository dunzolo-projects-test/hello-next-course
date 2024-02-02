import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import { Gadget } from "@/models/gadget";
import Image from "next/image";
import { InferGetServerSidePropsType } from "next";
import { notFound } from "next/navigation";

//use my-json-server
const API =
  "https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets";

export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get<Gadget[]>(API);
    return {
      props: { data },
    };
  } catch (err) {
    return {
      notFound: true,

      // permanent true or false
      // if true will use the 308 status code which instructs clients/search engines to cache the redirect forever
      // if false will use the 307 status code which is temporary and is not cached.

      // in this case, we redirect to home page if API is wrong or not exist
      // redirect: {
      //   destination: "/",
      //   permanent: true
      // },
    };
  }
};

// use interface to define type of props, then wrap type of params into function with CatalogIndexProps
// interface CatalogIndexProps {
//   data: Gadget[];
// }

export default function Index({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Catalog</title>
      </Head>

      <h1 className="title-pink">Catalog</h1>

      <div className="flex">
        {data.map((item) => {
          return (
            <Link key={item.id} href={`/catalog/${item.id}`} legacyBehavior>
              <a href="">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                />
              </a>
            </Link>
          );
        })}
      </div>

      <Link href="/catalog/123" legacyBehavior>
        <a className="text-pink-500 mt-3">Go to product</a>
      </Link>
    </>
  );
}
