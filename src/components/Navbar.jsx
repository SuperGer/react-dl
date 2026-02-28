import { Link } from 'react-router-dom'

const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="d-flex gap-2">
        <Link className="btn btn-outline-light" to="/">
          🍕 Home
        </Link>

        {token ? (
          <>
            <Link className="btn btn-outline-light" to="/profile">
              🔓 Profile
            </Link>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light" to="/login">
              🔐 Login
            </Link>
            <Link className="btn btn-outline-light" to="/register">
              🔐 Register
            </Link>
          </>
        )}
      </div>

      <Link className="btn btn-outline-info" to="/cart">
        🛒 Total: ${total.toLocaleString('es-CL')}
      </Link>
    </nav>
  )
}

export default Navbar
