import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { useFirestoreConnect } from "react-redux-firebase";
import Loading from "../layout/Loading.js";

const CollectionSales = () => {
  const { uid } = useSelector((state) => state.firebase.auth);
  const firestore = useFirestore();

  //   const [collectionsL, setCollectionsL] = useState([]);
  //   const [collectionsLi, setCollectionsLi] = useState([]);

  const [c, setC] = useState({});

  const collections = useSelector(
    (state) => state.firestore.ordered.collections
  );
  useFirestoreConnect({
    collection: `users/${uid}/collections`,
    storeAs: "collections",
  });

  // setCollectionList({ ...collectionList, [e.target.name]: e.target.value })
  // console.log(collections[0].nftContractAddress);
  let img;
  let count = 0;

  const params = {
    chain_id: "ethereum",
    contract_addresses: "",
    sold_after: "2023-02-01T00:00:00Z",
    // order: "asc",
    // limit: "10",
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

  useEffect(() => {
    if (!collections) {
      return <Loading />;
    }
    some = loadCollections();

    console.log("some", some);
    // console.log("collectionsL", collectionsL);
    // console.log(collectionsL.length);
  }, [collections]);

  let some = [];
  let salesVolume = 0;
  const loadCollections = async () => {
    try {
      if (collections) {
        await collections.map((element) => {
          console.log(element);
          params.contract_addresses = element.nftContractAddress;
          get(
            "https://api.transpose.io/nft/sales-by-contract-address",

            params
          ).then((data) => {
            salesVolume = 0;
            console.log("data", data);
            data.results.map((e) => {
              salesVolume = salesVolume + e.eth_price;

              return salesVolume;
            });

            firestore
              .collection("allCollections")
              .doc(uid)
              .collection("collections")
              .doc(element.docRef)
              .set({
                ...element,
                salesVolume,

                createdAt: firestore.FieldValue.serverTimestamp(),
              });
          });
          return some;
        });
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };

  //   console.log("collectionsL", collectionsL);

  if (!collections) {
    return <Loading />;
  } else {
    // console.log(collectionsL.length);
    // console.log(collectionsL);
    // console.log(collectionsLi);
  }
  return collections;
};

export default CollectionSales;
