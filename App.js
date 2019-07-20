import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native'
import Routes from './routes';

export default class App extends React.Component{
  render(){
    return(
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <Routes/>
        </SafeAreaView>
      </Fragment>
    )
  }
}