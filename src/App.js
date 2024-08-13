import "./styles.css";
import Hero from "./components/Hero";
import { GlobalStyle } from "./globalStyle";
import Products from "./components/Products";
import { productData } from "./components/Products/data";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Footer />
    </div>
  );
}
