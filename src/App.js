import Home from './Components/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/wow' element={<h1>WOOOOOOOW</h1>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
