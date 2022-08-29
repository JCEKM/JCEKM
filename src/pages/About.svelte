<body>
  <section>
    <div class="container">
      <div class="text">
        <h1 class="ne">ACERCA DEL EQUIPO</h1>
        <div class="neon">Conoce a los GODS mas pendejos del Universo 🥵</div>
      </div>
    </div>
  </section>
  <div class="cont">
    <div class="god senuez">
      <img class="god-profile-img" src="/img/senuezf.png" alt="" />
      <div class="god-description-bk" />
      <div class="god-logo">
        <img
          src="https://clipart.info/images/ccovers/1503438217real-madrid-logo-png.png"
          alt="Real Madrid"
        />
      </div>
      <div class="god-title">
        <p>Senuez</p>
      </div>
      <div class="god-date">
        <p>23/01/2002</p>
      </div>
      <div class="god-btn">
        <a href="https://github.com/CesarZepeda23" target="_blank"
          >GitHub mamador</a
        >
      </div>
    </div>
    <div class="god me">
      <img class="god-profile-img" src="/img/mef.png" alt="" />
      <div class="god-description-bk" />
      <div class="god-logo">
        <img
          src="https://clipart.info/images/ccovers/1503438217real-madrid-logo-png.png"
          alt="Real Madrid"
        />
      </div>
      <div class="god-title">
        <p>Chepe</p>
      </div>
      <div class="god-date">
        <p>23/07/2002</p>
      </div>
      <div class="god-btn">
        <a href="https://github.com/JoseArjona" target="_blank"
          >GitHub mamador</a
        >
      </div>
    </div>
    <div class="god pajaro">
      <img class="god-profile-img" src="/img/lepajarref.png" alt="" />
      <div class="god-description-bk" />
      <div class="god-logo">
        <img
          src="https://th.bing.com/th/id/R.978d0d86fe29f7571103d049c52aee72?rik=xddGq6L%2f9acoaw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmanchester_united%2fmanchester_united_PNG17.png&ehk=lUsTM3gvLOnbQtSQwzmP4bJg2HEJ%2fkasTvCOzHN7YKo%3d&risl=&pid=ImgRaw&r=0"
          alt="MUD"
        />
      </div>
      <div class="god-title">
        <p>Le Pajarre</p>
      </div>
      <div class="god-date">
        <p>22/10/2002</p>
      </div>
      <div class="god-btn">
        <a href="https://github.com/MarioAlejandro" target="_blank"
          >GitHub mamador</a
        >
      </div>
    </div>
    <div class="god temo">
      <img class="god-profile-img" src="/img/temof.png" alt="" />
      <div class="god-description-bk" />
      <div class="god-logo">
        <img
          src="https://logodownload.org/wp-content/uploads/2020/05/cruz-azul-fc-logo-0.png"
          alt="bluegaymachine"
        />
      </div>
      <div class="god-title">
        <p>Temo</p>
      </div>
      <div class="god-date">
        <p>17/04/2002</p>
      </div>
      <div class="god-btn">
        <a href="https://github.com/Temo17X" target="_blank">GitHub mamador</a>
      </div>
    </div>
    <div class="god">
      <img class="god-profile-img" src="/img/gods.png" alt="GODS" />
    </div>
    <div class="god stack">
      <img class="god-profile-img" src="/img/stackf.png" alt="" />
      <div class="god-description-bk" />
      <div class="god-logo">
        <img
          src="https://logodownload.org/wp-content/uploads/2020/05/cruz-azul-fc-logo-0.png"
          alt="bluegaymachine"
        />
      </div>
      <div class="god-title">
        <p>Stack</p>
      </div>
      <div class="god-date">
        <p>11/10/2002</p>
      </div>
      <div class="god-btn">
        <a href="https://github.com/Enagarlol" target="_blank">GitHub mamador</a
        >
      </div>
    </div>
  </div>

  <div class="neverContainer">
    <div class="img-container">
      <img
        src="/img/nevergona.png"
        width="250px"
        height="250px"
        alt="nevergona"
      />
    </div>
    <div>
      <h2>Nevergona Mix</h2>
      <p>escucha nuestra playlist en YOUTUBE MUSIC</p>
      <br />
      <a
        href="https://www.youtube.com/playlist?list=PL7ZwW-YGq8oZIc7yYBnn-pfq0AjqN7Vo3"
        target="_blank"
        class="button-85">Play</a
      >
    </div>
  </div>
