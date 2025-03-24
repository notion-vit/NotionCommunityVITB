import Marquee from "react-fast-marquee"

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Shivansh Garg",
      role: "Founder Imprfct",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/16.jpg?raw=true?height=150&width=150",
    },
    {
      id: 2,
      name: "Prince Sharma",
      role: "Community @Notion",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/15.jpg?raw=true?height=150&width=150",
    },
    {
      id: 3,
      name: "Satish Rajamani",
      role: " Investor, Startup Mentor",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/14.jpg?raw=true?height=150&width=150",
    },
    {
      id: 4,
      name: "Soumen Banerjee ",
      role: "General Manager at PW School of Startups",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/13.jpg?raw=true?height=150&width=150",
    },
    {
      id: 5,
      name: "Dr. Gajendra Purohit",
      role: "Founder @MathsCare , YouTuber",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/11.jpg?raw=true&mode=admin?height=150&width=150",
    },
  ]

  return (
    <section id="speakers" className="py-16 px-6 md:px-12 lg:px-24 bg-transparent">
      <h2 className="text-2xl font-bold text-center mb-12">Our Speakers</h2>
      <Marquee speed={40} loop={0}>
        {[...speakers, ...speakers].map((speaker, index) => (
          <div key={index} className="flex flex-col items-center mx-6">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 transition-all duration-300 hover:shadow-xl group">
              <img
                src={speaker.image || "/placeholder.svg"}
                alt={speaker.name}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
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

