import React from "react";
import "./index.css";
import Navbar from "./Componets/Navbar";
import Dropdown from "./Componets/Dropdown";
import Faq from "./Componets/Faq";
import Banners from "./Componets/Banner";
import ProductItem from "./Componets/ProductItem";
import products from "./products";
import CategoryList from "./CategoryList";
import PriceRangeFilter from "./Componets/PriceRangeFilter";
import SwitchLabels from "./Componets/SwitchLables";
import BrandFilter from "./Componets/BrandFilter";
import BlogCard from "./Componets/BlogCard";
import PaginationOutlined from "./Componets/Pagination";
import Footer from "./Componets/Footer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { ProductProvider } from "./context/ProductContext";

function App() {
  const handleSelectCategory = (selectedCategory) => {
    console.log("Selected category:", selectedCategory);
  };
  return (
    <ProductProvider>
      <div>
        <Navbar />
        <div className="space-around">
          <Dropdown />
        </div>
        <div className="pwd">
          <span className="nav-bottom">
            <a className="bottom-links">
              <HomeOutlinedIcon fontSize="small" /> Home{" "}
              <ArrowForwardIosIcon fontSize="small" />{" "}
            </a>
            <a className="bottom-links">
              Electronics <ArrowForwardIosIcon fontSize="small" />{" "}
            </a>
            <a className="bottom-links">
              Phones and Smart watches
              <ArrowForwardIosIcon fontSize="small" />
            </a>
            <a className="bottom-links">Smartphones</a>
          </span>
        </div>
        <div></div>
        <Banners />
        <div className="wrapper">
          <div className="column-wrapper">
            <div>
              <h3 className="category-title">CATEGORY</h3>
              <CategoryList onSelectCategory={handleSelectCategory} />
            </div>

            <div>
              <PriceRangeFilter />
            </div>
            <div>
              <SwitchLabels />
            </div>
            <div>
              <BrandFilter />
            </div>
            <div>
              <BlogCard />
            </div>
          </div>
          <div className="product-list">
            <div className="sort-by-container">
              <label for="">Sort By: </label>
              <select className="sort-by" id="0">
                <option value="1" selected>
                  Most Popular
                </option>
                <option value="2">placeholder</option>
                <option value="3">placeholder</option>
                <option value="4">placeholder</option>
              </select>
            </div>
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>

        <PaginationOutlined />

        <footer>
          <Footer />
        </footer>
      </div>
    </ProductProvider>
  );
}

export default App;