import React, { useState, useEffect } from "react";
import axios from "axios";

import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import Loading from "../layout/Loading.js";
import { useFirestore } from "react-redux-firebase";
import Web3 from "web3";
const Banner = (props) => {
  const [count, setCount] = useState(0);
  const [currentBalance, setCurrentBalance] = useState();

  const { uid } = useSelector((state) => state.firebase.auth);
  const user = useSelector((state) => state.firestore.ordered.user);
  useFirestoreConnect({
    collection: `users/${uid}`,
    storeAs: "user",
  });
  const firestore = useFirestore();
  const collections = useSelector(
    (state) => state.firestore.ordered.collections
  );
  useFirestoreConnect({
    collection: `allCollections/${uid}/collections`,
    storeAs: "collections",
  });

  const params = {
    chain_id: "ethereum",
    account_address: "0xF29Ff96aaEa6C9A1fBa851f74737f3c069d4f1a9",

    limit: "10000",
  };

  const get = async (url, params) => {
    const response = await fetch(
      url
      // {
      // Method: "GET",
      // headers: {
      //   "X-API-KEY": "FxKTp6MHpWQDaos8SRnSetdIZiUYLliS",
      // },
      // }
    );
    const data = await response.json();

    return data;
  };

  const loadBanner = async () => {
    try {
      if (count < 3) {
        setCount(count + 1);
        console.log("transpose ");

        params.account_address = collections[0].nftContractAddress;

        get(
          "https://api.etherscan.io/api?module=account&action=balance&address=0xF29Ff96aaEa6C9A1fBa851f74737f3c069d4f1a9&tag=latest&apikey=E8CEZXZKHVZE3PK8UDRQYG9EVBF86Y9PWJ"
        ).then((data) => {
          // currentBalance = data / 1000000000000000000;
          // console.log("transpose request successfull");
          // data.results.map((e) => {
          //   currentBalance = currentBalance + e.value;

          //   return { currentBalance };

          // });
          // currentBalance = (
          //   Math.round((data / 1000000000000000000) * 100) / 100
          // ).toFixed(2);
          setCurrentBalance(
            (
              Math.round(Web3.utils.fromWei(data.result, "ether") * 100) / 100
            ).toFixed(2)
          );
          console.log("cy", Web3.utils.fromWei(data.result, "ether"));
          console.log("cy", data);

          // firestore
          //   .collection("allCollections")
          //   .doc(uid)
          //   .collection("collections")
          //   .doc(element.docRef.id)
          //   .set({
          //     ...element,
          //     currentBalance,
          //     createdAt: firestore.FieldValue.serverTimestamp(),
          //   });
        });
      } else {
        console.log("transpose updated currentBalance");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };
  // console.log("cy", currentBalance);

  useEffect(() => {
    if (!user) {
      return <Loading />;
    } else {
      setCount(0);

      loadBanner();
      // console.log("cy", currentBalance);
    }
  }, [props.ethPrice]);
  if (!props.ethPrice) {
    return <Loading />;
  } else {
  }

  return (
    <div className="w-full flex flex-row justify-around items-center text-ashDark">
      <div className="w-max flex flex-col justify-center items-center text-ashText font-bold ">
        <label>Current Balance</label>
        {props && (
          <label className="flex flex-col justify-center items-center text-2xl -mt-1">
            {currentBalance}Ξ{" "}
            <span className="text-sm font-normal text-ashDarkText tracking-wide -mt-1">
              $
              {(Math.round(props.ethPrice * currentBalance * 100) / 100)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              USD
            </span>
          </label>
        )}
      </div>
      <div className="w-max flex flex-col justify-center items-center text-ashText  font-bold ">
        <label>Net Income</label>
        <label className="flex flex-col justify-center items-center text-2xl -mt-1">
          21.2 Ξ
          <span className="text-sm font-normal text-ashDarkText tracking-wide -mt-1">
            $25,440 USD
          </span>
        </label>
      </div>
      <div className="w-max flex flex-col justify-center items-center text-ashText  font-bold ">
        <label>Contributor Earnings</label>
        <label className="flex flex-col justify-center items-center text-2xl -mt-1">
          10.6 Ξ{" "}
          <span className="text-sm font-normal text-ashDarkText tracking-wide -mt-1">
            $12,720 USD
          </span>
        </label>
      </div>
    </div>
  );
};

export default Banner;
