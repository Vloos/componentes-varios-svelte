<script>
  /**@type {Object.<string, {c: ConstructorOfATypedSvelteComponent, p: Object.<string, any>} | string | number>}*/
  let fila
  /**@type {Array.<typeof fila>}*/
  export let filas

  /**
   * titulo: texto que aparece en la cabecera
   * columna: campo al que hace referencia la columna. Muestra el valor del campo
   * valor: función que calcula el valor que se muestra. puede devolver un texto para mostrar, o un objeto que se utiliza como prop del componente
   * componente: componente que se muestra, en lugar del valor. Utiliza como props un objeto devuelto por "valor". Utiliza la prop "value" dentro del componente para calcular un valor que se va a poder utilizar para filtrar y ordenar
   * desc: texto que se muestra al mantener el cursor sobre la cabecera de la columna.
   * ancho: pixeles de ancho de la columna.
   * ordenar: true, si se puede ordenar por el valor de la columna, o el nombre de la prop por la que se ordena, si se utiliza componente (solo para props de tipo string)
   * filtrar: true, si se pueden filtrar por el valor de la columna, o el nombre de la prop por la que se filtra, si se utiliza componente (solo para props de tipo string)
   * preferencia para mostrar valores: componente > valor > columna
   *@type {Array.<{
   *   titulo: string, 
   *   columna: string, 
   *   valor: (f: typeof fila) => string | Object.<string, any>, 
   *   componente: ConstructorOfATypedSvelteComponent, 
   *   ancho: number,
   *   ordenar: boolean | string, 
   *   filtrar: boolean | string,
   *   desc:string, 
   * }>}
   */
  export let columnas

  /**@type {Array.<Object.<any,any>>}*/
  let filasOrdenado
  /**@type {Array.<Object.<any,any>>}*/
  let filasFiltrado
  /**@type {number | null}*/
  let col = null
  /**@type {Array.<number>}*/
  let buscarPor = []
  let algo = []
  let filtraPh = ''

  $: {
    filas
    crearDatos()
    guardarColumnasFiltrables()
    buscaPlaceHolder()
  }

  

  /**
   * Guardar las columnas por las que se puede filtrar 
   */
  function guardarColumnasFiltrables(){
    columnas.forEach((col, n) => {
      if (col.filtrar){
        buscarPor.push(n)
      }
    })
  }

  /**
   * Prepara los datos que se van a mostrar, a partir de la configuración de las columnas
   * y las filas pasadas por props
   */
  function crearDatos(){
    /**@type {Array.<Object.<any,any>>}*/
    let tabla = []
    filas?.forEach(fila => {
      /**@type {Object.<any, any>}*/
      let tablaFila = {}
      columnas.forEach((columna, n) => {
        let data = undefined
        
        if (Object.hasOwn(columna, 'columna')){
          data = fila[columna.columna]
        }

        if (Object.hasOwn(columna, 'valor')){
          data = columna.valor(fila)
        }
        
        if (Object.hasOwn(columna, 'componente')){
          data = {
            c: columna.componente,
            p: typeof columna.valor(fila) === 'object' ? columna.valor(fila) : undefined
          }
        }
        tablaFila[n] = data
      });
      tabla.push(tablaFila)
    })
    filasOrdenado = tabla
    filasFiltrado = tabla
  }

  /**@param {number} nCol*/
  function ordenar(nCol){
    console.log('ordenando', nCol)
  }


  /**
   * Busca la cadena de texto pasada por parámetro en los campos que se pueda buscar
   * según la configuración de las columnas
   * @param {any} e Cadena de texto que se busca
   */
  function buscar(e){
    filasFiltrado = filasOrdenado.filter(fila => {
      let filtra = false
      buscarPor.forEach(nCol => {
        // si es boolean, es true, asique debería poder filtrar el valor directamente de la columna
        if (typeof columnas[nCol].filtrar === 'boolean'){
          if (fila[nCol].toLowerCase().includes(e.toLowerCase())){
            filtra = true
          }

        // si es string, debería ser el nombre del prop que utiliza el componente
        } else if (typeof columnas[nCol].filtrar === 'string'){
          if (columnas[nCol].filtrar.toLowerCase() === 'value'){
            if (fila[nCol].value.toString().toLowerCase().includes(e.toLowerCase())) {
              filtra = true
            }
          } else if (fila[nCol].p[columnas[nCol].filtrar].toLowerCase().includes(e.toLowerCase())){
            filtra = true
          }
        }
      })
      return filtra
    })
  }


  function desplegar(n){
    col = n === col ? null : n
  }

  function buscaPlaceHolder(){
    filtraPh = 'Filtrar '
    columnas.forEach((col, i) => {
      filtraPh += col.titulo
      if (i < columnas.length-2) filtraPh += ', '
      if (i == columnas.length-2) filtraPh += ' o '
    })
    
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
        <th 
          style="width:{columna?.ancho ? columna.ancho + 'px' : 'auto'}" 
          title={columna?.desc || ''}
          on:click={() => {ordenar(n)}}
        >
          <div class="cabecera">
            {columna.titulo}
          </div>
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each filasFiltrado as fila, fil}
      <tr>
        {#each columnas as columna, col}
          <td style="width:{columna?.ancho ? columna.ancho + 'px' : 'auto'}">
            {#if typeof fila[col] === 'string'}
              {fila[col]}
            {:else}
              <svelte:component this={fila[col].c} {...fila[col].p} bind:value={fila[col].value}/>
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
  <tfoot>
    <tr>
      <td colspan={columnas.length}>
        <div>
          <span>
            {filasFiltrado.length} / {filasOrdenado.length} resultados
          </span>
          <input 
            type="text"
            on:input={e => buscar(e.target.value)}
            class="buscainput"
            placeholder={filtraPh}  
          >
        </div>
      </td>
    </tr>
  </tfoot>
</table>


<style>
  table{
    width: unset;
  }

  tr {
    height: 24px;
    line-height: 24px;
    vertical-align: middle;
  }

  .cabecera{
    display: grid;
    gap: 4px;
    grid-template-columns: auto min-content;
    background-color: teal;
    place-content: center;
  }
  
  tfoot td div{
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .buscainput {
    width: 100%;
  }
</style>