import React from 'react';
import styles from './ListLink.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Icon from '../Icon/Icon';

class ListLink extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    image: PropTypes.string.isRequired,
    deleteList: PropTypes.func,
  };
  
  static defaultProps = {
    description: settings.defaultListDescription,
    image: settings.defaultListImage,
  };

  handleDeleteListClick(e, listId, deleteList) {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this list?')) {
      deleteList(listId);
    }
  }

  render() {
    const {id, title, image, description, deleteList} = this.props;
    return (
      <Link to={`/list/${id}`} className={styles.link}>
        <section className={styles.component}>
          <div className={styles.text}>
            <h2 className={styles.title}>{ReactHtmlParser(title)}</h2>
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>
          </div>
          <div className={styles.image}>
            <img src={image} />
          </div>
          <div className={styles.trash} onClick={(e) => this.handleDeleteListClick(e, id, deleteList)}>
            <Icon name='trash' />
          </div>
        </section>
      </Link>
    );
  }
}




export default ListLink;
