import { useState } from "react";

// ${btnShow && !checked ? 'block' : 'hidden'}

function SubPertama({ btnShow }) {
   return (
      <div className={`lg:group-hover/pertama:block lg:hover:block lg:absolute
      ${btnShow ? 'block' : 'hidden'} `}>
         <div className=" lg:bg-white lg:shadow-xl text-base rounded-xl lg:px-10 lg:py-7 lg:-translate-x-10 lg:translate-y-7 m-5 lg:m-0">
            <ul className="">
               <li className="mb-3 hover:text-red-600 hover:underline hover:underline-offset-[5px] group/bullpertamasiji"><a href=""><span className="hidden group-hover/bullpertamasiji:inline-block me-2">&bull;</span>Sub Pertama Siji</a></li>
               <li className="mb-3 hover:text-red-600 hover:underline hover:underline-offset-[5px] group/bullpertamaloro"><a href=""><span className="hidden group-hover/bullpertamaloro:inline-block me-2">&bull;</span>Sub Pertama Loro</a></li>
               <li className="mb-3 hover:text-red-600 hover:underline hover:underline-offset-[5px] group/bullpertamatelu"><a href=""><span className="hidden group-hover/bullpertamatelu:inline-block me-2">&bull;</span>Sub Pertama Telu</a></li>
               <li className="mb-3 hover:text-red-600 hover:underline hover:underline-offset-[5px] group/bullpertamapapat"><a href=""><span className="hidden group-hover/bullpertamapapat:inline-block me-2">&bull;</span>Sub Pertama Papat</a></li>
            </ul>
         </div>
      </div>
   );
}

function SubKedua({ btnShow2 }) {
   return (
      <div className={`lg:group-hover/kedua:block lg:hover:block lg:absolute ${btnShow2 ? 'block' : 'hidden'} `}>
         <div className=" lg:bg-white lg:shadow-xl text-base rounded-xl lg:px-10 lg:py-7 lg:-translate-x-10 lg:translate-y-7 m-5 lg:m-0">
            <ul>
               <li className="mb-3 hover:text-yellow-400 hover:underline hover:underline-offset-[5px] group/bullkeduasiji"><a href=""><span className="hidden group-hover/bullkeduasiji:inline-block me-2">&bull;</span>Sub Kedua Siji</a></li>
               <li className="mb-3 hover:text-yellow-400 hover:underline hover:underline-offset-[5px] group/bullkedualoro"><a href=""><span className="hidden group-hover/bullkedualoro:inline-block me-2">&bull;</span>Sub Kedua Loro</a></li>
               <li className="mb-3 hover:text-yellow-400 hover:underline hover:underline-offset-[5px] group/bullkeduatelu"><a href=""><span className="hidden group-hover/bullkeduatelu:inline-block me-2">&bull;</span>Sub Kedua Telu</a></li>
            </ul>
         </div>
      </div>
   );
}

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
         <li className="lg:mx-5 lg:mb-0 mb-5 text-lg group/pertama overflow-hidden">
            <a className="group-hover/pertama:text-red-600 group-hover/pertama:[text-shadow:_1px_4px_0_rgb(255_255_255)] lg:group-hover/panahsatu:text-red-600 lg:group-hover/panahsatu:[text-shadow:_1px_4px_0_rgb(255_255_255)] cursor-default">Pertama</a>
            <div className="hidden lg:block border-2 rounded-full border-red-600 transition transform -translate-x-[110%] duration-[1s] group-hover/pertama:transform group-hover/pertama:translate-x-[110%] ">
            </div>
            <button onClick={handleBtn} className="lg:hidden absolute right-[18%] group/panahsatu">
               &gt;
            </button>
            <SubPertama btnShow={btn} />
         </li>
         <li className="lg:mx-5 lg:mb-0 mb-5 text-lg group/kedua overflow-hidden">
            <a className="group-hover/kedua:text-yellow-400 group-hover/kedua:[text-shadow:_1px_4px_0_rgb(255_255_255)] cursor-default">Kedua</a>
            <div className="hidden lg:block border-2 rounded-full border-yellow-400 transition transform -translate-x-[110%] duration-[1s] group-hover/kedua:transform group-hover/kedua:translate-x-[110%]">
            </div>
            <button onClick={handleBtn2} className="lg:hidden absolute right-[18%] group/panahdua">
               &gt;
            </button>
            <SubKedua btnShow2={btn2} />
         </li>
         <li className="lg:mx-5 lg:mb-0 mb-5 text-lg group/ketiga overflow-hidden">
            <a href="" className="group-hover/ketiga:text-green-700 group-hover/ketiga:[text-shadow:_1px_4px_0_rgb(255_255_255)]">Ketiga</a>
            <div className="border-2 rounded-full border-green-700 transition transform -translate-x-[110%] duration-[1s]  group-hover/ketiga:transform group-hover/ketiga:translate-x-[110%]  ">
            </div>
         </li>
         <li className="lg:mx-5 lg:mb-0 mb-5 text-lg group/keempat overflow-hidden">
            <a href="" className="group-hover/keempat:text-blue-600 group-hover/keempat:[text-shadow:_1px_4px_0_rgb(255_255_255)]">Keempat</a>
            <div className="border-2 rounded-full border-blue-600 transition transform -translate-x-[110%] duration-[1s]  group-hover/keempat:transform group-hover/keempat:translate-x-[110%]  ">
            </div>
         </li>
         <li className="lg:mx-5 lg:mb-0 mb-5 text-lg group/kelima overflow-hidden">
            <a href="" className="group-hover/kelima:text-slate-400 group-hover/kelima:[text-shadow:_1px_4px_0_rgb(255_255_255)]">Kelima</a>
            <div className="border-2 rounded-full border-slate-400 transition transform -translate-x-[110%] duration-[1s]  group-hover/kelima:transform group-hover/kelima:translate-x-[110%]  ">
            </div>
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
         <ul className={`lg:hidden font-poppins fixed flex flex-col bg-slate-200 right-0 top-0 w-[75%] h-screen justify-start items-start pt-20 ps-10 ${checked ? 'animate-slideIn' : 'animate-slideOut'} `}>
            <NavValue />
         </ul>
      </>
   );
}

function NavbarBigSmall({ checked, onChange }) {
   return (
      <>
         <label htmlFor="burger" className={`z-20 lg:hidden ${checked ? 'fixed right-[10%]' : 'absolute right-[10%]'} `}>
            <input type="checkbox" checked={checked} onChange={onChange} id="burger" className="hidden" />
            <span className={`bg-black w-6 h-[3px] block mb-[4px] rounded-sm ${checked ? 'transform origin-top-left rotate-45 transition duration-1000 translate-x-px -translate-y-[2px]' : 'transform origin-top-left transition duration-1000'}`}></span>
            <span className={`bg-black w-6 h-[3px] block mb-[4px] rounded-sm ${checked ? 'transform scale-0 opacity-0 transition duration-1000' : 'transform scale-100 opacity-100 transition duration-1000'}`}></span>
            <span className={`bg-black w-6 h-[3px] block mb-[4px] rounded-sm ${checked ? 'transform origin-top-left -rotate-45 transition duration-1000 -translate-x-px translate-y-px' : 'transform origin-top-left transition duration-1000'}`}></span>
         </label >
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
            <div className="font-poppins">
               <h1 className="[text-shadow:_1px_4px_1px_rgb(204,168,135)] text-2xl">MasEeng.com</h1>
            </div>
            <NavbarBigSmall checked={showLayer} onChange={handleChange} />
         </div>
      </nav>
   );
}