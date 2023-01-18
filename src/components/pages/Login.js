import React from "react";

const Login = () => {
  return (
    <>
      <div className="max-w-2xl flex items-center justify-center h-screen m-auto ">
        <div className="border-solid border-2 border-black rounded-lg py-2 flex flex-col">
          <div className="">
            <div className="bg-grayBg rounded-2xl   flex flex-row   px-12 py-2">
              <div className="mr-2">img</div>
              <label className="text-gray">Login with Metamask</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
