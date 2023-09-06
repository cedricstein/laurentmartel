import React from "react";

const EmailForm = ({ article, toggleEmailForm }) => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access article.format, article.title, and article.price for email content
    const { format, title, price } = article;

    // Create an email body with the article data
    const emailBody = `I want to buy the following article:\nFormat: ${format}\nTitle: ${title}\nPrice: ${price}`;

    // Now, you can use the emailBody to send an email or perform any other action.
    // You can also close the form using the toggleEmailForm function.

    // Close the email form
    toggleEmailForm();
  };

  return (
    <div className="email-form">
      <h2>Send an Email</h2>
      <form onSubmit={handleSubmit}>
        {/* Email form fields */}
        {/* You can add input fields for the recipient's email, subject, etc. */}
        <textarea
          placeholder="Enter your message here..."
          rows="4"
          required
        ></textarea>
        <button type="submit">Send Email</button>
        <button onClick={toggleEmailForm}>Cancel</button>
      </form>
    </div>
  );
};

export default EmailForm;
