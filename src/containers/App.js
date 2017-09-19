import React from  'react';
import { connect } from 'react-redux';

var App = React.createClass({
          render: function () {
          return (
              <div>
                  <p>У тебя {this.props.page.photos.length} фото за {this.props.page.year} год</p>
              </div>
          );
   }
});


function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}
export  default  connect (mapStateToProps)(App);
