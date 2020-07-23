import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import HotesClickableTh from './HotelsClickableTh';
import HotelRow from './HotelRow';

const HotelsTable = ({ hotels }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <HotesClickableTh
          label="値段"
          sortKey="price"
        />
        <HotesClickableTh
          label="レビュー"
          sortKey="reviewAverage"
        />
        <th>レビュー件数</th>
        <HotesClickableTh
          label="距離"
          sortKey="distance"
        />
      </tr>
      {hotels.map((hotel) => (<HotelRow key={hotel.id} hotel={hotel} />))}
    </tbody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

HotelsTable.defaultProps = {
  hotels: [],
};

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, (h) => h[sortKey]);

export default connect(
  (state) => ({
    hotels: sortedHotels(state.hotels, state.sortKey),
  }),
)(HotelsTable);
