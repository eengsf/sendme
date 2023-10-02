import Heropng from "../assets/image/hero.png";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/utils";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

const Hero = () => {
  const scrollAnimation = (() => getScrollAnimation(), []);

  return (
    <>
      <div className="max-w-screen-xl lg:my-20 sm:my-1 px-8  mx-auto font-mono mb-10">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col sm:grid-rows-2 md:grid-rows-none  sm:grid-cols-2 gap-8 py-6 sm:py-2 sm:gap-0"
            variants={scrollAnimation}
          >
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-2xl lg:text-4xl xl:text-5xl  font-medium text-black-600 leading-normal">
                Print Anytime, Anywhere: Hemat Waktu,{" "}
                <strong>Hemat Biaya!</strong>
              </h1>
              <p className="text-black-500 mt-4 mb-6 font-medium lg:text-lg md:text-sm">
                Inovatif, cepat, dan praktis: SendMe Printing memenuhi kebutuhan
                cetak Anda. Layanan 24 jam, gratis delivery order di atas 10
                ribu.
              </p>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <img
                  src={Heropng}
                  alt="VPN Illustrasi"
                  width={712}
                  height={483}
                />
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <div className="relative w-full flex">
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
