<script>
    import Navbar from "@components/Navbar.svelte"
</script>

<div class="size-full">
    <Navbar />
    <div class="size-full flex justify-center items-center">
        <slot />
    </div>
</div>
