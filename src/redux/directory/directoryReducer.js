const INITIAL_STATE = {
   sections: [
      {
         id: 1,
         title: 'jackets',
         linkUrl: 'shop/jackets',
         imageUrl: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      },
      {
         id: 2,
         title: 'sneakers',
         linkUrl: 'shop/sneakers',
         imageUrl: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
      },
      {
         id: 3,
         title: 'hair-care',
         linkUrl: 'shop/haircare',
         imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=871&q=80'
      },
      {
         id: 4,
         title: 'shirts',
         linkUrl: 'shop/shirts',
         imageUrl: 'https://images.unsplash.com/photo-1565366896067-3e7b52d395e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80',
         size: 'large'
      },
      {
         id: 5,
         title: 'watches',
         linkUrl: 'shop/watches',
         imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
         size: 'large'
      }
   ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      default:
         return state;
   }
};

export default directoryReducer;