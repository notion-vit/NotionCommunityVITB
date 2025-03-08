import Marquee from "react-fast-marquee"

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Tech Innovators",
      logo: "https://www.financialexpress.com/wp-content/uploads/2023/05/APIS-and-NxtWave-image-37-3.jpg?height=80&width=150",
    },
    {
      id: 2,
      name: "Design Academy",
      logo: "https://cdn.prod.website-files.com/6651150a3e5f7d2718fd1e42/66755667971778e82d4d9447_TPF.png?height=80&width=150",
    },
    {
      id: 3,
      name: "XYZ Corporation",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/.xyz_logo.svg/2560px-.xyz_logo.svg.png?height=80&width=150",
    },
    {
      id: 4,
      name: "Upstop",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OasCt8V1ILpWp8Q4Cgr7w486JJyvBVBTuA&s?height=80&width=150",
    },
    {
      id: 5,
      name: "Upstop",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR90YS-tO1xZKhWg0eI7yhCsN8h9j54XmmMsjIXA6ry4XkiFTFldPELh-CYFxcOA36ctDs&usqp=CAU?height=80&width=150",
    },
    {
      id: 6,
      name: "Upstop",
      logo: "https://logovectordl.com/wp-content/uploads/2019/11/notion-labs-inc-logo-vector.png?height=80&width=150",
    },
  ]

  return (
    <section id="partners" className="py-16 px-6 md:px-12 lg:px-24 bg-transparent">
      <h2 className="text-2xl font-bold text-center mb-12">Our Partners</h2>
      <Marquee speed={40} loop={0}>
        {[...partners, ...partners].map((partner, index) => (
          <div key={index} className="flex flex-col items-center mx-6">
            <div className="w-48 md:w-56 grayscale hover:grayscale-0 transition duration-300 hover:scale-110">
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="w-full h-auto" />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  )
}

export default Partners

