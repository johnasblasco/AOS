
const Example = () => {
      return (
            <div className="min-h-[270vh] flex flex-col gap-40 items-center mt-20">

                  <h1 className="text-6xl font-bolder text-gray-800">EXAMPLE</h1>
                  <div data-aos="fade-up"><p className="text-4xl text-white p-4 border-4 border-black bg-black/70">Fade Up</p></div>
                  <div data-aos="fade-up-right"><p className="text-4xl text-white p-4 border-4 border-black bg-black/70">Fade Up Right</p></div>
                  <div data-aos="flip-left"><p className="text-4xl text-white p-4 border-4 border-black bg-black/70">Flip left</p></div>
                  <div data-aos="flip-right"><p className="text-4xl text-white p-4 border-4 border-black bg-black/70">Flip Right</p></div>
                  <div data-aos="zoom-in-up"><p className="text-4xl text-white p-4 border-4 border-black bg-black/70">Zoom In Up</p></div>
                  <div data-aos="zoom-out-down"><p className="text-4xl text-white p-4 border-4 border-black bg-black/70">Zoom Out down</p></div>
            </div>
      )
}

export default Example