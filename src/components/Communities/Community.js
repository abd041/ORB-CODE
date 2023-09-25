import React from "react"

export default function Community() {
    return (<div className="container ">
        <div class="flex items-center w-[100%] flex-col md:flex-row pb-[7em] max-sm:pb-[96px]">
            <div className="text-white  w-[50%] max-md:w-[80%] p-[10px]">
                <img src="assets/images/communities.png" className="w-[80%] max-md:w-[100%] mx-auto" />
            </div>
            <div className="text-white text-left w-[50%] max-md:w-[100%] p-[10px]">
                <div className="mt-[3rem] max-md:text-center">
                    <h1 className="font-pop text-[50px] font-[700] text-[#fff] max-md:text-[38px]   leading-[120%] ">
                        Hangout with your <span className="font-pop text-[50px] font-[700] text-[#8157fc] leading-[120%] max-md:text-[38px]"> Communities</span></h1></div>

                <div className="mb-[1.5rem] max-md:text-center"><p className="font-pop text-[18px] font-[400] text-[#c3bfcc]  pt-[12px]">
                    Communities provide a space for individuals to come together and form close, meaningful relationships with others who share similar interests or experiences. By joining a community, you have the opportunity to connect with like-minded individuals and engage in activities and discussions that foster a sense of belonging and connection.</p></div>

            </div>

        </div>
        <div>
            <div className=" text-center">
                <h1 className="font-pop text-[50px] font-[700] text-[#fff] max-md:text-[38px]   leading-[120%] ">
                    <span className="font-pop text-[50px] font-[700] text-[#8157fc] leading-[120%] max-md:text-[38px]"> Get started</span></h1></div>

            <div className="mb-[24px] text-center">
                <h1 className="font-pop text-[20px] font-[700] text-[#fff] max-md:text-[18px]   leading-[120%] ">
                    Join the network with <strong>100,000+</strong> others.
                </h1></div>

            <div className="mt-[8px] text-center">
                <a href="https://apps.apple.com/us/app/id1638461963" target="_blank
          "><button><img src="assets/images/app-download-ios.png" className="w-[188px] h-[56px] mr-[12px] max-sm:w-[136px] max-sm:h-[40px]" /></button>
                </a>

                <a href="https://play.google.com/store/apps/details?id=app.orb.flutter" target="_blank">
                    <button><img src="assets/images/app-download-android.png" className="w-[188px] h-[56px] max-sm:w-[136px] max-sm:h-[40px]" /></button>
                </a>
            </div>




        </div>

    </div>)
}