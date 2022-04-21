import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Layout from './paginas/Layout'
import Login from './paginas/Login'
import ListaHoteles from './paginas/ListaHoteles'

import store from './store'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Login/>}/>
            <Route path="lista-hoteles" element={<ListaHoteles/>} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
