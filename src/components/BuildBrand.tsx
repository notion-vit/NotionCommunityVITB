import type React from "react"

const BuildBrand: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4">
            Build Your
            <br />
            Brand
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Learn how to establish your personal brand and stand out in today's competitive environment.
          </p>
          <button className="border border-black px-4 py-1 text-sm rounded-md">Learn More</button>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative z-10">
            <img
              src="/placeholder.svg?height=350&width=450"
              alt="Build your brand"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
          <div className="absolute top-8 -right-8 z-0">
            <img
              src="/placeholder.svg?height=350&width=450"
              alt="Brand illustration"
              className="w-full h-auto rounded-md shadow-lg opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildBrand

