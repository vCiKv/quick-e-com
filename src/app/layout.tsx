"use client";
import "./globals.css";
import Link from "next/link";
import useToggle from "@/hooks/useToggle";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const HomeIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    );
  };
  const [showTag, toggleTag] = useToggle(true);
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh" }}>
        <span className="z-40 fixed flex items-center gap-x-2 top-0 text-white text-center m-1 cursor-pointer">
          <span className="bg-black opacity-70 rounded-full w-9 h-9">
            <Link
              href="/"
              className="flex justify-center self-center items-center pt-1"
            >
              <HomeIcon />
            </Link>
          </span>
        </span>
        {children}
        <div className="fixed bottom-0 right-0 text-sm ">
          <span className="py-1 px-2 mx-1 my-2 rounded-full bg-blue-600 block cursor-pointer" onClick={toggleTag}>{showTag?"hide":"show"} banner</span>
        </div>
        {showTag && (
          <>
            <div className="block h-28 bg-transparent"></div>
            <div className="w-full h-28 fixed bottom-0 left-0 p-6 bg-blue-600/60 text-white">
              <span
                className="text-sm opacity-90 cursor-pointer rounded-full bg-blue-600 py-1 px-2"
                onClick={toggleTag}
              >
                Hide
              </span>
              <p>Made By kevinalte@protonmail.com</p>
            </div>
          </>
        )}
      </body>
    </html>
  );
}
