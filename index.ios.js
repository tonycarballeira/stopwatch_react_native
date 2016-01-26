var React = require('react-native');
var formatTime = require('minutes-seconds-milliseconds');

var {
  Text,
  View,
  AppRegistry,
  TouchableHighlight,
  StyleSheet
} = React;

// The above syntax is the same as writing out (EX: var Text = React.Text;) for each library property. this is called variable destructuring.


var StopWatch = React.createClass({

  getInitialState: function() {
    return {
      timeElapsed: null,
      running: false
    }
  },

  render: function() {
    return <View style={styles.container}>

      <View style={[styles.header, this.border('yellow')]}>  

        <View style={[styles.timerWrapper, this.border('red')]}> 
          <Text style={styles.timer}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        
        <View style={[styles.buttonWrapper, this.border('green')]}> 
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
    return <TouchableHighlight 
            underlayColor="gray" 
            onPress={this.handleStartPress} 
            style={[styles.button, styles.startButton]}>
        <Text>
          Start
        </Text>
      </TouchableHighlight>
  },

  lapButton: function() {
    return <View style={styles.button}>
        <Text>
          Lap
        </Text>
      </View>
  },

  handleStartPress: function() {

    if(this.state.running){
      clearInterval(this.interval);
      this.setState({running: false});
      return   // this is so the handleStartPress function does not contiune to run the code below (instead you exit the function)
    }
    
    
    var startTime = new Date();

    this.interval = setInterval(() => {
      // update our state with some new value  never do: this.state.timeElapsed = some_value
      this.setState({
        timeElapsed: new Date() - startTime,
        running: true
      });
    }, 30);

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
  },
  timerWrapper: {    //  with flex you can use whatever ratios you want to distribute screen space.
    flex: 5,  // takes up 5/8ths of available space
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,  // takes up 3/8ths of available space
    flexDirection: 'row',  //  makes elements line up horizontally in this wrapper
    justifyContent: 'space-around',  // give elements an equal amount of space between eachother.
    alignItems: 'center'  // centers the buttons vertically, dependant on flexDirection, if column than this would center horizontally.
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  }
});


AppRegistry.registerComponent('stopwatch', () => StopWatch);

// The above code is the same as writing out the following:

// AppRegistry.registerComponent('stopwatch', function(){
//   return StopWatch;
// })