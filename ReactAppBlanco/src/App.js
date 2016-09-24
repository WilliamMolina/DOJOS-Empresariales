import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var Hola = React.createClass({
	getInitialState: function(){
		return{
			initialItems:[
			"Item 1",
			"Item2",
			"Item3",
			"Item4",
			"Item5"
			],
			items:[]
		}
	},
	componentWillMount:function(){
		this.setState({
			items: this.state.initialItems
		});
	},
	filterList: function(event){
		var updatedList=this.state.initialItems;
		updatedList=updatedList.filter(function(item){
			return item.toLowerCase().search(event.target.value.toLowerCase())!==-1;
		});
		this.setState({
			items:updatedList
		});
	},

  render: function() {
    return (
   		<div>
   			<input type="text" onChange={this.filterList}/>
   			<List items={this.state.items}/>
   		</div>
    );
  }
});

var List=React.createClass({
	pintar:function(item){
		return(
		<li key={item}>
			<div>
				<label>{item}</label>
			</div>
		</li>
		);
	},
	render:function(){
		return(
			<ul>{this.props.items.map(this.pintar)}</ul>
		);
	}
});

export default Hola;
