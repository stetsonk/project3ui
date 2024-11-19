<script>
    import placeholder from "$lib/assets/placeholder.jpg";
    import outerwearimg from "$lib/assets/outerwear.avif";
    import sweaterimg from "$lib/assets/sweater.avif";
    import teeimg from "$lib/assets/tee.avif";
    import fleeceimg from "$lib/assets/fleece.avif";
    import shirtimg from "$lib/assets/shirt.avif";
    import dressimg from "$lib/assets/dress.avif";
    import pantsimg from "$lib/assets/pants.avif";
    import skirtimg from "$lib/assets/skirt.avif";
    import innerimg from "$lib/assets/bra.avif";
  
    const filterCategories = [
      { name: 'Shop All',             tag: '',            image: placeholder },
      { name: 'Outerwear',            tag: 'outerwear',   image: outerwearimg },
      { name: 'Sweaters, Cardigans',  tag: 'sweater',     image: sweaterimg },
      { name: 'T-Shirts',             tag: 'tee',         image: teeimg },
      { name: 'Fleece',               tag: 'fleece',      image: fleeceimg },
      { name: 'Shirts, Blouses',      tag: 'shirt',       image: shirtimg },
      { name: 'Dresses',              tag: 'dress',       image: dressimg },
      { name: 'Pants',                tag: 'pants',       image: pantsimg },
      { name: 'Skirts',               tag: 'skirt',       image: skirtimg },
      { name: 'Innerwear, Underwear', tag: 'inner',       image: innerimg }
    ];
  
    const items = [
      { id: 1, name: 'Outerwear 1',   price: '$59.90', tag: 'outerwear',  image: placeholder },
      { id: 2, name: 'Outerwear 2',   price: '$29.90', tag: 'outerwear',  image: placeholder },
      { id: 3, name: 'Sweater',       price: '$39.90', tag: 'sweater',    image: placeholder },
      { id: 4, name: 'Cardigan',      price: '$19.90', tag: 'sweater',    image: placeholder },
      { id: 5, name: 'T-Shirt',       price: '$59.90', tag: 'tee',        image: placeholder },
      { id: 6, name: 'Fleece',        price: '$29.90', tag: 'fleece',     image: placeholder },
      { id: 7, name: 'Shirt',         price: '$39.90', tag: 'shirt',      image: placeholder },
      { id: 8, name: 'Blouse',        price: '$19.90', tag: 'shirt',      image: placeholder },
      { id: 9, name: 'Dress',         price: '$59.90', tag: 'dress',      image: placeholder },
      { id: 10, name: 'Pants',        price: '$29.90', tag: 'pants',      image: placeholder },
      { id: 11, name: 'Skirt',        price: '$39.90', tag: 'skirt',      image: placeholder },
      { id: 12, name: 'Bra',          price: '$19.90', tag: 'inner',      image: placeholder },
      { id: 13, name: 'Underwear',    price: '$19.90', tag: 'inner',      image: placeholder }
    ];
  
    let filter = "";
    let searchTerm = "";
  
    function setFilter(filterCategory) {
      filterCategories.forEach((f) => f.selected = false);
      filter = filterCategory.tag;
    }
  </script>
  
  <div class="min-h-screen bg-white">
    <section class="max-w-7xl mx-auto py-16 px-4">
      <!-- Search Bar -->
      <div class="flex justify-end mb-10">
        <input
          type="text"
          placeholder="Search"
          bind:value={searchTerm}
          class="border border-gray-300 rounded-md p-2"
        />
      </div>
  
      <!-- Categories -->
      <div class="grid grid-cols-1 md:grid-cols-10 gap-6">
        {#each filterCategories as f}
          <div class="group cursor-pointer">
            <div class="aspect-w-1 aspect-h-1 bg-gray-200 mb-4 hover:bg-red-500 hover:ring-pink-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm">
              <img
                src={f.image}
                alt={f.name}
                class="w-full h-full object-cover"
                onclick={() => setFilter(f)}
              />
            </div>
            <h3 class="text-sm">{f.name}</h3>
          </div>
        {/each}
      </div>
    </section>
  
    <!-- Items -->
    <section class="max-w-7xl mx-auto py-16 px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        {#each items as item}
          {#if (filter == "" || item.tag == filter) && (searchTerm == "" || item.name.toLowerCase().includes(searchTerm.toLowerCase()))}
            <div class="group cursor-pointer hover:text-blue-500">
              <div class="aspect-w-1 aspect-h-1 bg-gray-200 mb-4">
                <img src={item.image} alt={item.name} class="w-full h-full object-cover" />
              </div>
              <h3 class="text-sm">{item.name}</h3>
              <p class="text-sm text-gray-900">{item.price}</p>
            </div>
          {/if}
        {/each}
      </div>
    </section>
  </div>
