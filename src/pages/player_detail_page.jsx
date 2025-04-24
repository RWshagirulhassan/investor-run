import BackGroundImage from "../../public/images/background.png";
import backgroundmobileImage from "../../public/images/backgroundmobile.png";
import gem from "../../public/images/gem.png";
import Navbar from "../components/navbar";
import zen from "../../public/images/character/zen.png";
import chubbs from "../../public/images/character/chubbs.png";
import drucilia from "../../public/images/character/drucilia.png";
import emilia from "../../public/images/character/emilia.png";
import luna from "../../public/images/character/luna.png";
import masna_musa from "../../public/images/character/masna_musa.png";
import mj from "../../public/images/character/mj.png";
import natalia from "../../public/images/character/natalia.png";
import ruby from "../../public/images/character/ruby.png";
import sal from "../../public/images/character/sal.png";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const players = [
  {
    img: zen,
    name: "Zen",
    rate: 50000,
    bio: "Zen ignites the financial freedom race, dashing past expenses and gathering assets. Equipped with a digital ledger and investment blueprints, each calculated leap builds passive income to outpace inflation’s surge.",
  },
  {
    img: chubbs,
    name: "chubbs",
    rate: 50000,
    bio: "Character 2 description goes here. This character is known for their unique abilities and strengths in the game.",
  },
  {
    img: drucilia,
    name: "drucilia",
    rate: 50000,
    bio: "Drucilia, “The Witch,” wields contrarian spells and derivative charms on the track. She turns liabilities into assets with daring vaults, brewing a passive-income cauldron that wards off the curse of rising costs",
  },
  {
    img: emilia,
    name: "emilia",
    rate: 50000,
    bio: "zen description goes here. This character is known for their unique abilities and strengths in the game.",
  },
  {
    img: luna,
    name: "luna",
    rate: 50000,
    bio: "Luna sprints beside Zen, her analytical reflexes slicing through economic pitfalls. With keen insight and swift maneuvers, she uncovers hidden assets and neutralizes fees, fueling her passive‐income engine against rising costs",
  },
  {
    img: masna_musa,
    name: "mansa musa",
    rate: 50000,
    bio: "Mansa Musa, reborn legend, carries a golden satchel of bullion, art, and rare assets. His regal stride and strategic philanthropy build an empire of passive income that eclipses any inflationary tide",
  },
  {
    img: mj,
    name: "mj",
    rate: 50000,
    bio: "MJ, the market juggernaut, combines athletic prowess with dividend mastery. Clad in performance gear etched with tickers, she rotates sectors and captures payouts, transforming inflation’s gauntlet into her personal relay",
  },
  {
    img: natalia,
    name: "natasha",
    rate: 50000,
    bio: "Natalia trades cubicle spreadsheets for sprint tracks in business attire. Armed with financial dashboards and REIT portfolios, she vaults corporate traps and funds her passive streams to outpace rising expenses",
  },
  {
    img: ruby,
    name: "ruby",
    rate: 50000,
    bio: "zen description goes here. This character is known for their unique abilities and strengths in the game.",
  },
  {
    img: sal,
    name: "sal",
    rate: 50000,
    bio: "Sal, “Hotb,” reigns over blue-chip fields in a bomber jacket of equity charts. He harvests dividends and sidesteps margin calls, reinforcing his passive-income fortress against inflation’s heat.",
  },
];
export default function PlayerDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialIndex = location.state?.selectedIndex || 0;

  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  // const [selectedIndex, setSelectedIndex] = useState(0);
  const themeColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-indigo-500",
    "bg-emerald-500",
    "bg-teal-500",
    "bg-orange-500",
  ];

  return (
    <div className="relative ">
      <Navbar />

      {/* Fixed Background */}
      <img
        src={BackGroundImage}
        alt="background"
        className="lg:fixed  lg:block hidden bottom-0 left-0 w-full   h-full lg:object-cover object-contain -z-10"
      />
      <img
        src={backgroundmobileImage}
        alt="background"
        className="lg:hidden fixed bottom-0 left-0 w-full   lg:h-full  object-cover md:object-fill -z-10"
      />
      <div className="fixed lg:left-[15vw] left-[5vw] lg:bottom-[10vh] flex lg:flex-row flex-col lg:max-w-[70vw] max-w-[90vw]   lg:max-h-[70vh] h-full lg:justify-between justify-center items-center">
        {/* <img className="w-[30%] h-full"></img> */}
        <button
          onClick={() => navigate(-1)}
          className="fixed top-[5vh] left-[6vw] lg:top-[18vh] lg:left-[10vw] "
        >
          <svg
            className="max-w-[10vw] lg:max-w-[5vw] aspect-square"
            width="96"
            height="105"
            viewBox="0 0 96 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="48"
              cy="56.3633"
              r="48"
              transform="rotate(180 48 56.3633)"
              fill="#6F0000"
            />
            <circle
              cx="48"
              cy="48.0155"
              r="48"
              transform="rotate(180 48 48.0155)"
              fill="#FF3F3F"
            />
            <g clip-path="url(#clip0_385_14105)">
              <g filter="url(#filter0_d_385_14105)">
                <path
                  d="M62.4952 36.423L36.4082 62.5099M36.4082 36.423L62.4952 62.5099"
                  stroke="#FAFAFA"
                  stroke-width="10.4348"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_385_14105"
                x="22.8436"
                y="31.2056"
                width="53.2171"
                height="53.2174"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="8.34783" />
                <feGaussianBlur stdDeviation="4.17391" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_385_14105"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_385_14105"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_385_14105">
                <rect
                  width="62.6087"
                  height="62.6087"
                  fill="white"
                  transform="translate(18.1465 18.1621)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        {/* <p className="absolute top-0 left-[32vw]">Name</p> */}
        <p
          className=" uppercase font-black text-4xl lg:text-6xl text-[#4DEDB8] absolute lg:top-0 text-center w-fit lg:w-full top-[8vh]  "
          style={{
            WebkitTextStroke: "2px #005C4C",
            textShadow: "2px 8px 0 black",
          }}
        >
          {players[selectedIndex].name}
        </p>
        <img
          src={players[selectedIndex].img}
          className="w-full lg:max-w-[30%] lg:h-[80%] h-[30%] object-contain"
        ></img>
        <div className="flex w-full flex-col lg:max-w-[50%] gap-[3vh] items-center">
          <div className=" flex flex-col gap-[2vh]  min-h-[30vh] w-full bg-[radial-gradient(circle,_#375FFF,_#22388D)] border-[#000C3F] border-2 rounded-2xl px-[3vw] py-[3vh] items-center">
            <p className="font-medium text-white lg:text-2xl text-sm">
              {players[selectedIndex].bio}
            </p>
            <div className="border-[#CA00FF60] border-2 p-3 flex gap-3 bg-[#AD26E548] w-fit rounded-full text-sm">
              <img src={gem}></img>
              <p className="text-white">{players[selectedIndex].rate}</p>
            </div>
          </div>
          <div className="flex gap-[16px] bg-[#2e55a0] p-3 rounded-full items-center  max-w-[80%] ]">
            <button
              onClick={() => {
                setSelectedIndex((prev) =>
                  prev === 0 ? players.length - 1 : prev - 1
                );
              }}
              className="text-white    rounded-full px-4 py-2 text-sm hover:bg-[#153062] transition"
            >
              <svg
                className="rotate-180"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3993 9.88L10.8093 5.29C10.622 5.10375 10.3685 4.99921 10.1043 4.99921C9.84013 4.99921 9.58668 5.10375 9.39931 5.29C9.30559 5.38296 9.23119 5.49356 9.18042 5.61542C9.12965 5.73728 9.10352 5.86799 9.10352 6C9.10352 6.13201 9.12965 6.26272 9.18042 6.38458C9.23119 6.50644 9.30559 6.61704 9.39931 6.71L13.9993 11.29C14.093 11.383 14.1674 11.4936 14.2182 11.6154C14.269 11.7373 14.2951 11.868 14.2951 12C14.2951 12.132 14.269 12.2627 14.2182 12.3846C14.1674 12.5064 14.093 12.617 13.9993 12.71L9.39931 17.29C9.21101 17.477 9.1047 17.7311 9.10376 17.9965C9.10282 18.2618 9.20734 18.5167 9.39431 18.705C9.58129 18.8933 9.83541 18.9996 10.1008 19.0006C10.3661 19.0015 10.621 18.897 10.8093 18.71L15.3993 14.12C15.9611 13.5575 16.2767 12.795 16.2767 12C16.2767 11.205 15.9611 10.4425 15.3993 9.88Z"
                  fill="#FFC700"
                />
              </svg>
            </button>
            <div className="flex  gap-[30px] overflow-scroll max-w-[80%]">
              {players.map((cha, i) => {
                return (
                  <button
                    onClick={() => {
                      setSelectedIndex(i);
                    }}
                    key={i}
                    className={`cursor-pointer flex items-center justify-center text-white font-bold min-w-[50px] aspect-square rounded-full w-full ${themeColors[i]}`}
                  >
                    {" "}
                    {cha.name.charAt(0).toUpperCase()}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                setSelectedIndex((prev) =>
                  prev === players.length - 1 ? 0 : prev + 1
                );
              }}
              className="text-white  rounded-full px-4 py-2 text-sm hover:bg-[#153062] transition"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3993 9.88L10.8093 5.29C10.622 5.10375 10.3685 4.99921 10.1043 4.99921C9.84013 4.99921 9.58668 5.10375 9.39931 5.29C9.30559 5.38296 9.23119 5.49356 9.18042 5.61542C9.12965 5.73728 9.10352 5.86799 9.10352 6C9.10352 6.13201 9.12965 6.26272 9.18042 6.38458C9.23119 6.50644 9.30559 6.61704 9.39931 6.71L13.9993 11.29C14.093 11.383 14.1674 11.4936 14.2182 11.6154C14.269 11.7373 14.2951 11.868 14.2951 12C14.2951 12.132 14.269 12.2627 14.2182 12.3846C14.1674 12.5064 14.093 12.617 13.9993 12.71L9.39931 17.29C9.21101 17.477 9.1047 17.7311 9.10376 17.9965C9.10282 18.2618 9.20734 18.5167 9.39431 18.705C9.58129 18.8933 9.83541 18.9996 10.1008 19.0006C10.3661 19.0015 10.621 18.897 10.8093 18.71L15.3993 14.12C15.9611 13.5575 16.2767 12.795 16.2767 12C16.2767 11.205 15.9611 10.4425 15.3993 9.88Z"
                  fill="#FFC700"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
