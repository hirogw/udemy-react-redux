import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchCondition from './SearchCondition';

import { setPlace, startSearch } from '../actions';

const SearchForm = (props) => {
  const conditions = [
    {
      label: '禁煙ルーム',
      value: 'kinen',
    },
    {
      label: 'インターネットが出来る部屋',
      value: 'internet',
    },
    {
      label: '大浴場あり',
      value: 'daiyoku',
    },
    {
      label: '温泉',
      value: 'onsen',
    },
  ];

  const conditionList = conditions.map((condition) => (
    <SearchCondition condition={condition} key={condition.value} />
  ));

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.history.push(`/?place=${props.place}`);
        props.startSearch();
      }}
    >
      <input
        type="text"
        size="30"
        className="place-input"
        value={props.place}
        onChange={(e) => {
          e.preventDefault();
          props.setPlace(e.target.value);
        }}
      />
      <input className="submit-button" type="submit" value="検索" />
      {conditionList}
    </form>
  );
};

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  setPlace: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default connect(
  (state) => ({
    place: state.place,
  }),
  { setPlace, startSearch },
)(SearchForm);
