import { ChakraProvider } from "@chakra-ui/react";
import IpCard from "./components/IpCard";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App vh-100 d-flex flex-column align-items-center text-align-center">
        <h1 className="my-4">What's my IP?</h1>
        <IpCard />
      </div>
    </ChakraProvider>
  );
}

export default App;
