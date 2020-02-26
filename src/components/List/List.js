import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';

class List extends React.Component {

  /* typechecking on the props for a component with prop-types library*/
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }
  
  /* default value of prop if prop not provided */
  static defaultProps = {
    description: settings.defaultListDescription,
    image: settings.defaultListImage,
  }

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <section className={styles.component}>
      
        <Container>

          <Hero 
            titleText={title}
            imageSource={image}
          />

          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>

          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>

          <div className={styles.creator}>
            <Creator 
              text={settings.columnCreatorText} 
              action={title => addColumn(title)}
              // action={addColumn}
            />
          </div>

        </Container>
        
      </section>

    );
  }
}

export default List;
