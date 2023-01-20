import React from "react";

const Home = () => {
  const sidebarList = [
    { id: "home", name: "Home", icon: "home-icon.png" },
    { id: "royalties", name: "Royalties", icon: "royalties-icon.png" },
    {
      id: "collection-details",
      name: "Collection Details",
      icon: "Collection-Details.png",
    },
    {
      id: "payment-history",
      name: "Payment History",
      icon: "Payment-History.png",
    },
    { id: "feedback", name: "Feedback", icon: "Feedback.png" },
  ];
  return (
    <>
      <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-indigo-500 bg-grayBg">
          <div className="sidebar-header flex flex-col items-center justify-center py-4">
            <div className="">logo</div>

            <div>USER PROFILE</div>

            <div>ID : 14253658613</div>
          </div>
          <div className="sidebar-content px-4 py-6">
            <ul className="flex flex-col w-full">
              {sidebarList.map((el) => {
                return (
                  <>
                    <li className="my-px">
                      <a
                        href="#"
                        className={`${
                          el.id === "home"
                            ? "bg-grayLight font-bold"
                            : "text-blueGray-500"
                        }  flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 font-semibold bg-gray-100 hover:bg-grayLight`}
                      >
                        <span className="flex items-center justify-center text-lg text-gray-400">
                          <img alt="home" src={el.icon} />
                        </span>
                        <span
                          className={`${
                            el.id === "home" ? " font-bold" : ""
                          }  ml-3 text-blue  hover:font-bold`}
                        >
                          {el.name}
                        </span>
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </aside>

        <main className="main flex flex-col flex-grow -ml-64 md:ml-0">
          <div className="main-content flex flex-col flex-grow p-4">
            <div className="flex flex-col flex-grow bg-white mt-4">
              main content
            </div>
          </div>
          <footer className="footer px-4 py-6">
            <div className="footer-content">
              <p className="text-sm text-gray-600 text-center">
                © Dashboard, All rights reserved
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Home;
