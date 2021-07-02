<script>
  import { rotate } from "svelte-gestures";
  import { link } from "svelte-spa-router";

  let rotation;
  let x;
  let y;

  function handler(event) {
    rotation = event.detail.rotation;
    x = event.detail.center.x;
    y = event.detail.center.y;
  }
</script>

<a href="/" class="href" use:link> To Home</a>
<div
  use:rotate
  on:rotate={handler}
  style="width:500px;height:500px;border:1px solid black;"
>
  rotation: {rotation} <br />
  center: x {x}, y {y}
</div>
