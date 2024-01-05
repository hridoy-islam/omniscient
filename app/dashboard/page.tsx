// import { NextPage } from "next";
// import { useSession } from "next-auth/react";

// const Dashboard: NextPage = (): JSX.Element => {
//   const { data: session, status } = useSession();
//   return (
//     <div>
//       ClientComponent {status}{" "}
//       {status === "authenticated" && session.user?.name}
//     </div>
//   );
// };

// export default Dashboard;

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return <h1>Hello, Dashboard Page!</h1>;
}
