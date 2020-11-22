import React from 'react'
import { connect } from 'react-redux';
import { addItem } from './../../redux/cart/cartActions';

// styled components
import { CollectionItemContainer, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer, AddButton } from './CollectionItem.styles';

const CollectionItem = ({ item, addItem }) => {
   const { id, name, price, imageUrl } = item;

   return (
      <CollectionItemContainer key={id}>
         <BackgroundImage imageUrl={imageUrl} />

         <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>${price}</PriceContainer>
         </CollectionFooterContainer>

         <AddButton inverted onClick={() => addItem(item)}>
            Add to cart
         </AddButton>
      </CollectionItemContainer>
   );
};


const mapDispatchToProps = dispatch => ({
   addItem: item => dispatch(addItem(item))
});


export default connect(null, mapDispatchToProps)(CollectionItem);