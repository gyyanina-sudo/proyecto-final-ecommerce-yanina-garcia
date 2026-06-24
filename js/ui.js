//Funcion que actualiza el contador de productos en la nav
export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length;
  }
};

//Esta funcion les puede servir para cuando agreguen librerias
export const mostrarMensaje = (texto, tipo = 'success', duracion = 3000) => {
  let container = document.getElementById('alert-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'alert-container';
    document.body.appendChild(container);
  }

  const alertEl = document.createElement('div');
  alertEl.className = `alert alert--${tipo}`;

  const textNode = document.createElement('span');
  textNode.className = 'alert__text';
  textNode.textContent = texto;

  const closeBtn = document.createElement('button');
  closeBtn.className = 'alert__close';
  closeBtn.type = 'button';
  closeBtn.innerHTML = '×';
  closeBtn.addEventListener('click', () => {
    alertEl.classList.add('alert--hide');
    setTimeout(() => alertEl.remove(), 300);
  });

  alertEl.appendChild(textNode);
  alertEl.appendChild(closeBtn);
  container.appendChild(alertEl);

  setTimeout(() => {
    alertEl.classList.add('alert--hide');
    setTimeout(() => alertEl.remove(), 300);
  }, duracion);
};




