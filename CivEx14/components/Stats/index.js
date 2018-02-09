import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, ListView, Keyboard, TextInput, TouchableOpacity } from 'react-native'
import data from './demoData.js'



class Header extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return(
				<View style={styles.containerHeader}>
			    <TextInput
			      style={styles.input}
			      placeholder="Search..."
			      onChangeText={(text) => console.log('searching for ', text)}
			    />
			  </View>
			);
	}
}

class Footer extends Component {
	render() {
		return(
			  <View style={styles.footer}>
			    <TouchableOpacity style={styles.button} onPress={() => console.log('load more')}>
			      <Text style={styles.text}>Load More</Text>
			    </TouchableOpacity>
			  </View>
			)
	}
}


class Row extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
				<View style={styles.containerRow}>
			    <Image source={{ uri: props.picture.large}} style={styles.photo} />
			    <Text style={styles.text}>
			      {`${props.name.first} ${props.name.last}`}
			    </Text>
			  </View>
			);
	}
}


export default class StatsScreen extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
  render() {
    return (
    	<View style={styles.container}>
	    	
	      <ListView
	        style={styles.containerList}
	        dataSource={this.state.dataSource}
	        // renderRow={(data) => <Row {...data} />}
	        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
	        renderRow={(data) => <View><Text>{data}</Text></View>}
	        renderHeader={() => <Header />}
	        renderFooter={() => <Footer />}
	      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    margin: 20
  },
  containerList: {
    flex: 1
  },
    containerRow: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
	},

  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },

  containerHeader: {
    // flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },

  footer: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderColor: '#8E8E8E',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  text: {
    color: '#8E8E8E',
  }
});




// class Row extends Component {
// 	render() {
// 		return(
// 				<View style = { styles.stuff }> 
// 	        <Text style = { styles.things }>
// 	        hello
// 	        </Text> 
// 	      </View>
// 			)
// 	}
// }



// export default class StatsScreen extends Component {
// 	constructor(props) {
// 		super(props);

// 		const ds = new ListView.DataSource({
// 			rowHasChanged: (r1, r2) => r1 !== r2 
// 		});

// 		this.state = {
// 			// dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3'], ['a', 'b', 'c']),
// 			dataSource: ds.cloneWithRows([{AwayTeam: "TeamA", HomeTeam: "TeamB", Selection: "AwayTeam"},{AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"}]),
//       // dataSource:ds,
// 			listOfTasks: [],
// 			text: ''
// 		};
// 	}

// 	// _changeTextInputValue (text) { 
//  //    this.setState({ 
//  //      text 
//  //    }); 
//  //  } 

// 	// _addTask () { 
//  //    const listOfTasks = [...this.state.listOfTasks, this.state.text]; 

//  //    this.setState({ 
//  //      listOfTasks 
//  //    }); 

//  //    this._changeTextInputValue();
//  //  } 

// 	render(){
// 		const { navigate } = this.props.navigation;
// 		return( 
// 			<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
// 				<View>
// 					<TextInput 
//           autoCorrect={ false } 
//           onChangeText={ (text) => this._changeTextInputValue(text) } 
//           onSubmitEditing={ () => this._addTask() } 
//           returnKeyType={ 'done' } 
//           style={ styles.textInput } 
//           value={ this.state.text } 
//         	/>
// 				</View>

// 				<ListView

// 					dataSource = { this.state.dataSource }
// 					enableEmptySections={ true } 
// 					renderRow = { (rowData) =>
// 						<Text> {rowData}</Text>
// 					}
// 				/>
// 		    <Text>Hello World</Text>
// 		  </View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	statsListRow: {
// 		flex: 1,
//     padding: 10,
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between',
//     backgroundColor: '#FFF'
//   },
//   statsTextRow: {
//     fontSize: 20,
//     margin: 10
//   },
//   stuff: { 
//     flex: 1, 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     backgroundColor: '#F5FCFF' 
//   }, 
//   things: { 
//     fontSize: 20, 
//     textAlign: 'center', 
//     margin: 10 
//   } 
// });