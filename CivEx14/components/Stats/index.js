import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, ListView, Keyboard, TextInput } from 'react-native'

export default class StatsScreen extends Component {
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2 
		});

		this.state = {
			dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3'])
		};
	}

	render(){
		const { navigate } = this.props.navigation;
		return( 
			<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
				<ListView 				
					dataSource = { this.state.dataSource }
					renderRow = { (rowData) =>
						<Text>{rowData}</Text>
					}
				/>
		    <Text>Hello World</Text>
		  </View>
		);
	}
}

const styles = StyleSheet.create({
	statsListRow: {
		flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#FFF'
  },
  statsTextRow: {
    fontSize: 14,
    margin: 2
  }
});