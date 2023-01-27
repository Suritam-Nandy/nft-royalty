import React from "react";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import Submit from "../layout/Button";
import Input from "../layout/Input";

const AddCollectionDetails = () => {
  const contributorsInformationList = [
    {
      id: "collection-details",
      name: "Contributor Name/Alias*",
    },
    {
      id: "nft-contract-address",
      name: "Email Address",
    },
    {
      id: "total-supply",
      name: "Phone Number",
    },
    {
      id: "royalty-percentage",
      name: "Wallet Address*",
    },
    {
      id: "authorized-wallets",
      name: "SSN(required for 1099s)",
    },
  ];
  const moreContributorsInformationList = [
    {
      id: "authorized-wallets",
      name: "Collection-based  Royalty %*",
    },
    {
      id: "authorized-wallets",
      name: "Token-based Royalty %*",
    },
    {
      id: "authorized-wallets",
      name: "Token IDs(Leave blank ",
    },
    {
      id: "authorized-wallets",
      name: "Additional Flat Fee",
    },
  ];

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
        <div className="h-screen flex flex-col w-full">
          <main className="main w-full flex flex-col justify-center items-center flex-grow ">
            <div className=" flex flex-col justify-start items-center">
              <div className="flex flex-col  w-max flex-grow px-4">
                <h1 className="text-2xl font-bold mb-2">Collection Details</h1>
                <div className="flex flex-row justify-between items-center mb-2">
                  <div className="w-9/12 drop-shadow-xl rounded-lg pt-4 pb-1   px-10 bg-blueBg mr-32">
                    {collectionDetailsList.map((el) => {
                      return (
                        <div className="grid grid-cols-2 w-max mb-4 justify-center items-center">
                          <label className="block text-base font-bold mr-6 justify-self-end">
                            {el.name}
                          </label>
                          <Input type="text" />
                        </div>
                      );
                    })}
                  </div>

                  <div className="w-9/12 h-full flex flex-col justify-between items-start drop-shadow-xl rounded-lg py-4 px-12 bg-blueBg text-base">
                    <div className="flex flex-row w-max">
                      <label className="block font-bold mr-5 justify-self-end">
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
                      <label className="block font-bold mr-5 justify-self-end">
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
                      <label className="block font-bold mr-5 justify-self-end">
                        Upload Documents
                      </label>
                    </div>
                  </div>
                </div>
                <h1 className="text-2xl font-bold mb-2">
                  Contributor(s) Information
                </h1>

                <div className="flex flex-col mt-2">
                  <div className="w-full h-max drop-shadow-xl rounded-lg pb-1 pt-4   px-10 bg-blueBg">
                    <div className="flex flex-row w-full">
                      <div className="w-full flex flex-col  items-center justify-start ">
                        {contributorsInformationList.map((el) => {
                          return (
                            <div
                              id={el.id}
                              className="grid grid-cols-2 w-max mb-6 h-min"
                            >
                              <label className="block font-bold mr-5 justify-self-end">
                                {el.name}
                              </label>

                              <Input />
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-full flex flex-col  items-center justify-start ">
                        {moreContributorsInformationList.map((el) => {
                          return (
                            <div
                              id={el.id}
                              className="grid grid-cols-2 w-max mb-6 h-min"
                            >
                              <label className="block font-bold mr-5 justify-self-end">
                                {el.name}
                              </label>

                              <Input />
                            </div>
                          );
                        })}
                        <div
                          id="additional-notes"
                          className="grid grid-cols-2 w-max mb-6 h-min"
                        >
                          <label className="block font-bold mr-5 justify-self-end">
                            Additional Notes
                          </label>

                          <textarea
                            placeholder="Provide details"
                            name="description"
                            // value={user.description}
                            // onChange={onInputChange}
                            rows="3"
                            className=" w-48 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          ></textarea>
                        </div>
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
  );
};

export default AddCollectionDetails;
