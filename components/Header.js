import Link from 'next/link'

export default function Header () {
  return(
    <div className="mt-4">
      <div className="flex lg:flex-row lg:items-center justify-between  container md:flex flex-col items-stretch  text-white text-base  pt-2">
        
        <div className="font-semibold border p-1 px-2">
          <p className="">iamfauzi16</p>
        </div>

        <div className="flex mb-4 lg:flex-row gap-2 md:flex flex-col  mt-4 ">
          <Link href="https://github.com/iamfauzi16" target="_blank" className='flex  lg:flex-row  md:flex flex-col'>  
            <button className="font-semibold p-2 px-4 hover:bg-indigo-800 rounded-lg  focus:ring-2 ring-indigo-600  bg-indigo-600">Github</button>
          </Link>
          <button className="font-semibold p-2 px-4 hover:bg-orange-800 rounded-lg  focus:ring-2 ring-indigo-600  bg-orange-600">Download</button>
        </div>
        
      </div>
  
    </div>
  )
}