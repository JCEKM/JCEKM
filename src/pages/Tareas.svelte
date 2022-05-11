<script>
  import { user } from "../users/User";
  import { onDestroy, onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import "../global.css";
  import {
    addDoc,
    collection,
    onSnapshot,
    deleteDoc,
    updateDoc,
    doc,
    QuerySnapshot,
  } from "firebase/firestore";
  import { db } from "../cfirebase";
  import Toastify from "toastify-js";
  onMount(() => {
    //validamos si existe un usuario y si no lo redijimos al login
    if (!$user) {
      navigate("/Login", { replace: true });
    }
  });

  //Obtener datos y guardar en un objeto
  let tareas = {
    materia: "",
    maestro: "",
    diaIn: "",
    diaF: "",
    TpTarea: "",
    desc: "",
    notas: "",
  };
  let editando = false;
  let editId = "";
  let btnText = "Guardar";
  //guardamos a firebase
  const crearTareas = async () => {
    try {
      await addDoc(collection(db, "tareas"), tareas);
      console.log("Guardado 😀");
      Toastify({
        text: "Guardado 😀",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #34e89e, #0f3443)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } catch (error) {
      console.log(error);
    }
  };
  //actualizar tareas
  const actTarea = async () => {
    try {
      await updateDoc(doc(db, "tareas", editId), tareas);
      console.log("Actualizando 🥸");
      Toastify({
        text: "Actualizando 🥸",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #0575e6, #021b79)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } catch (error) {
      console.log(error);
    }
  };
  //enviamos el formulario
  const handleSubmit = async () => {
    try {
      if (editando) {
        //se edita
        actTarea();
      } else {
        // se guarda
        crearTareas();
      }
    } catch (error) {
      console.log(error);
    }
    //Reseteamos info
    tareas = {
      materia: "",
      maestro: "",
      diaIn: "",
      diaF: "",
      TpTarea: "",
      desc: "",
      notas: "",
    };
    editando = false;
    editId = "";
    btnText = "Guardar";
  };

  //eliminar tarea
  const deleteTarea = async (id) => {
    try {
      await deleteDoc(doc(db, "tareas", id));
      console.log("Eliminado 💀");
      Toastify({
        text: "Eliminado 💀",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #8e0e00, #1f1c18)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } catch (error) {
      console.log(error);
    }
  };
  //editar tareas
  const editTarea = async (tarea) => {
    try {
      tareas.materia = tarea.materia;
      tareas.maestro = tarea.maestro;
      tareas.diaIn = tarea.diaIn;
      tareas.diaF = tarea.diaF;
      tareas.TpTarea = tarea.TpTarea;
      tareas.desc = tarea.desc;
      tareas.notas = tarea.notas;
      editId = tarea.id;
      editando = true;
      btnText = "Editar";
      Toastify({
        text: "Seleccionado 🪃",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #41295a, #2f0743)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } catch (error) {
      console.log(error);
    }
  };

  let tareass = [];
  //consulta a la base de datos
  const unsub = onSnapshot(
    collection(db, "tareas"),
    (QuerySnapshot) => {
      //conversion de datos de firebase a JS
      tareass = QuerySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      /*  console.log(tareass); */
    },
    (err) => {
      console.log(err);
    }
  );
  //eliminamos la escucha al cambiar la pagina
  onDestroy(unsub);
</script>

<div>
  {#if $user}
    <div>
      <h1 align="center">Tareas</h1>
    </div>
    <div class="contenedor">
      <section>
        <form
          on:submit|preventDefault={handleSubmit}
          class="card grid col-3 med-col-3 peq-col-2"
        >
          <div>
            <label for="materia">Materia</label>
            <input
              class="input"
              type="text"
              name="tarea-materia"
              placeholder="Ingresa La Materia"
              bind:value={tareas.materia}
            />
          </div>
          <div>
            <label for="maestro">Maestr@</label>
            <input
              class="input"
              type="text"
              name="tarea-maestro"
              placeholder="Ingresa La Maestr@"
              bind:value={tareas.maestro}
            />
          </div>
          <div>
            <label for="fechainicio">Dia Dejada</label>
            <input
              class="input"
              type="date"
              name="tarea-fechainicio"
              placeholder="Ingresa La Fecha"
              bind:value={tareas.diaIn}
            />
          </div>
          <div>
            <label for="fechainicial">Dia De Entrega</label>
            <input
              class="input"
              type="date"
              name="tarea-fechafinal"
              placeholder="Ingresa La Fecha"
              bind:value={tareas.diaF}
            />
          </div>
          <div>
            <label for="tipo">Tipo De Tarea</label>
            <input
              class="input"
              type="text"
              name="tarea-tipo"
              placeholder="Ingresa El Tipo De Tarea"
              bind:value={tareas.TpTarea}
            />
          </div>
          <div>
            <label for="desc">Descripcion</label>
            <input
              class="textarea"
              type="text"
              name="tarea-desc"
              rows="2"
              placeholder="Ingresa La Descripcion"
              bind:value={tareas.desc}
            />
          </div>
          <div>
            <label for="label">Notas</label>
            <input
              class="textarea"
              type="text"
              name="tarea-notas"
              placeholder="Ingresa Notas"
              bind:value={tareas.notas}
            />
          </div>
          <button class="boton verde" type="submit" id="btn-tarea-form"
            >{btnText}</button
          >
        </form>
      </section>
    </div>
    <!-- Mostramos las tareas -->
    {#each tareass as tarea}
      <div class="contenedor">
        <section class="card">
          <div class="card-head">
            <h2 class="titulos">{tarea.materia}</h2>
          </div>
          <div class="grid col-3 med-col-2 peq-col-2">
            <p><b>Maestro:</b><br />{tarea.maestro}</p>
            <p><b>El Dia Que Se Dejo:</b> <br />{tarea.diaIn}</p>
            <p><b>Se Entrega:</b> <br />{tarea.diaF}</p>
            <p><b>Tipo De Tarea:</b> <br /> {tarea.TpTarea}</p>
            <p><b>Que Se Va Hacer:</b> <br />{tarea.desc}</p>
            <p><b>Notas:</b> <br />{tarea.notas}</p>
            <div>
              <button class="boton-rojo" on:click={deleteTarea(tarea.id)}>
                🗑 Delete
              </button>
              <button class="boton-a" on:click={editTarea(tarea)}>
                🖉 Edit
              </button>
            </div>
          </div>
        </section>
      </div>
    {/each}
  {/if}
</div>

<style>
  /* ====================
	* FORMULARIOS *
==================== */
  form * {
    font-family: var(--fuente);
  }

  form .input {
    padding: 10px 15px;
    background-color: #222433;
    color: rgb(255, 255, 255);
    border-radius: 3px;
    border: 1px solid;
    transition: 0.3s ease all;
    width: 100%;
    margin-bottom: 20px;
  }

  form .input:focus {
    box-shadow: 5px 0px 0px 0px #32cb27;
    border: 1px solid #32cb27;
    outline: none;
  }

  .textarea {
    padding: 10px 15px;
    background-color: #222433;
    color: rgb(255, 255, 255);
    border-radius: 3px;
    border: 1px solid;
    transition: 0.3s ease all;
    width: 100%;
    margin-bottom: 20px;
  }

  .textarea:focus {
    box-shadow: 5px 0px 0px 0px #32cb27;
    border: 1px solid #32cb27;
    outline: none;
  }

  .boton.verde {
    border: none;
    border-radius: 3px;
    background: #86ee60;
    color: #2b3752;
  }

  .boton.verde:hover {
    background-color: transparent;
    color: #fff;
    border: 1px solid #86ee60;
  }

  .boton-a {
    background: #6d95ea;
    border: none;
    cursor: pointer;
    color: #fff;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 3px;
    text-align: center;
    line-height: 22px;
    transition: 0.3s ease all;
  }

  .boton-a:hover {
    background-color: transparent;
    border: 1px solid #6d95ea;
  }

  .boton-rojo {
    background: #f03847;
    border: none;
    cursor: pointer;
    color: #fff;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 3px;
    text-align: center;
    line-height: 22px;
    transition: 0.3s ease all;
  }

  .boton-rojo:hover {
    background-color: transparent;
    border: 1px solid #f03847;
  }
  .titulos {
    font-family: "Poppins", sans-serif;
    font-size: 22px;
    color: #57f995;
  }
</style>
