

function App() {
  return (
    <div className="flex flex-col my-0 mx-auto py-0 px-6 max-w-8xl">
      <header className="flex flex-row w-full p-4 justify-between items-center">
        <img src="./assets/Logo.svg" alt=""/>
        <nav>
          <ul className="flex space-x-4">
            <a href="/"  className="link-style">Inicio</a>
            <a href="/about" className="link-style">Sobre</a>
            <a href="/services" className="link-style">Serviços</a>
            <a href="/contact" className="link-style">Contato</a>
          </ul>
        </nav>
      </header>
      <section className=" rounded-2xl border-2 border-gray-200">
        <h1 className="text-center text-5xl font-bold"></h1>
      </section>
    </div>
  )
}

export default App
