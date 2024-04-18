<script lang="ts">
    import "../app.css"
    import { supabase } from "@lib/Supabase"
    import { sessionStore } from "@stores/SessionStore"
    import { onMount } from "svelte"

    onMount(() => {
        supabase.auth.getSession().then(({ data }) => {
            sessionStore.set(data.session)
        })

        supabase.auth.onAuthStateChange((_event, _session) => {
            sessionStore.set(_session)
        })
    })
</script>

<slot />
