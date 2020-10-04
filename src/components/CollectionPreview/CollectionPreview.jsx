import React from 'react';


const CollectionPreview = ({ title, items }) => (
   <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
         {items
            .filter((item, count) => count < 4) // prview only 4 items of each type
            .map(item => (
               <div key={item.id}>
                  {item.name}
               </div>
            ))}
      </div>
   </div>
);

export default CollectionPreview;