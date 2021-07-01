<script>
  import { link } from "svelte-spa-router";

  let contador = 0;
  let name = "Jose";
  let pass = "mipass";
</script>

<h1>Home</h1>
<div id="nav" class="bg-blue-900 shadow-lg">
  <a href="/about" class="p-3 hover:text-red-900" use:link> To About Page</a>
  <a href="/items/{contador}" class="p-3 hover:text-red-900" use:link>
    To Items Page</a
  >
  <a href="/login/{name}/{pass}" class="p-3 hover:text-red-900" use:link>
    To login Page</a
  >
  <a href="/Doubletap" class="p-3 hover:text-red-900" use:link>Doubletap Page</a
  >
  <a href="/Error" class="p-3 hover:text-red-900" use:link>Error Page</a>
  <a href="/Pan" class="p-3 hover:text-red-900" use:link>Pan Page</a>
  <a href="/Pinch" class="p-3 hover:text-red-900" use:link>Pinch Page</a>
  <a href="/Rotation" class="p-3 hover:text-red-900" use:link>Rotation Page</a>
  <a href="/Swipe" class="p-3 hover:text-red-900" use:link>Swipe Page</a>
  <a href="/Tap" class="p-3 hover:text-red-900" use:link>Tap Page</a>
</div>
<button class="btn btn-danger" on:click={() => (contador += 1)}>
  Contador ++
</button>

<style>
  #nav {
    flex-flow: row;
  }

  /* #nav {
    @aply bg-blue-900 shadow-lg;
  } */
</style>
