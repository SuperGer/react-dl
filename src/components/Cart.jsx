import { useState } from 'react'
import { pizzaCart } from '../assets/pizzas'

const Cart = () => 
{
  const [cart, setCart] = useState(pizzaCart)

    const incrementar = (id) => {
        setCart(cart.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        ))
    }

    const disminuir = (id) => {
        const nuevoCarrito = cart.map((item) =>
            item.id === id
                ? { ...item, count: item.count - 1 }
                : item
            )
            .filter((item) => item.count > 0)

        setCart(nuevoCarrito)
    }

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0)


  return (
    <div className="container mt-4">
      <h2 className="mb-4">Carrito</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center justify-content-between border rounded p-3 mb-2"
        >
          <div className="d-flex align-items-center gap-3">
            <img src={item.img} alt={item.name} width="60" />
            <div>
              <div className="text-capitalize fw-bold">{item.name}</div>
              <div className="text-muted">
                ${item.price.toLocaleString('es-CL')}
              </div>
            </div>
          </div>

        <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-danger" onClick={() => disminuir(item.id)}>
                -
            </button>

            <span className="fw-bold">{item.count}</span>

            <button className="btn btn-outline-success" onClick={() => incrementar(item.id)}>
                +
            </button>
        </div>


        </div>
      ))}

      <hr />

      <h4>Total: ${total.toLocaleString('es-CL')}</h4>
      <button className="btn btn-dark mt-2">Pagar</button>
    </div>
  )
}

export default Cart