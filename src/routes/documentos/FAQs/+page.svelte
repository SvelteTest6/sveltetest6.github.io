<script lang="ts">
	import MathJax from '$lib/Matematicas/MathJax.svelte'
	import Math from '$lib/Matematicas/Math.svelte'
</script>

<MathJax/>

<div style="display:flow;">Al interior de cada lado del triángulo <Math>{"\\frac{A_kA_{k+1}}{A_{k+1}B_k}=\\frac{B_kB_{k+1}}{B_{k+1}C_k}=\\frac{C_kC_{k+1}}{C_{k+1}A_k}"}</Math> se trazan dos puntos que dividen al lado en tres segmentos de igual longitud. Sean <Math display={false}>{"\\frac{A_kA_{k+1}}{A_{k+1}B_k}=\\frac{B_kB_{k+1}}{B_{k+1}C_k}=\\frac{C_kC_{k+1}}{C_{k+1}A_k}"}</Math></div>

<Math display={true}>{"\\frac{A_kA_{k+1}}{A_{k+1}B_k}=\\frac{B_kB_{k+1}}{B_{k+1}C_k}=\\frac{C_kC_{k+1}}{C_{k+1}A_k}"}</Math>