import Image from 'next/image'

export default function Home() {
  return (
   <>
      <div className='bg-white grid relative h-[100%] w-[100%] p-0 m-0'>

        <div className='bg-violet-700 w-full h-96 absolute top-0 left-0 m-0'>
          <div className='text-start sm:text-center mt-20 mx-4 sm:mt-28'>
            <h1 className=' text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>
              Simple pricing for your business
            </h1>
            <p className='text-md text-xl mt-6 sm:text-xl lg:text-2xl text-white font-light'>
              Plans that are carefully crafted to suit your business.
            </p>
          </div>
        </div>

        <div className='flex flex-wrap absolute justify-self-center top-[18rem] bg-white rounded-xl sm:w-[600px] 
            sm:h-[350px] max-w-[1000px] lg:w-[900px] lg:h-[336px] w-[382px] h-[606px] mx-52 shadow-xl '>
          <div className='sm:basis-1/3 bg-violet-100 sm:h-full lg:h-[336px] sm:rounded-l-xl flex 
            justify-center items-center w-[382px] h-[283px] basis-100 rounded-t-xl'>
           <div className='text-center '>
            <h1 className='text-xl font-bold my-2'>Premium PRO</h1>
                <span className='block text-5xl font-semibold '>$329</span>
                <p className=' font-light text-lg'>billed just once</p>
                <button className='border bg-violet-500 text-white sm:px-8 lg:px-16 
                  py-1 my-4 rounded-xl px-16'>
                  Get Started
                </button>
          </div>
        </div>

        <div className=' sm:basis-2/3 rounded-r-xl sm:h-full flex justify-center items-center'>
          <div className='p-10'>
              <h1 className='text-gray-700 text-lg font-normal flex mb-4 '>Access these features when you get this pricing package for your business.</h1>
              <ul className=''>
                <li className='flex justify-start items-center my-4 '>
                  <Image src={'/tick.svg'} alt='logo' width={100} height={100} 
                  className='h-[16px] w-[16px] mr-4 '/>
                   International calling and messaging API
                </li>

                <li className='flex justify-start items-center '>
                  <Image src={'/tick.svg'} alt='logo' width={100} height={100} 
                  className='h-[16px] w-[16px] mr-4 '/>
                  Additional phone numbers
                </li>

                <li className='flex justify-start items-center my-4'>
                  <Image src={'/tick.svg'} alt='logo' width={100} height={100} 
                  className='h-[16px] w-[16px] mr-4  '/>
                  Automated messages via Zapier
                </li>

                <li className='flex justify-start items-center'>
                  <Image src={'/tick.svg'} alt='logo' width={100} height={100} 
                  className='h-[16px] w-[16px] mr-4  '/>
                  24/7 support and consulting
                </li>     
              </ul>
            </div>
          </div>
        </div>

        <div className='absolute flex top-[42rem] max-w-4xl justify-self-center items-center sm:mt-10 '>
          <ul className='grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1
                justify-center items-center gap-8 sm:gap-14 lg:gap-6 sm:w-[600px] lg:w-[800px] mt-64 mb-40 sm:mb-10 sm:mt-0'>
              <li className='flex font-semibold '>
                <Image src={'/icon2.svg'} alt='icon' width={100} height={100} 
                className='h-[40px] sm:w-[40px] mr-3'/>
              <p className='max-w-[300px] sm:w-[220px] mt-2 sm:m-0'>30 days money back Guarantee</p>
              </li>

              <li className='flex sm:mx-4 font-semibold '>
                <Image src={'/icon.svg'} alt='icon' width={100} height={100} 
                className='h-[40px] sm:w-[40px] mr-3 '/>
              <p className='max-w-[300px] sm:w-[220px] mt-2 sm:m-0'>No setup fees 100% hassle-free</p>
              </li>

              <li className='flex font-semibold sm:justify-self-center lg:justify-normal sm:col-span-2 lg:col-span-1 '>
                <Image src={'/icon1.svg'} alt='icon' width={100} height={100} 
                className='h-[40px] sm:w-[40px] mr-3'/>
              <p className='max-w-[280px] sm:w-[220px] mt-2 sm:m-0'>No monthly subscription Pay once and for all</p>
              </li>
          </ul>
        </div>

      </div>

   </>
  )
}
