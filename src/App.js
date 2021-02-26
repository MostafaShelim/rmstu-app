import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
function App() {
  const appStyle = {
    backgroundColor: '#e2e2e2'
  }
  return (
    <div style={appStyle} className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
