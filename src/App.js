import './App.css';
import AppHeader from './components/header/AppHeader';
import Card from './components/dictionay_card/card'
function App() {
  return (
    <div className="App">
     <AppHeader></AppHeader>
     <div className="card">
     <Card></Card>
     </div>
    </div>
  );
}

export default App;
