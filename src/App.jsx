import Saludo from "./components/Saludo"

function App() {
  const amigo="amigo mio"
  return (
    <>
      <Saludo amigoProp={amigo}></Saludo>
    </>
  )
}

export default App
