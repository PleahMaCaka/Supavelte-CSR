<script lang="ts">
  import "../app.css"
  import { supa } from "@lib/Supabase"
  import type { AuthSession } from "@supabase/supabase-js"
  import { session } from "@stores/session"
  import { get } from "svelte/store"
  import { goto } from "$app/navigation"

  let path = location.pathname

  const handle = (newSession: AuthSession | null) => {
    // Prevent moving to the `/app` path when the window is reactivated from an inactive state.
    if (path.startsWith("/app"))
      return

    session.set(newSession)

    if (
      path.match(/^\/app[/\w-]*$/) &&
      (!newSession || !get(session))
    ) goto("/signin")
  }

  supa.auth.getSession().then(({ data }) => {
    handle(data.session)
  })

  supa.auth.onAuthStateChange((_event, _session) => {
    handle(_session)
  })
</script>

<main>
  <slot />
</main>
