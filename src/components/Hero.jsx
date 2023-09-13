function Hero() {
  return (
    <>
      <div className="h-screen bg-[url('/book2.png')] bg-cover lg:bg-center bg-right grid lg:grid-rows-2">
        <div className="lg:items-end lg:text-start items-center text-center grid lg:grid-cols-2 grid-cols-1 [text-shadow:_1px_3px_1px_rgb(255,255,255)]">
          <div className="lg:p-10 lg:text-6xl text-3xl px-6 lg:font-semibold font-bold">
            <h1>Print Anytime, Anywhere: Hemat Waktu, Hemat Biaya!</h1>
          </div>
        </div>
        <div className="items-start grid lg:grid-cols-2 grid-cols-1 lg:text-start text-center">
          <div className="lg:ps-10 px-2">
            <p className="lg:text-2xl text-xl mb-5 font-semibold [text-shadow:_1px_3px_1px_rgb(255,255,255)]">
              Inovatif, cepat, dan praktis: SendMe Printing memenuhi kebutuhan
              cetak Anda. Layanan 24 jam, gratis delivery order di atas 10 ribu
            </p>
            <a
              href=""
              className="lg:text-lg text-sm inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-5 rounded-full"
            >
              Lihat Selengkapnya
            </a>
          </div>
        </div>
      </div>

      <div className="my-96 bg-sky-800 w-2 h-2"></div>
      <div className="my-96 bg-sky-800 w-2 h-2"></div>
    </>
  );
}
export default Hero;
