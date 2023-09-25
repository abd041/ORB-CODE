import React from "react"

export default function Connections() {
    return (<div className="container pb-[7em] max-sm:pb-[96px]">
        <div class="flex items-center w-[100%] flex-col md:flex-row max-md:flex-col-reverse">

            <div className="text-white text-left w-[50%] max-md:w-[100%] p-[10px]">
                <div className="mt-[3rem] max-md:text-center">
                    <h1 className="font-pop text-[50px] font-[700] text-[#fff] max-md:text-[38px]   leading-[120%] ">
                        <span className="font-pop text-[50px] font-[700] text-[#8157fc] leading-[120%] max-md:text-[38px]">
                        </span>  <span className="font-pop text-[50px] font-[700] text-[#8157fc] leading-[120%] max-md:text-[38px]"> Portable </span>
                        social connections
                        </h1></div>

                <div className="mb-[1.5rem] max-md:text-center"><p className="font-pop text-[18px] font-[400] text-[#c3bfcc]  pt-[12px]">
                    Maximize the value of your social connections with a portable, Blockchain-Based solution. Keep your relationships strong and accessible no matter where you go, and take your network with you to other applications built on the same protocol.
                   </p></div>

            </div>
            <div className="text-white  w-[50%] max-md:w-[80%] p-[10px]">
                <img src="assets/images/people.png" className="w-[80%] max-md:w-[100%] mx-auto" />
            </div>

        </div>
    </div>)
}