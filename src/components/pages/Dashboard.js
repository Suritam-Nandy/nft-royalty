import React, { Suspense } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import { useFirestore, useFirebase } from "react-redux-firebase";
import { Link, Redirect } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import Button from "../layout/Button";
import Footer from "../layout/Footer";
import Banner from "../layout/Banner";
import AreaChart, { data } from "../layout/AreaChart";
import DoughnutChart, { dataDoughnut } from "../layout/DoughnutChart";
import { useEffect, useState } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import Loading from "../layout/Loading.js";
import Datepicker from "react-tailwindcss-datepicker";
const CollectionTable = React.lazy(() => import("../layout/CollectionTable"));

const Dashboard = () => {
  const [count, setCount] = useState(0);
  const [ethPrice, setEthPrice] = useState();
  const { uid } = useSelector((state) => state.firebase.auth);
  const [open, setOpen] = useState(false);

  const collections = useSelector(
    (state) => state.firestore.ordered.collections
  );
  useFirestoreConnect({
    collection: `allCollections/${uid}/collections`,
    storeAs: "collections",
  });

  const [selected, setSelected] = useState(collections[0].nftContractAddress);

  const legend = {
    labels: [...dataDoughnut.datasets[0].labels],
    data: [...dataDoughnut.datasets[0].data],
    backgroundColor: [...dataDoughnut.datasets[0].backgroundColor],
  };
  const params = {
    module: "stats",
    action: "ethprice",
    apikey: "E8CEZXZKHVZE3PK8UDRQYG9EVBF86Y9PWJ",
  };
  const get = async (url, params) => {
    const response = await fetch(url + "?" + new URLSearchParams(params), {
      Method: "GET",
    });
    const data = await response.json();

    return data;
  };
  const [range, setRange] = useState({
    startDate: "",
    endDate: "",
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setRange(newValue);
  };

  const loadEthPrice = async () => {
    try {
      if (count < 3) {
        setCount(count + 1);
        console.log("transpose ");

        get("https://api.etherscan.io/api", params).then((data) => {
          setEthPrice(data.result.ethusd);
        });
      } else {
        console.log("transpose updated EthPrice");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };
  useEffect(() => {
    if (!collections) {
      return <Loading />;
    } else {
    }
    console.log("newValue:", range);

    loadEthPrice();
    console.log("e", ethPrice);
  }, [range, collections]);

  if (!collections) {
    return <Loading />;
  } else {
  }

  console.log();
  return (
    <>
      <div>
        <div className="flex flex-row min-h-screen bg-ash-100 text-ash-800">
          <Sidebar />
          <div className="h-screen flex flex-col w-full ">
            <main className="main w-full flex flex-col justify-center items-center flex-grow scrollbar-thin scrollbar-thumb-ashDark scrollbar-track-ashDarkText overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
              <div className="w-full flex flex-col justify-start items-center ">
                <div className="w-full flex flex-col flex-grow px-8 ">
                  <div className="w-full flex flex-col font-s justfy-center items-start mb-2.5 mt-">
                    <h1 className="tracking-wide font-medium py-1">
                      Current Pay Period:
                    </h1>
                    <div className="w-full bg-ashLight rounded-full h-4 dark:bg-ashLight">
                      <div
                        className="bg-ashDarkText   h-4 rounded-full"
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

                  <div className="w-full bg-skyBg p-2 py-1  drop-shadow-xl rounded-lg ">
                    <Banner ethPrice={ethPrice} />
                  </div>

                  <div className="w-full mx-8 my-2 ">
                    <div className=" flex flex-row justify-start items-center mb-1">
                      <h1 className="mr-6 font-bold tracking-wide text-2xl">
                        Summary Statistics{" "}
                      </h1>
                      <div className="w-56 ml-4 px- py-2  rounded-full border flex flex-row justify-around items-center text-sm font-semibold">
                        {/* <label classname="mr-2 text-xs ">March </label>
                        <div>.</div> */}
                        {/* <div className="flex flex-col md:grid mx-10  md:grid-cols-2  m-1 w-full"> */}
                        {/* <DateRange
                      editableDateInputs={true}
                      onChange={(item) =>
                        setCalendarState([item.selection])
                      }
                      minDate={new Date()}
                      moveRangeOnFirstSelection={false}
                      ranges={calendarState}
                      disabledDates={restrictedDates}
                      /> */}
                        <Datepicker
                          // className="w-40 ml-4 px-1 py-1 rounded-full border flex flex-row justify-around items-center text-sm font-semibold"
                          // primaryColor={"sky"}
                          primaryColor={"cyan"}
                          className=""
                          inputClassName=" text-sm font-semibold tracking-tighter px-0 py-0 dark:bg-white dark:text-black  focus:outline-none focus:ring-0"
                          containerClassName=" h-min -my-1 "
                          value={range}
                          onChange={handleValueChange}
                          showShortcuts={true}
                          placeholder={"Range"}
                        />
                      </div>

                      {collections && (
                        <form>
                          <select
                            value={selected}
                            onChange={(e) => setSelected(e.target.value)}
                            className="w-56  ml-4 px-2 py-1  rounded-full border flex flex-row justify-around items-center text-sm font-semibold"
                          >
                            {collections.map((el) => (
                              <option
                                value={el.nftContractAddress}
                                key={el.collectionName}
                              >
                                {el.collectionName}
                              </option>
                            ))}
                          </select>
                        </form>
                      )}
                    </div>

                    <div className="w-full flex flex-row  justify-start items-around ">
                      <div className="w-2/3 flex flex-col justify-between items-start mr-10 ">
                        <h1 className="text-base font-bold tracking-wide mb-2.5 mt-1.5">
                          {" "}
                          Sales Transfers by Collection
                        </h1>
                        <div className="h-52 w-full">
                          <Suspense fallback={<Loading />}>
                            <AreaChart
                              nftContract_address={selected}
                              range={range}
                            />
                          </Suspense>
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
                      <div className="w-auto flex flex-row bg-skyBg p-3 px-4 mr-8 drop-shadow-xl rounded-lg  ">
                        <div className="flex flex-col w-full h-24 scrollbar-thin scrollbar-thumb-ashDark scrollbar-track-ashDarkText overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                          <Suspense fallback={<Loading />}>
                            <CollectionTable />
                          </Suspense>
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
