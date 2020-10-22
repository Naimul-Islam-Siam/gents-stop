import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';
import { connect } from 'react-redux';
import { selectDirectorySections } from './../../redux/directory/directorySelectors';


const Directory = ({ sections }) => (
   <div className="directory-menu">
      {sections.map(section => (
         <MenuItem
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
         />
      ))}
   </div>
);


const mapStateToProps = (state) => ({
   sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(Directory);
