import getSingleProduct from "@/app/actions/getSingleProduct";
import ProductEdit from "@/app/dashboard/_components/Product/ProductEdit";

interface pageProps {
  params: { id: string };
}

const page = async ({ params }: pageProps) => {
  // console.log("id", params?.id);

  let product;
  if (params?.id) {
    product = await getSingleProduct(params?.id);
  }

  console.log("product", product);

  return <ProductEdit product={product?.data} />;
};

export default page;
