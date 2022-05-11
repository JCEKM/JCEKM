<script>
    import { user } from "../users/User";
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    onMount(() => {
        //validamos si existe un usuario y si no lo redijimos al login
      if (!$user) {
        navigate("/Login", { replace: true });
      }
    });
  </script>
  
  <div>
    <!-- El signo $ verifica si existe -->
    {#if $user}
      <!-- Bloque que se pinta si la condicional se cumple -->
      <h1>Horario</h1>
    {/if}
  </div>