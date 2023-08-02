import Link from "next/link";
export default function Home() {
  const navigationData = [
    { link: "/1", name: "products" },
    { link: "/advice-generator", name: "advice" },
    { link: "/notification-page", name: "notification" },
    { link: "/result-component", name: "result" },
    { link: "/finance", name: "landing page" },
    { link: "/robot", name: "landing page 2" },
    { link: "/clipboard-landing", name: "landing page 3" },
  ];
  return (
    <main>
      <h1 className="md:text-6xl text-3xl  text-center my-3 capitalize text-sky-600 font-bold">
        Navigation
      </h1>
      <div className="container mx-auto px-4">
        <div className="md:flex block justify-start items-center flex-wrap">
          {navigationData.map((element) => (
            <div
              key={"nav-" + element.link + "-" + element.name}
              className="md:w-1/2 w-full my-2"
            >
              <Link
                className="shadow-sm bg-sky-600 rounded-lg mr-2 block p-3 hover:bg-sky-800"
                href={element.link}
              >
                <div>
                  <h1 className="text-2xl text-white">{element.name}</h1>
                  <p className="text-sm text-white/50">{element.link}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
