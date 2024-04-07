import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import { WebView } from 'react-native-webview';


// WebViewに渡すコード
const injectedCode : string = `
function fireInjectedJavaScript(){
  alert('ReactNativeから渡されたコードを実行しました!');
}
`;


const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <WebView 
                javaScriptEnabled={true}
                source={{uri: "https://runner.hopto.org"}}
                injectedJavaScriptBeforeContentLoaded={injectedCode}
                incognito={true}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
