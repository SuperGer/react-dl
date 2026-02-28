import { useEffect, useState } from 'react'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)

 useEffect(() => {
  const getPizza = async () => {
    try {
      const res = await fetch('/api/pizzas/p001')
      console.log('STATUS:', res.status)

      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const data = await res.json()
      console.log('DATA:', data)

      setPizza(data)
    } catch (err) {
      console.log('ERROR FETCH PIZZA:', err)
    }
  }

  getPizza()
}, [])

  if (!pizza) return <p className="text-center mt-5">Cargando pizza...</p>

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </div>

        <div className="col-md-6">
          <h2 className="text-capitalize">{pizza.name}</h2>
          <p>{pizza.desc}</p>

          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ing, i) => (
              <li key={i}>🍕 {ing}</li>
            ))}
          </ul>

          <h4>${pizza.price.toLocaleString('es-CL')}</h4>

          <button className="btn btn-dark">Añadir</button>
        </div>
      </div>
    </div>
  )
}

export default Pizza