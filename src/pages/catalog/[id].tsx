import { useRouter } from "next/router";

export default function CatalogDetails() {
  const router = useRouter();

  return (
    <>
      <h1 className="title-pink">Catalog Details di {router.query.id}</h1>
    </>
  );
}
