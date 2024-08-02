import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/views/HomePage";
import CartPage from "./components/views/CartPage";
import ContactUs from "./components/views/ContactUs";
import PrivacyPolicy from "./components/views/PrivacyPolicy";
import ProductPage from "./components/views/ProductPage";
import ProductsPage from "./components/views/ProductsPage";
import TermsOfService from "./components/views/TermsOfSerivce";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductsContextProvider from "./context/ProductsContext";
import CartContextProvider from "./context/CartContext";
import PageNotFound from "./components/views/PageNotFound";
import Confirmation from "./components/views/Confirmation";
import OrderDetails from "./components/views/OrderDetails";
import MessageConfirmation from "./components/views/MessageConfirmation";

function App() {
  return (
    <div className="App">
      <Router>
        <ProductsContextProvider>
          <CartContextProvider>
            <Navbar />
            <div className="view-wrapper">
              <Routes>
                <Route path="/cart" element={<CartPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:productId" element={<ProductPage />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/orderForm" element={<OrderDetails />} />
                <Route path="/msg" element={<MessageConfirmation />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </div>
            <Footer />
          </CartContextProvider>
        </ProductsContextProvider>
      </Router>
    </div>
  );
}

export default App;
