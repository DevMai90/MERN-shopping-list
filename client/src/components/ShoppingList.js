import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

// TransitionGroup and CSSTransition wraps around certain things.

class ShoppingList extends Component {
  // Run the getItems function. This will dispatch the action.type to reducer.
  /*
  1. Run getItems action creater that we imported from itemActions.
  2. Sends the action.type to itemReducer.
  3. itemReducer evaluates action.type and returns state.
  4. Put this into componentDidMount(). Runs immediately after component is inserted into DOM tree.
  5. Use this lifecycle method when we're making API requests or calling an axction
  */
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;

    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Item');
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
              }));
            }
          }}
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                {/* Note that it takes classNames not className */}
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(item => item.id !== id)
                      }));
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

// Actions from redux are props
ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

// We are calling it item because that is what we called it in our root reducer
const mapStateToProps = state => ({ item: state.item });

export default connect(
  mapStateToProps,
  { getItems }
)(ShoppingList);

/*
1. mapStateToProps -> root reducer
2. root reducer -> itemReducer
3. itemReducer -> Evaluates action.type and returns state 
4. Now we can access state through this.props.item
5. item represents the whole state.
6. items represents the property holding our array in the state
*/
