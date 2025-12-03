import React, { useState } from 'react';
import './App.scss';
import Cupcake from './Cupcake'; 

import cupcakeImage1 from './assets/cupcake1.png';
import cupcakeImage2 from './assets/cupcake2.png';
import cupcakeImage3 from './assets/cupcake3.png';

const PRECOS = {
  1: 26.30, 
  2: 32.50,
  3: 40.00
};

const CUPCAKES_DATA = [
 
 { id: 1, label: 'Cupcake Rosa', imageUrl: cupcakeImage1 },
  { id: 2, label: 'Cupcake Azul e Rosa', imageUrl: cupcakeImage2 },
{ id: 3, label: 'Cupcake Cereja', imageUrl: cupcakeImage3 },
];

function calcularTotal(quantidades) {
  let total = 0;
  
  for (const id in quantidades) {
    const quantidade = quantidades[id];
    const preco = PRECOS[id];
    
    total += quantidade * preco;
  }

  return total.toFixed(2).replace('.', ','); 
}

function App() {
  const [quantities, setQuantities] = useState({ 1: 0, 2: 0, 3: 0 });

  const handleQuantityChange = (id, newQuantity) => {
    const quantidadeLimpa = Math.max(0, parseInt(newQuantity) || 0); 
    
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: quantidadeLimpa
    }));
  };

  const handleReset = () => {
    setQuantities({ 1: 0, 2: 0, 3: 0 });
  };

  const totalValue = calcularTotal(quantities);

  return (
    <div className="container-single"> 
      <div className="calculator-section">
        <div className="header">
          <h2>calculadora de cupcake</h2>
          <button className="reset-button" onClick={handleReset}>Resetar</button>
        </div>
        
        <div className="cupcakes-grid">
          {CUPCAKES_DATA.map(cupcake => (
            <Cupcake 
              key={cupcake.id}
              id={cupcake.id}
              price={PRECOS[cupcake.id]}
              imageUrl={cupcake.imageUrl}
              currentQuantity={quantities[cupcake.id]}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </div>

        <div className="total-display">
          Valor total: **R$ {totalValue}**
        </div>
      </div>
    </div>
  );
}

export default App;