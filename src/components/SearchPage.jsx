import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchFrom from '../containers/SearchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';
import { startSearch } from '../actions';

class SearchPage extends Component {
  componentDidMount() {
    this.props.dispatch(startSearch());
  }

  render() {
    const { history, geocodeResult } = this.props;
    return (
      <div className="search-page">
        <h1 className="app-title">ホテル検索</h1>
        <SearchFrom history={history} />
        <div className="result-area">
          <Map location={geocodeResult.location} />
          <div className="result-right">
            <GeocodeResult
              address={geocodeResult.address}
              location={geocodeResult.location}
            />
            <h2>ホテル検索結果</h2>
            <HotelsTable />
          </div>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  geocodeResult: PropTypes.shape({
    address: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  geocodeResult: state.geocodeResult,
});

export default connect(mapStateToProps)(SearchPage);
