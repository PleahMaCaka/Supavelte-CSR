<script lang="ts">
  import { goto } from "$app/navigation"
  import { supa } from "@lib/Supabase"
  import { session } from "@stores/session"
  import type { Provider } from "@supabase/supabase-js"
  import { onMount } from "svelte"
  import { get } from "svelte/store"

  let loading = false

  onMount(async () => {
    if (get(session)?.user) await goto("/app")
  })

  const oauth = async (provider: Provider) => {
    loading = true

    const { error } = await supa.auth.signInWithOAuth({
      provider,
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent"
        }
      }
    })

    if (error) console.error("Error logging in with", provider, error)

    loading = false
  }
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
  <div
    class="flex w-full max-w-md flex-col items-center
           space-y-3 rounded-lg bg-zinc-100 p-6
           shadow-md dark:bg-base-300">
    <div class="size-full px-1">
      <slot />
    </div>
    <!-- Social Logins-->
    <div class="divider divider-success text-sm opacity-85">OR</div>
    <div class="flex w-full flex-col gap-2">
      <button
        class="flex w-full justify-center rounded-md border border-gray-300
                       bg-white p-1.5
                       duration-150 hover:brightness-[98%]
                       disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-100 dark:hover:brightness-[98%]"
        disabled={loading}
        name="provider"
        on:click={() => oauth("google")}>
        <svg
          class="h-6 w-auto"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 256 262"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            fill="#4285F4" />
          <path
            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            fill="#34A853" />
          <path
            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
            fill="#FBBC05" />
          <path
            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            fill="#EB4335" />
        </svg>
      </button>
    </div>
  </div>
</div>
