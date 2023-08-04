<script>
	import { fade, slide } from "svelte/transition";

  /**@type {Object.<any, any>}*/
  let p
  /**@type {ConstructorOfATypedSvelteComponent | undefined}*/
  let c
  /**@type {HTMLDialogElement}*/
  let modal

  /**
   * cuando c es undefined, comienza la animación.
   * cuando la animación termina, se dispara close()
   */
  export function cerrar() {
    p = undefined;
    c = undefined;
  }

  /**
   * Cuando c es un componente, comienza la animación.
   * cuando la animación comienza, se dispara showModal()
   * @param {{c:ConstructorOfATypedSvelteComponent, p:Object.<string, any>}} modalData
   */
  export function abrir(modalData) {
    p = modalData.p || {}
    p.cerrarFn = cerrar
    c = modalData.c
  }
</script>


{#if c}
  <dialog
    bind:this={modal}
    transition:fade={{duration:75}}
    on:introstart={() => modal.showModal()}
    on:outroend={() => {modal.close()}}
    on:cancel|preventDefault={cerrar}
  >
    <section>
      <svelte:component this={c} {...p}/>
    </section>
    <button
      on:click={cerrar}
    >Cerrar</button>
  </dialog>
{/if}


<style>
  dialog{
    margin: auto auto;
    border: none;
    background: transparent;
    width: min-content;
  }

  dialog[open] {
    display: grid;
  }

  dialog::backdrop {
    backdrop-filter: blur(2px);
    background: var(--bg-main);
  }
</style>