import Marquee from "react-fast-marquee"

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Shivansh Garg",
      role: "Founder Imprfct",
      image: "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb3432003736e76dbf/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=150&width=150",
    },
    {
      id: 2,
      name: "Prince Sharma",
      role: "Community @Notion",
      image: "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb34240008f8ae797d/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=150&width=150",
    },
    {
      id: 3,
      name: "Satish Rajamani",
      role: " Investor, Startup Mentor",
      image: "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb3419001c53a336fb/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=150&width=150",
    },
    {
      id: 4,
      name: "Soumen Banerjee ",
      role: "General Manager at PW School of Startups",
      image: "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb340f001257702412/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=150&width=150",
    },
    {
      id: 5,
      name: "Dr. Gajendra Purohit",
      role: "Founder @MathsCare , YouTuber",
      image: "https://cloud.appwrite.io/v1/storage/buckets/67cb1acf001bdb8c4c45/files/67cb33fa0016aec97f5f/view?project=67cb1a5d0022c5a29d3c&mode=admin?height=150&width=150",
    },
  ]

  return (
    <section id="speakers" className="py-16 px-6 md:px-12 lg:px-24 bg-transparent">
      <h2 className="text-2xl font-bold text-center mb-12">Our Speakers</h2>
      <Marquee speed={40} loop={0}>
        {[...speakers, ...speakers].map((speaker, index) => (
          <div key={index} className="flex flex-col items-center mx-6">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 transition-all duration-300 hover:scale-110 hover:shadow-xl">
              <img
                src={speaker.image || "/placeholder.svg"}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-medium text-center">{speaker.name}</h3>
            <p className="text-sm text-gray-600 text-center">{speaker.role}</p>
          </div>
        ))}
      </Marquee>
    </section>
  )
}

export default Speakers

