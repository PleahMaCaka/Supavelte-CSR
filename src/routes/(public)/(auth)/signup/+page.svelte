<script lang="ts">
  import { goto } from "$app/navigation"
  import AuthField from "@lib/components/auth/AuthField.svelte"
  import { supa } from "@lib/Supabase"

  let submitted = false

  let email = "",
    password = ""

  const signUp = async () => {
    if (!email && !password) return

    const { error } = await supa.auth.signUp({
      email,
      password
    })

    if (!error) {
      submitted = true
      await goto("/signin")
    }
  }
</script>

<form class="flex flex-col gap-2" on:submit|preventDefault={signUp}>
  <AuthField bind:value={email} label="Email" type="email">
    <svg
      class="h-4 w-4 opacity-70"
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
      <path
        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
    </svg>
  </AuthField>
  <AuthField bind:value={password} label="Password" type="password">
    <svg
      class="h-4 w-4 opacity-70"
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg">
      <path
        clip-rule="evenodd"
        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
        fill-rule="evenodd" />
    </svg>
  </AuthField>
  <AuthField label="Confirm Password" type="password">
    <svg
      class="h-4 w-4 opacity-70"
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg">
      <path
        clip-rule="evenodd"
        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
        fill-rule="evenodd" />
    </svg>
  </AuthField>
  <div>
    <button
      class="btn btn-success mt-1 w-full brightness-90 dark:text-white"
      disabled={submitted}>
      Sign Up
    </button>
    <div class="ml-0.5 mt-0.5">
      <span class="text-sm text-gray-500">Already have an account?</span>
      <a class="text-sm text-blue-500" href="/signin">Sign In</a>
    </div>
  </div>
</form>
