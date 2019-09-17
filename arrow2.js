arrow = f => x => x => {
  f(x.n());
};

arrow(console.log)(x => x.toUpperCase())("a");
