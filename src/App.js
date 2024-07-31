import { BrowserRouter,Route,Routes } from "react-router-dom";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
