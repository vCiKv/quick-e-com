// import UserType from "@/types/users";
// import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
// import {
//   GetServerSidePropsContext,
//   GetServerSidePropsResult,
//   NextApiHandler,
// } from "next";
// declare module "iron-session" {
//     interface IronSessionData {
//       user?:UserType
//     }
//   }
// export const ironOptions = {
//   cookieName: "dip_user",
//   password: process.env.IRON_PASSWORD ?? "",
//   cookieOptions: {
//     secure: process.env.NODE_ENV === "production",
//     maxAge: 60 * 60 * 2,
//   },
// };
// export default function secureRoute(handler: NextApiHandler) {
//   return withIronSessionApiRoute(handler, ironOptions);
// }
// export function secureRouteSsr<
//   P extends { [key: string]: unknown } = { [key: string]: unknown }
// >(
//   handler: (
//     context: GetServerSidePropsContext
//   ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
// ) {
//   return withIronSessionSsr(handler, ironOptions);
// }
export default function secureRoute() {
  return null
}
