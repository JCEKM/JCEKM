<script>
  import { user } from "../users/User";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  //XD
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
    <div>
      <h1 align="center">HORARIO DE CLASES</h1>
      <div class="img-cont">
        <img
          id="myImg"
          src="/img/horario.png"
          alt="Horario"
          class="horario-img"
          style="width:950px; margin:auto; display: block;"
        />
      </div>

      <br />
      <div class="links grid col-3 med-col-3 peq-col-1">
        <div>
          <a
            id="link-web"
            href="http://34.71.32.187/login/index.php"
            class="animated rubberBand delay-2s"
            target="_blank"
          >
            PAGINA WEB ZZZZzzzz
          </a>
        </div>
        <div>
          <a
            id="link-siga"
            href="http://siga.uptapachula.edu.mx:8086/"
            class="animated rubberBand delay-2s"
            target="_blank"
          >
            SIGA
          </a>
        </div>
        <div>
          <a
            id="link-plat"
            href="http://34.71.32.187/login/index.php"
            class="animated rubberBand delay-2s"
            target="_blank"
          >
            PLATAFORMA PED
          </a>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  /* Botones */
  .links {
    width: 100%;
    margin: auto;
  }

  #link-siga {
    position: relative;
    display: block;
    padding: 25px 10px;
    border-radius: 6px;
    text-align: center;
    font-weight: bold;
    max-width: 320px;
    height: 65px;
    margin: auto;
    overflow: hidden;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    letter-spacing: 2px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    transition: all ease 0.5s;
    background: #1a8a61;
  }

  #link-siga:after,
  #link-siga:before {
    width: 80px;
    height: 200px;
    content: "";
    display: block;
    background: rgba(255, 255, 255, 0.5);
    transform: rotate(45deg);
    top: -60px;
    position: absolute;
    transition: none;
    right: -45%;
    cursor: pointer;
  }

  #link-siga:before {
    left: -48%;
  }

  #link-siga:hover {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    background: #6112c9;
  }

  #link-siga:hover:after,
  #link-siga:hover:before {
    transform: rotate(45deg), scaleX(130%);
    background: rgba(255, 255, 255, 0.1);
    transition: all ease 0.5s;
  }

  #link-siga:hover:after {
    right: 130%;
  }

  #link-siga:hover:before {
    left: 130%;
  }

  #link-web {
    position: relative;
    display: block;
    padding: 25px 10px;
    border-radius: 6px;
    text-align: center;
    font-weight: bold;
    max-width: 320px;
    height: 65px;
    margin: auto;
    overflow: hidden;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    letter-spacing: 2px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    transition: all ease 0.5s;
    background: #341979;
  }

  #link-web:after,
  #link-web:before {
    width: 80px;
    height: 200px;
    content: "";
    display: block;
    background: rgba(255, 255, 255, 0.5);
    transform: rotate(45deg);
    top: -60px;
    position: absolute;
    transition: none;
    right: -45%;
    cursor: pointer;
  }

  #link-web:before {
    left: -48%;
  }

  #link-web:hover {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    background: #000000;
    color: #341979;
    border: 1px solid #341979;
  }

  #link-web:hover:after,
  #link-web:hover:before {
    transform: rotate(45deg), scaleX(130%);
    background: rgba(255, 255, 255, 0.1);
    transition: all ease 0.5s;
  }

  #link-web:hover:after {
    right: 130%;
  }

  #link-web:hover:before {
    left: 130%;
  }
  #link-plat {
    position: relative;
    display: block;
    padding: 25px 10px;
    border-radius: 6px;
    text-align: center;
    font-weight: bold;
    max-width: 320px;
    height: 65px;
    margin: auto;
    overflow: hidden;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    letter-spacing: 2px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    transition: all ease 0.5s;
    background: #c97412;
  }

  #link-plat:after,
  #link-plat:before {
    width: 80px;
    height: 200px;
    content: "";
    display: block;
    background: rgba(255, 255, 255, 0.5);
    transform: rotate(45deg);
    top: -60px;
    position: absolute;
    transition: none;
    right: -45%;
    cursor: pointer;
  }

  #link-plat:before {
    left: -48%;
  }

  #link-plat:hover {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    background: #000000;
    color: #c97412;
    border: 1px solid #c97412;
  }

  #link-plat:hover:after,
  #link-plat:hover:before {
    transform: rotate(45deg), scaleX(130%);
    background: rgba(255, 255, 255, 0.1);
    transition: all ease 0.5s;
  }

  #link-plat:hover:after {
    right: 130%;
  }

  #link-plat:hover:before {
    left: 130%;
  }

  a {
    font-weight: 600;
  }

  .img-cont {
    width: 100%;
    margin: auto;
  }

  @media screen and (max-width: 700px) {
    .horario-img {
      text-align: center;
      width: 390px !important;
      max-width: 700px !important;
      display: block;
    }

    #myImg {
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
    }

    #myImg:hover {
      opacity: 0.7;
    }
  }
</style>
