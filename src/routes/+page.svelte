<script>
	import Tabs from "$lib/components/tabs.svelte";
  import CompoUno from "$lib/components/compouno.svelte";
  import CompoDos from "$lib/components/compoDos.svelte";
	import ModalCerrar from "$lib/components/componente-modal-cerrar.svelte";
  import DataGrid from "$lib/components/data-grid.svelte";

	import Modal from "$lib/components/modal.svelte";
  let filas

  fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(res => {
      filas = res.results
    })



  let items = {
    'uno': {c:CompoDos},
    'tab dos': {c:CompoUno},
    'tab tres': {c:CompoDos},
    'cuatro': {c:CompoUno}, 
  }

  let columnas = [
    {
      titulo: 'Nombre',
      getter: (f) => `${f.name.first} ${f.name.last}`,
      ordenar: true
    },
    {
      titulo: 'Email',
      columna: 'email',
      ancho: 500
    }
  ]


  /**@type {import('svelte').SvelteComponent}*/
  let modal

  /**@param {ConstructorOfATypedSvelteComponent} c
   * @param {Object.<string, any> | undefined} p
  */
  function abrirModal(c, p = undefined) {
    modal.abrir({c, p})
  }

</script>


<Modal bind:this={modal}/>
<div class="botonera">
  <button
    on:click={() => {abrirModal(CompoUno)}}
  >Abrir 1</button>
  <button
    on:click={() => {abrirModal(CompoDos)}}
  >Abrir 2</button>
  <button
    on:click={() => {abrirModal(ModalCerrar)}}
  >Abrir Cerrar</button>
</div>
<Tabs {items}/>
<DataGrid {columnas} {filas}/>