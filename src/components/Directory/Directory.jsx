import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';


class Directory extends React.Component {
   constructor() {
      super();

      this.state = {
         sections: [
            {
               id: 1,
               title: 'jackets',
               imageUrl: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
               id: 2,
               title: 'shoes',
               imageUrl: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
            },
            {
               id: 3,
               title: 'hair-care',
               imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=871&q=80'
            },
            {
               id: 4,
               title: 'shirts',
               imageUrl: 'https://images.unsplash.com/photo-1565366896067-3e7b52d395e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80',
               size: 'large'
            },
            {
               id: 5,
               title: 'watches',
               imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
               size: 'large'
            }
         ]
      };
   };

   render() {
      return (
         <div className="directory-menu">
            {this.state.sections.map(section => (
               <MenuItem
                  key={section.id}
                  title={section.title}
                  imageUrl={section.imageUrl}
                  size={section.size}
               />
            ))}
         </div>
      );
   }
};

export default Directory;
