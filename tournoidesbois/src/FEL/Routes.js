import {Routes, Route} from 'react-router-dom'
import MainPage from "./MainPage/MainPage";
import {TournamentMainPage} from './Tournament/TournamentMainPage';
import Register from "./Login_Register/Register";
import {Login} from './Login_Register/Login';
import NotFound from './404NotFound';
import Statistiques from './UserRelated/Statistiques';
import UserProfile from './UserRelated/UserProfile';

const Path = () =>{
    return(
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/tournament" element={<TournamentMainPage/>}/>
        <Route path="/statistiques" element={<Statistiques/>}/>
        <Route path="/userProfile" element={<UserProfile/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    )
}

export default Path;
