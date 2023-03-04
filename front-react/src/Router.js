import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Main/>} path="/"/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router;
