import React from "react";
import UserProfile from "../../_components/User/UserProfile";
import getUserUsingCookie from "@/app/actions/getUserUsingCookie";

const page = async () => {
  const currentUser = await getUserUsingCookie();
  console.log("user", currentUser);
  return (
    <div>
      <UserProfile user={currentUser?.data} />
    </div>
  );
};

export default page;
