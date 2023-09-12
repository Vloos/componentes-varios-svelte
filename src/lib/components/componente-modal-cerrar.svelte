<script>
	import ComponenteModalCerrarOtro from "./componente-modal-cerrar-otro.svelte";
	import {modals} from "$lib/components/modal.svelte";
  ComponenteModalCerrarOtro
 

  let modal

  function cerrar(){
    modals.close()
  }

 
  function abrirOtro(){
    modals.open({c:ComponenteModalCerrarOtro})
  }


</script>

<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, necessitatibus laboriosam minus magni explicabo qui esse culpa nemo ipsam unde est fugiat voluptates soluta provident, tempora illum quos eligendi quaerat?
</p>
<button
  on:click={cerrar}
>Pues OK</button>
<button
  on:click={abrirOtro}
>Abrir Otro</button>