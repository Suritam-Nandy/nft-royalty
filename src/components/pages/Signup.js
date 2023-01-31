import { React, useState, useEffect } from "react";
import Button from "../layout/Button";
import Input from "../layout/Input";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { async } from "@firebase/util";
const Signup = () => {
  let history = useHistory();

  const [value, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    walletAddress: "",
    newPassword: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value });
  };
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !value.firstName ||
      !value.lastName ||
      !value.email ||
      !value.phoneNumber ||
      !value.walletAddress ||
      !value.newPassword ||
      !value.confirmPassword
    ) {
      setErrorMsg("All Fields Mandatory");
      return;
    }
    if (value.newPassword !== value.confirmPassword) {
      setErrorMsg("Password Does Not Match");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, value.email, value.newPassword)
      .then(async(res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user,{
          displayName: value.firstName+" "+value.lastName,
          walletAddress:value.walletAddress,
        });
        console.log(user);
        history.replace("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  // Update the document title using the browser API

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
          <form className="w-full">
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
                  <b className="text-40">{errorMsg}</b>
                </div>
              </div>

              <div className="w-40 h-28 bg-grayLight rounded-full flex mt-2 justify-center items-center">
                <label className="text-sm font-bold">Upload Avatar</label>
              </div>
            </div>
            <div className="flex justify-center items-center mb-6">
              <Button
                name={"Submit"}
                onSubmit={handleSubmit}
                onClick={handleSubmit}
                disabled={submitButtonDisabled}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
