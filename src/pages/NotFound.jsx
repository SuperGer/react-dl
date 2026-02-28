import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-3">404 🍕</h1>
      <p className="mb-4">Oh oh! Esta página no existe…</p>

      <Link to="/" className="btn btn-dark">
        Volver al Home
      </Link>
    </div>
  )
}

export default NotFound