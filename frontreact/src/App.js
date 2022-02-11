 
import { BrowserRouter as Routers, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootswatch/dist/materia/bootstrap.min.css';
import Navigation from './components/navegation/Navigation';
import HomePage from './components/pages/HomePage'
import CreateGuest from './components/pages/CreateGuest'
import ListGuest from './components/pages/ListGuest';


function App() {
  return (
    <Routers>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<CreateGuest />} />
        <Route path="/create" element={<CreateGuest />} />
        <Route path="/list" element={<ListGuest />} />
      </Routes>
    </Routers>
  );
}

export default App;
