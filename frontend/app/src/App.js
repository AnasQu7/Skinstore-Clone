import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import AllRoutes from "./Pages/Allroutes";
import { AuthProvider } from "./Utilis/Auth";
import SearchContextProvider from "./Utilis/Context/SearchContext";
import { CartContextProvider } from "./Utilis/Context/CartContext";
// import Admin from "./Pages/Admin";
function App() {
  return (
    <div>
      <AuthProvider>
      <SearchContextProvider>
        <CartContextProvider>
        <Navbar />
        <AllRoutes />
        <Footer />
        </CartContextProvider>
      </SearchContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
