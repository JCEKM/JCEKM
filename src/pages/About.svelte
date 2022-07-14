<body>
  <section>
    <div class="container">
      <div class="text">
        <h1 class="ne">ACERCA DEL EQUIPO</h1>
        <div class="neon">Conoce a los GODS mas pendejos del Universo 🥵</div>
      </div>
    </div>
  </section>
  <div class="card-container">
    <div class="card">
      <img src="../img/stack.gif" />
      <div class="card__content">
        <h2>Stack</h2>
        <p>Es un stack o kikin bien jotito, le gustan las grandes 😏.</p>
        <a href="">indefino</a>
      </div>
    </div>
    <div class="card">
      <img src="/img/temo.gif" />
      <div class="card__content">
        <h2>Temo</h2>
        <p>Novio del stack, tambien le gustan las grandes, hijo del Senuez.</p>
        <a href="">indefino</a>
      </div>
    </div>
    <div class="card">
      <img src="/img/who.png" />
      <div class="card__content">
        <h2>WHO GOD ? CHEPE</h2>
        <p>
          El creador de esta rica pagina, la tiene grande y es GOD que más se
          puede decir.
        </p>
        <a href="https://github.com/JoseArjona" target="_blank"
          >GITHUB MAMADOR</a
        >
      </div>
    </div>
    <div class="card">
      <img src="/img/senuez.gif" />
      <div class="card__content">
        <h2>Senuez</h2>
        <p>
          Amante del Madrid, madre orgullosa del Temo. Aunque se merece una
          demanda.
        </p>
        <a href="">Indefinido</a>
      </div>
    </div>
    <div class="card">
      <img src="/img/lepajarre.png" />
      <div class="card__content">
        <h2>Le pajarre</h2>
        <p>Le gusta picar pitos. Mr simpatico 2021; dice que ya se redimio</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

  <div class="neverContainer">
    <div class="img-container">
      <img
        src="/img/nevergona.png" width="250px" height="250px" alt="nevergona"
      />
    </div>
    <div>
      <h2>Nevergona Mix</h2>
      <p>escucha nuestra playlist en YOUTUBE MUSIC</p>
      <!-- HTML !-->
      <br/>
      <a href="https://github.com/JoseArjona" target="_blank" class="button-85">Play</a>
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

  .neverContainer {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  .card-container {
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card {
    min-height: 200px;
    width: 260px;
    margin: 40px 10px;
    padding: 1rem;
    cursor: pointer;
  }
  .card img {
    width: 100%;
    height: 160px;
    border-radius: 10px;
    position: relative;
    z-index: 1000;
    transition: all 0.5s ease-in-out;
  }
  .card__content {
    margin: 1rem 0;
    color: #222;
    overflow: hidden;
    margin-top: -200px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-in-out;
  }
  .card__content h2 {
    margin: 0.6rem auto;
    text-align: center;
  }
  .card__content p {
    font-size: 1rem;
    line-height: 1.4rem;
    text-align: justify;
  }
  .card__content a {
    width: 200px;
    padding: 10px 15px;
    display: block;
    text-align: center;
    margin: 0.6rem auto;
    font-size: 1.1rem;
    color: #444;
    text-decoration: none;
    background-color: #222;
    border-radius: 10px;
    transition: 0.3s;
  }
  .card__content a:hover {
    color: #fff;
    background-color: #000;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.4);
  }
  .card:hover img {
    margin-top: -60px;
    box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.3);
  }
  .card:hover > .card__content {
    margin-top: 0;
    opacity: 1;
    visibility: visible;
  }
  @media screen and (max-width: 800px) {
    .container {
      flex-wrap: wrap;
    }
  }

  /* letras neon */
  /*  @font-face {
  font-family: neon;
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/neon.ttf);
} */

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
