var React = require('react-native');

var {
  Text,
  View,
  AppRegistry
} = React;

// The above syntax is the same as writing out (EX: var Text = React.Text;) for each library property.


var StopWatch = React.createClass({
  render: function() {

  }
}); 


AppRegistry.registerComponent('stopwatch', () => StopWatch);

// The above code is the same as writing out the following:

// AppRegistry.registerComponent('stopwatch', function(){
//   return StopWatch;
// })