<script>
  import { link } from "svelte-spa-router";
  export let params = {};
  console.log("params:", params);
</script>

<h1>Login</h1>
<h5>{params.name}</h5>
<h5>{params.pass}</h5>
<a href="/" class="href" use:link> To Home</a>
<a href="/about" class="href" use:link> To About Page</a>
