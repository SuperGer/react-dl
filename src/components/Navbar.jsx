const Navbar = ({ setView }) => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="d-flex gap-2">
        <button className="btn btn-outline-light">🍕 Home</button>

        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button
              className="btn btn-outline-light"
              onClick={() => setView('login')}
            >
              🔐 Login
            </button>

            <button
              className="btn btn-outline-light"
              onClick={() => setView('register')}
            >
              🔐 Register
            </button>
          </>
        )}
      </div>

      <button className="btn btn-outline-info">
        🛒 Total: ${total.toLocaleString('es-CL')}
      </button>
    </nav>
  )
}

export default Navbar
