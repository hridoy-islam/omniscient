import getAllProducts from "@/app/actions/getAllProducts";
import ProductDisplay from "../../_components/Product/ProductDisplay";

const Page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;
  const allProducts = await getAllProducts(pageNumber);
  return <ProductDisplay response={allProducts?.data} />;
};

export default Page;
