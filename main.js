// alert con 3 botones
function uno() {
    
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
        }
    })
}


//Guardado correctamente
function dos(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has ben saved',
        showConfirmButton: false,
        timer: 1500
    })
}
