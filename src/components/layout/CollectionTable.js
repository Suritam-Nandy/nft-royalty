import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { useFirestore, useFirebase } from "react-redux-firebase";
import Loading from "../layout/Loading.js";
const CollectionTable = (props) => {
  console.log(props);
  const [count, setCount] = useState(0);
  const [collectionsLi, setCollectionsLi] = useState([]);
  const [flag, setFlag] = useState(false);

  const [collection, setCollection] = useState({});
  const { uid } = useSelector((state) => state.firebase.auth);
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
    contract_address: "",
    sold_after: "2023-03-01T00:00:00Z",
    sold_before: "2023-03-31T00:00:00Z",

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
    let some = [];
    let salesVolume = 0;
    let sales = 0;
    let royalty_fee = 0;
    try {
      if (count < 3) {
        setCount(count + 1);
        setFlag(true);
        // console.log("transpose ");

        await collections.map((element) => {
          params.contract_address = element.nftContractAddress;
          if (params.sold_after != "")
            params.sold_after = props.range.startDate;
          if (params.sold_before != "")
            params.sold_before = props.range.endDate;
          // params.sold_after = props.range.startDate
          //   ? `${props.range.startDate}T00:00:00Z`
          //   : "2023-03-01T00:00:00Z";
          // params.sold_before = props.range.endDate
          //   ? `${props.range.endDate}T00:00:00Z`
          //   : "2023-03-01T00:00:00Z";

          get(
            "https://api.transpose.io/nft/sales-by-contract-address",

            params
          ).then((data) => {
            salesVolume = 0;
            sales = 0;
            royalty_fee = 0;
            // console.log("transpose request successfull");
            data.results.map((e) => {
              salesVolume = salesVolume + e.eth_price;
              sales = sales + e.quantity;
              royalty_fee = royalty_fee + e.royalty_fee;

              return { salesVolume, sales };
            });
            salesVolume = (Math.round(salesVolume * 100) / 100).toFixed(2);
            royalty_fee = (Math.round(royalty_fee * 100) / 100).toFixed(2);
            // sales = (Math.round(sales * 100) / 100).toFixed(2);
            setCollection({
              ...element,
              salesVolume,
              sales,
              royalty_fee,
              createdAt: firestore.FieldValue.serverTimestamp(),
            });
            setCollectionsLi([...collectionsLi, collection]);

            firestore
              .collection("allCollections")
              .doc(uid)
              .collection("collections")
              .doc(element.docRef.id)
              .set({
                ...element,
                salesVolume,
                sales,
                royalty_fee,
                createdAt: firestore.FieldValue.serverTimestamp(),
              });
          });
          return some;
        });
      } else {
        console.log("transpose updated sales");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };

  useEffect(() => {
    if (!collections) {
      return <Loading />;
    } else {
    }
    // let b = SalesNFT();
    // console.log(b);
    // setInterval(loadCollections(), 12000);
    setCount(0);
    setInterval(loadCollections(), 8000);

    // loadCollections();
  }, [props]);
  // console.log(flag);
  if (!collectionsLi) {
    return <Loading />;
  } else {
    // console.log(collections);
    // console.log(count);
    // let l = collections.length;
    // if (count < 4) {
    //   // setInterval(loadCollections, 100000);
    //   setCount(count + 1);
    // }
  }

  return (
    <div>
      {flag &&
        collections.map((el) => {
          // if (el.sales === 0) return <Loading />;
          if (!collection) {
            <Redirect to="/" />;
          }
          return (
            <>
              <div className="w-full mb-2 flex flex-row justify-center items-center  text-base font-bold tracking-wide ">
                <div className="w-2/6 flex flex-row justify-start items-center text-ashDark">
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

                <div className="w-1/6 text-ashDark flex justify-center">
                  {el.sales ? el.sales : "0"} Sales
                </div>
                <div className="w-1/6 text-ashDark flex justify-center">
                  {el.salesVolume} Ξ
                </div>
                <div className="w-1/6 text-ashDark flex justify-center">
                  {el.royalty_fee}Ξ
                </div>
                <div className="w-1/6 text-ashDark flex justify-center">
                  5.2%
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default CollectionTable;
