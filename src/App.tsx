import logo from '../public/logo.svg';
import mainImage from '../public/main-image.svg';

function App() {
  return (
    <div className="flex flex-col my-0 mx-auto py-0 px-6 max-w-8xl">
      <header className="flex flex-row w-full px-6 py-8 justify-between items-center">
        <img src={logo} alt="" className='w-44'/>
        <nav>
          <ul className="flex space-x-16 items-center">
            <a href="/"  className="link-style">catalogue</a>
            <a href="/about" className="link-style">fashion</a>
            <a href="/services" className="link-style">favourite</a>
            <a href="/contact" className="link-style">lifestyle</a>
            <a href=""><button className='w-28 h-12 bg-zinc-950 text-white rounded-md uppercase font-medium'>sign up</button></a>
          </ul>
        </nav>
      </header>
      <section className="h-4xl rounded-3xl bg-neutral-100 flex items-center px-20 justify-center gap-28">
        <div className="flex flex-col justify-center h-full ">
          <h1 className='text-8xl leading-tight font-black uppercase'>
            <span className='pl-6 pr-20 bg-white text-left'>let's</span><br />
            <span className='pl-6'>explore</span><br />
            <span className='pl-6 pr-20 bg-yellow-200'>unique</span><br />
            <span className='pl-6'>clothes.</span><br />
          </h1>
          <p className='pl-6 text-xl'>Live for influential and innovative fashion!</p>
          <a href="" className='pl-6 flex mt-8'><button className='w-52 h-16 rounded-md bg-zinc-950 text-white font-medium text-xl'>Shop Now</button></a>
        </div>
        <div className="flex h-full items-end pl-10">
          <img src={mainImage} alt="" className='max-w-3xl'/>
        </div>
      </section>
    </div>
  )
}

export default App
