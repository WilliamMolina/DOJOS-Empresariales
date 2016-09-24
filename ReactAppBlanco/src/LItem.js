import React, { Component } from 'react';

var LItem = React.createClass({
  render:function(){
    return(
        <div>
          <button className="btn btn-danger" onClick={this.props.borrar.bind(this.props.itemText,this)}>x</button>
          <label>{this.props.itemText}</label>
          <span/>
        </div>
    );
  }
});
export default LItem;