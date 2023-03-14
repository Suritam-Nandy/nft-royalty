import React from "react";

const MetamaskLogin = () => {
  return (
    <div className="flex flex-row items-center justify-center bg-ashBg rounded-xl px-12 py-3 mb-6 mx-10">
      <div className="mr-2">
        <img alt="metamask" className="w-9 h-9" src="logos_metamask-icon.png" />
      </div>
      <label className="text-ash text-2xl font-medium">
        Login with Metamask
      </label>
    </div>
  );
};

export default MetamaskLogin;
