<template>
    <div id="contact" class="contact-container">
      <div class="container">
        <h2>Contact Us</h2>
        <p>Have questions or want to learn more about Nordic Gamer? Get in touch with us!</p>
        <form @submit.prevent="sendMessage" class="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows="4" placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NordicContact',
    methods: {
      sendMessage() {
        // Handle form submission here
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-container {
    padding: 64px 0;
    background-color: #34495E;
    color: #ECF0F1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .container {
    max-width: 600px;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 16px;
    text-align: center;
  }
  
  p {
    text-align: center;
  }
  
  .contact-form {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
  }
  
  input, textarea {
    width: 100%;
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid #bdc3c7;
    border-radius: 4px;
  }
  
  button {
    padding: 8px 16px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  </style>
  