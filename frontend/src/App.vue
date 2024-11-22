<template>
  <div class="min-h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/019/550/559/non_2x/abstract-background-with-random-purple-doodles-png.png)' }">
    <!-- Navbar -->
    <nav class="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <!-- Centered Navigation Links (Hidden on small screens) -->
      <div class="hidden sm:flex items-center space-x-4 mx-auto">
        <a href="#" class="text-lg font-bold hover:text-indigo-300">Home</a>
        <a href="#" class="text-lg hover:text-indigo-300">About</a>
        <a href="#" class="text-lg hover:text-indigo-300">Projects</a>
      </div>

      <!-- Login Link (Right side on larger screens) -->
      <div class="hidden sm:block">
        <a href="#" class="text-lg font-semibold hover:text-indigo-300">Login</a>
      </div>

      <!-- Hamburger Menu Button (For small screens) -->
      <div class="sm:hidden flex justify-end w-full">
        <button @click="toggleMenu" class="mr-6">
          <span class="block w-6 h-0.5 bg-white mb-1"></span>
          <span class="block w-6 h-0.5 bg-white mb-1"></span>
          <span class="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      <!-- Dropdown Menu for Small Screens -->
      <div
          v-if="menuOpen"
          class="absolute top-16 right-0 w-full bg-white text-gray-800 rounded shadow-lg flex flex-col items-center space-y-2 p-4 sm:hidden"
      >
        <a href="#" class="block text-lg font-bold hover:text-blue-600">Home</a>
        <a href="#" class="block text-lg hover:text-blue-600">About</a>
        <a href="#" class="block text-lg hover:text-blue-600">Projects</a>
        <a href="#" class="block text-lg font-semibold hover:text-blue-600">Login</a>
      </div>
    </nav>




    <!-- Content -->
    <main class="px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h1 class="text-4xl font-bold text-blue-700">Welcome to Our Site</h1>
          <p class="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus eros aliquet convallis ultricies.
          </p>
        </div>
        <div>
          <h2 class="text-2xl font-semibold text-indigo-600">Why Choose Us?</h2>
          <p class="mt-4 text-gray-700">
            Phasellus finibus, nulla nec faucibus lacinia, nisi lorem suscipit urna, ut interdum libero magna sit amet.
          </p>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4">
      <div class="flex justify-center space-x-4">
        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook"></i></a>
        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false, // Controls dropdown menu visibility
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>


<style>
/* Custom styles if needed */
</style>
