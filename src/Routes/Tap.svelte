<script>
  import { tap } from "svelte-gestures";
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
  use:tap={{ timeframe: 300 }}
  on:tap={handler}
  style="width:500px;height:500px;border:1px solid black;"
>
  tap: {x}
  {y}
</div>
