import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';
// styled components
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './CollectonPreview.styles';


const CollectionPreview = ({ title, items, routeName, history, match }) => (
   <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.url}/${routeName}`)}>
         {title.toUpperCase()}
      </TitleContainer>

      <PreviewContainer>
         {items
            .filter((item, count) => count < 4) // prview only 4 items of each type
            .map(item => (
               <CollectionItem key={item.id} item={item} />
            ))}
      </PreviewContainer>
   </ CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);