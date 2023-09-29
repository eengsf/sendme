import logo from "../assets/image/logo.png";
import { useState } from "react";

// ${btnShow && !checked ? 'block' : 'hidden'}

function NavValue() {
  const [btn, setBtn] = useState(false);
  const [btn2, setBtn2] = useState(false);
  function handleBtn() {
    setBtn(!btn);
  }
  function handleBtn2() {
    setBtn2(!btn2);
  }
  return (
    <>
      <li className="lg:mx-5 lg:mb-0 mb-5 text-lg group/pertama overflow-hidden font-mono">
        <a
          className="group-hover/pertama:text-red-600 group-hover/pertama:[text-shadow:_1px_4px_0_rgb(255_255_255)] lg:group-hover/panahsatu:text-red-600 lg:group-hover/panahsatu:[text-shadow:_1px_4px_0_rgb(255_255_255)] cursor-default"
          href="#about"
        >
          About
        </a>
        <div className="hidden lg:block border-2 rounded-full border-red-600 transition transform -translate-x-[110%] duration-[1s] group-hover/pertama:transform group-hover/pertama:translate-x-[110%] "></div>
        <button
          onClick={handleBtn}
          className="lg:hidden absolute right-[18%] group/panahsatu"
        >
          &gt;
        </button>
      </li>
      <li className="lg:mx-5 lg:mb-0 mb-5 text-lg group/kedua overflow-hidden font-mono">
        <a
          className="group-hover/kedua:text-yellow-400 group-hover/kedua:[text-shadow:_1px_4px_0_rgb(255_255_255)] cursor-default"
          href="#services"
        >
          Services
        </a>
        <div className="hidden lg:block border-2 rounded-full border-yellow-400 transition transform -translate-x-[110%] duration-[1s] group-hover/kedua:transform group-hover/kedua:translate-x-[110%]"></div>
        <button
          onClick={handleBtn2}
          className="lg:hidden absolute right-[18%] group/panahdua"
        >
          &gt;
        </button>
      </li>
      <li className="lg:mx-5 lg:mb-0 mb-5 text-lg group/ketiga overflow-hidden font-mono">
        <a
          href="#team"
          className="group-hover/ketiga:text-green-700 group-hover/ketiga:[text-shadow:_1px_4px_0_rgb(255_255_255)]"
        >
          Team
        </a>
        <div className="border-2 rounded-full border-green-700 transition transform -translate-x-[110%] duration-[1s]  group-hover/ketiga:transform group-hover/ketiga:translate-x-[110%]  "></div>
      </li>
      <li className="lg:mx-5 lg:mb-0 mb-5 text-lg group/keempat overflow-hidden font-mono">
        <a
          className="group-hover/keempat:text-blue-600 group-hover/keempat:[text-shadow:_1px_4px_0_rgb(255_255_255)]"
          href="#testimony"
        >
          Testimony
        </a>
        <div className="border-2 rounded-full border-blue-600 transition transform -translate-x-[110%] duration-[1s]  group-hover/keempat:transform group-hover/keempat:translate-x-[110%]  "></div>
      </li>
      <li className="lg:mx-5 lg:mb-0 mb-5 text-lg group/kelima overflow-hidden">
        <a
          className="font-mono group-hover/kelima:text-slate-400 group-hover/kelima:[text-shadow:_1px_4px_0_rgb(255_255_255)]"
          href="#faq"
        >
          F.A.Q
        </a>
        <div className="border-2 rounded-full border-slate-400 transition transform -translate-x-[110%] duration-[1s]  group-hover/kelima:transform group-hover/kelima:translate-x-[110%]  "></div>
      </li>
    </>
  );
}

function NavBig() {
  return (
    <div className="font-poppins hidden lg:block">
      <ul className="flex">
        <NavValue />
      </ul>
    </div>
  );
}

function NavSmall({ checked }) {
  return (
    <>
      <ul
        className={`lg:hidden font-poppins fixed flex flex-col bg-slate-200 right-0 top-0 w-[75%] h-screen justify-start items-start pt-20 ps-10 ${
          checked ? "animate-slideIn" : "animate-slideOut"
        } `}
      >
        <NavValue />
      </ul>
    </>
  );
}

function NavbarBigSmall({ checked, onChange }) {
  return (
    <>
      <label
        htmlFor="burger"
        className={`z-20 lg:hidden ${
          checked ? "fixed right-[10%]" : "absolute right-[10%]"
        } `}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          id="burger"
          className="hidden"
        />
        <span
          className={`bg-black w-6 h-[3px] block mb-[4px] rounded-sm ${
            checked
              ? "transform origin-top-left rotate-45 transition duration-1000 translate-x-px -translate-y-[2px]"
              : "transform origin-top-left transition duration-1000"
          }`}
        ></span>
        <span
          className={`bg-black w-6 h-[3px] block mb-[4px] rounded-sm ${
            checked
              ? "transform scale-0 opacity-0 transition duration-1000"
              : "transform scale-100 opacity-100 transition duration-1000"
          }`}
        ></span>
        <span
          className={`bg-black w-6 h-[3px] block mb-[4px] rounded-sm ${
            checked
              ? "transform origin-top-left -rotate-45 transition duration-1000 -translate-x-px translate-y-px"
              : "transform origin-top-left transition duration-1000"
          }`}
        ></span>
      </label>
      <NavBig />
      <NavSmall checked={checked} />
    </>
  );
}

export default function Navbar() {
  const [showLayer, setShowLayer] = useState(false);
  function handleChange() {
    setShowLayer(!showLayer);
  }
  return (
    <nav>
      <div className="flex justify-between items-center bg-white shadow-lg sm:px-20 sm:pb-2 sm:pt-4 px-8 py-3 font-bold mb-3">
        <div className="font-poppins w-12">
          <img src={logo} alt="logo" />
        </div>
        <NavbarBigSmall checked={showLayer} onChange={handleChange} />
      </div>
    </nav>
  );
}
