import { View, Text } from 'react-native'
import { useState } from 'react'
import WebView from 'react-native-webview'

import Error from '../../components/error/Error';

const PilotGraphicsScreen = () => {
  const [onError, setOnError] = useState(false);

  const url = 'http://20.206.249.122:8050/'; 

  return (
    <View style={{flex : 1}}>
      {!onError ? (
        <WebView
        source={{ uri: url }}
        style={{flex : 1}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        onError={() => setOnError(true)}
      />
      ) :
      (
        <Error/>
      )

      }
    </View>
  );
};

export default PilotGraphicsScreen