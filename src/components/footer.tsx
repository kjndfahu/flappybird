"use client"

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 400,
            behavior: "smooth",
        })
    }

    return (
        <div className="relative w-full">
                <div
                    onClick={scrollToTop}
                    style={{ textShadow: "0px 24.9px 0px #00000033" }}
                    className="flex text-white cursor-pointer items-center justify-center font-pixel-secondary md:text-[240px] mds:text-[170px] sml:text-[130px] text-[80px] w-full md:h-[350px] mds:h-[250px]"
                >
                    JOIN)
                </div>
        </div>
    )
}

