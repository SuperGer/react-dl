const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card mb-4">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <ul className="list-unstyled">
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <p className="fw-bold">
          Precio: ${price.toLocaleString('es-CL')}
        </p>

        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-secondary">Ver más</button>
          <button className="btn btn-dark">Añadir</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza