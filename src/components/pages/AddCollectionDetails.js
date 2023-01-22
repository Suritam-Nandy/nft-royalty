import React from "react";
import Sidebar from "../layout/Sidebar";
import Submit from "../layout/Button";
import Input from "../layout/Input";

const AddCollectionDetails = () => {
  const collectionDetailsList = [
    {
      id: "collection-details",
      name: "Collection Name*",
    },
    {
      id: "nft-contract-address",
      name: "NFT Contract Address",
    },
    {
      id: "total-supply",
      name: "Total Supply",
    },
    {
      id: "royalty-percentage",
      name: "Royalty Percentage",
    },
    {
      id: "authorized-wallets",
      name: "Authorized Wallet(s)*",
    },
  ];
  return (
    <div>
      <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <main className="main flex flex-col justify-center items-center flex-grow -ml-64 md:ml-0">
          <div className="main-content flex flex-col justify-center -mt-10 items-center flex-grow">
            <div className="flex flex-col justify-center items-center  flex-grow bg-white">
              <div className="max-w-full flex items-center justify-center h-screen m-auto ">
                <div className="flex flex-row justify-center items-center">
                  <div className=" w-9/12 border-solid drop-shadow-xl rounded-lg pt-8 pb-4 px-8  bg-blueBg mx-8">
                    <div className="w-full flex flex-col justify-center items-center">
                      <div className="w-full justify-center items-center">
                        {collectionDetailsList.map((el) => {
                          return (
                            <div className="grid grid-cols-2 w-full mb-4 justify-center items-center ">
                              <label
                                className="block text-sm font-bold  justify-center items-center mr-6"
                                id={"el.id"}
                              >
                                {el.name}
                              </label>
                              <Input type="text" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="w-7/12 border-solid drop-shadow-xl rounded-lg py-8   px-2 bg-blueBg mx-8">
                    <div className="w-full flex flex-col content-center items-center place-items-evenly ">
                      {collectionDetailsList.map((el) => {
                        return <></>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer px-4 ">
            <div className="footer-content">
              <p className="text-sm text-gray-600 text-center">
                © Dashboard, All rights reserved
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default AddCollectionDetails;
