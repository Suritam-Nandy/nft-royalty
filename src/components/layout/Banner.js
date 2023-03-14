import React, { useState, useEffect } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import Loading from "../layout/Loading.js";
import { useFirestore } from "react-redux-firebase";

const Banner = () => {
  const [count, setCount] = useState(0);

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
    account_address: "",

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

  const loadCollections = async () => {
    let currentBalance = 0;
    try {
      if (count < 3) {
        setCount(count + 1);
        console.log("transpose ");

        params.account_address = collections[0].nftContractAddress;

        get(
          "https://api.transpose.io/block/transactions-by-account",

          params
        ).then((data) => {
          currentBalance = 0;
          console.log("transpose request successfull");
          data.results.map((e) => {
            currentBalance = currentBalance + e.quantity;

            return { currentBalance };
          });
          currentBalance = (
            Math.round((currentBalance / 1000000000000000000) * 100) / 100
          ).toFixed(2);

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

  useEffect(() => {
    if (!user) {
      return <Loading />;
    } else {
      loadCollections();
    }
  }, [user]);
  if (!user) {
    return <Loading />;
  } else {
  }

  return (
    <div className="w-full flex flex-row justify-around items-center text-ashDark">
      <div className="w-max flex flex-col justify-center items-center text-ashText font-bold ">
        <label>Current Balance</label>
        <label className="flex flex-col justify-center items-center text-2xl -mt-1">
          31.8
          {user[0].currentBalance}Ξ{" "}
          <span className="text-sm font-normal text-ashDarkText tracking-wide -mt-1">
            $38,160 USD
          </span>
        </label>
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
