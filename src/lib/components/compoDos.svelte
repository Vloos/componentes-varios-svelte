<script>
	import CompoUno from '$lib/components/compouno.svelte';
  import Modal from "./modal.svelte";

  let modal

  function abrirModal() {
    modal.abrir({c:CompoUno})    
  }

</script>


<Modal bind:this={modal}/>
<button
  on:click={abrirModal}
>Abrir Modal</button>
<p>
  DOS!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit magni porro fugiat, consequuntur labore maxime animi quo quaerat. Quod, numquam dolorum. Maiores ut aliquid minima, eius atque ipsum dolor commodi.
</p>
<p>Qui nihil aut provident. Magni exercitationem id provident beatae quisquam, modi ipsum itaque sequi deleniti repudiandae nesciunt assumenda laudantium consequuntur architecto quas? Modi, praesentium enim consectetur, necessitatibus deleniti amet architecto nobis suscipit cum voluptas culpa voluptatem est magni iusto autem impedit dolor laborum quia?</p>