import React from "react";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { Link } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import Button from "../layout/Button";
import Footer from "../layout/Footer";
import AreaChart, { data } from "../layout/AreaChart";
import DoughnutChart, { dataDoughnut } from "../layout/DoughnutChart";
import { useEffect, useState } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import Loading from "../layout/Loading.js";
const Dashboard = () => {
  const { uid } = useSelector((state) => state.firebase.auth);
  const firestore = useFirestore();

  const collections = useSelector(
    (state) => state.firestore.ordered.collections
  );
  useFirestoreConnect({
    collection: `allCollections/${uid}/collections`,
    storeAs: "collections",
  });

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
  let some = [];
  let salesVolume = 0;
  let sales = 0;

  const loadCollections = async () => {
    try {
      if (collections) {
        // setTimeout(() => {
        await collections.map((element) => {
          console.log(element);
          params.contract_address = element.nftContractAddress;

          get(
            "https://api.transpose.io/nft/sales-by-contract-address",

            params
          ).then((data) => {
            salesVolume = 0;
            sales = 0;

            console.log("data", data.results.length);
            data.results.map((e) => {
              salesVolume = salesVolume + e.eth_price;
              sales = sales + e.quantity;

              return { salesVolume, sales };
            });
            console.log((Math.round(salesVolume * 100) / 100).toFixed(2));
            salesVolume = (Math.round(salesVolume * 100) / 100).toFixed(2);
            // sales = (Math.round(sales * 100) / 100).toFixed(2);

            firestore
              .collection("allCollections")
              .doc(uid)
              .collection("collections")
              .doc(element.docRef.id)
              .set({
                ...element,
                salesVolume,
                sales,
                createdAt: firestore.FieldValue.serverTimestamp(),
              });
            console.log("sdrfgjknfsdkjghfsdjkgb");
          });
          return some;
        });
        // }, 2000);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };
  useEffect(() => {
    if (!collections) {
      return <Loading />;
    }
    loadCollections();
    // loadCollections(collections);
    // get(
    //   "https://api.transpose.io/nft/collections-by-contract-address",
    //   //   {
    //   //   postId: 1,
    //   // }
    //   params
    // ).then((data) => {
    //   console.log(data.results[0].image_url);
    //   img = data.results[0].image_url;

    //   // setColection({
    //   //   nftImage: img,
    //   // });
    //   setCollectionsL([
    //     {
    //       ...collectionsL,
    //       nftImage: img,
    //       collectionName: data.results[0].name,
    //     },
    //   ]);
    //   console.log(collectionsL[0]);
    // });
  }, [collections]);
  if (!collections) {
    return <Loading />;
  } else {
    console.log(collections);
  }

  const collectionList = [
    {
      icon: "",
      collectionName: "Pudgy Penguins",
      sales: "21 Sales",
      salesVolume: "51 Ξ",
      royaltyVolume: "4.3 Ξ",
      royaltyChange: "5.2%",
    },
    // {
    //   icon: "/OpenSea Logo.png",
    //   collectionName: "Pudgy Penguins",
    //   sales: "21 Sales",
    //   salesVolume: "51 Ξ",
    //   royaltyVolume: "4.3 Ξ",
    //   royaltyChange: "5.2%",
    // },
    // {
    //   icon: "/OpenSea Logo.png",
    //   collectionName: "Pudgy Penguins",
    //   sales: "21 Sales",
    //   salesVolume: "51 Ξ",
    //   royaltyVolume: "4.3 Ξ",
    //   royaltyChange: "5.2%",
    // },
    // {
    //   icon: "/OpenSea Logo.png",
    //   collectionName: "Pudgy Penguins",
    //   sales: "21 Sales",
    //   salesVolume: "51 Ξ",
    //   royaltyVolume: "4.3 Ξ",
    //   royaltyChange: "5.2%",
    // },
    // {
    //   icon: "/OpenSea Logo.png",
    //   collectionName: "Pudgy Penguins",
    //   sales: "21 Sales",
    //   salesVolume: "51 Ξ",
    //   royaltyVolume: "4.3 Ξ",
    //   royaltyChange: "5.2%",
    // },
    // {
    //   icon: "/OpenSea Logo.png",
    //   collectionName: "Pudgy Penguins",
    //   sales: "21 Sales",
    //   salesVolume: "51 Ξ",
    //   royaltyVolume: "4.3 Ξ",
    //   royaltyChange: "5.2%",
    // },
    // {
    //   icon: "/OpenSea Logo.png",
    //   collectionName: "Pudgy Penguins",
    //   sales: "21 Sales",
    //   salesVolume: "51 Ξ",
    //   royaltyVolume: "4.3 Ξ",
    //   royaltyChange: "5.2%",
    // },
    // {
    //   icon: "/OpenSea Logo.png",
    //   collectionName: "Pudgy Penguins",
    //   sales: "21 Sales",
    //   salesVolume: "51 Ξ",
    //   royaltyVolume: "4.3 Ξ",
    //   royaltyChange: "5.2%",
    // },
    // {
    //   icon: "/OpenSea Logo.png",
    //   collectionName: "Pudgy Penguins",
    //   sales: "21 Sales",
    //   salesVolume: "51 Ξ",
    //   royaltyVolume: "4.3 Ξ",
    //   royaltyChange: "5.2%",
    // },
    // {
    //   icon: "/OpenSea Logo.png",
    //   collectionName: "Pudgy Penguins",
    //   sales: "21 Sales",
    //   salesVolume: "51 Ξ",
    //   royaltyVolume: "4.3 Ξ",
    //   royaltyChange: "5.2%",
    // },
    // {
    //   icon: "/OpenSea Logo.png",
    //   collectionName: "Pudgy Penguins",
    //   sales: "21 Sales",
    //   salesVolume: "51 Ξ",
    //   royaltyVolume: "4.3 Ξ",
    //   royaltyChange: "5.2%",
    // },
    // {
    //   icon: "/OpenSea Logo.png",
    //   collectionName: "Pudgy Penguins",
    //   sales: "21 Sales",
    //   salesVolume: "51 Ξ",
    //   royaltyVolume: "4.3 Ξ",
    //   royaltyChange: "5.2%",
    // },
    // {
    //   icon: "/OpenSea Logo.png",
    //   collectionName: "Pudgy Penguins",
    //   sales: "21 Sales",
    //   salesVolume: "51 Ξ",
    //   royaltyVolume: "4.3 Ξ",
    //   royaltyChange: "5.2%",
    // },
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
                          {collections.map((el) => {
                            console.log("====================================");
                            console.log(el.nftImage);
                            console.log("====================================");
                            return (
                              <>
                                <div className="w-full mb-2 flex flex-row justify-center items-center  text-base font-bold tracking-wide ">
                                  <div className="w-2/6 flex flex-row justify-start items-center text-grayDark">
                                    <Link
                                      to={`${el.nftImage}`}
                                      target="__blank"
                                      rel="noopener noreferrer"
                                    >
                                      <img
                                        className="w-7 h-7 mr-4"
                                        alt="icon"
                                        src={`${el.nftImage}`}
                                      />
                                    </Link>
                                    {el.collectionName}
                                    {/* Pudgy Penguins */}
                                  </div>

                                  <div className="w-1/6 text-grayDark flex justify-center">
                                    {el.sales ? el.sales : "0"} Sales
                                  </div>
                                  <div className="w-1/6 text-grayDark flex justify-center">
                                    {el.salesVolume} Ξ
                                  </div>
                                  <div className="w-1/6 text-grayDark flex justify-center">
                                    4.3 Ξ
                                  </div>
                                  <div className="w-1/6 text-grayDark flex justify-center">
                                    5.2%
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
