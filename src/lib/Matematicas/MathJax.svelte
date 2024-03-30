<svelte:head>
    <script id="polyfill" src="https://polyfill.io/v3/polyfill.min.js?features=es6" defer rel="prefetch" as="script"></script>
<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" defer rel="prefetch" as="script"></script>

<script id="MathJax-config">
	window.MathJax = {
  loader: {
    load: ['ui/lazy']
  },
  startup: {
    pageReady: () => {
      return MathJax.startup.defaultPageReady();
    }
  },
  tex: {
	inlineMath:[["$","$"],["\\(","\\)"]],
	displayMath:[["$$","$$"],["\\[","\\]"]]
  }
};
//MathJax.typesetClear()
</script>
</svelte:head>