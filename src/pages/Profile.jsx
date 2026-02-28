const Profile = () => {
  const email = 'usuario@correo.cl'

  return (
    <div className="container mt-5">
      <h2 className="mb-3">👤 Perfil</h2>

      <p className="mb-3">
        Email: <strong>{email}</strong>
      </p>

      <button className="btn btn-dark">Cerrar sesión</button>
    </div>
  )
}

export default Profile