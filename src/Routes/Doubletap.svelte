<script>
	import { setPointerControls, DEFAULT_DELAY } from 'svelte-gestures';

	let dx;
	let dy;

	function doubletapHandler(event) {
		dx = event.detail.x;
		dy = event.detail.y;
	}

	function doubletap(node, parameters = { timeframe: DEFAULT_DELAY }) {
		const gestureName = 'doubletap';
    const spread = 20;
		
		let startTime;
		let clientX;
		let clientY;
		let tapCount = 0;
		let timeout;

		function onUp(activeEvents, event) {
			if (
				Math.abs(event.clientX - clientX) < spread &&
				Math.abs(event.clientY - clientY) < spread &&
				Date.now() - startTime < parameters.timeframe
			) {
				if (!tapCount) {
					tapCount++;
				} else {
					const rect = node.getBoundingClientRect();
					const x = Math.round(event.clientX - rect.left);
					const y = Math.round(event.clientY - rect.top);

					node.dispatchEvent(
						new CustomEvent(gestureName, {
							detail: { x, y }
						})
					);

					clearTimeout(timeout);
					tapCount = 0;
				}
			}
		}

		function onDown(activeEvents, event) {
			if (!tapCount) {
				clientX = event.clientX;
				clientY = event.clientY;
				startTime = Date.now();
			}

			timeout = setTimeout(() => {
				tapCount = 0;
			}, parameters.timeframe);
		}

		return setPointerControls(gestureName, node, null, onDown, onUp);
	}
</script>

<div
	use:doubletap
	on:doubletap={doubletapHandler}
	style="width:500px;height:500px;border:1px solid black;"
>
	double tap me {dx} {dy}
</div>
