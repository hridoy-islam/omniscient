import getAllProducts from "@/app/actions/getAllProducts";
import ProductDisplay from "../../_components/Product/ProductDisplay";

const Page = async () => {
  const allProducts = await getAllProducts();
  // console.log("all products", allProducts?.data?.result);
  return <ProductDisplay allProducts={allProducts?.data?.result} />;
};

export default Page;
