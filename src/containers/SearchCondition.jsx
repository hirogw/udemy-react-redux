import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setCondition } from '../actions';

const SearchCondition = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const { condition } = props;

  return (
    <div>
      <input
        type="checkbox"
        value={condition.value}
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
          props.setCondition(e.target.value);
        }}
      />
      {condition.label}
    </div>
  );
};

SearchCondition.propTypes = {
  setCondition: PropTypes.func.isRequired,
  condition: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(
  (state) => ({
    state,
  }),
  { setCondition },
)(SearchCondition);
