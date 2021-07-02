<script>
  import { link } from "svelte-spa-router";
  import { pinch } from "svelte-gestures";
  let scale;
  let x;
  let y;

  function handler(event) {
    scale = event.detail.scale;
    x = event.detail.center.x;
    y = event.detail.center.y;
  }
</script>

<a href="/" class="href" use:link> To Home</a>
<div
  use:pinch
  on:pinch={handler}
  style="width:500px;height:500px;border:1px solid black;"
>
  pinch scale: {scale} <br />
  center: x {x}, y {y}
</div>
