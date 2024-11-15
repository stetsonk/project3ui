<script>
    import placeholder from "$lib/assets/placeholder.jpg"
    const featuredItems = [
      { id: 1, name: 'Winter Jacket', price: '$59.90', image: placeholder },
      { id: 2, name: 'Fleece Pullover', price: '$29.90', image: placeholder },
      { id: 3, name: 'Warm Pants', price: '$39.90', image: placeholder },
      { id: 4, name: 'Casual Shirt', price: '$19.90', image: placeholder }
    ];
  
    const categories = [
      { name: 'OUTERWEAR', image: placeholder },
      { name: 'SWEATERS', image: placeholder },
      { name: 'PANTS', image: placeholder },
      { name: 'T-SHIRTS', image: placeholder }
    ];
  </script>
  
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="relative h-[600px] bg-gray-100">
      <img 
        src="../lib/assets/placeholder.jpg" 
        alt="Hero" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <div class="text-center text-white">
          <h1 class="text-4xl font-bold mb-4">New Winter Collection</h1>
          <button class="bg-white text-black px-8 py-3">Shop Now</button>
        </div>
      </div>
    </div>
  
    <!-- Featured Items -->
    <section class="max-w-7xl mx-auto py-16 px-4">
      <h2 class="text-2xl mb-8 text-center">Featured Items</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        {#each featuredItems as item}
          <div class="group cursor-pointer">
            <div class="aspect-w-1 aspect-h-1 bg-gray-200 mb-4">
              <img src={item.image} alt={item.name} class="w-full h-full object-cover" />
            </div>
            <h3 class="text-sm">{item.name}</h3>
            <p class="text-sm text-gray-900">{item.price}</p>
          </div>
        {/each}
      </div>
    </section>
  
    <!-- Categories -->
    <section class="max-w-7xl mx-auto py-16 px-4">
      <h2 class="text-2xl mb-8 text-center">Shop by Category</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        {#each categories as category}
          <div class="relative group cursor-pointer h-64">
            <img src={category.image} alt={category.name} class="w-full h-full object-cover" />
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
              <h3 class="text-white text-xl font-medium">{category.name}</h3>
            </div>
          </div>
        {/each}
      </div>
    </section>
  </div>