<template>
    <div class="contact-form">
      <h2>Contact Us</h2>
      <form>
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName" required />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="lastName" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input type="tel" id="phone" v-model="phone" required />
        </div>
        <div class="form-group">
          <label for="subject">Subject:</label>
          <input type="text" id="subject" v-model="subject" required />
        </div>
        <div class="form-group">
          <label for="body">Message:</label>
          <textarea id="body" v-model="body" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <footer class="secondary_header footer">
        <div class="copyright">&copy;2023 - <strong>Hugo Smith</strong></div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        body: '',
      };
    }
  };
  </script>
  