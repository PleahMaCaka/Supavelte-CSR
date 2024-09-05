<script lang="ts">
  import { session } from "@stores/session"

  export let text = "Getting Started"

  let href = "/app"

  if (!$session)
    href = "/signin"
</script>

<a
  class="btn btn-primary mt-16 rounded-3xl px-8
         text-2xl font-normal text-white w-max self-center"
  {href}
>{text}
</a>
