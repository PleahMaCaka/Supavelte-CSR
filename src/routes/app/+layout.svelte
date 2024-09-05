<script lang="ts">
  import Navbar from "@lib/components/nav/TopNav.svelte"
  import type { AuthSession } from "@supabase/supabase-js"
  import { get } from "svelte/store"
  import { goto } from "$app/navigation"
  import { supa } from "@lib/Supabase"
  import { session } from "@stores/session"

  // Navigation Guard
  const handle = (newSession: AuthSession | null) => {
    session.set(newSession)
    if (
      location.pathname.match(/^\/app[/\w-]*$/) &&
      (!newSession || get(session) === null)
    ) {
      void goto("/signin")
    }
  }

  supa.auth.getSession().then(({ data }) => {
    handle(data.session)
  })

  supa.auth.onAuthStateChange((_event, _session) => {
    handle(_session)
  })
</script>

<Navbar />
<slot />
