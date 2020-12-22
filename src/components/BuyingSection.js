import React from 'react';

function BuyingSection({ shoe }) {
  const shoeSizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12]

  return (
    <div>
      <div>{shoe.price}</div>
      <div>{shoe.name}</div>
      <div>Select Size</div>
      <div style={{ width: 350 }}>
        <div className="row">
          {shoeSizes.map((size, i) => (
            <div className="col-4 p-2" key={i}>
              <div style={{ padding: '5px 15px', fontSize: '16' }}>
                {size}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{background : '#333', padding : '15px 0px', width : '100%', borderRadius: '50%', margin : '15px 0px'}}>Add to Cart</div>
      <div style={{border : '1px solid #333', padding : '15px 0px', width : '100%', borderRadius: '50%', margin : '15px 0px'}}>Favourite</div>
    </div>
  );
}

export default BuyingSection;