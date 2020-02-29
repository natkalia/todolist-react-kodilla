import React from 'react';
import styles from './CardLink.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class CardLink extends React.Component {
  
  static propTypes = {
    columns: PropTypes.array,
    columnId: PropTypes.string,
  };    

  render() {
    const {columns, columnId} = this.props;
    let filteredColumns = [...columns];

    return ( 
      <span className={styles.component}>

        {filteredColumns.map(column => 
          column.id == columnId ? 
            (                
              <Link 
                to={`/list/${column.listId}`}
                key={column.id}>
              Click to go to list!  
              </Link>) :
            null
        )}
        
      </span>
    );
  }
}

export default CardLink;
