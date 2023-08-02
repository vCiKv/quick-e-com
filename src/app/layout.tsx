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
        <span className="fixed top-0 z-40 flex items-center m-1 text-center text-white cursor-pointer gap-x-2">
          <span className="bg-black rounded-full opacity-70 w-9 h-9">
            <Link
              href="/"
              className="flex items-center self-center justify-center pt-1"
            >
              <HomeIcon />
            </Link>
          </span>
        </span>
        {children}
        <div className="fixed bottom-0 right-0 text-sm ">
          <span className="block px-2 py-1 mx-1 my-2 bg-blue-600 rounded-full cursor-pointer" onClick={toggleTag}>{showTag?"hide":"show"} banner</span>
        </div>
        {showTag && (
          <>
            <div className="block bg-transparent h-28"></div>
            <div className="fixed bottom-0 left-0 w-full p-6 text-white h-28 bg-blue-600/60">
              <span
                className="px-2 py-1 text-sm bg-blue-600 rounded-full cursor-pointer opacity-90"
                onClick={toggleTag}
              >
                Hide
              </span>
              <p>Made By kevinalte@protonmail.com</p>
              <a href="https://github.com/vCiKv/quick-e-com" className="font-semibold underline cursor-pointer">github code</a>
            </div>
          </>
        )}
      </body>
    </html>
  );
}
