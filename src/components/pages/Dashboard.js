import React from "react";
import Sidebar from "../layout/Sidebar";
import Button from "../layout/Button";
import Footer from "../layout/Footer";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
          <Sidebar />
          <div className="h-screen flex flex-col w-full ">
            <main className="main w-full flex flex-col justify-center items-center flex-grow ">
              <div className="w-full flex flex-col justify-start items-center">
                <div className="w-full flex flex-col flex-grow px-8 ">
                  <div className="w-full flex flex-col justfy-center items-start  ">
                    <h1 className="text-lg font-medium my-2">
                      Current Pay Period:
                    </h1>
                    <div className="w- w-96  bg-gray rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-blue  -ml-80 h-2.5 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                    <h1>Days Remaining: 26 days (December 31, 2022)</h1>
                  </div>
                  <div className="w-full bg-blueBg p-3  drop-shadow-xl rounded-lg">
                    <div className="w-full flex flex-row justify-around items-center">
                      <div className="w-max flex flex-col justify-center items-center text-grayText text-lg font-bold ">
                        <label>Current Balance</label>
                        <label className="flex flex-col text-3xl">
                          31.8 Ξ{" "}
                          <span className="text-sm font-light">
                            $38,160 USD
                          </span>
                        </label>
                      </div>
                      <div className="w-max flex flex-col justify-center items-center text-grayText text-lg font-bold ">
                        <label>Net Income</label>
                        <label className="flex flex-col text-3xl">
                          21.2 Ξ
                          <span className="text-sm font-light">
                            $25,440 USD
                          </span>
                        </label>
                      </div>
                      <div className="w-max flex flex-col justify-center items-center text-grayText text-lg font-bold ">
                        <label>Contributor Earnings</label>
                        <label className="flex flex-col text-3xl">
                          10.6 Ξ{" "}
                          <span className="text-sm font-light">
                            $12,720 USD
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>Summary Statistics Sales </div>
                      Transfers by Collection
                    </div>
                    <div>graph</div>
                  </div>
                  <div>
                    <h1>Top Collections</h1>
                    <div>
                      <div>list</div>
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

export default Dashboard;
