import { NativeModules } from 'react-native';

type ReactNativeLayoutType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ReactNativeLayout } = NativeModules;

export default ReactNativeLayout as ReactNativeLayoutType;
