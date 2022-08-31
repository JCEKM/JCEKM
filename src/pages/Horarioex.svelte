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
        <section class="des">
          <center>
            <div class="elgrillo">
              <div class="esq"><b>HORAS</b></div>
              <div class="days"><b>LUNES</b></div>
              <div class="days"><b>MARTES</b></div>
              <div class="days"><b>MIERCOLES</b></div>
              <div class="days"><b>JUEVES</b></div>
              <div class="days"><b>VIERNES</b></div>
              <div class="days"><b>SABADO</b></div>
              <div class="hrs"><b>2:00pm</b></div>
              <div class="hrs"><b>3:00pm</b></div>
              <div class="hrs"><b>4:00pm</b></div>
              <div class="hrs"><b>5:00pm</b></div>
              <div class="hrs"><b>6:00pm</b></div>
              <div class="hrs"><b>7:00pm</b></div>
              <div class="hrs"><b>8:00pm</b></div>
  
              <!--LUNES-->
              <a class="Hab" id="HabLun" target="_blank">
                Habilidades Generenciales<br /><br />
                (2:00pm-3:40pm)
              </a>
              <a class="Red" id="RedLun" target="_blank">
                Redes<br /><br />
                (3:40pm-4:30pm)
              </a>
              <a class="PE" id="PELun" target="_blank">
                Probabilidad Y Estadistica<br /><br />
                (4:50pm-5:40pm)
              </a>
              <a class="Ing" id="IngLun" target="_blank">
                Ingles<br /><br />
                (5:40pm-7:20pm)
              </a>
              <a class="SA" id="SALun" target="_blank">
                S/A<br /><br />
                (7:20pm-8:10pm)
              </a>
              <!--MARTES-->
              <a class="PE" id="PEMar" target="_blank">
                Probabilidad Y Estadistica<br /><br />
                (2:00pm-4:30pm)
              </a>
  
              <a class="Ing" id="IngMar" target="_blank">
                Ingles<br /><br />
                (4:50pm-7:20pm)
              </a>
  
              <a class="SA" id="SAMar" target="_blank">
                S/A<br /><br />
                (7:20pm-8:10pm)
              </a>
              <!--MIERCOLES-->
  
              <a class="PE" id="PEMie" target="_blank">
                Probabilidad Y Estadistica<br /><br />
                (2:50pm-4:30pm)
              </a>
  
              <a class="Red" id="RedMie" target="_blank">
                Redes<br /><br />
                (2:50pm-3:40pm)
              </a>
              <a class="Cs" id="CsMie" target="_blank">
                Calidad De Software<br /><br />
                (3:40pm-5:40pm)
              </a>
              <a class="Arq" id="ArqMie" target="_blank">
                Arquitectura De Computadoras<br /><br />
                (6:30pm-7:20pm)
              </a>
  
              <a class="SA" id="SAMie" target="_blank">
                S/A<br /><br />
                (7:20pm-8:10pm)
              </a>
              <!--JUEVES-->
              <a class="Hab" id="HabJue" target="_blank">
                Habilidades Generenciales<br /><br />
                (2:00pm-2:50pm)
              </a>
              <a class="Cs" id="CsJue" target="_blank">
                Calidad De Software<br /><br />
                (2:50pm-5:40pm)
              </a>
              <a class="SA" id="SAJue" target="_blank">
                S/A<br /><br />
                (5:40pm-6:30pm)
              </a>
  
              <a class="Arq" id="ArqJue" target="_blank">
                Arquitectura De Computadoras<br /><br />
                (6:30pm-7:20pm)
              </a>
              <!--VIERNES-->
              <a class="Arq" id="ArqVie" target="_blank">
                Arquitectura De Computadoras<br /><br />
                (2:00pm-4:30pm)
              </a>
              <a class="Red" id="RedVie" target="_blank">
                Redes<br /><br />
                (4:50pm-7:20pm)
              </a>
              <a class="SA" id="SAVie" target="_blank">
                S/A<br /><br />
                (7:20pm-8:10pm)
              </a>
              <!--SABADO-->
              <a class="Cel" id="Cele" target="_blank">
                CELE<br /><br />
                (5pm-8pm)
              </a>
            </div>
          </center>
        </section>
        <img
          id="myImg"
          src="https://dsm01pap001files.storage.live.com/y4mWQgmkw7QPWCcK8B46l7_EkiP_g_of_bYD3-5xD5nqm-Gt3XI7zy9HAB5Oq21L5vWWXoDbDyNxaovgNzlHrDOaj0rmXHkeFFqvRoYcC594OSgiWLr9_vGUF3m250FNWQzQRXciGMTJzWcJmWIQH1fkwpe4LNhfRpLk59V_txxIgRrQcVLD5ZvkiEBrX9kpmti?width=600&height=400&cropmode=none"
          alt="Horario"
          class="horario-img"
          style="width:100%;max-width:300px margin:auto;"
        />
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
    .elgrillo {
      display: grid;
      grid-template-columns: 10% 14.9% 14.9% 14.9% 14.9% 14.9% 14.9%;
      grid-auto-rows: 65px;
      gap: 0.8px;
    }
    /* 
    #horario {
      background-size: 100% 2px !important;
      color: rgba(127, 255, 212, 0.801);
    } */
  
    .days,
    .esq {
      background: #010033;
      padding: 1em;
      font-size: 18px;
    }
  
    .hrs {
      background: #010033;
      font-size: 18px;
      text-align: center;
      grid-column-start: 1;
      grid-column-end: 2;
    }
  
    /*Lunes*/
    #HabLun {
      grid-column-start: 2;
      grid-row-start: 2;
      grid-row-end: 4;
    }
  
    #RedLun {
      grid-column-start: 2;
      grid-row-start: 4;
      grid-row-end: 4;
    }
  
    #PELun {
      grid-column-start: 2;
      grid-row-start: 5;
      grid-row-end: 5;
    }
  
    #IngLun {
      grid-column-start: 2;
      grid-row-start: 6;
      grid-row-end: 8;
    }
  
    #SALun {
      grid-column-start: 2;
      grid-row-start: 8;
      grid-row-end: 9;
    }
  
    /*Martes*/
    #PEMar {
      grid-column-start: 3;
      grid-row-start: 2;
      grid-row-end: 5;
    }
  
    #IngMar {
      grid-column-start: 3;
      grid-row-start: 5;
      grid-row-end: 8;
    }
  
    #SAMar {
      grid-column-start: 3;
      grid-row-start: 8;
      grid-row-end: 9;
    }
  
    /*Miercoles*/
    #PEMie {
      grid-column-start: 4;
      grid-row-start: 2;
      grid-row-end: 2;
    }
  
    #RedMie {
      grid-column-start: 4;
      grid-row-start: 3;
      grid-row-end: 3;
    }
  
    #CsMie {
      grid-column-start: 4;
      grid-row-start: 4;
      grid-row-end: 7;
    }
  
    #ArqMie {
      grid-column-start: 4;
      grid-row-start: 7;
      grid-row-end: 8;
    }
  
    #SAMie {
      grid-column-start: 4;
      grid-row-start: 8;
      grid-row-end: 9;
    }
  
    /*Jueves*/
    #HabJue {
      grid-column-start: 5;
      grid-row-start: 2;
      grid-row-end: 2;
    }
  
    #CsJue {
      grid-column-start: 5;
      grid-row-start: 3;
      grid-row-end: 6;
    }
  
    #SAJue {
      grid-column-start: 5;
      grid-row-start: 6;
      grid-row-end: 7;
    }
  
    #ArqJue {
      grid-column-start: 5;
      grid-row-start: 7;
      grid-row-end: 9;
    }
  
    /*Viernes*/
    #ArqVie {
      grid-column-start: 6;
      grid-row-start: 2;
      grid-row-end: 5;
    }
  
    #RedVie {
      grid-column-start: 6;
      grid-row-start: 5;
      grid-row-end: 8;
    }
  
    #SAVie {
      grid-column-start: 6;
      grid-row-start: 8;
      grid-row-end: 9;
    }
  
    /*Sabado*/
    #Cele {
      grid-column-start: 7;
      grid-row-start: 5;
      grid-row-end: 9;
    }
  
    .SA {
      background: #ffffff;
      font-size: 18px;
      color: #010033;
      text-align: center;
    }
  
    .PE {
      background: #ff6961;
      font-size: 16.5px;
      color: #010033;
      text-align: center;
      padding: 10px 25px auto;
    }
  
    .Ing {
      background: #84b6f4;
      font-size: 18px;
      color: #010033;
      text-align: center;
    }
  
    .Cs {
      background: #5f3cdf;
      font-size: 18px;
      color: #010033;
      text-align: center;
    }
  
    .Hab {
      background: #f9f357;
      font-size: 16.3px;
      color: #010033;
      text-align: center;
    }
  
    .Arq {
      background: #57f995;
      font-size: 14px;
      color: #010033;
      text-align: center;
    }
  
    .Red {
      background: #f9b357;
      font-size: 18px;
      color: #010033;
      text-align: center;
    }
  
    .Cel {
      background: #fdcae1;
      font-size: 18px;
      color: #010033;
      text-align: center;
    }
  
    .SA:hover {
      border: 1px solid rgb(255, 255, 255);
      color: rgb(255, 255, 255);
      background: #000000;
      padding: 0.1em 0.1em 0.1em 0.1em;
      transition: all 0.25s ease;
      cursor: pointer;
    }
  
    .PE:hover {
      border: 1px solid rgb(255, 0, 0);
      color: rgb(255, 0, 0);
      background: #010033;
      padding: 0.1em 0.1em 0.1em 0.1em;
      transition: all 0.25s ease;
      cursor: pointer;
    }
  
    .Ing:hover {
      border: 1px solid aqua;
      color: aqua;
      background: #010033;
      padding: 1.5em 1.5em 1.5em 1.5em;
      transition: all 0.25s ease;
      cursor: pointer;
    }
  
    .Arq:hover {
      border: 1px solid rgb(0, 255, 34);
      color: rgb(0, 255, 34);
      background: #010033;
      padding: 0.1em 0.1em 0.1em 0.1em;
      transition: all 0.25s ease;
      cursor: pointer;
    }
  
    .Cs:hover {
      border: 1px solid rgb(111, 0, 255);
      color: rgb(111, 0, 255);
      background: #010033;
      padding: 1.5em 1.5em 1.5em 1.5em;
      transition: all 0.25s ease;
      cursor: pointer;
    }
  
    .Hab:hover {
      border: 1px solid rgb(238, 255, 0);
      color: rgb(238, 255, 0);
      background: #010033;
      padding: 0.1em 0.1em 0.1em 0.1em;
      transition: all 0.25s ease;
      cursor: pointer;
    }
  
    /*  .Fun:hover {
      border: 1px solid rgb(0, 255, 157);
      color: rgb(0, 255, 157);
      background: #010033;
      padding: 1.5em 1.5em 1.5em 1.5em;
      transition: all 0.25s ease;
      cursor: pointer;
    }
   */
    .Red:hover {
      border: 1px solid rgb(255, 102, 0);
      color: rgb(255, 102, 0);
      background: #010033;
      padding: 0.1em 0.1em 0.1em 0.1em;
      transition: all 0.25s ease;
      cursor: pointer;
    }
  
    /*1hrs*/
    /* #ArqLun:hover {
      padding: 0 !important;
    }
   */
    #IngMar:hover {
      padding: 0 !important;
    }
  
    /* #SisVie:hover {
      padding: 0 !important;
    } */
  
    /**/
    .Cel:hover {
      border: 1px solid rgb(255, 0, 221);
      color: rgb(255, 0, 221);
      background: #010033;
      padding: 1.5em 1.5em 1.5em 1.5em;
      transition: all 0.25s ease;
      cursor: pointer;
    }
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
  
    .horario-img {
      display: none;
    }
    a {
      font-weight: 600;
    }
  
    @media screen and (max-width: 700px) {
      .des {
        visibility: hidden !important;
        display: none !important;
      }
  
      .horario-img {
        text-align: center;
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
  