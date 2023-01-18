import React from "react";

const Hr = () => {
  return (
    <div class="relative flex items-center justify-center mb-6">
      <div className="flex-grow border-t border-grayLight"></div>
      <span className="flex-shrink -mt-1 mx-1 text-gray">OR</span>
      <div className="flex-grow border-t border-grayLight"></div>
    </div>
  );
};

export default Hr;
