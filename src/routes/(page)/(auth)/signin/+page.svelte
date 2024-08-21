<script lang="ts">
  import { goto } from "$app/navigation"
  import AuthField from "@lib/components/auth/AuthField.svelte"
  import { supa } from "@lib/Supabase"

  let loading = false
  let email = "", password = ""

  const signIn = async () => {
    loading = true

    if (!email || !password)
      throw new Error("Email and password are required")

    const { error } = await supa.auth.signInWithPassword({ email, password })

    if (error) throw new Error(error.message)

    await goto("/app")

    loading = false
  }
</script>

<form class="flex flex-col gap-2"
      on:submit|preventDefault={signIn}
>
  <AuthField bind:value={email} label="Email" type="email" />
  <AuthField bind:value={password} label="Password" type="password" />
  <div class="flex items-center justify-between mt-1">
    <label class="cursor-pointer label-text text-sm flex">
      <input class="checkbox" type="checkbox" />
      <span class="ml-2">
                Remember me
            </span>
    </label>
    <a class="text-sm text-blue-500" href="/">
      Forgot password?
    </a>
  </div>
  <div>
    <button class="btn btn-success w-full mt-1 dark:text-white brightness-90" disabled={loading}>
      Sign In
    </button>
    <div class="ml-0.5 mt-0.5">
      <span class="text-sm text-gray-500">Don't have an account?</span>
      <a class="text-sm text-blue-500" href="/signup">Sign Up</a>
    </div>
  </div>
</form>
