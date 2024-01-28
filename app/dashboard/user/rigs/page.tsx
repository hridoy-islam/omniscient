import getRigsUsingCookies from "@/app/actions/getRigsUsingCookies";
import { RigDetails } from "@/components/RigDetails";
import { UserRigBalance } from "@/components/UserRigBalance";

const Page = async () => {
  const rigs = await getRigsUsingCookies();
  // console.log("here is the rig", rigs);
  return (
    <>
      <UserRigBalance />
      <RigDetails rigs={rigs?.data?.result} />
    </>
  );
};

export default Page;
