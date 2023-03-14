import React, { Suspense } from "react";

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

const CollectionTable = React.lazy(() => import("../layout/CollectionTable"));

const Dashboard = () => {
  const firebase = useFirebase();
  const [flag, setFlag] = useState();
  const { uid } = useSelector((state) => state.firebase.auth);
  const [open, setOpen] = useState(false);
  const [contract_address, setContract_address] = useState("");

  const firestore = useFirestore();
  // const [count, setCount] = useState(0);
  const [collectionsLi, setCollectionsLi] = useState([]);

  const [collection, setCollection] = useState({
    // nftContractAddress: "",
    // royaltyPercentage: "",
    // authorizedWallet: "",
    // paymentSchedule: "monthly",
    // preparation: "yes",
    // nftImage: "",
    // artists: [],
  });
  const collections = useSelector(
    (state) => state.firestore.ordered.collections
  );
  // const users = useSelector((state) => state.firestore.ordered.users);
  useFirestoreConnect({
    collection: `allCollections/${uid}/collections`,
    storeAs: "collections",
  });
  // useFirestoreConnect({
  //   collection: `users/${uid}/collections`,
  //   storeAs: "users",
  // });
  const [selected, setSelected] = useState();
  const [calendarState, setCalendarState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const legend = {
    labels: [...dataDoughnut.datasets[0].labels],
    data: [...dataDoughnut.datasets[0].data],
    backgroundColor: [...dataDoughnut.datasets[0].backgroundColor],
  };
  const params = {
    chain_id: "ethereum",
    contract_address: "",
    sold_after: "2023-02-01T00:00:00Z",
    // order: "asc",
    limit: "10000",
  };
  const get = async (url, params) => {
    const response = await fetch(url + "?" + new URLSearchParams(params), {
      Method: "GET",
      headers: {
        "X-API-KEY": "FxKTp6MHpWQDaos8SRnSetdIZiUYLliS",
      },
    });
    const data = await response.json();

    return data;
  };
  const [range, setRange] = useState({
    startDate: new Date().setDate(1),
    endDate: new Date(),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setRange(newValue);
  };
  // // Call it with async:
  // (async () => {
  //   const data = await get(
  //     "https://api.transpose.io/nft/sales-by-contract-address",
  //     //   {
  //     //   postId: 1,
  //     // }
  //     params
  //   );

  //   console.log(data);
  // })();
  // Calling it with then:
  //   get(
  //     "https://api.transpose.io/nft/collections-by-contract-address",
  //     //   {
  //     //   postId: 1,
  //     // }
  //     params
  //   ).then((data) => {

  //     console.log(data.image_url)
  //   let img = data.image_url

  // const loadCollections = async () => {
  //   let some = [];
  //   let salesVolume = 0;
  //   let sales = 0;
  //   try {
  //     if (count < 4) {
  //       setCount(count + 1);
  //       setFlag(true);
  //       console.log("transpose successfull");

  //       await collections.map((element) => {
  //         params.contract_address = element.nftContractAddress;

  //         get(
  //           "https://api.transpose.io/nft/sales-by-contract-address",

  //           params
  //         ).then((data) => {
  //           salesVolume = 0;
  //           sales = 0;
  //           console.log("transpose successfull");
  //           data.results.map((e) => {
  //             console.log("transpose mapped successfull");

  //             salesVolume = salesVolume + e.eth_price;
  //             sales = sales + e.quantity;

  //             return { salesVolume, sales };
  //           });
  //           salesVolume = (Math.round(salesVolume * 100) / 100).toFixed(2);
  //           // sales = (Math.round(sales * 100) / 100).toFixed(2);
  //           setCollection({
  //             ...element,
  //             salesVolume,
  //             sales,
  //             createdAt: firestore.FieldValue.serverTimestamp(),
  //           });
  //           setCollectionsLi([...collectionsLi, collection]);

  //           firestore
  //             .collection("allCollections")
  //             .doc(uid)
  //             .collection("collections")
  //             .doc(element.docRef.id)
  //             .set({
  //               ...element,
  //               salesVolume,
  //               sales,
  //               createdAt: firestore.FieldValue.serverTimestamp(),
  //             });
  //         });
  //         return some;
  //       });
  //     } else {
  //       console.log("transpose updated sales");
  //     }
  //   } catch (error) {
  //     console.log("Error getting document:", error);
  //   }
  // };

  useEffect(() => {
    if (!collections) {
      return <Loading />;
    } else {
    }
    console.log("newValue:", range);

    setSelected(collections[0].nftContractAddress);
  }, []);

  console.log(flag);
  if (!collections) {
    return <Loading />;
  } else {
  }

  const handleOpen = (contract_address) => {
    setOpen(!open);
    setContract_address(contract_address);
  };
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
                    <Banner />
                  </div>

                  <div className="w-full mx-8 my-2 ">
                    <div className=" flex flex-row justify-start items-center mb-1">
                      <h1 className="mr-6 font-bold tracking-wide text-2xl">
                        Summary Statistics{" "}
                      </h1>
                      <div className="w-56 ml-4 px- py-2  rounded-full border flex flex-row justify-around items-center text-sm font-semibold">
                        <label classname="mr-2 text-xs ">March </label>
                        <div>.</div>
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
                        {/* <Datepicker
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
                        /> */}
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
