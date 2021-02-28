import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AcademicDetail from './components/AcademicDetail/AcademicDetail';
import Adminastration from './components/Adminastration/Adminastration';
import Admissions from './components/Admissions/Admissions';
import Clubs from './components/Clubs/Clubs';
import ContactUs from './components/ContactUs/ContactUs';
import DepartmentsDetail from './components/DepartmentsDetail/DepartmentsDetail';
import Downloads from './components/Downloads/Downloads';
import Footer from './components/Footer/Footer';
import GalleryDetail from './components/GalleryDetail/GalleryDetail';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import NoticeDetail from './components/NoticeDetail/NoticeDetail';
import Research from './components/Research/Research';
import Students from './components/StudentsLogin/StudentsLogin';

function App() {
  const appStyle = {
    backgroundImage: 'linear-gradient(to right top, #41c1e0, #2ca8c7);'
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
          <Route path="/galleries"><GalleryDetail></GalleryDetail></Route>
          <Route path="/institutes"><AcademicDetail></AcademicDetail></Route>
          <Route path="/notices"><NoticeDetail></NoticeDetail></Route>
          <Route path="/admissions"><Admissions></Admissions></Route>
          <Route path="/downloads"><Downloads></Downloads></Route>
          <Route path="/contact"><ContactUs></ContactUs></Route>
          <Route exact path="/"><Main></Main></Route>
          <Route path="*"><NotFound></NotFound></Route>
         </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
