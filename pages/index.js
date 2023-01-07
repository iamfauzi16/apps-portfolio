import Banner from '../components/Banner'
import Navbar from '../components/Header'
import axios from 'axios'
import Link from 'next/link'


export default function Home({shots}) {
 
  return(
    <div className="font-sans text-2xl text-white">
      <Navbar/>
      <Banner/>
      <div className="container flex flex-col mt-16">
        <div className="flex flex-row justify-between items-center pr-7">
          <h3 className="px-6 text-3xl font-semibold">Design on <span className='bg-indigo-500 px-2 rounded-lg'>dribbble</span></h3>  
        </div>
        <div className="container mt-8 flex flex-wrap gap-4 justify-center items-stretch">
          {shots.map((shot)=> {
            // const add = filter(`${shot.tag}`)
            const date = `${shot.published_at}`
            const formated = new Date(date).toLocaleDateString()

            return(
              <div key={shot.id}>
                <Link href={shot.html_url} target="_blank" >
                    <div className="flex flex-col border-2 p-2 w-full md:w-72 text-base rounded-xl hover:border-indigo-700">
                      <img src={shot.images.normal} alt="img" className="rounded-lg"/>
                      <div className="flex flex-col  bg-neutral-900 mt-4 p-2 rounded-lg">
                        <p className="font-semibold uppercase">{shot.title}</p>
                        <p className="text-xs bg-orange-500 w-16 p-1 rounded-md mt-4 font-semibold text-center">{formated}</p>
                        {/* <p className="text-xs">{add}</p> */}
                      </div>
                    </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className="container flex justify-center items-center p-4 mt-8">
      
        <p className="text-sm border p-1">Copyright 2023 👌</p>
      </div>

    </div>
  )
}

export async function getStaticProps() {
  
  const res = await axios.get(`${process.env.API_URL}access_token=${process.env.TOKEN}`)

  return {
    props: {
      shots: res.data
    }
  }
}

