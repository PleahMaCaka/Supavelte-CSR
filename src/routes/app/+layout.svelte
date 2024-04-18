<script lang="ts">
    import { goto } from "$app/navigation"
    import Navbar from "@components/Navbar.svelte"
    import { sessionStore as session } from "@stores/SessionStore"

    $: {
        if (location.pathname.startsWith("/app")) {
            if (!$session) goto("/signin")
        }
    }
</script>

<div class="size-full">
    <Navbar />
    <div class="size-full flex justify-center items-center">
        <slot />
    </div>
</div>
