const Header = () => {
  return (
    <header
      className="text-white text-center py-5"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1>¡Pizzería Mamma Mía!</h1>
      <p>Las mejores pizzas artesanales directo desde el horno a tu mesa.</p>
    </header>
  )
}

export default Header