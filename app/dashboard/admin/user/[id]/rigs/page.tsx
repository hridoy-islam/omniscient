import getRigs from "@/app/actions/getRigs";
import RigsDisplay from "@/app/dashboard/_components/rigs/RigsDisplay";

interface pageProps {
  params: {
    id: string;
  };
}

const page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;

  const rigs = await getRigs(context?.params?.id, pageNumber);


  return <RigsDisplay response={rigs?.data} userid={context?.params?.id} />;
};

export default page;
