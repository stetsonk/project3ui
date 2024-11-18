<script>
  import logo from '$lib/assets/uniqlo_roman_64.png';
</script>

<header class="fixed w-full top-0 bg-white shadow-md z-50">
  <nav class="container mx-auto px-4 py-3 flex items-center">
    <div class="flex items-center w-1/4">
      <a href="/" class="flex items-center">
        <img src={logo} alt="Uniqlo Logo" class="h-8" />
      </a>
    </div>
    
    <div class="flex justify-center w-1/2 space-x-8">
      <a href="/women" class="text-black hover:text-gray-700 font-sans font-medium text-sm tracking-wider">WOMEN</a>
      <a href="/men" class="text-black hover:text-gray-700 font-sans font-medium text-sm tracking-wider">MEN</a>
      <a href="/kids" class="text-black hover:text-gray-700 font-sans font-medium text-sm tracking-wider">KIDS</a>
      <a href="/baby" class="text-black hover:text-gray-700 font-sans font-medium text-sm tracking-wider">BABY</a>
    </div>
    
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <div class="w-1/4 flex justify-end space-x-6">
      <a href="/profile" class="text-black hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </a>
      <a href="/cart" class="text-black hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </a>
    </div>
  </nav>
</header>

<style>
  header {
    transition: transform 0.3s ease;
  }
</style>


