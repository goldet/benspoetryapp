import Image from 'next/image'
import benphoto2 from '../public/benphoto2.jpg'

export default function Homepage() {
  return <>

  {/* fix md view */}

  <div className='lg:flex lg:flex-row lg:justify-between lg:p-40 lg:pt-36'>
  <div className='lg:flex lg:flex-col lg:p-12'>
  <h1 className="pt-20 text-2xl flex flex-col items-center">Ben Schroeder</h1>
  <h2 className="text-xl text-center text-slate-900">Poet</h2>
  
  </div>

  <div className="lg:flex lg:flex-row">
  <Image
  className="p-10 pt-5 rounded-md"
  src={benphoto2}
  alt="image of Ben Schroeder"
  width="300px"
  height="300px"></Image>
  </div>
  </div>
  
  </>
}
