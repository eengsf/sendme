import { CiUser } from "react-icons/ci";
function Faq() {
  return (
    <>
      <div className="py-4 bg-white font-mono font-semibold" id="faq">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <p className="mt-4 text-3xl leading-7 text-gray-500 font-regular">
              F.A.Q
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Frequently Asked{" "}
              <span className="text-indigo-600">Questions</span>
            </h3>
          </div>

          <div className="mt-20">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      width="30px"
                      fill="white"
                      height="30px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g data-name="Layer 2">
                        <g data-name="menu-arrow">
                          <rect
                            width="24"
                            height="24"
                            transform="rotate(180 12 12)"
                            opacity="0"
                          ></rect>
                          <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                          <circle cx="12" cy="19" r="1"></circle>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center rounded-xl">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Bagaimana proses pengiriman file melalui pesan singkat,
                      seperti WhatsApp, di SendMe Printing berlangsung?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start ">
                  <div className="bg-indigo-100 p-5 px-10 w-full flex items-center rounded-xl">
                    <p className="text-gray-700 text-sm">
                      Proses pengiriman file melalui pesan singkat di SendMe
                      Printing sangat mudah. Anda hanya perlu membuka aplikasi
                      WhatsApp, pilih kontak SendMe Printing, dan kirimkan file
                      yang ingin Anda cetak. Tim kami akan segera memprosesnya
                      dan memberikan konfirmasi melalui pesan singkat.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    {" "}
                    <CiUser className="w-7 h-7" />
                  </div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      width="30px"
                      fill="white"
                      height="30px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g data-name="Layer 2">
                        <g data-name="menu-arrow">
                          <rect
                            width="24"
                            height="24"
                            transform="rotate(180 12 12)"
                            opacity="0"
                          ></rect>
                          <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                          <circle cx="12" cy="19" r="1"></circle>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center rounded-xl">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Apa saja syarat dan ketentuan untuk mendapatkan pengiriman
                      hasil print secara gratis dari SendMe Printing?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-indigo-100 p-5 px-10 w-full flex items-center rounded-xl">
                    <p className="text-gray-700 text-sm">
                      Untuk mendapatkan pengiriman hasil print secara gratis
                      dari SendMe Printing, Anda perlu melakukan pemesanan
                      dengan nilai di atas sepuluh ribu rupiah. Jika pesanan
                      Anda memenuhi syarat ini, kami akan dengan senang hati
                      mengantarkan hasil print langsung ke lokasi yang Anda
                      tentukan tanpa biaya tambahan.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <CiUser className="w-7 h-7" />
                  </div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      width="30px"
                      fill="white"
                      height="30px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g data-name="Layer 2">
                        <g data-name="menu-arrow">
                          <rect
                            width="24"
                            height="24"
                            transform="rotate(180 12 12)"
                            opacity="0"
                          ></rect>
                          <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                          <circle cx="12" cy="19" r="1"></circle>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center rounded-xl">
                    <h4 className="text-md leading-6 font-medium text-gray-900 ">
                      Bagaimana proses pengiriman hasil print secara langsung
                      diatur oleh SendMe Printing?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-indigo-100 p-5 px-10 w-full flex items-center rounded-xl">
                    <p className="text-gray-700 text-sm">
                      Setelah hasil cetak selesai diproses, tim kami akan
                      menghubungi konsumen untuk mengatur waktu dan lokasi
                      pengiriman yang sesuai. Kami akan memastikan pengiriman
                      dilakukan dengan tepat waktu dan mengikuti syarat dan
                      ketentuan yang berlaku.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <CiUser className="w-7 h-7" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
