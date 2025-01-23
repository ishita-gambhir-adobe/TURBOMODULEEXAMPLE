import React, { version } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from 'react-native';

//  import NativeLocalStorage from './specs/NativeLocalStorage';
import { MobileCore } from '@adobe/react-native-aepcore';
// import { extensionversion } from 'nativelocalstorage';
import {multiply,extensionVersion} from 'newturbomoduletest'

const EMPTY = '<empty>';

function App(): React.JSX.Element {
  const [value, setValue] = React.useState<string | null>(null);

  const [editingValue, setEditingValue] = React.useState<
    string | null
  >(null);

  React.useEffect(() => {
    // const storedValue = NativeLocalStorage?.getItem('myKey');
    // setValue(storedValue ?? '');
  }, []);

  function saveValue() {
   // NativeLocalStorage?.setItem(editingValue ?? EMPTY, 'myKey');
    setValue(editingValue);
  }

  function clearAll() {
   // NativeLocalStorage?.clear();
    setValue('');
  }

  function deleteValue() {
   // NativeLocalStorage?.removeItem('myKey');
    setValue('');
  }

  const handleCoreExtensionPress = () => {
    MobileCore.extensionVersion()
      .then(version => console.log("AdobeExperienceSDK: MobileCore version: " + version))
  }

  const handlePlacesExtensionPress = () => {
  const a =   multiply(2.0,3.0);
  console.log("multiply function ", a)
  }
  const handleExtensionVersionPlaces = ()=>{
    extensionVersion().then(version=>{
      console.log("i am in places version ", version)
    })
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.text}>
        Current stored value is: {value ?? 'No Value'}
      </Text>
      <TextInput
        placeholder="Enter the text you want to store"
        style={styles.textInput}
        onChangeText={setEditingValue}
      />
      <Button title="Saved" onPress={saveValue} />
      <Button title="Delete" onPress={deleteValue} />
      <Button title="Clear" onPress={clearAll} />
      <Button title="core extension version" onPress={handleCoreExtensionPress}/>
      <Button title="Multiply " onPress={handlePlacesExtensionPress}/>
      <Button title="Places extension version " onPress={handleExtensionVersionPlaces}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 20,
  },
  textInput: {
    margin: 10,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
});

export default App;
