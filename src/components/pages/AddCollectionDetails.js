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
      name: "NFT Contract Address*",
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
        <main className="main w-full flex flex-col justify-center items-center flex-grow ">
          <div className=" flex flex-col justify-self-center items-center">
            <div className="flex flex-col w-max flex-growmt-4 px-4">
              <h1 className="text-2xl font-bold my-2">Collection Details</h1>
              <div className="flex flex-row justify-between items-center ">
                <div className="w-7/12 mr-4 drop-shadow-xl rounded-lg py-8   pl-2 pr-10 bg-blueBg">
                  {collectionDetailsList.map((el) => {
                    return (
                      <div className="grid grid-cols-2 w-ma mb-4 justify-center items-center">
                        <label className="block text-sm font-bold mr-5 justify-self-end">
                          {el.name}
                        </label>
                        <Input type="text" />
                      </div>
                    );
                  })}
                </div>

                <div className="w-7/12 drop-shadow-xl rounded-lg py-8   px-10 bg-blueBg">
                  <div className="flex flex-row w-max">
                    <label className="block text-sm font-bold mr-5 justify-self-end">
                      Payment Schedule*
                    </label>
                    <div className="flex flex-row justify-center items-center w-max">
                      <input
                        id="payment-schedule-radio-1"
                        type="radio"
                        value=""
                        name="payment-schedule-radio"
                        className="   w-4 h-4 mx-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <input
                        id="payment-schedule-radio-2"
                        type="radio"
                        name="payment-schedule-radio"
                        className="   w-4 h-4 mx-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <input
                        checked
                        id="payment-schedule-radio-3"
                        type="radio"
                        value=""
                        name="payment-schedule-radio"
                        className="   w-4 h-4 mx-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row w-max">
                    <label className="block text-sm font-bold mr-5 justify-self-end">
                      1099s Preparation*
                    </label>
                    <input
                      id=" 1099s-preparation-radio-1"
                      type="radio"
                      value=""
                      name=" 1099s-preparation-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <input
                      id=" 1099s-preparation-radio-2"
                      type="radio"
                      value=""
                      name=" 1099s-preparation-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>

                  <div className="flex flex-row w-max">
                    <label className="block text-sm font-bold mr-5 justify-self-end">
                      Upload Documents
                    </label>
                    <Input />
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-bold my-2">
                Contributor(s) Information
              </h1>

              <div className="flex flex-col">
                <div className="w-full drop-shadow-xl rounded-lg py-8   px-10 bg-blueBg">
                  <div className="flex flex-row w-max">
                    <label className="block text-sm font-bold mr-5 justify-self-end">
                      Contributor Name/Alias*
                    </label>
                    <Input />
                  </div>

                  <div className="flex flex-row w-max">
                    <label className="block text-sm font-bold mr-5 justify-self-end">
                      Email Address
                    </label>
                    <Input />
                  </div>

                  <div className="flex flex-row w-max">
                    <label className="block text-sm font-bold mr-5 justify-self-end">
                      Phone Number
                    </label>
                    <Input />
                  </div>

                  <div className="flex flex-row w-max">
                    <label className="block text-sm font-bold mr-5 justify-self-end">
                      Wallet Address*
                    </label>
                    <Input />
                  </div>

                  <div className="flex flex-row w-max">
                    <label className="block text-sm font-bold mr-5 justify-self-end">
                      SSN<span>(required for 1099s)</span>
                    </label>
                    <Input />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer p-4  pt-5 items-end mt-20 -mb-24 bg-blue text-white font-semibold text-sm w-full">
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
