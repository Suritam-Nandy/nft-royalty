import React from "react";
import Sidebar from "../layout/Sidebar";
import Button from "../layout/Button";
import Footer from "../layout/Footer";
import AreaChart from "../layout/AreaChart";
import DoughnutChart from "../layout/DoughnutChart";

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

                  <div className="w-full bg-blueBg p-3  drop-shadow-xl rounded-lg ">
                    <div className="w-full flex flex-row justify-around items-center text-grayDark">
                      <div className="w-max flex flex-col justify-center items-center text-grayText text-lg font-bold ">
                        <label>Current Balance</label>
                        <label className="flex flex-col text-3xl">
                          31.8 Ξ{" "}
                          <span className="text-sm font-light text-grayDarkText tracking-wider">
                            $38,160 USD
                          </span>
                        </label>
                      </div>
                      <div className="w-max flex flex-col justify-center items-center text-grayText text-lg font-bold ">
                        <label>Net Income</label>
                        <label className="flex flex-col text-3xl">
                          21.2 Ξ
                          <span className="text-sm font-light text-grayDarkText tracking-wider">
                            $25,440 USD
                          </span>
                        </label>
                      </div>
                      <div className="w-max flex flex-col justify-center items-center text-grayText text-lg font-bold ">
                        <label>Contributor Earnings</label>
                        <label className="flex flex-col text-3xl">
                          10.6 Ξ{" "}
                          <span className="text-sm font-light text-grayDarkText tracking-wider">
                            $12,720 USD
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mx-8 my-4">
                    <div className=" flex flex-row justify-start items-center">
                      <h1 className="mr-10 font-semibold text-2xl">
                        Summary Statistics{" "}
                      </h1>
                      <div>Monthly...</div>
                      <div>Collection...</div>
                    </div>

                    <div className="w-full flex flex-row  justify-start items-center">
                      <div className="w-2/3 flex flex-col mr-10">
                        <h1 className="text-lg font-semibold">
                          {" "}
                          Sales Transfers by Collection
                        </h1>
                        <div className="h-60">
                          <AreaChart />
                        </div>
                      </div>
                      <div className="w-1/3">
                        <h1 className="text-lg font-semibold -mb-3">
                          Royalty Share
                        </h1>
                        <div className="h-32 w-56 mb-2.5">
                          <DoughnutChart />
                        </div>
                        <div className="h-32 w-56">
                          <DoughnutChart />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col mx-8 my-4">
                    <div className="w-full flex flex-row px-4 text-lg font-semibold">
                      <h1>Top Collections</h1>
                      <h1>Sales</h1>
                      <h1>Sales Volume</h1>
                      <h1>Royalty Volume</h1>
                      <h1>Royalty % Change</h1>
                    </div>
                    <div>
                      <div className="w-auto flex flex-row bg-blueBg p-3 px-4 mr-8 drop-shadow-xl rounded-lg  ">
                        <div className="flex flex-col w-full h-24 scrollbar-thin scrollbar-thumb-grayDark scrollbar-track-grayDarkText overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                          <h1 className="w-full text-lg font-semibold text-grayDark">
                            Pudgy Penguins
                          </h1>
                          <h1 className="w-full text-lg font-semibold text-grayDark">
                            Pudgy Penguins
                          </h1>
                          <h1 className="w-full text-lg font-semibold text-grayDark">
                            Pudgy Penguins
                          </h1>
                          <h1 className="w-full text-lg font-semibold text-grayDark">
                            Pudgy Penguins
                          </h1>
                          <h1 className="w-full text-lg font-semibold text-grayDark">
                            Pudgy Penguins
                          </h1>
                          <h1 className="w-full text-lg font-semibold text-grayDark">
                            Pudgy Penguins
                          </h1>
                          <h1 className="w-full text-lg font-semibold text-grayDark">
                            Pudgy Penguins
                          </h1>
                          <h1 className="w-full text-lg font-semibold text-grayDark">
                            Pudgy Penguins
                          </h1>
                          <h1 className="w-full text-lg font-semibold text-grayDark">
                            Pudgy Penguins
                          </h1>
                          <h1 className="w-full text-lg font-semibold text-grayDark">
                            Pudgy Penguins
                          </h1>
                          <h1 className="w-full text-lg font-semibold text-grayDark">
                            Pudgy Penguins
                          </h1>
                          <h1 className="w-full text-lg font-semibold text-grayDark">
                            Pudgy Penguins
                          </h1>
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

export default Dashboard;
