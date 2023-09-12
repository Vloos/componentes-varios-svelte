<script>
  import { SvelteToast } from '@zerodevx/svelte-toast' // https://github.com/zerodevx/svelte-toast
  import Modal from '$lib/components/modal.svelte';
  import '../app.css';
</script>



<SvelteToast options={{ reversed: true, intro: { y: 192 } }}/>
<Modal/>
<slot/>