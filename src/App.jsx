import "./App.css"
import Home from "./pages/Index"
import Counter from "./components/Counter"
import Nama from "./components/Nama"

function App() {
 return (
    <>
    <div className="App">
        <Home/>
        <br/>
        <Counter/>
        <Nama/>
    </div>
    </>
 )          
}

export default App;
