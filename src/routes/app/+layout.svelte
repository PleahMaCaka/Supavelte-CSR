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

<Navbar />
<slot />
