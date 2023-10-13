<template>
  <div id="app">
    <Header />
    <Home />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/NordicHeader.vue';
import Home from '@/components/NordicHome.vue';
import About from '@/components/NordicAbout.vue';
import Contact from '@/components/NordicContact.vue';
import Footer from '@/components/NordicFooter.vue';

export default {
  name: 'App',
  components: {
    Header,
    Home,
    About,
    Contact,
    Footer
  }
}
</script>

<style>
@import './assets/App.css';
</style>
