import React, {PropTypes} from 'react';

var Page = React.createClass({
           render:function () {
           <p>У тебя {this.props.page.photos.length} фото за {this.props.page.year} год</p>
   }
});

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired
};
