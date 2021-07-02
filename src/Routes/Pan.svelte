<script>
  import { pan } from "svelte-gestures";
  import { link } from "svelte-spa-router";

  let x;
  let y;

  function handler(event) {
    x = event.detail.x;
    y = event.detail.y;
  }
</script>

<a href="/" class="href" use:link> To Home</a>
<div
  use:pan={{ delay: 300 }}
  on:pan={handler}
  style="width:500px;height:500px;border:1px solid black;"
>
  pan: {x}
  {y}
</div>
