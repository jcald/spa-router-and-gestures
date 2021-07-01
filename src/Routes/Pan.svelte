<script>
  import { pan } from 'svelte-gestures';
  let x;
  let y;

  function handler(event) {
    x = event.detail.x;
    y = event.detail.y;
  }
</script>

<div
  use:pan="{{delay:300}}"
  on:pan="{handler}"
  style="width:500px;height:500px;border:1px solid black;"
>
  pan: {x} {y}
</div>
