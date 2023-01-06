const header = {
  name: "Fauzi",
  title: "Tech Enthusiastic",
  desc : "I'm a tech enthusiast. I like design, programming, automation and networking"
}


export default function Banner() {
  
  return(
    <div className="lg:flex lg:flex-col lg:justify-center lg:items-center mt-16  container w-full  rounded-xl">
      <div>
        <p className="text-2xl font-light">Hello, <span className="font-semibold">I'm {header.name}</span> - {header.title}</p>
      </div>
      <div>
        <p className="font-light">{header.desc}</p>
      </div>
    </div>
  )
}