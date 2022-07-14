<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Horario from "./pages/Horario.svelte";
  import Tareas from "./pages/Tareas.svelte";
  import Enlaces from "./pages/Enlaces.svelte";
  import Curiolinks from "./pages/Curio.svelte";
  import About from "./pages/About.svelte";
  import Login from "./pages/Login.svelte";
  import Navbar from "./components/Navbar.svelte";

  import { user } from "./users/User";
  /*   import Ban from "./Ban.svelte"; */
</script>

{#if $user === false}
  <h1>Cargando ...</h1>
{:else}
  <Router>
    <Navbar />
    <div>
      <Route path="/"><Home /></Route>
      <Route path="/Horario"><Horario /></Route>
      <Route path="/Tareas"><Tareas /></Route>
      <Route path="/Enlaces"><Enlaces /></Route>
      <Route path="/Curiolinks"><Curiolinks /></Route>
      <Route path="/About"><About /></Route>
      <Route path="/Login"><Login /></Route>
    </div>
  </Router>
{/if}

<!-- <Ban name="Juan" />
<br />
<Ban name="semastica" />
<br />
<Ban name="Rodrigicius" /> -->
