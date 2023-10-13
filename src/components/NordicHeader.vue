<template>
    <header class="header">
      <nav class="toolbar">
        <button @click="toggleMenu" class="menu-button">
          <img src="@/assets/logo.png" alt="Menu" />
        </button>
        <h1 class="title">Nordic Gamer</h1>
        <div class="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#buy">How to buy</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'NordicHeader',
    methods: {
      toggleMenu() {
        // Logic to toggle menu (e.g., open a sidebar or dropdown menu)
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    background-color: #3f51b5;
    color: white;
  }
  
  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
  }
  
  .menu-button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .menu-button img {
    width: 24px;
    height: 24px;
  }
  
  .title {
    margin: 0;
  }
  
  .nav-links {
    display: flex;
    gap: 16px;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
  }
  </style>
  