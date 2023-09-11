<script>
  import { SvelteToast } from '@zerodevx/svelte-toast' // https://github.com/zerodevx/svelte-toast
  import '../app.css';
</script>



<SvelteToast options={{ reversed: true, intro: { y: 192 } }}/>
<slot/>