<script lang="ts">
  import "../app.css"
  import { supa } from "@lib/Supabase"
  import { session } from "@stores/session"
  import { onMount } from "svelte"

  onMount(() => {
    supa.auth.getSession().then(({ data }) => {
      session.set(data.session)
    })

    supa.auth.onAuthStateChange((_event, _session) => {
      session.set(_session)
    })
  })
</script>

<slot />
