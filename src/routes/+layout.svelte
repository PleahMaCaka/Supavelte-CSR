<script lang="ts">
  import "../app.css"
  import { supa } from "@lib/Supabase"
  import type { AuthSession } from "@supabase/supabase-js"
  import { session } from "@stores/session"
  import { get } from "svelte/store"
  import { goto } from "$app/navigation"

  const handle = (newSession: AuthSession | null) => {
    session.set(newSession)
    if (
      location.pathname.match(/^\/app[/\w-]*$/) &&
      (!newSession || get(session) === null)
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
