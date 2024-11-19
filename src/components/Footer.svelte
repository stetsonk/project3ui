<script>
    import facebook from "$lib/assets/facebook.png";
    import twitter from "$lib/assets/twitter.png";
    import instagram from "$lib/assets/instagram_icon.png";
  </script>
  
  <footer class="bg-gray-900 text-white py-8">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-8">
      <!-- Column 1 -->
      <div>
        <h4 class="font-bold mb-4">Company</h4>
        <ul>
          <li><a href="/about" class="text-gray-400 hover:text-white">About Us</a></li>
          <li><a href="/careers" class="text-gray-400 hover:text-white">Careers</a></li>
          <li><a href="/press" class="text-gray-400 hover:text-white">Press</a></li>
        </ul>
      </div>
  
      <!-- Column 2 -->
      <div>
        <h4 class="font-bold mb-4">Help</h4>
        <ul>
          <li><a href="/faqs" class="text-gray-400 hover:text-white">FAQs</a></li>
          <li><a href="/returns" class="text-gray-400 hover:text-white">Returns</a></li>
          <li><a href="/contact" class="text-gray-400 hover:text-white">Contact Us</a></li>
        </ul>
      </div>
  
      <!-- Column 3 -->
      <div>
        <h4 class="font-bold mb-4">Shop</h4>
        <ul>
          <li><a href="/men" class="text-gray-400 hover:text-white">Men</a></li>
          <li><a href="/women" class="text-gray-400 hover:text-white">Women</a></li>
          <li><a href="/kids" class="text-gray-400 hover:text-white">Kids</a></li>
        </ul>
      </div>
  
      <!-- Column 4: Company News -->
      <div>
        <h4 class="font-bold mb-4">Company News</h4>
        <ul>
          <li><a href="/news/latest" class="text-gray-400 hover:text-white">Latest News</a></li>
          <li><a href="/news/events" class="text-gray-400 hover:text-white">Events</a></li>
          <li><a href="/news/blog" class="text-gray-400 hover:text-white">Blog</a></li>
        </ul>
      </div>
  
      <!-- Column 5: Stores Location -->
      <div>
        <h4 class="font-bold mb-4">Stores Location</h4>
        <ul>
          <li><a href="/stores/usa" class="text-gray-400 hover:text-white">USA</a></li>
          <li><a href="/stores/europe" class="text-gray-400 hover:text-white">Europe</a></li>
          <li><a href="/stores/asia" class="text-gray-400 hover:text-white">Asia</a></li>
        </ul>
      </div>
  
      <!-- Column 6: Follow Us -->
      <div>
        <h4 class="font-bold mb-4">Follow Us</h4>
        <div class="flex space-x-4">
          <a href="https://facebook.com" aria-label="Facebook">
            <img src={facebook} alt="Facebook" class="w-8 h-8 hover:opacity-75" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <img src={twitter} alt="Twitter" class="w-8 h-8 hover:opacity-75" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <img src={instagram} alt="Instagram" class="w-8 h-8 hover:opacity-75" />
          </a>
        </div>
      </div>
    </div>
    <div class="mt-8 text-center text-gray-500">
      &copy; 2024 Your Company. All rights reserved.
    </div>
  </footer>
  
  <style>
    footer {
      background-color: #1a1a1a;
    }
  
    img {
      transition: opacity 0.3s ease-in-out;
    }
  
    img:hover {
      opacity: 0.75;
    }
  </style>
  