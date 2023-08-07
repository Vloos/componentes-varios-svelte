<script>
  /**@type {Array.<Object.<string, {c: ConstructorOfATypedSvelteComponent, p: Object.<string, any>} | string | number>>}*/
  export let filas
  /**@type {Array.<{posicion: number, titulo: string, columna: string, ancho: number, ordenar: boolean, valor: function(filas):any, desc:string}>}*/
  export let columnas

  /**@type {Array.<Object.<any,any>>}*/
  let filasOrdenado

  $: {
    filas
    crearDatos()
  }

  function crearDatos(){
    /**@type {Array.<Object.<any,any>>}*/
    let tabla = []
    filas?.forEach(fila => {
      /**@type {Object.<any, any>}*/
      let tablaFila = {}
      columnas.forEach((columna, n) => {
        let data = Object.hasOwn(columna, 'valor') ? columna.valor(fila) : fila[columna.columna]
        tablaFila[n] = data  
      });
      tabla.push(tablaFila)
    })
    filasOrdenado = tabla
  }

  /**@param {number} nCol*/
  function ordenar(nCol){
    console.log('ordenando', nCol)
  }

  /**
   * https://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields
   * objSort(homes, 'city') --> sort by city (ascending, case in-sensitive)
   * objSort(homes, ['city', true]) --> sort by city (descending, case in-sensitive)
   * objSort(homes, 'city', true) --> sort by city then price (ascending, case sensitive)
   * objSort(homes, 'city', 'price') --> sort by city then price (both ascending, case in-sensitive)
   * objSort(homes, 'city', ['price', true]) --> sort by city (ascending) then price (descending),
   
  function objSort() {
    var args = arguments,
        array = args[0],
        case_sensitive, keys_length, key, desc, a, b, i;

    if (typeof arguments[arguments.length - 1] === 'boolean') {
        case_sensitive = arguments[arguments.length - 1];
        keys_length = arguments.length - 1;
    } else {
        case_sensitive = false;
        keys_length = arguments.length;
    }

    return array.sort(function (obj1, obj2) {
        for (i = 1; i < keys_length; i++) {
            key = args[i];
            if (typeof key !== 'string') {
                desc = key[1];
                key = key[0];
                a = obj1[args[i][0]];
                b = obj2[args[i][0]];
            } else {
                desc = false;
                a = obj1[args[i]];
                b = obj2[args[i]];
            }

            if (case_sensitive === false && typeof a === 'string') {
                a = a.toLowerCase();
                b = b.toLowerCase();
            }

            if (! desc) {
                if (a < b) return -1;
                if (a > b) return 1;
            } else {
                if (a > b) return -1;
                if (a < b) return 1;
            }
        }
        return 0;
    });
} //end of objSort() function
*/
</script>


<table>
  <thead>
    <tr>
      {#each columnas as columna, n}
        <th style="width:{columna?.ancho ? columna.ancho + 'px' : 'auto'}" title={columna?.desc || ''}>
          {#if columna.ordenar}
            <button
              on:click={() => {ordenar(n)}}
            >{columna.titulo}</button>
          {:else}
            {columna.titulo} 
          {/if}
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each filasOrdenado as fila}
      <tr>
        {#each columnas as columna, n}
          <td style="width:{columna?.ancho ? columna.ancho + 'px' : 'auto'}">
            {#if typeof fila[n] === 'string'}
              {fila[n]}
            {:else}
              <svelte:component this={fila[n].c} {...fila[n].p}/>
            {/if}
          </td>
        {/each}
      </tr>
    {:else}
      <tr>
        <td colspan={columnas.length}>
          Sin datos
        </td>
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