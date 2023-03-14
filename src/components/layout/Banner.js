import React, { useState, useEffect } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import Loading from "../layout/Loading.js";

const Banner = () => {
  const { uid } = useSelector((state) => state.firebase.auth);
  const user = useSelector((state) => state.firestore.ordered.user);
  useFirestoreConnect({
    collection: `users/${uid}`,
    storeAs: "user",
  });
  useEffect(() => {
    if (!user) {
      return <Loading />;
    } else {
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
          {user[0].walletAddress}Ξ{" "}
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
