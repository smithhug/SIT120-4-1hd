<template>
    <footer class="myfooter">
      <div class="footcontainer">
        <div class="copyright">&copy;2023 - <strong>Hugo Smith</strong></div>
        <div class="social-media">
          <a href="https://www.facebook.com/">
            FB
          </a>
          <a href="https://twitter.com/">
            TW
          </a>
          <a href="https://au.linkedin.com/">
            LI 
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
  .myfooter {
    padding: 20px 0;
    text-align: center;
  }
  
  .footcontainer {
    justify-content: space-between;
    align-items: center;
  }
  
  .copyright {
    font-size: 14px;
  }
  
  .social-media {
    font-size: 24px;
  }
  
  .social-media a {
    text-decoration: none;
    margin: 0 10px;
  }
  
  .social-media a:hover {
    color: #00bcd4;
  }
  </style>
  