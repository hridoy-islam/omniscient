import getRigsUsingCookies from "@/app/actions/getRigsUsingCookies";
import getRigsWhole from "@/app/actions/getRigsWhole";
import getSettings from "@/app/actions/getSettings";
import getUserUsingCookie from "@/app/actions/getUserUsingCookie";
import { RigDetails } from "@/components/RigDetails";
import { UserRigBalance } from "@/components/UserRigBalance";

const Page = async (context: any) => {
  const pageNumber = Number(context?.searchParams?.page) || 1;

  const rigs = await getRigsUsingCookies(pageNumber);
  const currentUser = await getUserUsingCookie();
  const settings = await getSettings();
  const wholeRigs = await getRigsWhole();

  return (
    <>
      <UserRigBalance
        rigs={rigs?.data}
        currentUser={currentUser?.data}
        settings={settings?.data}
        wholeRigs={wholeRigs?.data}
      />
      <RigDetails response={rigs?.data} />
    </>
  );
};

export default Page;
