<script>
  import { link } from "svelte-spa-router";

  let contador = 0;
  let name = "Jose";
  let pass = "mipass";
</script>

<h1>Home</h1>
<div id="nav">
  <a href="/about" class="href" use:link> To About Page</a>
  <a href="/items/{contador}" class="href" use:link> To Items Page</a>
  <a href="/login/{name}/{pass}" class="href" use:link> To login Page</a>
  <a href="/Doubletap" class="href" use:link>Doubletap Page</a>
  <a href="/Error" class="href" use:link>Error Page</a>
  <a href="/Pan" class="href" use:link>Pan Page</a>
  <a href="/Pinch" class="href" use:link>Pinch Page</a>
  <a href="/Rotation" class="href" use:link>Rotation Page</a>
  <a href="/Swipe" class="href" use:link>Swipe Page</a>
  <a href="/Tap" class="href" use:link>Tap Page</a>
</div>
<button class="btn btn-danger" on:click={() => (contador += 1)}>
  Contador ++
</button>

<style>
  #nav {
    flex-flow: row;
  }
</style>
