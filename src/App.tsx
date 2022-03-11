import React from 'react';
import {
  Alert,
  NativeModules,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

// Android Modules
const {MessageFromAndroidNative, IsAndroidEmulator} = NativeModules;

// iOs Modules
const {MessageFromIosNative, isIosEmulator} = NativeModules;

const androidAlertHandle = () =>
  MessageFromAndroidNative.show((text: string) => Alert.alert(text));

const isAndroidEmulatorHandle = () =>
  IsAndroidEmulator.get((isEmulator: boolean) =>
    Alert.alert(isEmulator.toString()),
  );

const iosAlertHandle = () =>
  MessageFromIosNative.getMessage((text: string) => Alert.alert(text));

const isIosEmulatorHandle = () =>
  isIosEmulator.get((isEmulator: boolean) =>
    Alert.alert(isEmulator.toString()),
  );

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={androidAlertHandle}>
        <Text style={styles.buttonText}>Android: Native Message</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={isAndroidEmulatorHandle}>
        <Text style={styles.buttonText}>Android: Is Emulator?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={iosAlertHandle}>
        <Text style={styles.buttonText}>iOs: Native Message</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={isIosEmulatorHandle}>
        <Text style={styles.buttonText}>iOs: Is Emulator?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: 'teal',
    borderRadius: 10,
  },
  button2: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: 'tomato',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
});
