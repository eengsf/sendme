import { useState } from "react";

const Testimonial = () => {
  const [testimonialActive, setTestimonialActive] = useState(2);

  return (
    <>
      <div className="text-center font-mono my-12" id="testimony">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Testimony
        </h3>
      </div>
      <div className=" my-10 md:my-24 container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
        <div className="relative w-full py-2 md:py-24 bg-indigo-700 md:w-1/2 flex flex-col item-center justify-center">
          <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>

          <div className=" relative text-2xl md:text-5xl py-2 px-5 md:py-6 md:px-1 md:w-64 md:mx-auto text-indigo-100 font-semibold leading-tight tracking-tight mb-0 z-20">
            <span className="md:block">What Our</span>
            <span className="md-block">Customers</span>
            <span className="block">Are Saying!</span>
          </div>

          <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block">
            <button
              className="rounded-l-full border-r bg-gray-100 text-gray-500 focus:outline-none hover:text-indigo-500 font-bold w-12 h-10"
              onClick={() =>
                setTestimonialActive(
                  testimonialActive === 1 ? 3 : testimonialActive - 1
                )
              }
            >
              &#8592;
            </button>
            <button
              className="rounded-r-full bg-gray-100 text-gray-500 focus:outline-none hover:text-indigo-500 font-bold w-12 h-10"
              onClick={() =>
                setTestimonialActive(
                  testimonialActive >= 3 ? 1 : testimonialActive + 1
                )
              }
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="bg-gray-100 md:w-1/2 font-mono">
          <div className="flex flex-col h-full relative">
            <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16"
                viewBox="0 0 24 24"
              >
                <path d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35c.208-.086.39-.16.539-.222c.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539c.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35c.208-.086.39-.16.539-.222c.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539c.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
              </svg>
            </div>

            <div className="h-full relative z-10">
              {testimonialActive === 1 && (
                <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                  Terkait dengan sistem antarnya yang ramah, saya ingin
                  menambahkan bahwa pelayanan dari tim mereka sangat memuaskan.
                  Mereka benar-benar peduli dengan kebutuhan pelanggan dan
                  selalu siap membantu dengan senyum. Pengalaman saya dengan
                  sistem ini sungguh menyenangkan!
                </p>
              )}

              {testimonialActive === 2 && (
                <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                  Dengan layanan cetak hingga larut malam, hal ini sangat
                  membantu saya dalam menyelesaikan praktikum. Saya benar-benar
                  mengapresiasi fleksibilitas waktu mereka, memberi kemudahan
                  bagi mahasiswa seperti saya yang seringkali harus mengerjakan
                  praktikum hingga larut malam!
                </p>
              )}

              {testimonialActive === 3 && (
                <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                  Mengirimkan file lewat chat, terus tinggal ambil, adalah
                  kemudahan luar biasa. Saya tak perlu repot-repot pergi ke
                  tempat fisik atau menunggu lama untuk mendapatkan dokumen
                  penting. Layanan ini sungguh menghemat waktu dan sangat
                  efisien. Terima kasih atas kemudahan ini!
                </p>
              )}
            </div>

            <div className="flex my-4 justify-center items-center">
              <button
                onClick={() => setTestimonialActive(1)}
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${
                  testimonialActive !== 1
                    ? "h-12 w-12 opacity-25 bg-indigo-300 text-gray-600"
                    : "h-16 w-16 opacity-100 bg-indigo-600 text-white"
                }`}
              >
                RP
              </button>
              <button
                onClick={() => setTestimonialActive(2)}
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-16 w-16 inline-block rounded-full mx-2 ${
                  testimonialActive !== 2
                    ? "h-12 w-12 opacity-25 bg-indigo-300 text-gray-600"
                    : "h-16 w-16 opacity-100 bg-indigo-600 text-white"
                }`}
              >
                MF
              </button>
              <button
                onClick={() => setTestimonialActive(3)}
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-12 w-12 inline-block rounded-full mx-2 ${
                  testimonialActive !== 3
                    ? "h-12 w-12 opacity-25 bg-indigo-300 text-gray-600"
                    : "h-16 w-16 opacity-100 bg-indigo-600 text-white"
                }`}
              >
                MR
              </button>
            </div>

            <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
              {testimonialActive === 1 && (
                <div className="text-center">
                  <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">
                    Rizky Putra Awalia Siska
                  </h2>
                  <small className="text-gray-500 text-xs md:text-sm truncate">
                    Mahasiswa
                  </small>
                </div>
              )}

              {testimonialActive === 2 && (
                <div className="text-center">
                  <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">
                    M Farhan Wibisana
                  </h2>
                  <small className="text-gray-500 text-xs md:text-sm truncate">
                    Mahasiswa
                  </small>
                </div>
              )}

              {testimonialActive === 3 && (
                <div className="text-center">
                  <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">
                    M. Riki Setiawan
                  </h2>
                  <small className="text-gray-500 text-xs md:text-sm truncate">
                    Mahasiswa
                  </small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
