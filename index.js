import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './Sources/App';
import { name as appName } from './app.json';
AppRegistry.registerComponent(appName, () => App);
console.log('Hello World');
