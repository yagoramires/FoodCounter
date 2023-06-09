import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Result from './pages/Result';

function App() {
  return (
    <div className='App bg-zinc-800 min-h-screen text-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
