<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} Nordic Gamer. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'NordicFooter',
    computed: {
      currentYear() {
        return new Date().getFullYear();
      }
    }
  }
  </script>
  
  <style scoped>
  .footer {
    padding: 24px 0;
    margin-top: 40px;
    background-color: #2C3E50;
    color: #ECF0F1;
  }
  
  .container {
    max-width: 600px;
    margin: auto;
    text-align: center;
  }
  </style>
  