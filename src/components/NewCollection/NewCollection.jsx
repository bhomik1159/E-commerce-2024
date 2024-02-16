import React from 'react';
import "./newcollection.css";
import New_Collection from '../assets/data';
import Item from '../Item/Item';

const NewCollection = () => {
  return (
    <div className='new-collections'>
      <h1>New collections</h1>
      <hr/>
    <div className='collections'>
    {New_Collection.map((item)=>{
        return <Item
            key={item.id}
            id={item.id}
            name={item.name}
            brand={item.brand}                        
            type={item.type}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
        />
    })};

    </div>
    </div>
  )
}

export default NewCollection
