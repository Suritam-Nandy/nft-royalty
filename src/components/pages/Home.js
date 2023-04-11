import React from "react";
import Sidebar from "../layout/Sidebar";
import Button from "../layout/Button";
import Footer from "../layout/Footer";
import { useFirebase } from "react-redux-firebase";
import { Link } from "react-router-dom";
import AddCollectionDetails from "./AddCollectionDetails";

const Home = () => {
  const firebase = useFirebase();

  return (
    <>
      <div>
        <div className="flex flex-row min-h-screen bg-ash-100 text-ash-800">
          <Sidebar />
          <div className="h-screen flex flex-col sm:w-max md:w-full">
            <main className="main w-full flex flex-col justify-center items-center flex-grow ">
              <div className="main-content flex flex-col justify-center items-center flex-grow">
                <div className="w-max flex flex-col justify-center items-center  flex-grow bg-white">
                  <div className="w-full flex items-center justify-center m-auto ">
                    <div className="drop-shadow-xl rounded-lg py-8   px-10 bg-skyBg">
                      <div className=" flex flex-col content-center items-center place-items-evenly ">
                        <div className="">
                          <span className="text-lg text-slate-700 font-semibold">
                            There is not currently an NFT collection loaded on
                            the platform. Get started by adding a collection
                            now!
                          </span>
                        </div>
                        <div className="mt-10 ">
                          <Link to="addcollectiondetails">
                            <Button name={"Add NFT Collection "} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <div className="mt-10">
              <Link to="/login">
                <span
                  onClick={() => firebase.logout()}
                  className="text-sm  ml-2"
                >
                  Logout
                </span>
              </Link>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
