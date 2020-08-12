function confirmationDelete(id) {
	const swalWithBootstrapButtons = Swal.mixin({
	  customClass: {
	    confirmButton: 'btn btn-success',
	    cancelButton: 'btn btn-danger'
	  },
	  buttonsStyling: false
	})

	swalWithBootstrapButtons.fire({
	  title: '¿Estas seguro de eliminar esto?',
	  text: "No podras deshacer esta accion",
	  icon: 'warning',
	  showCancelButton: true,
	  confirmButtonText: 'Si, eliminar!',
	  cancelButtonText: 'Cancelar!',
	  reverseButtons: true
	}).then((result) => {
	  if (result.value) {
	    //Redireccion a la ruta DELTE
	    window.location.href = "/eliminar/"+id+"/";

	  } else if (
	    /* Read more about handling dismissals below */
	    result.dismiss === Swal.DismissReason.cancel
	  ) {
	    swalWithBootstrapButtons.fire(
	      'Cancelado',
	      'Tranquilo, no elminaste nada :)',
	      'error'
	    )
	  }
	})
}