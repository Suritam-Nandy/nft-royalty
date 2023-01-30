import { React, useState, useEffect } from "react";
import Button from "../layout/Button";
import Input from "../layout/Input";

const Signup = () => {
  const [value, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    walletAddress: "",
    newPassword: "",
    confirmPassword: "",
  });

  const signupList = [
    { id: "firstName", name: "First Name", type: "text" },
    { id: "lastName", name: "First Name", type: "text" },
    { id: "email", name: "Email Address", type: "email" },
    { id: "phoneNumber", name: "Phone Number", type: "tel" },
    { id: "walletAddress", name: "Wallet Address", type: "text" },
    { id: "newPassword", name: "New Password", type: "password" },
    { id: "confirmPassword", name: "Confirm Password", type: "password" },
  ];

  const onInputChange = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value });
  };
  console.log(value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log([value]);
  };

  // Update the document title using the browser API
  console.log("value : ", value);

  console.log("cggg");
  return (
    <>
      <div className="max-w-full flex items-center justify-center h-screen m-auto ">
        <div className="border-solid border-2 border-black rounded-lg py-2">
          <div className="flex flex-row justify-between p-2 pl-8 text-3xl font-semibold">
            <div>Create Account</div>
            <div>
              <img className="w-40" src="/Optima-Logo 1.png" />
            </div>
          </div>
          <form
            className="flex flex-row justify-center w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-row justify-center w-full pr-36 my-4">
              <div className="flex flex-col  justify-center items-center w-full mt-6 mr-4">
                <div className="grid grid-cols-2 w-full mb-8 justify-center items-center">
                  <label
                    className="block text-sm font-bold mr-5 justify-self-end"
                    id="firstName"
                  >
                    First Name
                  </label>
                  <Input
                    name="firstName"
                    type="text"
                    value={value.firstName}
                    onChange={onInputChange}
                  />
                  {/* <input
                      type={el.type}
                      //   name="password"
                      className="form-control w-48 shadow appearance-none border border-gray rounded text-xs  py-0.5 px-1 text-black leading-3 focus:outline-none focus:shadow-outline"
                      // placeholder="Enter Your Password"
                      //   onChange={onInputChange}
                    /> */}
                </div>
                <div className="grid grid-cols-2 w-full mb-8 justify-center items-center">
                  <label
                    className="block text-sm font-bold mr-5 justify-self-end"
                    id="lastName"
                  >
                    Last Name
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    value={value.lastName}
                    onChange={onInputChange}
                  />
                  {/* <input
                      type={el.type}
                      //   name="password"
                      className="form-control w-48 shadow appearance-none border border-gray rounded text-xs  py-0.5 px-1 text-black leading-3 focus:outline-none focus:shadow-outline"
                      // placeholder="Enter Your Password"
                      //   onChange={onInputChange}
                    /> */}
                </div>{" "}
                <div className="grid grid-cols-2 w-full mb-8 justify-center items-center">
                  <label
                    className="block text-sm font-bold mr-5 justify-self-end"
                    id="email"
                  >
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type={"email"}
                    value={value.email}
                    onChange={onInputChange}
                  />
                  {/* <input
                      type={el.type}
                      //   name="password"
                      className="form-control w-48 shadow appearance-none border border-gray rounded text-xs  py-0.5 px-1 text-black leading-3 focus:outline-none focus:shadow-outline"
                      // placeholder="Enter Your Password"
                      //   onChange={onInputChange}
                    /> */}
                </div>{" "}
                <div className="grid grid-cols-2 w-full mb-8 justify-center items-center">
                  <label
                    className="block text-sm font-bold mr-5 justify-self-end"
                    id="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <Input
                    name="phoneNumber"
                    type="tell"
                    value={value.phoneNumber}
                    onChange={onInputChange}
                  />
                  {/* <input
                      type={el.type}
                      //   name="password"
                      className="form-control w-48 shadow appearance-none border border-gray rounded text-xs  py-0.5 px-1 text-black leading-3 focus:outline-none focus:shadow-outline"
                      // placeholder="Enter Your Password"
                      //   onChange={onInputChange}
                    /> */}
                </div>{" "}
                <div className="grid grid-cols-2 w-full mb-8 justify-center items-center">
                  <label
                    className="block text-sm font-bold mr-5 justify-self-end"
                    id="text"
                  >
                    Wallet Address
                  </label>
                  <Input
                    name="walletAddress"
                    type="text"
                    value={value.walletAddress}
                    onChange={onInputChange}
                  />
                  {/* <input
                      type={el.type}
                      //   name="password"
                      className="form-control w-48 shadow appearance-none border border-gray rounded text-xs  py-0.5 px-1 text-black leading-3 focus:outline-none focus:shadow-outline"
                      // placeholder="Enter Your Password"
                      //   onChange={onInputChange}
                    /> */}
                </div>{" "}
                <div className="grid grid-cols-2 w-full mb-8 justify-center items-center">
                  <label
                    className="block text-sm font-bold mr-5 justify-self-end"
                    id="newPassword"
                  >
                    New Password
                  </label>
                  <Input
                    name="newPassword"
                    type="password"
                    value={value.newPassword}
                    onChange={onInputChange}
                  />
                  {/* <input
                      type={el.type}
                      //   name="password"
                      className="form-control w-48 shadow appearance-none border border-gray rounded text-xs  py-0.5 px-1 text-black leading-3 focus:outline-none focus:shadow-outline"
                      // placeholder="Enter Your Password"
                      //   onChange={onInputChange}
                    /> */}
                </div>
                <div className="grid grid-cols-2 w-full mb-8 justify-center items-center">
                  <label
                    className="block text-sm font-bold mr-5 justify-self-end"
                    id="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <Input
                    name="confirmPassword"
                    type="password"
                    value={value.confirmPassword}
                    onChange={onInputChange}
                  />
                  {/* <input
                      type={el.type}
                      //   name="password"
                      className="form-control w-48 shadow appearance-none border border-gray rounded text-xs  py-0.5 px-1 text-black leading-3 focus:outline-none focus:shadow-outline"
                      // placeholder="Enter Your Password"
                      //   onChange={onInputChange}
                    /> */}
                </div>
              </div>

              <div className="w-40 h-28 bg-grayLight rounded-full flex mt-2 justify-center items-center">
                <label className="text-sm font-bold">Upload Avatar</label>
              </div>
            </div>
          </form>
          <div className="flex justify-center items-center mb-6">
            <Button name={"Submit"} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
