import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSortKey, setOrder } from '../actions';

const Order = ({ isSelected, order }) => {
  if (isSelected) {
    if (order === 'asc') {
      return '▲';
    }
    return '▼';
  }
  return '';
};

const HotelsClickableTh = (props) => {
  const { label, isSelected, order } = props;
  return (
    <th
      className="hotels-clickable-th"
      onClick={
        () => {
          if (isSelected) {
            return (props.setOrder(order));
          }
          return (props.setSortKey(props.sortKey));
        }
      }
    >
      {label}
      <Order isSelected={isSelected} order={order} />
    </th>
  );
};

HotelsClickableTh.propTypes = {
  label: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  setSortKey: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
};

export default connect(
  (state, ownProps) => ({
    isSelected: ownProps.sortKey === state.sortKey,
    order: state.order,
  }),
  { setSortKey, setOrder },
)(HotelsClickableTh);
