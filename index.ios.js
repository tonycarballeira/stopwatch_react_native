var React = require('react-native');

var {
  Text,
  View,
  AppRegistry,
  StyleSheet
} = React;

// The above syntax is the same as writing out (EX: var Text = React.Text;) for each library property. this is called variable destructuring.


var StopWatch = React.createClass({

  render: function() {
    return <View>

      <View>  //yellow

        <View> // red
          <Text>
            00:00.00
          </Text>
        </View>
        
        <View> //green
          { this.startStopButton() }
          { this.lapButton() }
        </View>
        
      </View>      

    </View>
  },

  startStopButton: function() {
    return <View>
        <Text>
          Start
        </Text>
      </View>
  },

  lapButton: function() {
    return <View>
        <Text>
          Lap
        </Text>
      </View>
  }

}); 

var styles = StyleSheet.create({

});


AppRegistry.registerComponent('stopwatch', () => StopWatch);

// The above code is the same as writing out the following:

// AppRegistry.registerComponent('stopwatch', function(){
//   return StopWatch;
// })