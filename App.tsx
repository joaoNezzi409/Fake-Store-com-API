import { SafeAreaProvider } from "react-native-safe-area-context";
import { Products } from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#fff',}}>
      <Products />
    </SafeAreaProvider>
  );
}
