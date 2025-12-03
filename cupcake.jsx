import React from 'react';

function Cupcake(props) {
  const { id, price, imageUrl, currentQuantity, onQuantityChange } = props;
  
  const formattedPrice = `R$ ${price.toFixed(2).replace('.', ',')}`;
  
  const handleChange = (event) => {
    onQuantityChange(id, event.target.value);
  };

  return (
    <div className="cupcake-card">
      <div className="cupcake-image-wrapper">
          <img src={imageUrl} alt={`Cupcake ${id}`} className="cupcake-image"/>
      </div>
      
      <div className="cupcake-info">
        <div className="info-row">
          <span className="label">Quantidade</span>
          <span className="price">{formattedPrice}</span>
        </div>
        
        <input 
          type="number"
          min="0"
          value={currentQuantity}
          onChange={handleChange}
          className="quantity-input"
        />
      </div>
    </div>
  );
}

export default Cupcake;