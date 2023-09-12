<script>
	import Tabs from "$lib/components/tabs.svelte";
  import CompoUno from "$lib/components/compouno.svelte";
  import CompoDos from "$lib/components/compoDos.svelte";
	import ModalCerrar from "$lib/components/componente-modal-cerrar.svelte";
  import DataGrid from "$lib/components/datagrid/data-grid.svelte";
  import PropTestCompo from "$lib/components/propTestCompo.svelte";
	import Modal, {modals} from "$lib/components/modal.svelte";
	import { onMount } from "svelte";
  import { notifications } from "$lib/notifications";



  let filas

  onMount(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(res => {
        filas = res.results
      })
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
      desc: 'valor compuesto por los valores de dos columnas',
      valor: (f) => `${f.name.first} ${f.name.last}`,
      filtrar: true,
      ancho: 300,
    },
    {
      titulo: 'Email',
      desc: 'Valor de columna',
      columna: 'email',
      ordenar: true,
      filtrar: true,
      ancho: 300,
    },
    {
      titulo: 'Ciudad',
      desc: 'Prueba para añadir componente con props, utilizando un callback que recibe la fila y devuelve un objeto con el componente y los props',
      valor: f => {
        return {laProp: f.location.city}
      },
      componente: PropTestCompo,
      ordenar: 'laProp',
      filtrar: 'value',
      ancho: 300,
    },
  ]


  /**@type {import('$lib/components/modal.svelte').default}*/
  let modal

  /**@param {ConstructorOfATypedSvelteComponent} c
   * @param {Object.<string, any> | undefined} p
  */
  function abrirModal(c, p = undefined) {
    
    modals.open({c, p})
  }



</script>


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
  <button on:click={() => notifications.info('Información!')}>Información</button>
  <button on:click={() => notifications.success('Éxitazo!')}>Éxito</button>
  <button on:click={() => notifications.warning('Advertencia!')}>Advertencia</button>
  <button on:click={() => notifications.failure('Errorazo!')}>Error</button>
</div>
<Tabs {items}/>
<!-- <DataGrid {columnas} {filas}/> -->