<script>
  import { swipe } from 'svelte-gestures';
  let direction;

  function handler(event) {
    direction = event.detail.direction;
  }
</script>

<div use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }} on:swipe={handler} style="width:500px;height:500px;border:1px solid black;">
	This one <b>swipes only in horizontal directions</b>: <span style="color:red;">{direction}</span><br>
	You can scroll vertically as normal. It is due to <b>touchAction: 'pan-y'</b>
</div>

<div use:swipe={{ timeframe: 300, minSwipeDistance: 100}} on:swipe={handler} style="width:500px;height:500px;border:1px solid black;">
	This <b>swipes in all directions</b>: <span style="color:red;">{direction}</span>
</div>