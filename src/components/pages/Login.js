import React from "react";
import Hr from "../layout/Hr";
import MetamaskLogin from "../layout/MetamaskLogin";
const Login = () => {
  return (
    <>
      <div className="max-w-2xl flex items-center justify-center h-screen m-auto ">
        <div className="border-solid border-2 border-black rounded-lg py-2 flex flex-col px-10">
          <MetamaskLogin />
          <Hr />
          <div className="my-3 px-4">
            <div className="flex flex-col ">
              <div className="flex flex-col">
                <label className="text-sm text-gray mb-3 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control w-full shadow appearance-none border border-gray rounded text-sm  py-1.5 px-2 text-black leading-6 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col my-4">
                <label className="text-sm text-gray mb-3 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control w-full shadow appearance-none border border-gray rounded text-sm  py-1.5 px-2 text-black leading-6 focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className="">
              <div className="flex flex-row">
                <div>Submit</div>
                <div>Remember</div>
              </div>
              <div>
                <div>Dont have an account?</div>
                <div>Dont have an account?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
