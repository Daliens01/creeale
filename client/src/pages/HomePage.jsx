import React from 'react'

const HomePage = () => {
    return (
        <>
      <h1>CreeAle</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Entrar
        </button>
        <p>
          Pagina de diseños con viniles de Alejandra
        </p>
      </div>
    </>
    );
}

export default HomePage;