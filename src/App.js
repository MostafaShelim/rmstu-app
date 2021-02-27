import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import ContactUs from './components/ContactUs/ContactUs';
import Downloads from './components/Downloads/Downloads';
import Admissions from './components/Admissions/Admissions';
import Students from './components/Students/Students';
import DepartmentsDetail from './components/DepartmentsDetail/DepartmentsDetail';
import Clubs from './components/Clubs/Clubs';
import Research from './components/Research/Research';
import About from './components/About/About';
import Adminastration from './components/Adminastration/Adminastration';
import GalleryDetail from './components/GalleryDetail/GalleryDetail';
import AcademicDetail from './components/AcademicDetail/AcademicDetail';
import NoticeDetail from './components/NoticeDetail/NoticeDetail';
function App() {
  const appStyle = {
    backgroundColor: '#e2e2e2'
  }
  return (
    <div style={appStyle} className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/about"><About></About></Route>
          <Route path="/adminastrations"><Adminastration></Adminastration></Route>
          <Route path="/research"><Research></Research></Route>
          <Route path="/clubs"><Clubs></Clubs></Route>
          <Route path="/departments"><DepartmentsDetail></DepartmentsDetail></Route>
          <Route path="/students"><Students></Students></Route>
          <Route path="/gallery"><GalleryDetail></GalleryDetail></Route>
          <Route path="/institutes"><AcademicDetail></AcademicDetail></Route>
          <Route path="/notices"><NoticeDetail></NoticeDetail></Route>
          <Route path="/admissions"><Admissions></Admissions></Route>
          <Route path="/downloads"><Downloads></Downloads></Route>
          <Route path="/contact"><ContactUs></ContactUs></Route>
          <Route exact path="/"><Main></Main></Route>
          <Route path="*"><NotFound></NotFound></Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
