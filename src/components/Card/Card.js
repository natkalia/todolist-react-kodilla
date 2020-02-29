import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

class Card extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    columnId: PropTypes.string,
    columns: PropTypes.array, 
    history: PropTypes.object,   
  }

  render() {
    const {title, columns, columnId} = this.props;
    const {pathname} = this.props.history.location;
    
    const filteredColumns = columns.filter(column => 
      column.id == columnId ? column : null);
    
    return (
      <section className={styles.component}>
        <span>{title} </span>
        
        <span className={styles.source}>
          {pathname.includes('search') ? (

            filteredColumns.map(column => 
              column.id == columnId ? 
                (
                  <span  
                    key={column.id}>
                    ({column.listId}) 
                    ({column.id})  
                  </span>) :
                null
            )
            
          ) : (null)}            
        </span>

      </section>
    );
  }
}

export default withRouter(Card);
