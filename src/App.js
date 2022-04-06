import AuthenticatedApp from "./AuthenticatedApp"

function App() {
  //  / => nonauthenticated app maneja login y sgn-up
  // / => ruta de home muestra productos si estas loggeado
  // /products/:id => ruta de producto individual
  // /cart
  // /cart/checkout
  // /history
  // /profile

  return (
    <AuthenticatedApp />
  );
}

export default App;
