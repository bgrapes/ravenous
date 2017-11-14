import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          // Iterate through the array and return Business components
          this.props.businesses.map(
            function(business) {
              return <Business business={business} />
            }
          )
        }
      </div>
    )
  }
};

export default BusinessList;