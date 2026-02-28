import { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault()

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
        alert('Todos los campos son obligatorios.')
        return
    }
    if (password.length < 6) {
        alert('El password debe tener al menos 6 caracteres.')
        return
    }
    if (password !== confirmPassword) {
        alert('El password y su confirmación deben ser iguales.')
        return
    }
    alert('Registro exitoso ✅')
    }


    return (
    <div className="container mt-4">
      <h2 className="mb-3">Register</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu password"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirmar contraseña</label>
          <input
            className="form-control"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirma tu password"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Registrar
        </button>
      </form>
    </div>
  )
}

export default Register
