import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  IsAndroidEmulator,
  IsIosEmulator,
  MessageFromAndroidNative,
  MessageFromIosNative,
} from './nativeModules';

const androidAlertHandle = () =>
  MessageFromAndroidNative.show((text: string) => Alert.alert(text));

const isAndroidEmulatorHandle = () =>
  IsAndroidEmulator.get((isEmulator: boolean) =>
    Alert.alert(isEmulator.toString()),
  );

const iosAlertHandle = () =>
  MessageFromIosNative.getMessage((text: string) => Alert.alert(text));

const isIosEmulatorHandle = () =>
  IsIosEmulator.get((isEmulator: number) =>
    Alert.alert((!!isEmulator).toString()),
  );

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={androidAlertHandle}>
        <Text style={styles.buttonText}>Android: Native Message</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.redButton]}
        onPress={isAndroidEmulatorHandle}>
        <Text style={styles.buttonText}>Android: Is Emulator?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={iosAlertHandle}>
        <Text style={styles.buttonText}>iOs: Native Message</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.redButton]}
        onPress={isIosEmulatorHandle}>
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
    borderRadius: 10,
    backgroundColor: 'teal',
  },
  redButton: {
    backgroundColor: 'tomato',
  },
  buttonText: {
    color: 'white',
  },
});
