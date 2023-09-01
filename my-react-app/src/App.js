import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Socials from "./Socials";
import Order from "./Order";
import ArticlePage from "./ArticlePage";
import { ArticlesCardsGrid, formatData } from "./ArticlesCardsGrid";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/socials" element={<Socials />}></Route>
          <Route path="/order" element={<Order />}></Route>
          {formatData.map((article) => (
            <Route
              key={article.id}
              path={`/order/${article.id}`}
              element={<ArticlePage article={article} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
