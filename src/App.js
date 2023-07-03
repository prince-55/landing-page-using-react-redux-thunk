import './App.scss';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DataTable from './components/DataTable'
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'
          element={<>
            <Layout>
              <Home />
              <About />
              <Services />
            </Layout>
          </>}>
        </Route>
        <Route path='/datatable'
          element={<DataTable />} />
      </Routes>
    </Router>
  )
}
export default App;
