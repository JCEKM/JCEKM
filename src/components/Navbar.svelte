<script>
  import { Link, navigate } from "svelte-routing";
  import { user } from "../users/User";
  import { getAuth, signOut } from "firebase/auth";
  const auth = getAuth();
  const cerrar = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Cierre acompletado");
        user.setUser(null);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
</script>

<div>
  <nav id="menu">
    {#if $user}
      <!-- Rutas con Usuario -->
      <img
        class="logo"
        src="https://dsm01pap001files.storage.live.com/y4mO2aDMgy2vhx7oa7QD2eYow0QDG-viQ0ONqperf8fuYr3GGoxJ6nUHDqPA2v6VwrU2-A9VFPZf-bR30_3WDVbUoxlMEKUE5K8uJhPlFzAvqz33YMSMKbf3tvBH0xnDgWV2xZQQFqhYn6TOMASWyg3yDIi8cDbl7hk65twIdjnhtLVJUIi_8i358ubTfrGgDwN?width=256&height=256&cropmode=none"
        alt="Logo"
      />
      <Link to="/"><p class="a">Home</p></Link>
      <Link to="/Horario"><p class="a">Horario</p></Link>
      <Link to="/Tareas"><p class="a">Tareas</p></Link>
      <Link to="/Enlaces"><p class="a">Enlaces</p></Link>
      <Link to="/Curiolinks"><p class="a">Curiolinks</p></Link>
      <button on:click={cerrar}>Cerrar Sesion -></button>
    {:else}
      <!-- Rutas publicas -->
      <Link to="/"><p class="a">Home</p></Link>
      <Link to="/Curiolinks"><p class="a">Curiolinks</p></Link>
      <Link to="/Login"><p class="a">Login</p></Link>
    {/if}
  </nav>
</div>

<style>
  .a {
    font-family: "Urbanist", sans-serif;
    font-weight: 500px;
    font-size: 20px;
    text-decoration: wavy;

    text-align: center;
  }

  div {
    display: flex;
    background-color: #03020b8c;
    justify-content: space-between;
    align-items: center;
    padding: 25px 10%;
  }

  /*   .logo {
    cursor: pointer;
    width: 100px;
    height: auto;
  } */

  #menu {
    list-style: none;
    background-color: #03020b2f;
  }

  nav .a {
    display: inline-block;
    padding: 0px 20px;
  }

  nav .a {
    transition: all 0.4s ease 0s;
  }

  nav .a {
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor) !important;
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
    transition: background-size 0.3s;
  }

  .a:hover {
    color: rgb(8, 255, 173);
  }

  nav .a:hover,
  nav:focus {
    background-size: 100% 2px;
  }

  button {
    background-color: #03020b2f;
    color: rgb(229, 35, 35);
    border: 1px solid rgb(229, 35, 35);
    cursor: pointer;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 3px;
    text-align: center;
    line-height: 22px;
    transition: 0.3s ease all;
  }

  button:hover {
    background-color: rgb(229, 35, 35);
    color: #03020b;
    border: 1px solid #03020b;
  }

  .logo {
    width: 50px;
    height: auto;
    position: relative;
    top: 1rem;
    left: 1rem;
  }

  @media screen and (max-width: 992px) {
    .logo {
      left: -4rem;
    }

    button {
      margin-top: 3px;
      margin-left: 14rem;
    }
  }
  @media screen and (max-width: 425px) {
    .logo {
      display: none;
    }
    button {
      margin-top: 3px;
      margin-left: auto;
    }
  }
  .active {
    color: rgb(8, 255, 173);
  }
</style>
