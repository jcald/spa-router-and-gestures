<script>
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
  export let name;
</script>

<main>
  <h1>{name}!</h1>
  <Router {routes} />
</main>

<style global lang="postcss">
	@tailwind base;
  	@tailwind components;
  /* purgecss end ignore */
  	@tailwind utilities;

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
