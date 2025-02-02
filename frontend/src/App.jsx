import HomeScreen from "./screens/HomeScreen";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      <HomeScreen />
    </>
  );
};

export default App;
