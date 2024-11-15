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
        <a href="/" class="text-black hover:text-gray-700 font-sans font-medium text-sm tracking-wider">WOMEN</a>
        <a href="/about" class="text-black hover:text-gray-700 font-sans font-medium text-sm tracking-wider">MEN</a>
        <a href="/services" class="text-black hover:text-gray-700 font-sans font-medium text-sm tracking-wider">KIDS</a>
        <a href="/contact" class="text-black hover:text-gray-700 font-sans font-medium text-sm tracking-wider">BABY</a>
      </div>
      
      <div class="w-1/4"></div>
    </nav>
  </header>
  
  <style>
    header {
      transition: transform 0.3s ease;
    }
  </style>