import leftclouds from '../../public/img/left-clouds.png'
import rightclouds from '../../public/img/right-clouds.png'
import biglogo from '../../public/img/biglogo.png'
import Image from 'next/image'
import {JoinBtn} from "@/components/join-btn";
import {XLogo} from "@/components/icons";

export const Hero = () => {
    return (
        <div className="flex relative items-center justify-center pb-[100px] lg:h-[800px] sml:h-[650px] h-[500px]">
            <div className="flex z-[1] absolute justify-between w-full max-w-[calc(100%+200px)] xxl:px-[150px] lg:top-[100px] md:top-[50px] top-[25px] lg:px-[100px] md:px-[50px]">
                <Image style={{ aspectRatio: "524 / 508" }} src={leftclouds || "/placeholder.svg"} alt="left clouds" className="lg:h-[507px] mdbvp:w-full mds:w-[300px] sml:w-[250px] w-[180px] md:h-[370px] mds:h-[300px] sml:h-[250px] h-[180px] object-contain"/>
                <Image style={{ aspectRatio: "468 / 491" }} src={rightclouds || "/placeholder.svg"} alt="right clouds" className="lg:h-[507px] mdbvp:w-full mds:w-[300px] sml:w-[250px] w-[180px] md:h-[370px] mds:h-[300px] sml:h-[250px] sm:h-[180px] h-[170px] object-contain"/>
            </div>
            <div className="flex z-[2] flex-col text-center gap-6 font-pixel-primary sml:text-[16px] text-[14px] text-white items-center justify-center">
                    <Image style={{ aspectRatio: "599 / 270" }} className="sml:w-[599px] sm:w-[400px] w-[280px]" src={biglogo} alt="logo"/>
                <p>Flipping Solana & Bitcoin with
                    AI-<br/>Driven Tools, $5M+ Profits, and a 200+<br/> Strong Members</p>
                <JoinBtn/>
                <div className="flex items-center flex-col gap-2 pt-[12px]">
                    <XLogo/>
                    <p>x.com</p>
                </div>
            </div>
        </div>
    )
}