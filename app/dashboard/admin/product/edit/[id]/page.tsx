import getSingleProduct from "@/app/actions/getSingleProduct";
import ProductEdit from "@/app/dashboard/_components/Product/ProductEdit";

interface pageProps {
  params: { id: string };
}

const page = async ({ params }: pageProps) => {

  let product;
  if (params?.id) {
    product = await getSingleProduct(params?.id);
  }


  return <ProductEdit product={product?.data} />;
};

export default page;
