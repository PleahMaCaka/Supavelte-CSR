<script lang="ts">
  import type { HTMLInputTypeAttribute } from "svelte/elements"
  import { IconKey, IconMail } from "@tabler/icons-svelte"

  export let type: HTMLInputTypeAttribute = "text"
  export let label: string = type
  export let value: string = ""

  const inputType = (node: HTMLInputElement) => {
    node.type = type
  }
</script>

<span class="label-text text-sm font-semibold">
  {label}
</span>
<label class="input input-bordered flex items-center gap-2">
  {#if type === "email"}
    <IconMail class="size-4 opacity-70" />
  {:else if type === "password"}
    <IconKey class="size-4 opacity-70" />
  {/if}
  <input bind:value class="grow" name={type} required use:inputType />
</label>
