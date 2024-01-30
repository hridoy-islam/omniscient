import getRigsUsingCookies from "@/app/actions/getRigsUsingCookies";
import getSettings from "@/app/actions/getSettings";
import getUserUsingCookie from "@/app/actions/getUserUsingCookie";
import { RigDetails } from "@/components/RigDetails";
import { UserRigBalance } from "@/components/UserRigBalance";

const Page = async () => {
  const rigs = await getRigsUsingCookies();
  const currentUser = await getUserUsingCookie();
  const settings = await getSettings();

  return (
    <>
      <UserRigBalance
        rigs={rigs?.data?.result}
        currentUser={currentUser?.data}
        settings={settings?.data}
      />
      <RigDetails rigs={rigs?.data?.result} />
    </>
  );
};

export default Page;
