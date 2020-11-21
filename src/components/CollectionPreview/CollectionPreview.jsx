import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.scss';


const CollectionPreview = ({ title, items, routeName, history, match }) => (
   <div className="collection-preview">
      <h1 className="title" onClick={() => history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</h1>
      <div className="preview">
         {items
            .filter((item, count) => count < 4) // prview only 4 items of each type
            .map(item => (
               <CollectionItem key={item.id} item={item} />
            ))}
      </div>
   </div>
);

export default withRouter(CollectionPreview);