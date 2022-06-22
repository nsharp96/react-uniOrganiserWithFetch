import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Layout from './components/layouts/Layout';
import ModulesPage from './components/pages/ModulesPage';
import Assessments from './components/pages/Assessments';
import Schedule from './components/pages/Schedule';
import Pagenotfound from './components/pages/pagenotfound';

import './App.css';

function App() {

  

  return (

    <BrowserRouter>

      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/modules' element={<ModulesPage />} />
          <Route path='/assessments' element={<Assessments />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='*' element={<Pagenotfound />} />
        </Routes>

      </Layout>
    </BrowserRouter>
    
  );
}

export default App;
