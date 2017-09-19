import React ,{ PropTypes } from 'react';

var User = React.createClass({
    render: function () {
        return (
            <div>
              <p>Привет, {this.props.name}</p>
            </div>
        );
    }
});

User.propTypes = {
  name: PropTypes.string.isRequired
};
