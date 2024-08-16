<script lang="ts">
  import { goto } from "$app/navigation"
  import Navbar from "@lib/components/TopNav.svelte"
  import { session as session } from "@stores/session"

  $: {
    if (location.pathname.startsWith("/app")) {
      if (!$session) goto("/signin")
    }
  }
</script>

<Navbar />
<slot />
