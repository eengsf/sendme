
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      {/* https://source.unsplash.com/1000x600?computer */}
      <Navbar />

      <div className="h-screen bg-[url('/public/book2.png')] bg-cover lg:bg-center bg-right grid lg:grid-rows-2">
        <div className='lg:items-end lg:text-start items-center text-center grid lg:grid-cols-2 grid-cols-1 [text-shadow:_1px_3px_1px_rgb(255,255,255)]'>
          <div className='lg:p-10 lg:text-6xl text-3xl px-6 lg:font-semibold font-bold'>
            <h1>Digital Marketing Agency Terbaik di Indonesia</h1>
          </div>
        </div>
        <div className='items-start grid lg:grid-cols-2 grid-cols-1 lg:text-start text-center'>
          <div className='lg:ps-10 px-2'>
            <p className='lg:text-2xl text-xl mb-5 font-semibold [text-shadow:_1px_3px_1px_rgb(255,255,255)]'>Kami dapat membantu Anda mengembangkan bisnis di dunia online sehingga dapat menjangkau lebih banyak pelanggan
            </p>
            <a href="" className='lg:text-lg text-sm inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-5 rounded-full'>Lihat Selengkapnya</a>
          </div>
        </div>
      </div>

      <div className='my-96 bg-sky-800 w-2 h-2'></div>
      <div className='my-96 bg-sky-800 w-2 h-2'></div>
    </>
  )
}

export default App
