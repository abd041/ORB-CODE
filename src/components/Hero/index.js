import React from "react"

export default function HeroSection() {
  return (<div className="container">
    <div class="flex flex-row max-md:flex-col-reverse items-center w-[100%]">
      <div className="text-white text-left w-[56%] max-md:w-[80%]">
        <div className="mt-[3rem]">
          <h1 className="font-pop text-[72px] max-lg:text-[66px] max-md:text-[60px] max-sm:text-[32px] font-[700] text-[#fff] leading-[120%] "><span className="font-pop text-[72px] max-lg:text-[66px] max-md:text-[60px] max-sm:text-[32px] font-[700] text-[#8157fc] leading-[120%]">Super App </span>
            for Social Media.</h1></div>
        <br />
        <div className="mb-[1.5rem]"><p className="font-pop text-[18px] font-[400] text-[#c3bfcc] tracking-[0ch]">Experience true ownership and control of your identity, content, and monetization on our <strong>Decentralized Social Media Platform.</strong> Built with <strong>Lens </strong>protocol.</p></div>
        <div className="mb-4 "><p className="font-pop text-[16px] font-[400] text-[#c3bfcc] tracking-[0ch] py-[24px]">Join the network with <strong >100,000+</strong> others</p></div>
        <div className="mt-[8px]">
          <a href="https://apps.apple.com/us/app/id1638461963" target="_blank
          ">  <button><img src="assets/images/app-download-ios.png" className="w-[188px] h-[56px] mr-[12px] max-sm:w-[136px] max-sm:h-[40px]" /></button>
          </a>
          <a href="https://play.google.com/store/apps/details?id=app.orb.flutter" target="_blank">     <button><img src="assets/images/app-download-android.png" className="w-[188px] h-[56px] max-sm:w-[136px] max-sm:h-[40px]" /></button>
          </a>
        </div>
      </div>
      <div className="w-[4%] max-md:w-[0%]" ></div>
      <div className="text-white text-left w-[40%] max-md:w-[80%]  max-md:pt-[6em]">
        <img src="assets/images/main.png" className="w-100%" />
      </div>
    </div>
  </div>)
}