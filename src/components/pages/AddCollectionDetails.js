import React, { useState, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import Button from "../layout/Button";
import Input from "../layout/Input";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFirestore, useFirebase } from "react-redux-firebase";

const AddCollectionDetails = () => {
  const firestore = useFirestore();
  let history = useHistory();
  const uid = useSelector((state) => state.firebase.auth.uid);
  const [count, setCount] = useState(1);

  const [contributors, setContributors] = useState([]);
  const [collection, setColection] = useState({
    // nftContractAddress: "",
    // royaltyPercentage: "",
    // authorizedWallet: "",
    // paymentSchedule: "monthly",
    // preparation: "yes",
    // nftImage: {},
    // artists: [],
  });
  const [contributorsInformation, setContributorsInformation] = useState({
    // contributorNameAlias: "",
    // emailAddress: "",
    // phoneNumber: "",
    // walletAddress: "",
    // SSN: "",
    // collectionBasedRoyalty: "",
    // tokenBasedRoyalty: "",
    // tokenIDs: "",
    // additionalFlatFee: "",
    // additionalNotes: "",
  });

  const onInputChange = (e) => {
    setColection({ ...collection, [e.target.name]: e.target.value });
  };
  const onContributorsDetailsChange = (e) => {
    setContributorsInformation({
      ...contributorsInformation,
      [e.target.name]: e.target.value,
    });

    setColection({
      ...collection,
      artists: [...contributors, contributorsInformation],
    });
  };
  const addContributor = async (e) => {
    console.log("collection artist ", collection.artists);
    console.log("collection  ", collection);

    if (count === 2) {
      alert("Maximum Contributors added");
      return;
    }
    e.preventDefault();
    setContributorsInformation({
      contributorNameAlias: "",
      emailAddress: "",
      phoneNumber: "",
      walletAddress: "",
      SSN: "",
      collectionBasedRoyalty: "",
      tokenBasedRoyalty: "",
      tokenIDs: "",
      additionalFlatFee: "",
      additionalNotes: "",
    });
    setContributors([...contributors, contributorsInformation]);

    setCount(2);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(collection);

    await firestore
      .collection("users")
      .doc(uid)
      .collection("collections")

      .add({
        ...collection,
        userUid: uid,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        firestore
          .collection("allCollections")
          .doc(uid)
          .collection("collections")
          .doc(docRef.id)
          .set({
            ...collection,
            userUid: uid,
            docRef: docRef,

            createdAt: firestore.FieldValue.serverTimestamp(),
          });
      });
    history.push("/");
  };

  const contributorsInformationList = [
    {
      id: "contributorNameAlias",
      name: "Contributor Name/Alias*",
    },
    {
      id: "emailAddress",
      name: "Email Address",
    },
    {
      id: "phoneNumber",
      name: "Phone Number",
    },
    {
      id: "walletAddress",
      name: "Wallet Address*",
    },
    {
      id: "SSN",
      name: "SSN(required for 1099s)",
    },
  ];
  const moreContributorsInformationList = [
    {
      id: "collectionBasedRoyalty",
      name: "Collection-based Royalty %*",
    },
    {
      id: "tokenBasedRoyalty",
      name: "Token-based Royalty %*",
    },
    {
      id: "tokenIDs",
      name: "Token IDs(Leave blank ",
    },
    {
      id: "additionalFlatFee",
      name: "Additional Flat Fee",
    },
  ];

  const collectionDetailsList = [
    {
      id: "nftContractAddress",
      name: "NFT Contract Address*",
    },

    {
      id: "royaltyPercentage",
      name: "Royalty Percentage",
    },
    {
      id: "authorizedWallet",
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
                <h1 className="text-3xl font-semibold my-2">
                  Collection Details
                </h1>
                <div className="flex flex-row justify-between items-center mb-2">
                  <div className="w-9/12 drop-shadow-xl rounded-lg pt-3 pb-0   px-10 bg-blueBg mr-32">
                    {collectionDetailsList.map((el) => {
                      const key = el.id;

                      return (
                        <div
                          key={key}
                          className="grid grid-cols-2 w-max mb-4 justify-center items-center"
                        >
                          <label className="block text-base font-bold mr-6 justify-self-end">
                            {el.name}
                          </label>
                          <Input
                            type="text"
                            name={el.id}
                            value={collection[key]}
                            onChange={onInputChange}
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className="w-9/12 h-full flex flex-col justify-between items-start drop-shadow-xl rounded-lg py-3 px-12 bg-blueBg text-base">
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
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <input
                        id=" 1099s-preparation-radio-2"
                        type="radio"
                        value=""
                        name=" 1099s-preparation-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>

                    <div className="flex flex-row w-max">
                      <label className="block font-bold mr-5 justify-self-end">
                        Upload Documents
                      </label>
                      <div className="w-48 border-2 border-dashed utline-dashed rounded-2xl flex flex-col justify-center items-center">
                        <div>icon</div>
                        <div>Drag & Drop</div>
                        <label>or</label>
                        <div>Choose File</div>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="text-3xl font-semibold mt-2 mb-1">
                  Contributor(s) Information
                </h1>

                <div className="flex flex-col mb-2.5 mt-2">
                  <div className="w-full h-max drop-shadow-xl rounded-lg pb-0 pt-2    bg-blueBg">
                    <h1
                      className="text-gray text-2xl font-semibold mb-1 px-10"
                      // onClick={setCount(1)}
                    >
                      Artist 1
                    </h1>
                    {count === 2 && (
                      <div
                        className="px-10 rounded-t-lg mt-1.5"
                        h-max
                        style={{
                          "box-shadow":
                            "0 -8px 10px -6px rgba(115,115,115,0.75)",
                        }}
                      >
                        <h1 className="text-gray text-2xl font-semibold mb-1  ">
                          Artist {count}
                        </h1>
                      </div>
                    )}
                    <div className="flex flex-row w-full px-10">
                      <div className="w-full flex flex-col  items-center justify-start ">
                        {contributorsInformationList.map((el) => {
                          const key = el.id;

                          return (
                            <div
                              id={el.id}
                              className="grid grid-cols-2 w-max mb-6 h-min"
                            >
                              <label className="block font-bold mr-5 justify-self-end">
                                {el.name}
                              </label>

                              <Input
                                type="text"
                                name={el.id}
                                value={contributorsInformation[key]}
                                onChange={onContributorsDetailsChange}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-full flex flex-col  items-center justify-start ">
                        {moreContributorsInformationList.map((el) => {
                          const key = el.id;

                          return (
                            <div
                              className="grid grid-cols-2 w-max mb-6 h-min"
                              id={el.id}
                            >
                              <label className="block font-bold mr-5 justify-self-end">
                                {el.name}
                              </label>

                              <Input
                                type="text"
                                name={el.id}
                                value={contributorsInformation[key]}
                                onChange={onContributorsDetailsChange}
                              />
                            </div>
                          );
                        })}
                        <div
                          id="additionalNotes"
                          className="grid grid-cols-2 w-max mb-6 h-min"
                        >
                          <label className="block font-bold mr-5 justify-self-end">
                            Additional Notes
                          </label>

                          <textarea
                            placeholder="Provide details"
                            name="additionalNotes"
                            value={contributorsInformation["additionalNotes"]}
                            onChange={onContributorsDetailsChange}
                            rows="3"
                            className=" w-48 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-center items-center  my-3">
                  <div className="">
                    <div className="bg-white w-max drop-shadow-lg  rounded-xl px-8 py-1 text-blue text-lg font-medium shadow-md hover:text-blueDark hover:shadow-lg focus:text-blueDark focus:shadow-lg focus:outline-none focus:ring-0 active:text-blueDark active:shadow-lg transition duration-150 ease-in-out">
                      <label
                        onClick={addContributor}
                        className="text-base font-bold"
                      >
                        <span className="text-xl">+</span>Add contributor
                      </label>
                    </div>
                  </div>
                  <div className="ml-20">
                    <Button name={"Submit"} onClick={handleSubmit} />
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
