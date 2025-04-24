import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
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
import { Facebook, Instagram, Youtube } from "lucide-react";
import goal from "../../public/images/infocard/goal.png";
import inflation from "../../public/images/infocard/inflation.png";
import assets from "../../public/images/infocard/assets.png";
import expenses from "../../public/images/infocard/expenses.png";
import financialfreedom from "../../public/images/infocard/financialfreedom.png";
import lottery from "../../public/images/infocard/lottery.png";
import obstacle from "../../public/images/infocard/obstacle.png";
import salary from "../../public/images/infocard/salary.png";

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
        // rotate: 360, // or "30deg"
        transformOrigin: "50% 50%",
        force3D: true,
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
          transformOrigin: "50% 50%",
          force3D: true,
          rotate: card.rotate,
          opacity: 1,
          duration: 0.01,
          scrub: true,
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
        y: "-320vh",
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
        duration: 0.07,
        ease: "sine.in",
      },
      lastDelay + 0.52
    );
    timeline.to(
      footerRef.current,
      {
        y: "-36vh",
        duration: 0.07,
        ease: "sine.in",
      },
      lastDelay + 0.52
    );
    timeline.to(
      endDownloadNowRef.current,
      {
        opacity: 1,
        duration: 0.07,
        scale: 1,
      },
      lastDelay + 0.52
    );
    timeline.to(
      endDownloadNowBgRef.current,
      {
        opacity: 1,
        duration: 0.04,
        scale: 1.8,
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

  return (
    <div className="relative ">
      <Navbar />
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
        className="fixed lg:top-[15vh]  lg:left-[30vw] left-[15vw] top-[40vh] max-w-[70vw] lg:max-w-[40vw] z-0"
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
        style={{ transformOrigin: "50% 50%" }}
        ref={rollerRef}
        src={rollerImage}
        alt="roller"
        className="fixed lg:-bottom-[100vh] -bottom-[50vh]  lg:left-[10vw] -left-[20vw] max-w-[140vw] lg:max-w-[80vw] opacity-0 translate-y-full z-[20] !origin-center"
      />

      {[
        {
          ref: infocardRef,
          subtitle: `Run on a 3-way track, collect assets, and avoid expenses.
                    Your goal is to achieve financial independence by
                    maintaining positive cash flow.`,
          title: `TRACK & GOAL`,
          color: "#196FB8",
          img: goal,
        },
        {
          ref: infocard2Ref,
          subtitle: `Inflation ticks every 4.5 seconds, gradually decreasing your savings. Keep up by investing wisely!`,
          title: `Time is Money`,
          color: "#E44400",
          img: inflation,
        },
        {
          ref: infocard3Ref,
          subtitle: `Buy assets like Gold, Real Estate, Mutual Funds and Fixed Deposit. Each asset generates passive income that adds to your wealth every cycle.`,
          title: ` Passive Income`,
          color: "#00C458",
          img: assets,
        },
        {
          ref: infocard4Ref,
          subtitle: `Watch out for expenses in red. If you hit them, they’ll decrease your net worth and impact your financial progress.`,
          title: ` Avoid the Red GLow`,
          color: "#FF9E30",
          img: expenses,
        },
        {
          ref: infocard5Ref,
          subtitle: `Hitting physical obstacles like trucks or walls can cost you 40% of your net worth. Stay sharp to avoid them!`,
          title: ` Dodge Them`,
          color: "#FF6347",
          img: salary,
        },
        {
          ref: infocard6Ref,
          subtitle: `Collect all 3 files in each cycle to secure your job. Miss one, and you're warned. Miss all three, and you lose your job. To get it back, collect the special bag in the next cycle.`,
          title: ` Keep an eye for files`,
          color: "#FDD907",
          img: financialfreedom,
        },
        {
          ref: infocard7Ref,
          subtitle: `Balance your income, assets, and expenses to maintain positive cash flow. Collect your salary, avoid obstacles, and secure your financial future!`,
          title: ` gET OUT OF RAT RACE`,
          color: "#50E48C",
          img: goal,
        },
        {
          ref: infocard8Ref,
          subtitle: `Whenever you collect a lottery ticket, you'll need to choose a random number from a set of 4. Pick the correct number to win the lottery.`,
          title: ` High risk high reward`,
          color: "#05FEDE",
          img: lottery,
        },
      ].map((card, index) => (
        <div
          key={index}
          className="  fixed lg:-bottom-[45vh] -bottom-[55vh] lg:left-[26vw]  left-[15vw] scale-50 z-[15]"
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
                    className="aspect-square lg:min-w-[36%] max-w-[80%] min-w-[40%]  rounded-3xl"
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
        className="flex flex-col lg:max-w-[90vw] max-w-[90vw]  fixed lg:bottom-[120vh] translate-x-1/2 right-1/2 bottom-[120vh]  z-[30]"
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
          <div className="min-w-[64px] min-h-[64px] w-full h-full aspect-square flex items-center justify-center rounded-full border-2 border-white/20 p-3">
            <Instagram className="max-w-[27px] max-h-[27px] " color="white" />
          </div>
          <div className="min-w-[64px] min-h-[64px] w-full h-full aspect-square flex items-center justify-center rounded-full border-2 border-white/20 p-3">
            <Youtube className="max-w-[27px] max-h-[27px] " color="white" />
          </div>
          <div className="min-w-[64px] min-h-[64px] w-full h-full aspect-square flex items-center justify-center rounded-full border-2 border-white/20 p-3">
            <Facebook className="max-w-[27px] max-h-[27px] " color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
