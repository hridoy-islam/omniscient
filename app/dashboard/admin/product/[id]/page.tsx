import getSingleProduct from "@/app/actions/getSingleProduct";
import SingleProductView from "@/app/dashboard/_components/Product/SingleProductView";

interface pageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: pageProps) => {

  let product;
  if (params?.id) {
    product = await getSingleProduct(params?.id);
  }

  return <SingleProductView product={product?.data} />;
};

export default page;