</body>

<style>
  body {
    min-height: 100vh;
    padding: 2rem;
    display: grid;
    place-items: center;
  }

  .cont {
    display: grid;
    margin-top: 10vh;
    gap: 20px;
    margin-bottom: 20px;
    grid-template-columns: repeat(3, 1fr);
  }

  /* Tamaño Mediano - Tablets */
  @media screen and (max-width: 992px) {
    .cont {
      grid-template-columns: repeat(1, 1fr);
    }
    .god {
      width: 300px;
      min-width: 300px;
      height: 300px;
    }
  }

  /*God cards*/
  .god {
    display: inline-block;
    position: relative;
    width: 400px;
    min-width: 400px;
    height: 400px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
    animation: 5s;
  }

  .god-description-bk {
    border-radius: 30px;
    position: absolute;
    top: 62%;
    left: -5px;
    height: 65%;
    width: 108%;
    transform: skew(7deg, -7deg);
  }

  .god-logo {
    height: 80px;
    width: 80px;
    border-radius: 20px;
    background-color: rgb(0, 0, 0);
    position: absolute;
    bottom: 30%;
    left: 30px;
    overflow: hidden;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.7);
  }

  .god-logo img {
    height: 100%;
  }

  .god-title {
    position: absolute;
    color: #fff;
    font-weight: 900;
    left: 150px;
    bottom: 26%;
    font-size: 2vw;
  }

  .god-btn {
    position: absolute;
    color: #fff;
    right: 30px;
    bottom: 10%;
  }

  .god-btn a {
    color: #fff;
    text-decoration: none;
  }

  .god-btn {
    border: 0;
    border-radius: 12px;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.5;
    outline: transparent;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.2s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
  }
  .god-date {
    position: absolute;
    color: #fff;
    left: 30px;
    bottom: 10%;
  }
  /* Colores  Cards*/
  .stack .god-description-bk {
    background-image: linear-gradient(-20deg, #000000, #054b73c1);
  }
  .stack:hover {
    box-shadow: 0px 2px 5px 0px rgba(10, 102, 152, 0.97),
      0px 1px 10px 0px rgba(10, 102, 152, 0.97),
      0px 2px 4px -1px rgba(10, 102, 152, 0.97);
  }
  .stack .god-btn {
    background: linear-gradient(to bottom right, #479bef, #105375);
  }
  .stack .god-btn:not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(159, 246, 246, 0.5),
      0.125rem 0.125rem 1rem rgba(90, 192, 255, 0.5);
  }

  .stack .god-btn:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(159, 246, 246, 0.5),
      0.125rem 0.125rem 1rem rgba(90, 192, 255, 0.5);
  }

  .senuez .god-description-bk {
    background-image: linear-gradient(-20deg, #000000, #730505c1);
  }
  .senuez:hover {
    box-shadow: 0px 2px 5px 0px rgba(152, 10, 10, 0.97),
      0px 1px 10px 0px rgba(152, 10, 10, 0.97),
      0px 2px 4px -1px rgba(152, 10, 10, 0.97);
  }
  .senuez .god-btn {
    background: linear-gradient(to bottom right, #ef4747, #751010);
  }
  .senuez .god-btn:not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(245, 46, 46, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 90, 90, 0.5);
  }

  .senuez .god-btn:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(245, 46, 46, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 90, 90, 0.5);
  }

  .me .god-description-bk {
    background-image: linear-gradient(-20deg, #000000, #05733ec1);
  }
  .me:hover {
    box-shadow: 0px 2px 5px 0px rgba(10, 152, 109, 0.97),
      0px 1px 10px 0px rgba(48, 152, 10, 0.97),
      0px 2px 4px -1px rgba(10, 152, 109, 0.97);
  }
  .me .god-btn {
    background: linear-gradient(to bottom right, #47ef60, #101f75);
  }
  .me .god-btn:not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(3, 255, 79, 0.5),
      0.125rem 0.125rem 1rem rgba(90, 255, 120, 0.5);
  }

  .me .god-btn:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(3, 255, 79, 0.5),
      0.125rem 0.125rem 1rem rgba(90, 255, 120, 0.5);
  }

  .pajaro .god-description-bk {
    background-image: linear-gradient(-20deg, #000000, #727a06c1);
  }
  .pajaro:hover {
    box-shadow: 0px 2px 5px 0px rgba(152, 150, 10, 0.97),
      0px 1px 10px 0px rgba(204, 191, 10, 0.97),
      0px 2px 4px -1px rgba(152, 150, 10, 0.97);
  }
  .pajaro .god-btn {
    background: linear-gradient(to bottom right, #efe447, #5f5f06);
  }
  .pajaro .god-btn:not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(255, 188, 3, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 252, 90, 0.5);
  }

  .pajaro .god-btn:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(255, 188, 3, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 252, 90, 0.5);
  }

  .temo .god-description-bk {
    background-image: linear-gradient(-20deg, #000000, #050773c1);
  }
  .temo:hover {
    box-shadow: 0px 2px 5px 0px rgba(10, 29, 152, 0.97),
      0px 1px 10px 0px rgba(10, 29, 152, 0.97),
      0px 2px 4px -1px rgba(10, 29, 152, 0.97);
  }
  .temo .god-btn {
    background: linear-gradient(to bottom right, #1f14c4, #171075);
  }
  .temo .god-btn:not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(159, 163, 246, 0.5),
      0.125rem 0.125rem 1rem rgba(90, 112, 255, 0.5);
  }

  .temo .god-btn:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(159, 163, 246, 0.5),
      0.125rem 0.125rem 1rem rgba(90, 112, 255, 0.5);
  }

  /**/
  .neverContainer {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  @media screen and (max-width: 800px) {
    .container {
      flex-wrap: wrap;
    }
  }
  .container {
    text-align: center;
  }

  .ne {
    color: #fb4264;
    font-size: 3vw;
    line-height: 3vw;
    text-shadow: 0 0 3vw #f40a35;
  }

  .neon {
    color: #426dfb;
    font-size: 3vw;
    line-height: 3vw;
    text-shadow: 0 0 3vw #2356ff;
  }

  .ne {
    animation: neon 1s ease infinite;
    -moz-animation: neon 1s ease infinite;
    -webkit-animation: neon 1s ease infinite;
  }

  @keyframes neon {
    0%,
    100% {
      text-shadow: 0 0 1vw #fa1c16, 0 0 3vw #fa1c16, 0 0 10vw #fa1c16,
        0 0 10vw #fa1c16, 0 0 0.4vw #fed128, 0.5vw 0.5vw 0.1vw #806914;
      color: #fed128;
    }
    50% {
      text-shadow: 0 0 0.5vw #800e0b, 0 0 1.5vw #800e0b, 0 0 5vw #800e0b,
        0 0 5vw #800e0b, 0 0 0.2vw #800e0b, 0.5vw 0.5vw 0.1vw #40340a;
      color: #806914;
    }
  }

  .neon {
    animation: flux 2s linear infinite;
    -moz-animation: flux 2s linear infinite;
    -webkit-animation: flux 2s linear infinite;
    -o-animation: flux 2s linear infinite;
  }

  @keyframes flux {
    0%,
    100% {
      text-shadow: 0 0 1vw #1041ff, 0 0 3vw #1041ff, 0 0 10vw #1041ff,
        0 0 10vw #1041ff, 0 0 0.4vw #8bfdfe, 0.5vw 0.5vw 0.1vw #147280;
      color: #28d7fe;
    }
    50% {
      text-shadow: 0 0 0.5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180,
        0 0 5vw #082180, 0 0 0.2vw #082180, 0.5vw 0.5vw 0.1vw #0a3940;
      color: #146c80;
    }
  }

  /* CSS */
  .button-85 {
    padding: 0.6em 2em;
    text-decoration: none;
    border: none;
    outline: none;
    color: rgb(255, 255, 255);
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-85:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  .button-85:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
</style>
