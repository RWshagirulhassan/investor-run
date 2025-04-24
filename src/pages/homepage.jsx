import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// import BackGroundImage from "../../public/images/background.png";
import backgroundmobileImage from "../../public/images/backgroundmobile.png";
import logocolImage from "../../public/images/logocol.png";
import DownloadnowImage from "../../public/images/downloadnow-with-cash.png";
import mobilescreenImage from "../../public/images/mobilescreen.png";
import rollerImage from "../../public/images/roller.png";
import howtoplayImage from "../../public/images/howtoplay.png";
import spinWheelText from "../../public/images/spinwheel.png";
import Wheel from "../../public/images/wheel.png";
import WheelCenter from "../../public/images/wheelcenter.png";
import WheelIndicator from "../../public/images/indicator.png";
import confettiGif from "../../public/images/coneftti.gif";
import downloadNow2 from "../../public/images/downloadnow2.png";
import backgroundForDownloadNow from "../../public/images/backgrounddownload.png";
import zen from "../../public/images/zen.png";
import Navbar from "../components/navbar";
import Card from "../components/card";
import CoverflowSwiper from "../components/carousel";
import video from "../assets/bgvideo.mp4";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export let homepageScrollTrigger = null;

function HomePage() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const downloadRef = useRef(null);
  const introRef = useRef(null);
  const mobileRef = useRef(null);
  const rollerRef = useRef(null);
  const infocardRef = useRef(null);
  const infocard2Ref = useRef(null);
  const infocard3Ref = useRef(null);
  const infocard4Ref = useRef(null);
  const infocard5Ref = useRef(null);
  const infocard6Ref = useRef(null);
  const infocard7Ref = useRef(null);
  const infocard8Ref = useRef(null);
  const CharacterCarouselRef = useRef(null);
  const spinwheeltextref = useRef(null);
  const spinwheelref = useRef(null);
  const wheelref = useRef(null);
  const CollectGemref = useRef(null);
  const WinNewCharacter = useRef(null);
  const confettiRef = useRef(null);
  const endLogoRef = useRef(null);
  const footerRef = useRef(null);
  const endDownloadNowRef = useRef(null);
  const endDownloadNowBgRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const duration = 19; // video duration in seconds

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress; // value from 0 to 1
        if (video && video.duration) {
          video.currentTime = progress * duration;
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        // markers: true,
        id: "main-scroll",
      },
    });

    // Animate logo and download out
    timeline.to(
      logoRef.current,
      {
        y: "-300%",
        opacity: 0,
        duration: 0.06,
      },
      0
    );

    timeline.to(
      downloadRef.current,
      {
        y: "300%",
        opacity: 0,
        duration: 0.06,
      },
      0
    );

    // Animate intro
    timeline.to(
      introRef.current,
      {
        x: "48vw",
        opacity: 1,
        duration: 0.03,
      },
      0.02
    );

    // Animate mobile screen
    timeline.to(
      mobileRef.current,
      {
        x: "-38vw",
        opacity: 1,
        duration: 0.03,
      },
      0.02
    );
    timeline.to(
      introRef.current,
      {
        x: "-48vw",
        opacity: 0,
        duration: 0.02,
      },
      0.06
    );

    // Animate mobile screen
    timeline.to(
      mobileRef.current,
      {
        x: "38vw",
        opacity: 0,
        duration: 0.02,
      },
      0.06
    );

    // // Animate roller
    timeline.to(
      rollerRef.current,
      {
        rotate: 360, // or "30deg"
        transformOrigin: "50% 50%",
        y: "-15vh",
        opacity: 1,
        duration: 0.01,
      },
      0.07
    );
    let lastDelay = 0;
    // --- Phase 1: Roll and Reveal Infocards ---
    const infocards = [
      { ref: infocardRef, rotate: 360 },
      { ref: infocard2Ref, rotate: 312 },
      { ref: infocard3Ref, rotate: 268 },
      { ref: infocard4Ref, rotate: 222 },
      { ref: infocard5Ref, rotate: 177 },
      { ref: infocard6Ref, rotate: 132 },
      { ref: infocard7Ref, rotate: 88 },
      { ref: infocard8Ref, rotate: 44 },
    ];

    infocards.forEach((card, index) => {
      const delay = 0.07 + index * 0.03; // Adjust the delay for each card
      lastDelay = delay;

      // Roller rotate step
      timeline.to(
        rollerRef.current,
        {
          rotate: card.rotate,
          transformOrigin: "50% 50%",
          opacity: 1,
          duration: 0.01,
        },
        delay
      );

      // Infocard appearance
      timeline.to(
        card.ref.current,
        {
          y: "-90vh",
          scale: 1,
          opacity: 1,
          rotate: index % 2 === 0 ? 3 : -2,
          transformOrigin: "50% 50%",
          duration: 0.01,
        },
        delay + 0.001
      );
    });

    // --- Phase 2: Infocards and Roller Exit ---
    timeline.to(
      [
        infocard8Ref.current,
        infocard7Ref.current,
        infocard6Ref.current,
        infocard5Ref.current,
        infocard4Ref.current,
        infocard3Ref.current,
        infocard2Ref.current,
        infocardRef.current,
      ],
      {
        y: "-200vh",
        opacity: 0,
        duration: 0.05,
      },
      lastDelay + 0.1
    );

    timeline.to(
      rollerRef.current,
      {
        y: "50vh",
        opacity: 0,
        duration: 0.05,
      },
      lastDelay + 0.1
    );

    // --- Phase 3: Character Carousel Transition ---
    timeline.to(
      CharacterCarouselRef.current,
      {
        y: "100vh",
        opacity: 1,
        duration: 0.05,
      },
      lastDelay + 0.14
    );

    timeline.to(
      CharacterCarouselRef.current,
      {
        y: "-100vh",
        opacity: 0,
        duration: 0.05,
      },
      lastDelay + 0.3
    );

    // --- Phase 4: Spin Wheel and Collect Gems ---
    timeline.to(
      spinwheeltextref.current,
      {
        y: "25vh",
        scale: 1,
        opacity: 1,
        duration: 0.05,
      },
      lastDelay + 0.32
    );
    timeline.to(
      spinwheelref.current,
      {
        y: "-100vh",
        scale: 1,
        opacity: 1,
        duration: 0.05,
      },
      lastDelay + 0.32
    );
    timeline.to(
      CollectGemref.current,
      {
        // y: "-10vh",
        // scale: 0.6,
        opacity: 1,
        duration: 0.05,
        ease: "power2.inOut",
      },
      lastDelay + 0.32
    );
    timeline.to(
      CollectGemref.current,
      {
        y: "-10vh",
        scale: 0.6,
        duration: 0.05,
        ease: "power2.inOut",
      },
      lastDelay + 0.36
    );
    timeline.to(
      wheelref.current,
      {
        rotate: 210, // or "30deg"
        transformOrigin: "50% 50%",
        // y: "-15vh",
        opacity: 1,
        duration: 0.01,
      },
      lastDelay + 0.4
    );

    timeline.to(
      WinNewCharacter.current,
      {
        // y: "-5vh",
        opacity: 1,
        duration: 0.01,
        ease: "power2.inOut",
      },
      lastDelay + 0.4
    );
    timeline.to(
      confettiRef.current,
      {
        opacity: 1,
        duration: 0.1,
        onStart: () => {
          // Reset the gif by updating the src
          const gif = confettiRef.current;
          gif.src = ""; // Unload
          gif.src = confettiGif; // Reload to restart animation
        },
      },
      lastDelay + 0.42
    );
    timeline.to(
      spinwheelref.current,
      {
        y: "-300vh",
        scale: 3,
        duration: 0.1,
        ease: "sine.in",
      },
      lastDelay + 0.44
    );
    timeline.to(
      [
        confettiRef.current,
        spinwheeltextref.current,
        CollectGemref.current,
        WinNewCharacter.current,
      ],
      {
        opacity: 0,
        duration: 0.07,
        ease: "sine.in",
      },
      lastDelay + 0.44
    );

    timeline.to(
      endLogoRef.current,
      {
        y: "36vh",
        // opacity: 0,
        duration: 0.07,
        ease: "sine.in",
      },
      lastDelay + 0.52
    );
    timeline.to(
      footerRef.current,
      {
        y: "-36vh",
        // opacity: 0,
        duration: 0.07,
        ease: "sine.in",
      },
      lastDelay + 0.52
    );
    timeline.to(
      endDownloadNowRef.current,
      {
        // y: "-36vh",
        opacity: 1,
        duration: 0.07,
        scale: 1,
        // ease: "sine.in",
      },
      lastDelay + 0.52
    );
    timeline.to(
      endDownloadNowBgRef.current,
      {
        // y: "-36vh",
        opacity: 1,
        duration: 0.04,
        scale: 1.8,
        // ease: "sine.in",
      },
      lastDelay + 0.54
    );
    homepageScrollTrigger = timeline.scrollTrigger;

    return () => {
      timeline.kill();
      ScrollTrigger.getById("main-scroll")?.kill();
      homepageScrollTrigger = null;
    };
  }, []);

  // const scrollToProgress = (progressValue) => {
  //   const scrollTrigger = ScrollTrigger.getById("main-scroll");
  //   if (scrollTrigger) {
  //     const scrollStart = scrollTrigger.start;
  //     const scrollEnd = scrollTrigger.end;
  //     const scrollPos = scrollStart + (scrollEnd - scrollStart) * progressValue;

  //     gsap.to(window, {
  //       scrollTo: scrollPos,
  //       duration: 1,
  //       ease: "power2.inOut",
  //     });
  //   }
  // };

  return (
    <div className="relative ">
      <Navbar />

      {/* Fixed Background */}
      {/* <img
        src={BackGroundImage}
        alt="background"
        className="lg:fixed  lg:block hidden bottom-0 left-0 w-full   h-full lg:object-cover object-contain -z-10"
      /> */}
      <video
        ref={videoRef}
        src={video}
        type="video/mp4"
        muted
        preload="auto"
        className="lg:fixed  lg:block hidden bottom-0 left-0 w-full   h-full lg:object-cover object-contain -z-10"
      />

      <img
        src={backgroundmobileImage}
        alt="background"
        className="lg:hidden fixed bottom-0 left-0 w-full   lg:h-full  object-cover md:object-fill -z-10"
      />

      {/* Scroll Container */}
      <div ref={containerRef} className="h-[1000vh] w-full " />

      {/* Fixed Elements */}
      <img
        ref={logoRef}
        src={logocolImage}
        alt="logo"
        className="fixed lg:top-[15vh] lg:left-[30vw] left-[15vw] top-[40vh] max-w-[70vw] lg:max-w-[40vw] z-0"
      />

      <a
        className="cursor-pointer z-0"
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.readywealth.investorsrunpune"
      >
        <img
          ref={downloadRef}
          src={DownloadnowImage}
          alt="download"
          className="fixed lg:bottom-[15vh] lg:left-[39vw] lg:max-w-[20vw] max-w-[50vw] left-[25vw] bottom-[20vh]"
        />
      </a>

      <div
        ref={introRef}
        className="flex flex-col gap-[3vh]  fixed lg:top-[35%] top-[10vh] lg:right-[100vw] right-[82vw] w-full  items-center lg:items-start max-w-[30vw] opacity-0 translate-x-full z-[10]"
      >
        <img
          className="lg:max-w-[20vw] max-w-[60vw]"
          src={howtoplayImage}
        ></img>
        <Card
          backgroundColor="#375FFF"
          shadowColor="#284bc2"
          className="bg-[#375FFF] w-[80vw] lg:w-full  rounded-[1.2vw] "
          Children={
            <div className="w-full   flex flex-col px-[2vw] py-[2vh] justify-start rounded-3xl gap-[2vh] ">
              <p
                className="font-black text-2xl lg:text-4xl text-white w-full"
                style={{
                  WebkitTextStroke: "2px #005C4C",
                  textShadow: "0 4px 0 black",
                }}
              >
                Introduction
              </p>
              <p className="text-white font-normal text-base">
                Financial Run is an action-packed endless runner that teaches
                financial literacy through fast-paced gameplay. Inspired by
                Cashflow, you start with savings and invest in assets like gold,
                stocks, and real estate to generate passive income.
              </p>
            </div>
          }
        ></Card>
      </div>

      <img
        ref={mobileRef}
        src={mobilescreenImage}
        alt="mobile"
        className="fixed h-full  lg:top-[25%] top-[53vh] -right-[10vw] lg:max-w-[15vw] max-h-[40vh]  lg:max-h-[60vh] opacity-0 translate-x-full z-[10]"
      />

      <img
        ref={rollerRef}
        src={rollerImage}
        alt="roller"
        className="fixed lg:-bottom-[100vh] -bottom-[50vh]  lg:left-[10vw] -left-[20vw] max-w-[140vw] lg:max-w-[80vw] opacity-0 translate-y-full z-[20]"
      />

      {[
        {
          ref: infocardRef,
          subtitle: `Run on a 3-way track, collect assets, and avoid expenses.
                    Your goal is to achieve financial independence by
                    maintaining positive cash flow.`,
          title: `TRACK & GOAL`,
          color: "#196FB8",
          img: "../../public/images/infocard/goal.png",
        },
        {
          ref: infocard2Ref,
          subtitle: `Inflation ticks every 4.5 seconds, gradually decreasing your savings. Keep up by investing wisely!`,
          title: `Time is Money`,
          color: "#E44400",
          img: "../../public/images/infocard/inflation.png",
        },
        {
          ref: infocard3Ref,
          subtitle: `Buy assets like Gold, Real Estate, Mutual Funds and Fixed Deposit. Each asset generates passive income that adds to your wealth every cycle.`,
          title: ` Passive Income`,
          color: "#00C458",
          img: "../../public/images/infocard/assets.png",
        },
        {
          ref: infocard4Ref,
          subtitle: `Watch out for expenses in red. If you hit them, they’ll decrease your net worth and impact your financial progress.`,
          title: ` Avoid the Red GLow`,
          color: "#FF9E30",
          img: "../../public/images/infocard/expenses.png",
        },
        {
          ref: infocard5Ref,
          subtitle: `Hitting physical obstacles like trucks or walls can cost you 40% of your net worth. Stay sharp to avoid them!`,
          title: ` Dodge Them`,
          color: "#FF6347",
          img: "../../public/images/infocard/salary.png",
        },
        {
          ref: infocard6Ref,
          subtitle: `Collect all 3 files in each cycle to secure your job. Miss one, and you're warned. Miss all three, and you lose your job. To get it back, collect the special bag in the next cycle.`,
          title: ` Keep an eye for files`,
          color: "#FDD907",
          img: "../../public/images/infocard/financialfreedom.png",
        },
        {
          ref: infocard7Ref,
          subtitle: `Balance your income, assets, and expenses to maintain positive cash flow. Collect your salary, avoid obstacles, and secure your financial future!`,
          title: ` gET OUT OF RAT RACE`,
          color: "#50E48C",
          img: "../../public/images/infocard/goal.png",
        },
        {
          ref: infocard8Ref,
          subtitle: `Whenever you collect a lottery ticket, you'll need to choose a random number from a set of 4. Pick the correct number to win the lottery.`,
          title: ` High risk high reward`,
          color: "#05FEDE",
          img: "../../public/images/infocard/lottery.png",
        },
      ].map((card, index) => (
        <div
          key={index}
          className="fixed lg:-bottom-[45vh] -bottom-[55vh] lg:left-[26vw]  left-[15vw] scale-50 z-[15]"
          ref={card.ref}
        >
          <Card
            backgroundColor={card.color}
            className="  lg:max-w-[46vw] max-w-[70vw] border-[#13286a] rounded-3xl min-h-[50vh] lg:min-h-[30vh] "
            shadowColor="#2a5cbc"
            Children={
              <div className="w-full flex flex-col py-[1vh] justify-center  gap-[3vh] items-center">
                <p
                  className="font-black lg:text-[3rem]  text-3xl text-white w-full text-center uppercase"
                  style={{
                    WebkitTextStroke: "2px #000000",
                    textShadow: "0 4px 0 black",
                  }}
                >
                  {card.title}
                </p>
                <div className="flex lg:gap-[5%] gap-[2vh] lg:flex-row flex-col items-center justify-center ">
                  <img
                    src={card.img}
                    className="aspect-square lg:min-w-[36%] min-w-[40%] bg-green-500 rounded-3xl"
                  ></img>
                  <p className="text-white font-light lg:text-2xl text-sm text-center lg:text-start">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            }
          />
        </div>
      ))}
      <div
        ref={CharacterCarouselRef}
        className="flex flex-col lg:max-w-7xl max-w-[90vw]  fixed lg:bottom-[120vh] left-[5vw]    lg:left-[12vw] bottom-[120vh]  z-[30]"
      >
        <p
          className="font-black text-2xl lg:text-5xl text-[#4DEDB8] w-full text-center"
          style={{
            WebkitTextStroke: "2px #000000",
            textShadow: "0 4px 0 black",
          }}
        >
          CHARACTER
        </p>
        <CoverflowSwiper
          className=""
          cards={[
            {
              img: zen,
              name: "Zen",
              rate: 50000,
              bio: "Zen ignites the financial freedom race, dashing past expenses and gathering assets. Equipped with a digital ledger and investment blueprints, each calculated leap builds passive income to outpace inflation’s surge.",
            },
            {
              img: zen,
              name: "emiliya",
              rate: 50000,
              bio: "Amelia, the EgyptQueen, merges ancient wealth wisdom with modern tactics. Draped in hieroglyph-inspired attire, she stacks real-estate scrolls and commodities, constructing a passive-income pyramid to counter inflation’s desert winds",
            },
            {
              img: zen,
              name: "zen",
              rate: 50000,
              bio: "zen description goes here. This character is known for their unique abilities and strengths in the game.",
            },
            {
              img: zen,
              name: "zen",
              rate: 50000,
              bio: "zen description goes here. This character is known for their unique abilities and strengths in the game.",
            },
            {
              img: zen,
              name: "zen",
              rate: 50000,
              bio: "zen description goes here. This character is known for their unique abilities and strengths in the game.",
            },
          ]}
        />
      </div>
      <img
        ref={spinwheeltextref}
        className="fixed lg:-top-[10vh] lg:max-w-[20vw] max-w-[80vw] -top-[10vh] left-[10vw]  lg:left-[40vw]  z-[40]"
        src={spinWheelText}
      ></img>
      <p
        ref={CollectGemref}
        className="font-black text-3xl lg:text-6xl text-white w-full text-center top-[40vh] left-[0vw] fixed opacity-0 z-[40]"
        style={{
          WebkitTextStroke: "2px #000000",
          textShadow: "0 2px 0 black",
        }}
      >
        Collect Gems and ...
      </p>
      <p
        ref={WinNewCharacter}
        className="font-black text-3xl lg:text-6xl text-white w-full text-center top-[40vh] left-[0vw] fixed opacity-0 z-[40]"
        style={{
          WebkitTextStroke: "2px #000000",
          textShadow: "0 2px 0 black",
        }}
      >
        Win New Characters
      </p>
      <img
        ref={confettiRef}
        className="fixed w-[100vw] h-[100vh] top-0 left-0 opacity-0 -z-10 "
        src={confettiGif}
      />
      <div
        ref={spinwheelref}
        className="fixed w-full aspect-square flex items-center justify-center -bottom-[120vh]  lg:-bottom-[130vh] lg:max-w-[40vw]  lg:left-[30vw] -left-[1vw] z-[40]"
      >
        <img ref={wheelref} className="absolute inset-0" src={Wheel}></img>
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:max-w-[8vw] max-w-[20vw]"
          src={WheelCenter}
        ></img>
        <img
          className="absolute inset-0 lg:max-w-[4vw] max-w-[8vw] lg:left-[18vw] left-[46vw]"
          src={WheelIndicator}
        ></img>
      </div>
      <img
        ref={endLogoRef}
        className="fixed -top-[20vh] left-[26vw] max-w-[50vw] lg:max-w-[20vw] lg:left-[40vw]  lg:-top-[20vh] z-[50]"
        src={logocolImage}
      ></img>

      <a
        href="https://play.google.com/store/apps/details?id=com.readywealth.investorsrunpune"
        target="_blank"
        ref={endDownloadNowRef}
        className="  cursor-pointer  opacity-0 scale-0  fixed aspect-square w-full flex items-center justify-center top-[40vh] left-[26vw] max-w-[50vw] lg:max-w-[20vw]  lg:left-[40vw] lg:top-[34vh] z-[50]"
      >
        <img
          ref={endDownloadNowBgRef}
          className="absolute  scale-0 w-full opacity-0"
          src={backgroundForDownloadNow}
        ></img>
        <img className="absolute  w-full " src={downloadNow2}></img>
      </a>
      <div
        ref={footerRef}
        className="lg:p-6 p-2 rounded-2xl flex lg:flex-row flex-col fixed w-full bg-[#375FFF] -bottom-[30vh] left-[5vw] max-w-[90vw]  items-center justify-between z-[50]"
      >
        <p className="text-white lg:text-2xl font-light text-xs text-center lg:text-start">
          © 2015 - 2024 readywealth. Designed and developed by readywealth
        </p>
        <div className="flex gap-8 ">
          <svg
            className="aspect-square max-w-[10vw]"
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.625"
              width="64"
              height="64"
              rx="32"
              fill="#FFC700"
              fill-opacity="0.05"
            />
            <rect
              x="1.375"
              y="0.75"
              width="62.5"
              height="62.5"
              rx="31.25"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="1.5"
            />
            <path
              d="M32.5987 24.7988C31.1797 24.7988 29.7924 25.2196 28.6125 26.008C27.4326 26.7964 26.513 27.917 25.9699 29.228C25.4269 30.5391 25.2848 31.9818 25.5616 33.3736C25.8385 34.7653 26.5218 36.0439 27.5253 37.0473C28.5287 38.0506 29.8071 38.734 31.1989 39.0108C32.5909 39.2877 34.0334 39.1456 35.3445 38.6026C36.6556 38.0595 37.7761 37.1399 38.5645 35.9601C39.353 34.78 39.7737 33.3928 39.7737 31.9737C39.776 31.0308 39.5921 30.0969 39.2323 29.2254C38.8725 28.3537 38.3442 27.5618 37.6774 26.8951C37.0107 26.2284 36.2188 25.7 35.3473 25.3402C34.4756 24.9805 33.5416 24.7965 32.5987 24.7988ZM32.5987 36.6462C31.6746 36.6462 30.7712 36.3722 30.0028 35.8587C29.2345 35.3455 28.6356 34.6157 28.2819 33.7619C27.9283 32.9081 27.8358 31.9687 28.016 31.0622C28.1963 30.1558 28.6413 29.3232 29.2947 28.6697C29.9482 28.0163 30.7808 27.5713 31.6872 27.391C32.5937 27.2108 33.5331 27.3033 34.3869 27.6569C35.2407 28.0106 35.9705 28.6095 36.4837 29.3778C36.9972 30.1462 37.2712 31.0496 37.2712 31.9737C37.2712 33.2129 36.779 34.4015 35.9027 35.2777C35.0265 36.154 33.8379 36.6462 32.5987 36.6462ZM41.7512 24.5013C41.7512 24.8474 41.6487 25.1857 41.4564 25.4735C41.264 25.7613 40.9907 25.9856 40.671 26.118C40.3512 26.2505 39.9993 26.2851 39.6598 26.2176C39.3203 26.1501 39.0086 25.9834 38.7638 25.7387C38.5192 25.494 38.3524 25.1821 38.2848 24.8427C38.2173 24.5032 38.2519 24.1513 38.3844 23.8316C38.5169 23.5118 38.7412 23.2385 39.0289 23.0462C39.3168 22.8539 39.6551 22.7513 40.0012 22.7513C40.4653 22.7513 40.9105 22.9356 41.2387 23.2638C41.567 23.592 41.7512 24.0371 41.7512 24.5013ZM46.4937 26.2513C46.5447 24.0757 45.7332 21.9683 44.2362 20.3888C42.6651 18.8727 40.5567 18.0419 38.3737 18.0787C36.0987 17.9737 29.0987 17.9737 26.8238 18.0787C24.6489 18.0317 22.5429 18.8426 20.9612 20.3362C19.4644 21.9158 18.6529 24.0232 18.7037 26.1988C18.5987 28.4737 18.5987 35.4737 18.7037 37.7487C18.6529 39.9243 19.4644 42.0317 20.9612 43.6112C22.5429 45.1049 24.6489 45.9158 26.8238 45.8687C29.1337 46.0087 36.0637 46.0087 38.3737 45.8687C40.5493 45.9197 42.6567 45.1082 44.2362 43.6112C45.7332 42.0317 46.5447 39.9243 46.4937 37.7487C46.5987 35.4737 46.5987 28.4737 46.4937 26.1988V26.2513ZM43.5187 40.2512C43.2811 40.8532 42.9225 41.3998 42.4649 41.8574C42.0073 42.315 41.4607 42.6736 40.8587 42.9112C38.142 43.4606 35.3648 43.6489 32.5987 43.4712C29.8386 43.649 27.067 43.4607 24.3563 42.9112C23.7544 42.6736 23.2077 42.315 22.7501 41.8574C22.2926 41.3998 21.9339 40.8532 21.6962 40.2512C20.9613 38.3962 21.1188 34.0212 21.1188 31.9912C21.1188 29.9612 20.9613 25.5687 21.6962 23.7313C21.9272 23.1234 22.2833 22.5709 22.7416 22.1097C23.1998 21.6484 23.7499 21.2886 24.3563 21.0537C27.067 20.5042 29.8386 20.3159 32.5987 20.4938C35.3648 20.3162 38.142 20.5045 40.8587 21.0537C41.4607 21.2914 42.0073 21.6501 42.4649 22.1076C42.9225 22.5652 43.2811 23.1119 43.5187 23.7138C44.2537 25.5688 44.0787 29.9437 44.0787 31.9737C44.0787 34.0037 44.2537 38.3962 43.5187 40.2337V40.2512Z"
              fill="white"
            />
          </svg>
          <svg
            className="aspect-square max-w-[10vw]"
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.625"
              width="63.875"
              height="63.875"
              rx="31.9375"
              fill="#FFC700"
              fill-opacity="0.05"
            />
            <rect
              x="1.29036"
              y="0.665365"
              width="62.5443"
              height="62.5443"
              rx="31.2721"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="1.33073"
            />
            <g clip-path="url(#clip0_590_26217)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.1533 35.0356V28.3145C32.5393 29.4373 34.3872 30.5218 36.5728 31.6911C34.7702 32.6908 32.5393 33.8125 30.1533 35.0356ZM43.4504 24.9719C43.0388 24.4296 42.3374 24.0075 41.5905 23.8678C39.3954 23.4509 25.7011 23.4497 23.5072 23.8678C22.9083 23.98 22.375 24.2514 21.9169 24.673C19.9867 26.4646 20.5915 36.0722 21.0568 37.6285C21.2524 38.3022 21.5054 38.788 21.8239 39.1069C22.2343 39.5285 22.7962 39.8188 23.4416 39.949C25.249 40.3228 34.5602 40.5319 41.5523 40.0051C42.1966 39.8929 42.7668 39.5932 43.2166 39.1537C45.0013 37.3693 44.8796 27.2221 43.4504 24.9719Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_590_26217">
                <rect
                  width="23.9531"
                  height="23.9531"
                  fill="white"
                  transform="translate(20.5859 19.9609)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="aspect-square max-w-[10vw]"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              width="63.5"
              height="63.5"
              rx="31.75"
              fill="#FFC700"
              fill-opacity="0.05"
            />
            <rect
              x="1.16146"
              y="0.661458"
              width="62.1771"
              height="62.1771"
              rx="31.0885"
              stroke="white"
              stroke-opacity="0.2"
              stroke-width="1.32292"
            />
            <g clip-path="url(#clip0_590_26223)">
              <path
                d="M33.5115 25.5261C33.5115 25.7698 33.5115 26.5641 33.5115 27.6926H37.3915L36.9708 31.1513H33.5115C33.5115 36.4853 33.5115 43.6331 33.5115 43.6331H28.9199C28.9199 43.6331 28.9199 36.5799 28.9199 31.1513H26.5273V27.6926H28.9199C28.9199 26.321 28.9199 25.3457 28.9199 25.0741C28.9199 23.7802 28.8224 23.1663 29.3722 22.1637C29.9223 21.1611 31.4738 19.8358 34.1573 19.8678C36.8415 19.9008 37.9729 20.159 37.9729 20.159L37.3915 23.8452C37.3915 23.8452 35.6775 23.3926 34.8362 23.5539C33.996 23.7152 33.5115 24.2328 33.5115 25.5261Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_590_26223">
                <rect
                  width="23.8125"
                  height="23.8125"
                  fill="white"
                  transform="translate(20.3438 19.8438)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
