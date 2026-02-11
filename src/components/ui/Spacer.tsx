import { View } from 'react-native';

export default function Spacer({ h = 12, w = 0 }: { h?: number; w?: number }) {
  return <View style={{ height: h, width: w }} />;
}
