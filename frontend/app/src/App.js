import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import AllRoutes from "./Pages/Allroutes";
import { AuthProvider } from "./Utilis/Auth";
// import Admin from "./Pages/Admin";
function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <AllRoutes />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
