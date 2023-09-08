<script>
  export let cerrarFn = () => 'funcion'


  function cerrar(){
    if (cerrarFn){
      cerrarFn();
    }
  }




</script>

<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, necessitatibus laboriosam minus magni explicabo qui esse culpa nemo ipsam unde est fugiat voluptates soluta provident, tempora illum quos eligendi quaerat?
</p>
<button
  on:click={cerrar}
>Pues OK</button>