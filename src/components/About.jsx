// src/components/AboutSection.js

const AboutSection = () => {
  return (
    <>
      <div className="text-center font-mono" id="about">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-indigo-600 ">
          About <span className="text-gray-900">Us</span>
        </h3>
      </div>
      <div className="sm:flex items-center max-w-screen-xl font-mono mb-20 lg:mb-0 ">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" alt="hero" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              Tentang <span className="text-indigo-600">Perusahaan Kami</span>
            </h2>
            <p className="text-gray-700 font-medium text-lg text-justify">
              SendMe Printing merupakan sebuah inovasi jasa printing dengan
              menggunakan metode sending by message dan delivery order guna
              memudahkan konsumen dalam melakukan pemesanan percetakan. konsumen
              hanya perlu mengirim file via pesan singkat mengunakan aplikasi
              whatsapp. Sedangkan untuk delivery order, kami akan mengantarkan
              hasil print kepada konsumen secara langsung dan gratis apabila
              pemesanan di atas sepuluh ribu rupiah. SendMe printing ini
              beroperasional selama 24 jam. Tidak hanya itu, kami juga
              menyediakan beberapa layanan yang luar biasa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
