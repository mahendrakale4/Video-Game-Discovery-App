import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';

function App() {
  const [alertVisible, setalertVisible] = useState(false);
  const items = ["New York", "Paris", "Mumbai", "London"];
 
  return (
    <div>
      {alertVisible && (
        <Alert onclose={() => setalertVisible(false)}> Hello Mahendra</Alert>
      )}

      <Button onClick={() => setalertVisible(true)}>My Button</Button>

      <ListGroup
        items={items}
        heading={"Citis"}
        onSelectItem={function (item: string): void {}}
      />
    </div>
  );
}

export default App;
