This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


<div className='flex justify-center items-center mx-10' >
        <div className='bg-red-500 border-4 flex border-blue-500 absolute top-[14rem]
        sm:w-[1000px] sm:h-[350px] w-[382px] h-[283px] '>

            <div className=' bg-viol border-4 border-violet-200 rounded-l-xl max-h-[378px] max-w-[336]'>
              <div className='m-10 text-center px-10 '>
                <h1 className='text-xl font-bold mr-5'>Premium PRO</h1>
                <span className='block text-5xl font-bold my-3'>$329</span>
                <p className=' font-normal'>billed just once</p>
                <button className=' font-light text-md border m-5 px-5 rounded-xl text-white bg-violet-500'>
                  Get Started
                </button>
              </div >
            </div>

            <div className=' border-4 border-violet-200 rounded-r-xl max-h-[378px] max-w-[336]'>
              <div className='m-10'>
              <h1 className='font-light text-md ml-10'>Access these features when you get this pricing package for your business.</h1>
              <ul className='p-6 text-start '>

                <li className='flex place-items-center '>
                  <Image src={'/tick.svg'} alt='logo' width={100} height={100} 
                  className='h-[16px] w-[16px] mx-4 '/>
                   International calling and messaging API
                </li>

                <li className='flex place-items-center my-2'>
                  <Image src={'/tick.svg'} alt='logo' width={100} height={100} 
                  className='h-[16px] w-[16px] mx-4 '/>
                  Additional phone numbers
                </li>

                <li className='flex place-items-center '>
                  <Image src={'/tick.svg'} alt='logo' width={100} height={100} 
                  className='h-[16px] w-[16px] mx-4 '/>
                  Automated messages via Zapier
                </li>

                <li className='flex place-items-center my-2'>
                  <Image src={'/tick.svg'} alt='logo' width={100} height={100} 
                  className='h-[16px] w-[16px] mx-4 '/>
                  24/7 support and consulting
                </li>     
              </ul>
            </div>
          </div>

        </div>

          <div >
            <ul className='flex justify-center flex-wrap'>
              <li className='flex place-items-center w-52 font-semibold '>
                <Image src={'/icon2.svg'} alt='icon' width={100} height={100} 
                className='h-[40px] w-[40px] mr-4 '
              />30 days money back Guarantee
              </li>

              <li className='flex place-items-center mx-16 w-52 font-semibold '>
                <Image src={'/icon.svg'} alt='icon' width={100} height={100} 
                className='h-[40px] w-[40px] mr-4 '
              />30 days money back Guarantee
              </li>

              <li className='flex place-items-center w-52 font-semibold '>
                <Image src={'/icon1.svg'} alt='icon' width={100} height={100} 
                className='h-[40px] w-[40px] mr-4 '
              />30 days money back Guarantee
              </li>
            </ul>
          </div>
        </div>