import { NavLink } from "react-router-dom";
import logo from "../../public/images/logo.png";
import Card from "./card";
import { homepageScrollTrigger } from "../pages/homepage";
import gsap from "gsap";

export default function Navbar() {
  const scrollToProgress = (progress) => {
    if (!homepageScrollTrigger) return;

    const scrollTrigger = homepageScrollTrigger;
    const scroll =
      scrollTrigger.start +
      (scrollTrigger.end - scrollTrigger.start) * progress;

    gsap.to(window, {
      scrollTo: { y: scroll },
      duration: 1,
      ease: "power2.inOut",
    });
  };
  return (
    <div className="flex w-full min-h-[75px] fixed lg:top-7 lg:px-11 px-4 items-center justify-between z-[1000]">
      <NavLink to={"/"}>
        <img
          className="lg:max-w-[20vw] max-w-[40vw] object-contain"
          src={logo}
        ></img>
      </NavLink>
      <div className=" justify-between w-full  hidden lg:flex px-[10vw]">
        <text
          onClick={() => scrollToProgress(0.052)}
          style={{
            color: "#375FFF",
            textShadow: `
              -1px -1px 0 #ffffff60,
               1px -1px 0 #ffffff60,
              -1px  1px 0 #ffffff60,
               1px  1px 0 #ffffff60
            `,
          }}
          className="text-[1.4vw] font-bold cursor-pointer "
        >
          How to Play
        </text>
        <text
          onClick={() => scrollToProgress(0.55)}
          style={{
            color: "#375FFF",
            textShadow: `
      -1px -1px 0 #ffffff60,
       1px -1px 0 #ffffff60,
      -1px  1px 0 #ffffff60,
       1px  1px 0 #ffffff60
    `,
          }}
          className="text-[1.4vw] font-bold cursor-pointer"
        >
          Characters
        </text>
        <text
          onClick={() => scrollToProgress(0.82)}
          style={{
            color: "#375FFF",
            textShadow: `
      -1px -1px 0 #ffffff60,
       1px -1px 0 #ffffff60,
      -1px  1px 0 #ffffff60,
       1px  1px 0 #ffffff60
    `,
          }}
          className="text-[1.4vw] font-bold cursor-pointer"
        >
          Spin and wheel
        </text>
      </div>
      <a
        className=" h-full max-w-[45vw]"
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.readywealth.investorsrunpune"
      >
        <Card
          shadowColor="#c55b00"
          className={
            " lg:text-[clamp(1rem,2vw,20px)] text-white  bg-[#FFD736] max-w-[45vw] lg:max-w-[20vw] max-h-[6vh] w-full"
          }
          Children={
            //
            <span
              className="font-black"
              style={{
                WebkitTextStroke: "2px #005C4C",
                textShadow: "0 4px 0 black",
              }}
            >
              <p className="whitespace-nowrap">{"Download Now"}</p>
            </span>
          }
        />
      </a>
    </div>
  );
}
