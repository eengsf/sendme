import logo from "../assets/image/logo.png";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="bg-slate-50 flex w-screen flex-col justify-between  space-y-6  font-mono px-5 pb-10 text-center text-base font-semibold md:flex-row md:divide-x-2 md:divide-y-0 md:text-start md:text-sm">
        <div className="flex w-full items-center justify-center leading-none mt-3">
          <img
            className="order-1 object-contain md:w-[150px]"
            width={200}
            height={200}
            src={logo}
            color="white"
            alt="Logo Mafia Code Community"
          />
        </div>
        <div className="order-3 flex w-full justify-center leading-9 mt-3">
          <div className="max-w-max py-1 md:border-t-0 md:border-b-0 md:py-0">
            <ul className="flex flex-col justify-between text-sm font-bold text-black">
              {" "}
              <p className="text-lg"> Contact Us</p>
              <p>+62 859-0438-8044</p>
              <p>+62 897-0643-201</p>
            </ul>
          </div>
        </div>
        <div className="order-4 flex w-full justify-center leading-9 text-justify mt-3">
          <ul className="text-sm font-bold text-black mx-4">
            <p className="text-lg">Location</p>
            <p>Perum Graha Kamal Blok DC 06, Gili Timur, Kamal, Bangkalan</p>
          </ul>
        </div>
        <div className="text-black order-2 flex w-full justify-center px-4 leading-9 md:order-last md:w-full md:justify-center mt-3">
          <div className="space-y-4 self-center">
            <p className="text-lg font-bold ">Socialize with SendMe</p>
            <ul className="flex justify-center space-x-3 text-2xl">
              <li className="bg-glass-purple-300 rounded-full  text-primary-500">
                <a href="https://www.instagram.com/sendmeprinting/">
                  <BsInstagram />
                </a>
              </li>
            </ul>
            <p className="text-sm text-center">@sendmeprinting</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
