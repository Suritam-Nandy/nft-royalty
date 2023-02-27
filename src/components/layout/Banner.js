import React from 'react';



const Banner = () => {
    const querystring = 'querystring';
    const params = {
        chain_id: "ethereum",
        limit: "1",
    };
    var options = {
        hostname: 'api.transpose.io',
        path: '/block/transactions-by-block?' + querystring.stringify(params),
        method: 'GET',
        headers: {
            'X-API-KEY': 'FxKTp6MHpWQDaos8SRnSetdIZiUYLliS'
        }
    };
  return (
    <div>
        
    <div className="w-full bg-blueBg p-2 py-1  drop-shadow-xl rounded-lg ">
                    <div className="w-full flex flex-row justify-around items-center text-grayDark">
                      <div className="w-max flex flex-col justify-center items-center text-grayText font-bold ">
                        <label>Current Balance</label>
                        <label className="flex flex-col justify-center items-center text-2xl -mt-1">
                          31.8 Ξ{" "}
                          <span className="text-sm font-normal text-grayDarkText tracking-wide -mt-1">
                            $38,160 USD
                          </span>
                        </label>
                      </div>
                      <div className="w-max flex flex-col justify-center items-center text-grayText  font-bold ">
                        <label>Net Income</label>
                        <label className="flex flex-col justify-center items-center text-2xl -mt-1">
                          21.2 Ξ
                          <span className="text-sm font-normal text-grayDarkText tracking-wide -mt-1">
                            $25,440 USD
                          </span>
                        </label>
                      </div>
                      <div className="w-max flex flex-col justify-center items-center text-grayText  font-bold ">
                        <label>Contributor Earnings</label>
                        <label className="flex flex-col justify-center items-center text-2xl -mt-1">
                          10.6 Ξ{" "}
                          <span className="text-sm font-normal text-grayDarkText tracking-wide -mt-1">
                            $12,720 USD
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  </div>
  );
};

export default Banner;