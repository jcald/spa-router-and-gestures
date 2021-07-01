import Home from "./Routes/Home.svelte";
import About from "./Routes/About.svelte";
import Items from "./Routes/Items.svelte";
import Login from "./Routes/Login.svelte";
import ErrorPage from "./Routes/Error.svelte";
import Doubletap from "./Routes/Doubletap.svelte";
import Error from "./Routes/Error.svelte";
import Pan from "./Routes/Pan.svelte";
import Pinch from "./Routes/Pinch.svelte";
import Rotation from "./Routes/Rotation.svelte";
import Swipe from "./Routes/Swipe.svelte";
import Tap from "./Routes/Tap.svelte";

const Routes = {
  "/": Home,
  "/doubletap": Doubletap,
  "/error": Error,
  "/pan": Pan,
  "/pinch": Pinch,
  "/rotation": Rotation,
  "/swipe": Swipe,
  "/tap": Tap,
  "/about": About,
  "/items/:id": Items,
  "/login/:name/:pass": Login,
  "*": ErrorPage,
};

export default Routes;
