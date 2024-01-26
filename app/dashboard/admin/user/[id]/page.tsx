import getUser from "@/app/actions/getUser";
import UserProfile from "@/app/dashboard/_components/User/UserProfile";
import React from "react";

interface pageProps {
  params: { id: string };
}

const page = async ({ params }: pageProps) => {
  const currentUser = await getUser(params?.id);

  return (
    <div>
      <UserProfile user={currentUser?.data} />
    </div>
  );
};

export default page;
