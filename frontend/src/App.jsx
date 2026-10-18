import { useState, useEffect } from 'react'

function App() {
  const [mensaje, setMensaje] = useState('Cargando...')

  useEffect(() => {
    fetch('http://localhost:3000/api/saludo')
      .then((respuesta) => respuesta.json())
      .then((datos) => setMensaje(datos.mensaje))
      .catch(() => setMensaje('No se pudo conectar con el backend'))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h3>Mi primer proyecto con Node y React, Saul es hacker</h3>
      <p>{mensaje}</p>
    </div>
  )
}

export default App
