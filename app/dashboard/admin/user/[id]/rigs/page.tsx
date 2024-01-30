import getRigs from "@/app/actions/getRigs";
import RigsDisplay from "@/app/dashboard/_components/rigs/RigsDisplay";

interface pageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: pageProps) => {
  const rigs = await getRigs(params?.id);
  
  return <RigsDisplay rigs={rigs?.data?.result} userid={params?.id} />;
};

export default page;
