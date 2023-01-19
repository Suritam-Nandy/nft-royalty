import React from "react";
import Hr from "../layout/Hr";
import MetamaskLogin from "../layout/MetamaskLogin";
import Submit from "../layout/Submit";
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
              <div className="flex flex-row justify-between my-6">
                <div>
                  <Submit />
                </div>
                <div className="flex flex-row justify-center items-center px-4">
                  <input type="checkbox" className="mr-3 h-4 w-4" />
                  <label className="flex items-center justify-center text-xl text-gray mb-1 font-medium">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center my-6 text-sm text-gray font-bold">
                <div className="-ml-3.5">
                  Dont have an account?
                  <label className="text-blue ml-2">Sign up here</label>
                </div>
                <div className="flex justify-start">
                  Forgot your password?
                  <label className="text-blue ml-2">Reset Password</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
