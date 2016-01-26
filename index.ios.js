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
    return <View style={styles.container}>

      <View style={[styles.header, this.border('yellow')]}>  

        <View style={this.border('red')}> 
          <Text>
            00:00.00
          </Text>
        </View>
        
        <View style={this.border('green')}> 
          { this.startStopButton() }
          { this.lapButton() }
        </View>
        
      </View> 

      <View style={[styles.footer, this.border('blue')]}>  
        <Text>
          I am a list of laps.
        </Text>
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
  },

  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }

}); 

var styles = StyleSheet.create({
  container: {
    flex: 1, // fill the entire screen
    alignItems: 'stretch',
  },
  header: {
    flex: 1  //making both the header and footer section flex 1 makes bothe areas share half the screen. top and bottom.
  },
  footer: {
    flex: 1
  }
});


AppRegistry.registerComponent('stopwatch', () => StopWatch);

// The above code is the same as writing out the following:

// AppRegistry.registerComponent('stopwatch', function(){
//   return StopWatch;
// })