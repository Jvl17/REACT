import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Container from './components/container.jsx';
import Home from './pages/home.jsx';
import Esportes from './pages/esportes.jsx';
import Futebol from './pages/futebolCronograma.jsx';
import Basquete from './pages/basqueteCronograma.jsx';
import Golf from './pages/golfCronograma.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './context/ProtectedRoute';

function AppRoutes() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Container />} />
                    <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
                    <Route path="/esportes" element={<ProtectedRoute element={<Esportes />} />} />
                    <Route path="/futebol" element={<ProtectedRoute element={<Futebol />} />} />
                    <Route path="/basquete" element={<ProtectedRoute element={<Basquete />} />} />
                    <Route path="/golf" element={<ProtectedRoute element={<Golf />} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default AppRoutes;
