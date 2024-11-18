<script>
    import '../app.css';
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    let { children } = $props();
</script>

<div class="font-sans font-medium tracking-wider">
    <Header />
    {@render children()}
    <Footer />
</div>
