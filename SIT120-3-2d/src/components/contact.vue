<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
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
  },
  methods: {
    submitForm() {
      if (this.validateEmail() && this.validatePhone()) {
        console.log('Form is valid. Submitting data...');
      } else {
        console.log('Form is not valid. Please check your input.');
      }
    },
    validateEmail() {
      if (this.email.includes('@')) {
        return true;
      } else {
        return false;
      }
    },
    validatePhone() {
      if (!isNaN(this.phone)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
