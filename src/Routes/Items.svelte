<script>
  import { link } from "svelte-spa-router";
  export let params = {};
</script>

<h1>Items {params.id}</h1>
<a href="/about" class="href" use:link> To About Page</a>
