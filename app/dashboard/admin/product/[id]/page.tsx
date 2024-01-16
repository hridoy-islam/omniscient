import getSingleProduct from "@/app/actions/getSingleProduct";
import SingleProductView from "@/app/dashboard/_components/Product/SingleProductView";

interface pageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: pageProps) => {
  // console.log("params", params?.id);

  let product;
  if (params?.id) {
    product = await getSingleProduct(params?.id);
  }

  // console.log(product);

  return <SingleProductView product={product?.data} />;
};

export default page;
