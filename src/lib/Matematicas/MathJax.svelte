<svelte:head>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script>
	MathJax = {
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
	displayMath:[["$$","$$"],["\\[","\\]"]],
    packages: {'[+]': ['tagformat']},
    tagSide: 'left',
    macros: {
      RR: '{\\bf R}',
      bold: ['{\\bf #1}',1]
    }
  }
};
</script>
</svelte:head>