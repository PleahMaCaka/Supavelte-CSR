<script lang="ts">
  import { goto } from "$app/navigation"
  import { supa } from "@lib/Supabase"
  import { stateStore } from "@stores/state"
  import { get } from "svelte/store"

  const logout = async () => {
    const { error } = await supa.auth.signOut()
    if (error) alert("Fail to logout")
    await goto("/")
  }
</script>

<div class="navbar gap-2 rounded-b-box bg-base-100 px-4 shadow-xl">
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg
        class="inline-block h-5 w-5 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 6h16M4 12h16M4 18h16"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"></path>
      </svg>
    </button>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/static">Supavelte</a>
  </div>
  <div class="navbar-end">
    <!-- Notification -->
    <div class="dropdown dropdown-end">
      <button class="btn btn-circle btn-ghost" tabindex="0">
        <span class="indicator">
          <svg
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2" /></svg>
          {#if get(stateStore).unreadNotify}
            <span class="badge indicator-item badge-primary badge-xs" />
          {/if}
        </span>
      </button>
      <div
        class="card dropdown-content compact z-[1] w-96 rounded-box bg-base-100 shadow">
        <div class="card-body">
          <div class="alert shadow-lg" role="alert">
            <svg
              class="h-6 w-6 shrink-0 stroke-info"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"></path>
            </svg>
            <div>
              <h3 class="font-bold">New message!</h3>
              <div class="text-xs">You have 1 unread message</div>
            </div>
            <button class="btn btn-sm">See</button>
          </div>
          <p class="mt-1 self-center rounded-box bg-zinc-900 px-2 py-0.5">
            <a href="/static">See all >></a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- Profile-->
  <div class="flex-none">
    <div class="dropdown-e`nd dropdown">
      <div class="avatar btn btn-circle btn-ghost" role="button" tabindex="0">
        <div
          class="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
          <img
            alt="User Profile"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <!-- Profile Dropdown-->
      <ul
        class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg">
        <li><a href="/static">Profile</a></li>
        <li><a href="/static">Settings</a></li>
        <li>
          <button on:click={logout}>Logout</button>
        </li>
      </ul>
    </div>
  </div>
</div>
