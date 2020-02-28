import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  /* typechecking on the props for a component with prop-types library*/
  static propTypes = {
    title: PropTypes.string,
    columnId: PropTypes.string,
    columns: PropTypes.object,    
  }

  render() {
    const {title, columnId, columns} = this.props;
    
    const filteredColumns = columns.filter(column => 
      column.id == columnId ? column : null);

    return (
      <section className={styles.component}>
        <span>{title} </span>
        
        {filteredColumns.map(column => 
          columnId == column.id ? 
            (<span 
              className={styles.source} 
              key={column.id}>({column.listId}) 
            </span>) :
            null
        )}
        
        <span className={styles.source}> ({columnId}) </span>

      </section>
    );
  }
}

export default Card;
