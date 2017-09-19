import React from  'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageAction from '../actions/PageAction';

var App = React.createClass({
          render: function () {
          return (
              <div>
                  <User name={this.props.user.name} />
                  <Page year={this.props.page.year} photos={this.props.page.photos} setYear = {this.props.pageAction}/>
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

function mapDispatchToProps(dispatch) {
    return{
        pageAction : bindActionCreators(pageAction, dispatch)
    }
}
export  default  connect (mapStateToProps, mapDispatchToProps)(App);
