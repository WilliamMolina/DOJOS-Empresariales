import Reflux from 'reflux';
import $ from 'jquery';
import MotelActions from '../actions/MotelActions';

var MotelStore = Reflux.createStore({
    listenables: [MotelActions],
    motellist: [],
    
    init: function() {
    	 this.fetchList();        
    },

    fetchList: function() {
      $.ajax({
		  crossDomain: true,
		  cache: false,
      context: this,
		  url: 'https://infinite-atoll-7499.herokuapp.com/api/v1/motel',
		  method: "GET",
      success: function(data) {
          console.log('fetch complete');
          this.motellist = data.slice();
          this.trigger(this.motellist);     
        }
      });
    }
});

export default MotelStore;