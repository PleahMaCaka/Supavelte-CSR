<script lang="ts">
  import type { HTMLInputTypeAttribute } from "svelte/elements"

  export let type: HTMLInputTypeAttribute = "text"
  export let label: string = type
  export let value: string = ""

  function inputType(node: HTMLInputElement) {
    node.type = type
  }
</script>

<span class="label-text text-sm font-semibold">
    {label}
</span>
<label class="input input-bordered flex items-center gap-2">
  <slot />
  <input bind:value
         class="grow" name={type}
         required
         use:inputType
  />
</label>
