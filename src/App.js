import "./App.css"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Post from "./components/Post";

function App() {
  return (
    <div className="app">
        <Header/>
        <div className={"app__body"}>
            <Sidebar/>
            <Feed/>
        </div>
    </div>
  );
}
export default App;
