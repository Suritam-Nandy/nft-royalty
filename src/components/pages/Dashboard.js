import React from "react";
import Sidebar from "../layout/Sidebar";
import Button from "../layout/Button";
import Footer from "../layout/Footer";
import AreaChart, { data } from "../layout/AreaChart";
import DoughnutChart, { dataDoughnut } from "../layout/DoughnutChart";

const Dashboard = () => {
  const legend = {
    labels: [...dataDoughnut.datasets[0].labels],
    data: [...dataDoughnut.datasets[0].data],
    backgroundColor: [...dataDoughnut.datasets[0].backgroundColor],
  };

  const collectionList = [
    {
      icon: "/OpenSea Logo.png",
      collectionName: "Pudgy Penguins",
      sales: "21 Sales",
      salesVolume: "51 Ξ",
      royaltyVolume: "4.3 Ξ",
      royaltyChange: "5.2%",
    },
    {
      icon: "/OpenSea Logo.png",
      collectionName: "Pudgy Penguins",
      sales: "21 Sales",
      salesVolume: "51 Ξ",
      royaltyVolume: "4.3 Ξ",
      royaltyChange: "5.2%",
    },
    {
      icon: "/OpenSea Logo.png",
      collectionName: "Pudgy Penguins",
      sales: "21 Sales",
      salesVolume: "51 Ξ",
      royaltyVolume: "4.3 Ξ",
      royaltyChange: "5.2%",
    },
    {
      icon: "/OpenSea Logo.png",
      collectionName: "Pudgy Penguins",
      sales: "21 Sales",
      salesVolume: "51 Ξ",
      royaltyVolume: "4.3 Ξ",
      royaltyChange: "5.2%",
    },
    {
      icon: "/OpenSea Logo.png",
      collectionName: "Pudgy Penguins",
      sales: "21 Sales",
      salesVolume: "51 Ξ",
      royaltyVolume: "4.3 Ξ",
      royaltyChange: "5.2%",
    },
    {
      icon: "/OpenSea Logo.png",
      collectionName: "Pudgy Penguins",
      sales: "21 Sales",
      salesVolume: "51 Ξ",
      royaltyVolume: "4.3 Ξ",
      royaltyChange: "5.2%",
    },
    {
      icon: "/OpenSea Logo.png",
      collectionName: "Pudgy Penguins",
      sales: "21 Sales",
      salesVolume: "51 Ξ",
      royaltyVolume: "4.3 Ξ",
      royaltyChange: "5.2%",
    },
    {
      icon: "/OpenSea Logo.png",
      collectionName: "Pudgy Penguins",
      sales: "21 Sales",
      salesVolume: "51 Ξ",
      royaltyVolume: "4.3 Ξ",
      royaltyChange: "5.2%",
    },
    {
      icon: "/OpenSea Logo.png",
      collectionName: "Pudgy Penguins",
      sales: "21 Sales",
      salesVolume: "51 Ξ",
      royaltyVolume: "4.3 Ξ",
      royaltyChange: "5.2%",
    },
    {
      icon: "/OpenSea Logo.png",
      collectionName: "Pudgy Penguins",
      sales: "21 Sales",
      salesVolume: "51 Ξ",
      royaltyVolume: "4.3 Ξ",
      royaltyChange: "5.2%",
    },
    {
      icon: "/OpenSea Logo.png",
      collectionName: "Pudgy Penguins",
      sales: "21 Sales",
      salesVolume: "51 Ξ",
      royaltyVolume: "4.3 Ξ",
      royaltyChange: "5.2%",
    },
    {
      icon: "/OpenSea Logo.png",
      collectionName: "Pudgy Penguins",
      sales: "21 Sales",
      salesVolume: "51 Ξ",
      royaltyVolume: "4.3 Ξ",
      royaltyChange: "5.2%",
    },
    {
      icon: "/OpenSea Logo.png",
      collectionName: "Pudgy Penguins",
      sales: "21 Sales",
      salesVolume: "51 Ξ",
      royaltyVolume: "4.3 Ξ",
      royaltyChange: "5.2%",
    },
  ];
  return (
    <>
      <div>
        <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
          <Sidebar />
          <div className="h-screen flex flex-col w-full ">
            <main className="main w-full flex flex-col justify-center items-center flex-grow scrollbar-thin scrollbar-thumb-grayDark scrollbar-track-grayDarkText overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
              <div className="w-full flex flex-col justify-start items-center ">
                <div className="w-full flex flex-col flex-grow px-8 ">
                  <div className="w-full flex flex-col font-s justfy-center items-start mb-2.5 mt-">
                    <h1 className="tracking-wide font-medium py-1">
                      Current Pay Period:
                    </h1>
                    <div className="w-full bg-grayLight rounded-full h-4 dark:bg-grayLight">
                      <div
                        className="bg-grayDarkText   h-4 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                    <h1 className="tracking-wide font-medium ">
                      Days Remaining: 26 days (December 31, 2022)
                    </h1>
                    <div className="w-full flex flex-row items-start justify-end -mt-4">
                      <Button name={"Distribute Royalties"} />
                    </div>
                  </div>

                  <div className="w-full bg-blueBg p-2 py-1  drop-shadow-xl rounded-lg ">
                    <div className="w-full flex flex-row justify-around items-center text-grayDark">
                      <div className="w-max flex flex-col justify-center items-center text-grayText font-bold ">
                        <label>Current Balance</label>
                        <label className="flex flex-col justify-center items-center text-2xl -mt-1">
                          31.8 Ξ{" "}
                          <span className="text-sm font-normal text-grayDarkText tracking-wide -mt-1">
                            $38,160 USD
                          </span>
                        </label>
                      </div>
                      <div className="w-max flex flex-col justify-center items-center text-grayText  font-bold ">
                        <label>Net Income</label>
                        <label className="flex flex-col justify-center items-center text-2xl -mt-1">
                          21.2 Ξ
                          <span className="text-sm font-normal text-grayDarkText tracking-wide -mt-1">
                            $25,440 USD
                          </span>
                        </label>
                      </div>
                      <div className="w-max flex flex-col justify-center items-center text-grayText  font-bold ">
                        <label>Contributor Earnings</label>
                        <label className="flex flex-col justify-center items-center text-2xl -mt-1">
                          10.6 Ξ{" "}
                          <span className="text-sm font-normal text-grayDarkText tracking-wide -mt-1">
                            $12,720 USD
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mx-8 my-2">
                    <div className=" flex flex-row justify-start items-center mb-1">
                      <h1 className="mr-10 font-bold tracking-wide text-2xl">
                        Summary Statistics{" "}
                      </h1>
                      <div>Monthly...</div>
                      <div>Collection...</div>
                    </div>

                    <div className="w-full flex flex-row  justify-start items-around ">
                      <div className="w-2/3 flex flex-col justify-evenly items-start mr-10 ">
                        <h1 className="text-base font-bold tracking-wide mb-2.5">
                          {" "}
                          Sales Transfers by Collection
                        </h1>
                        <div className="h-full w-full">
                          <AreaChart />
                        </div>
                      </div>
                      <div className="w-1/3">
                        <h1 className="text-base font-bold tracking-wide ">
                          Royalty Share
                        </h1>
                        <div className="flex flex-row h-28 w-full mb-0.5">
                          <div className=" -mt-4 w-24">
                            <DoughnutChart />
                          </div>
                          <div className="w-max flex flex-col flex-wrap justify-start items-start">
                            {legend.labels.map((el, index) => {
                              return (
                                <div className="my-1 mx-3 flex flex-row ">
                                  <div
                                    className={``}
                                    style={{
                                      backgroundColor: `${legend.backgroundColor[index]}`,
                                    }}
                                  >
                                    <h1 className="text-sm">{el}</h1>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="-mt-4 w-24">
                          <DoughnutChart />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col mx-8 my-4">
                    <div className="w-auto mr-8 flex flex-row justify-center items-center mb-2 px-4 text-base font-bold tracking-wide">
                      <div className="w-2/6">
                        <h1 className="">Top Collections</h1>
                      </div>
                      <div className="w-1/6 flex justify-center">
                        <h1 className="">Sales</h1>
                      </div>
                      <div className="w-1/6 flex justify-center">
                        <h1 className="">Sales Volume</h1>
                      </div>
                      <div className="w-1/6 flex justify-center">
                        <h1 className="">Royalty Volume</h1>
                      </div>
                      <div className="w-1/6 flex justify-center">
                        <h1 className="">Royalty % Change</h1>
                      </div>
                    </div>
                    <div>
                      <div className="w-auto flex flex-row bg-blueBg p-3 px-4 mr-8 drop-shadow-xl rounded-lg  ">
                        <div className="flex flex-col w-full h-24 scrollbar-thin scrollbar-thumb-grayDark scrollbar-track-grayDarkText overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                          {collectionList.map((el) => {
                            return (
                              <>
                                <div className="w-full mb-2 flex flex-row justify-center items-center  text-base font-bold tracking-wide ">
                                  <div className="w-2/6 flex flex-row justify-start items-center text-grayDark">
                                    <img
                                      className="w-7 h-7 mr-4"
                                      alt="icon"
                                      src={`${el.icon}`}
                                    />
                                    {el.collectionName}
                                  </div>

                                  <div className="w-1/6 text-grayDark flex justify-center">
                                    {el.sales}
                                  </div>
                                  <div className="w-1/6 text-grayDark flex justify-center">
                                    {el.salesVolume}
                                  </div>
                                  <div className="w-1/6 text-grayDark flex justify-center">
                                    {el.royaltyVolume}
                                  </div>
                                  <div className="w-1/6 text-grayDark flex justify-center">
                                    {el.royaltyChange}
                                  </div>
                                </div>
                              </>
                            );
                          })}
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
