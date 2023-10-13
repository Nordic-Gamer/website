<template>
    <section id="home" class="home-section">
      <div class="text-container">
        <h2>Welcome to Nordic Gamer</h2>
        <p>Your decentralized meme coin platform.</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'NordicHome',
  }
  </script>
  
  <style scoped>
  .home-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #282c34;
    color: white;
    padding: 64px 0;
  }
  
  .text-container {
    text-align: center;
  }
  
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 16px;
  }
  
  p {
    max-width: 600px;
    font-size: 1rem;
  }
  </style>
  