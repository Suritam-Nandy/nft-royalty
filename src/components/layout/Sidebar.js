import React from "react";
import { useFirebase, useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const firebase = useFirebase();
  // const uid = firebase.auth().currentUser.uid;
  const { uid } = useSelector((state) => state.firebase.auth);
  //mapping firestore data through redux
  const user = useSelector((state) => state.firestore.data.user);

  // fetching from firestore
  useFirestoreConnect({
    collection: `users/`,
    doc: `${uid}`,
    storeAs: "user",
  });
  // getting user details such as name
  if (user) {
    var name = firebase.auth().currentUser.displayName
      ? firebase.auth().currentUser.displayName
      : user.displayName;
  }
  const sidebarList = [
    { id: "home", name: "Home", icon: "home-icon.png" },
    {
      id: "royalties",
      name: "Royalties",
      icon: "royalties-icon.png",
    },
    {
      id: "collection-details",
      name: "Collection Details",
      icon: "Collection-Details.png",
    },
    {
      id: "payment-history",
      name: "Payment History",
      icon: "Payment-History.png",
    },
    { id: "feedback", name: "Feedback", icon: "Feedback.png" },
  ];
  return (
    <aside className="sidebar w-max transform-gpu  translate-x-0 transition-transform duration-150 ease-in bg-ashSidebar shadow-2xl">
      <div className="w-64 sidebar-header flex flex-col items-center justify-center py-4">
        <div className="my-3">
          <img alt="avatar" src="Avatar.png" className="w-28 h-28" />
        </div>

        <div className="my-1">
          <span className="text-sky font-bold">{name} </span>
        </div>

        <div className="my-1">
          <span className="text-sky  font-bold">
            {/* {user.walletAddress} */}
            0xd79...df2230
          </span>
        </div>
      </div>
      <div className="sidebar-content px-4 py-6">
        <ul className="flex flex-col w-full">
          {sidebarList.map((el) => {
            return (
              <>
                <li className="my-px">
                  <a
                    href="/"
                    className={`
                    flex flex-row items-center h-10 px-3 rounded-lg  font-semibold bg-ash-100 hover:text-skyLight`}
                  >
                    <span className="flex items-center justify-center text-lg  fill-skyLight stroke-skyLight">
                      <img
                        alt={el.icon}
                        src={el.icon}
                        className="w-5 h-5 fill-skyLight"
                      />
                    </span>
                    <span
                      className={`${
                        el.id === "home" ? " font-bold text-skyLight" : ""
                      }  ml-3 text-sky  hover:font-bold hover:text-skyLight`}
                    >
                      {el.name}
                    </span>
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
