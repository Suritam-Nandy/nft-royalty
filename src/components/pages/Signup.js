import React from "react";

const Signup = () => {
  const signupList = [
    { id: "first-name", name: "First Name", type: "text" },
    { id: "last-name", name: "Last Name", type: "text" },
    { id: "email", name: "Email Address", type: "email" },
    { id: "phone-number", name: "Phone Number", type: "tel" },
    { id: "new-password", name: "New Password", type: "password" },
    { id: "confirm-password", name: "Confirm Password", type: "password" },
  ];

  return (
    <>
      <div className="max-w-full flex items-center justify-center h-screen m-auto ">
        <div className="border-solid border-2 border-black rounded-lg p-4">
          <div className="flex flex-row justify-between p-2 text-2xl font-semibold">
            <div>Create Account</div>
            <div>
              <img className="w-40" src="/Optima-Logo 1.png" />
            </div>
          </div>
          <div className="flex flex-row justify-center w-full px-20">
            <div className="flex flex-col justify-center items-center w-full mt-6 mr-6">
              {signupList.map((el) => {
                return (
                  <div className="grid grid-cols-2 w-full mb-8 justify-center items-center">
                    <label
                      className="block text-sm font-semibold mr-6 justify-self-end"
                      id={el.id}
                    >
                      {el.name}
                    </label>
                    <input
                      type={el.type}
                      //   name="password"
                      className="form-control w-48 shadow appearance-none border border-gray rounded text-xs  py-0.5 px-1 text-black leading-3 focus:outline-none focus:shadow-outline"
                      // placeholder="Enter Your Password"
                      //   onChange={onInputChange}
                    />
                  </div>
                );
              })}
            </div>
            <div className="w-32 h-24 bg-grayLight rounded-full flex justify-center items-center">
              <label className="text-xs font-bold">Upload Avatar</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
