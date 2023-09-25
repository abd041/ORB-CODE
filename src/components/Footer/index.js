import React from "react";
import { FaDiscord } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io"
import { AiFillMessage } from "react-icons/ai"
function Footer() {
    return (
        <div className="container py-[124px] max-md:w-[80%]">
            <div class="flex  w-[100%] max-md:flex-row max-md:flex-col-reverse">
                <div className="text-white text-left w-[80%] max-md:w-[100%]">
                    <div className="mb-[40Px]">
                        <h1 className="font-pop text-[22px] font-[600] text-[#fff] max-md:text-[22px]   leading-[120%] max-md:hidden">
                            Orb
                        </h1></div>
                    <div>
                        <h2 className="font-pop text-[16px] font-[400] text-[rgba(255,255,255,.7)]">© 2023 Orb Technology, Inc.</h2>
                    </div>

                </div>
                <div className="text-white  w-[20%] max-md:w-[80%] ">
                    <div className=" mb-[40Px]">
                        <h1 className="font-pop text-[22px] font-[600] text-[#fff] max-md:text-[22px]   leading-[120%]">
                            Get in touch
                        </h1></div>
                    <div>
                        <a href="https://discord.com/invite/mpeFuy4Bh7" target="_blank">
                            <h2 className="flex font-pop text-[16px] font-[400] text-[rgba(255,255,255,.7)] mb-[10px] "><span className="pr-[8px] pt-[4px]"><FaDiscord /></span> Discord</h2>

                        </a>
                        </div>
                    <div>
                        <a href="https://twitter.com/orbwagmi" target="_blank">      <h2 className="flex font-pop text-[16px] font-[400] text-[rgba(255,255,255,.7)] mb-[10px]"><span className="pr-[8px] pt-[4px]"><IoLogoTwitter /></span> Twitter</h2>



                        </a>
                    </div>
                    <div>
                        <a href="#" onClick={(e) => {
                            window.location.href = "mailto:yourmail@domain.com";
                            e.preventDefault();
                        }} >
                            <h2 className="flex font-pop text-[16px] font-[400] text-[rgba(255,255,255,.7)] mb-[10px]"><span className="pr-[8px] pt-[4px]"><AiFillMessage /></span> Say hi!</h2>

                        </a>
                        </div>
                </div>

            </div>
        </div>)
}

export default Footer;
