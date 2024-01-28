import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  let buttonText = "Create alert";

  const handleButtonClicked = () => {
    setShowAlert(true);
  };

  const handleCloseButtonClicked = () => {
    setShowAlert(false);
  };

  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && (
        <Alert onCloseButtonClicked={handleCloseButtonClicked}>
          My alert created.
        </Alert>
      )}
      <Button color="primary" onButtonClicked={handleButtonClicked}>
        {buttonText}
      </Button>
    </>
  );
}

export default App;

/* 
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // This function uses the signature of the function of the props of the ListGroup component.
  // It handles the SelectItem event.
  const handleSelectItem = (item: string) => console.log(item);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
 */
