import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
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

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;

    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                {/* Note that it takes classNames not className */}
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
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
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

// We are calling it item because that is what we called it in our root reducer
const mapStateToProps = state => ({ item: state.item });

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);

/*
1. mapStateToProps -> root reducer
2. root reducer -> itemReducer
3. itemReducer -> Evaluates action.type and returns state 
4. Now we can access state through this.props.item
5. item represents the whole state.
6. items represents the property holding our array in the state
*/
