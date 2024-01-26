import getAllProducts from "@/app/actions/getAllProducts";
import ProductDisplay from "../../_components/Product/ProductDisplay";

const Page = async () => {
  const allProducts = await getAllProducts();
  return <ProductDisplay allProducts={allProducts?.data?.result} />;
};

export default Page;
