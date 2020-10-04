import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.scss';


const CollectionPreview = ({ title, items }) => (
   <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
         {items
            .filter((item, count) => count < 4) // prview only 4 items of each type
            .map(({ id, ...otherItemProps }) => (
               <CollectionItem key={id} {...otherItemProps} />
            ))}
      </div>
   </div>
);

export default CollectionPreview;