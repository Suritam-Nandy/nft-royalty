import React, { useState } from "react";
import Hr from "../layout/Hr";
import MetamaskLogin from "../layout/MetamaskLogin";
import Button from "../layout/Button";
import { useFirebase, useFirestore } from "react-redux-firebase";
import { useParams, Link, useHistory } from "react-router-dom";
import Input from "../layout/Input";

const Login = () => {
  let history = useHistory();
  const firebase = useFirebase();
  const firestore = useFirestore();
  const [value, setValues] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value });
  };
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmit = async () => {
    if (!value.email || !value.password) {
      setErrorMsg("All Fields Mandatory");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    const some = await firebase.login(value);
    console
      .log("logged in ", some)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        history.replace("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <>
      <div className="max-w-2xl flex items-center justify-center h-screen m-auto ">
        <div className="border-solid border-2 border-black rounded-lg py-2 flex flex-col px-10">
          <MetamaskLogin />
          <Hr />
          <div className="my-3 px-4">
            <div className="flex flex-col ">
              <div className="flex flex-col">
                <label
                  className="text-sm text-gray mb-3 font-medium"
                  id="email"
                >
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  value={value.email}
                  onChange={onInputChange}
                />
              </div>
              <div className="flex flex-col my-4">
                <label
                  className="text-sm text-gray mb-3 font-medium"
                  id="password"
                >
                  Password
                </label>
                <Input
                  name="password"
                  type="password"
                  value={value.password}
                  onChange={onInputChange}
                />
                <b className="text-40">{errorMsg}</b>
              </div>
            </div>

            <div className="">
              <div className="flex flex-row justify-between my-6">
                <div>
                  <Button
                    name={"Submit"}
                    onSubmit={handleSubmit}
                    onClick={handleSubmit}
                    disabled={submitButtonDisabled}
                  />
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
                  <Link className="text-blue ml-2" to="/signup">
                    Sign up here
                  </Link>
                </div>
                <div className="flex justify-start">
                  Forgot your password?
                  <Link className="text-blue ml-2">Reset Password</Link>
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
