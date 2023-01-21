import React from "react";
import Sidebar from "../layout/Sidebar";
import Button from "../layout/Button";

const Home = () => {
  return (
    <>
      <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <main className="main flex flex-col justify-center items-center flex-grow -ml-64 md:ml-0">
          <div className="main-content flex flex-col justify-center -mt-10 items-center flex-grow">
            <div className="flex flex-col justify-center items-center  flex-grow bg-white">
              <div className="max-w-full flex items-center justify-center h-screen m-auto ">
                <div className="border-solid drop-shadow-xl rounded-lg py-8   px-10 bg-blueBg">
                  <div className=" flex flex-col content-center items-center place-items-evenly ">
                    <div className="">
                      <span className="text-lg font-semibold">
                        There is not currently an NFT collection loaded on the
                        platform. Get started by adding a collection now!
                      </span>
                    </div>
                    <div className="mt-10">
                      <Button name={"Add NFT Collection "} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer px-4 mb-4">
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
