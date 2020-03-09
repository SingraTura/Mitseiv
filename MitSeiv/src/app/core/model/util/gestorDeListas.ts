export class GestorLista {
    public eliminarDeLista(lista: string[], elementoAEliminar: string) {
        const listaActualizada = new Array<string>();
        lista.forEach(solicitud => {
          if (!solicitud.includes(elementoAEliminar)) {
            listaActualizada.push(solicitud);
          }
        });
        return listaActualizada;
      }
}
