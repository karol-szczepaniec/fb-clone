import "./App.css"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";

export default function App() {

    const user = null;

  return (
    <div className="app">
        {user ? <>
            <Header/>
            <div className={"app__body"}>
                <Sidebar/>
                <Feed/>
                <Widgets/>
            </div>
        </> : <Login/>}
    </div>
  );
}
