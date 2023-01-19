import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-indigo-500">
          <div className="sidebar-header flex flex-col items-center justify-center py-4">
            <div className="">logo</div>

            <div>USER PROFILE</div>

            <div>ID : 14253658613</div>
          </div>
          <div className="sidebar-content px-4 py-6">
            <ul className="flex flex-col w-full">
              <li className="my-px">
                <a
                  href="#"
                  className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                >
                  <span className="flex items-center justify-center text-lg text-gray-400">
                    <img alt="home" src="home-icon.png" />
                  </span>
                  <span className="ml-3">Home</span>
                </a>
              </li>
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
