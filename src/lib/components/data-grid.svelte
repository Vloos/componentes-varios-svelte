<script>
  /**@type {Array.<{posicion: number, titulo: string, columna: string, ancho: number}>}*/
  export let columnas
  /**@type {Array.<Object.<string, {c: ConstructorOfATypedSvelteComponent, p: Object.<string, any>} | string | number>>}*/
  export let datos



  const columnasOrdenado = [...columnas].sort((a, b) => a.posicion > b.posicion)

  console.log(datos);

</script>


<table>
  <thead>
    <tr>
      {#each columnasOrdenado as columna}
        <th style="width:{columna?.ancho ? columna.ancho + 'px' : 'auto'}">
          {columna.titulo}
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each datos as fila}
      <tr>
        {#each columnasOrdenado as columna}
          <td style="width:{columna?.ancho ? columna.ancho + 'px' : 'auto'}">
            {#if typeof fila[columna.columna] === 'string' || typeof fila[columna.columna] === 'number'}
              {fila[columna.columna]}
            {:else}
              <svelte:component this={fila[columna.columna].c} {...fila[columna.columna].p}/>
            {/if}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>


<style>
  table {
    width: 100%;
  }
  table td {
    border: 1px solid;
  }
</style>