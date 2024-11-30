import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from './Pages/Home';
import Fechas from './Pages/Fechas';
import CrearFecha from './Pages/Crear';
import EditFecha from './Pages/Edit';
// const NoMatch = lazy(() => import('./Components/NoMatch'));
 
const App = () => {
   return (
      <>
	   <BrowserRouter>
	   <Routes>
           <Route index element={<Home />} />
           <Route path="/fechas" element={<Fechas />} />
           <Route path="/fechas/crear" element={<CrearFecha />} />
	   <Route path="/fechas/edit/:id" element={<EditFecha />} />
           </Routes>
	   </BrowserRouter>
      </>
   );
};

export default App;
