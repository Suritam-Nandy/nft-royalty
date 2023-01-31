import React from "react";
import Sidebar from "../layout/Sidebar";
import Button from "../layout/Button";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <>
      <div>
        <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
          <Sidebar  />
          <div className="h-screen flex flex-col w-full">
            <main className="main w-full flex flex-col justify-center items-center flex-grow ">
              <div className="main-content flex flex-col justify-center items-center flex-grow">
                <div className="w-max flex flex-col justify-center items-center  flex-grow bg-white">
                  <div className="w-full flex items-center justify-center m-auto ">
                    <div className="drop-shadow-xl rounded-lg py-8   px-10 bg-blueBg">
                      <div className=" flex flex-col content-center items-center place-items-evenly ">
                        <div className="">
                          <span className="text-lg font-semibold">
                            There is not currently an NFT collection loaded on
                            the platform. Get started by adding a collection
                            now!
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
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
