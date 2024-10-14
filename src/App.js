import appStore from "./utils/appStore";
import { Provider } from 'react-redux';
import Body from "./components/Body";

export default function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>)
}