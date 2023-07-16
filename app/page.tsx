
"use client"

const productBox = (src: string, title: string, price: string, discount?: string) => (
  <div className='bg-slate-200 w-[90vw] max-w-[400px] pb-[20px] px-[50px] self-center'>
    <img src={src} alt="null image source!"/>
    <div className='flex justify-between'>
      <p>{title}</p>
      <h6 className='font-bold'>${price}<br /><del className='text-slate-700 text-[12px]'>{discount && `$${discount}`}</del></h6>
    </div>
  </div>
)

const star = () => (
  <img src="./img/star.webp" alt="null image source!" className='w-[30px]' />
)

const comment = (name: string, starCount: number, message: string) => (
  <div className={`bg-slate-200 w-[90vw] max-w-[400px] p-[20px] px-[50px] self-center`}>
    <h6 className='text-xl font-bold'>{name}</h6>
    <div className='flex my-[10px]'>
      {Array(starCount).fill(null).map((_, index) => (
        <div key={index}>
          {star()}
        </div>
      ))}
    </div>
    <p>{message}</p>
  </div>
)

export default function Homepage() {
  return (
    <main>
      <header className='w-full flex flex-col-reverse items-center lg:flex-row lg:h-[95vh]'>
        <div className=' lg:w-[50%] h-full flex flex-col justify-center pl-[5vw] gap-[30px]'>
          <h1 className="text-6xl font-bold">HYPERX SALE</h1>
          <h1 className="text-5xl font-bold text-purple-600">50% OFF</h1>
          <p className='max-w-[80%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, sequi!</p>
          <a href="#product" className='p-[5px] bg-slate-300 w-[150px] text-center rounded-[5px]'>BUY NOW</a>
        </div>
        <img src="./img/hyper32.webp" alt="null image source!" className='max-w-[80%]'
        />
      </header>

      <div className='flex justify-around bg-purple-600 p-[20px] mt-[100px] text-white text-[2vw] font-extrabold overflow-x-scroll'>
        <h3>NVIDIA</h3>
        <h3>INTEL</h3>
        <h3>HYPERX</h3>
        <h3>AMD</h3>
        <h3>KINGSTON</h3>
        <h3>ADATA</h3>
      </div>

      <main className='flex flex-col gap-[200px] mt-[100px]'>

        <section id='best' className='flex justify-center gap-7 flex-wrap'>
          <h2 className='text-3xl w-full text-center'>BEST <span className='text-purple-600'>SELLERS</span></h2>
          {productBox('./img/hyper32.webp', 'DDR4 HyperX RGB 2x8GB', '59.99')}
          {productBox('./img/hyper32.webp', 'DDR4 HyperX RGB 2x16GB', '99.99')}
          {productBox('./img/hyper32.webp', 'DDR4 HyperX RGB 2x32GB', '174.99', '200.00')}
        </section>

        <section id='product' className='flex justify-center gap-7 flex-wrap'>
          <h2 className='text-3xl w-full text-center'>ALL  <span className='text-purple-600'>PRODUCTS</span></h2>
          {productBox('./img/hyper32.webp', 'DDR4 HyperX RGB 2x8GB', '59.99')}
          {productBox('./img/hyper32.webp', 'DDR4 HyperX RGB 2x16GB', '99.99')}
          {productBox('./img/hyper32.webp', 'DDR4 HyperX RGB 2x32GB', '174.99')}
          {productBox('./img/RTX4070TI.webp', 'MSI RTX4070 TI 8GB VENTUS', '699.99')}
          {productBox('./img/RTX4070TI.webp', 'MSI RTX4070 TI 12GB VENTUS', '1099.99')}
          {productBox('./img/RTX4070TI.webp', 'MSI RTX4070 TI 24GB VENTUS', '1699.99')}
        </section>

        <section id='comment' className='flex justify-center gap-7 flex-wrap'>
          <h2 className='text-3xl w-full text-center'>TOP  <span className='text-purple-600'>COMMENTS</span></h2>
          {comment('Kevin Renald', 5, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem illo eveniet commodi reiciendis at,obcaecati iste fugiat maxime sapiente. Voluptates a quae sit aperiam perferendis assumenda odit quam fuga commodi?')}
          {comment('Jackson Star', 5, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem illo eveniet commodi reiciendis at,obcaecati iste fugiat maxime sapiente. Voluptates a quae sit aperiam perferendis assumenda odit quam fuga commodi?')}
          {comment('Fernando', 5, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem illo eveniet commodi reiciendis at,obcaecati iste fugiat maxime sapiente. Voluptates a quae sit aperiam perferendis assumenda odit quam fuga commodi?')}
        </section>

        <section className='flex justify-center gap-7 flex-wrap'>
          <div className='flex flex-wrap text-center w-[90vw] max-w-[400px] p-4 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className='w-[100px] h-[100px] fill-purple-600'>
              {safeIcon()}
            </svg>
            <h3 className='w-full font-semibold text-xl'>Safe</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorem dicta dolor id delectus aliquam beatae ipsum voluptate ab eligendi!</p>
          </div>
          <div className='flex flex-wrap text-center w-[90vw] max-w-[400px] p-4 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 700 512" className='w-[100px] h-[100px] fill-purple-600'>
              {trustedIcon()}
            </svg>
            <h3 className='w-full font-semibold text-xl'>Trusted</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorem dicta dolor id delectus aliquam beatae ipsum voluptate ab eligendi!</p>
          </div>
          <div className='flex flex-wrap text-center w-[90vw] max-w-[400px] p-4 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 700 512" className='w-[100px] h-[100px] fill-purple-600'>
              {fastIcon()}
            </svg>
            <h3 className='w-full font-semibold text-xl'>Fast Delivery</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dolorem dicta dolor id delectus aliquam beatae ipsum voluptate ab eligendi!</p>
          </div>
        </section>
      </main>
    </main>
  )
}

const safeIcon = () => (
  <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
)

const fastIcon = () => (
  <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
)

const trustedIcon = () => (
  <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
)