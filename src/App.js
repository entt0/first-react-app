import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogues from "./components/Dialogues/Dialogues";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {addAnswer, updateAnswerText, updateNewPostText} from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sideBar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={updateNewPostText}/>}/>
                    <Route path='/dialogues'
                           render={() => <Dialogues
                               dialoguesPage={props.state.dialoguesPage}
                               updateAnswerText={updateAnswerText}
                               addAnswer={addAnswer}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
