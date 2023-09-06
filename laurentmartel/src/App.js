import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Socials from "./Socials";
import Order from "./Order";
import ArticlePage from "./ArticlePage";
import { ArticlesCardsGrid, formatData } from "./ArticlesCardsGrid";
import EmailForm from "./EmailForm";

const App = () => {
  // Step 1: Create state for the email form visibility
  const [showEmailForm, setShowEmailForm] = useState(false);

  // Step 2: Function to toggle the email form visibility
  const toggleEmailForm = () => {
    setShowEmailForm(!showEmailForm);
  };

  // Step 3: Define a variable to store the selected article data
  const [selectedArticle, setSelectedArticle] = useState(null);

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
              element={
                <ArticlePage
                  article={article}
                  // Pass the toggleEmailForm and setSelectedArticle functions to ArticlePage
                  toggleEmailForm={toggleEmailForm}
                  setSelectedArticle={setSelectedArticle}
                />
              }
            />
          ))}
        </Routes>
      </BrowserRouter>

      {/* Step 4: Render the email form conditionally */}
      {showEmailForm && selectedArticle && (
        <EmailForm
          article={selectedArticle} // Pass the selected article data
          toggleEmailForm={toggleEmailForm} // Pass the toggle function
        />
      )}
    </>
  );
};

export default App;
