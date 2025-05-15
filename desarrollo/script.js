/*
Utilizando Javascript valide el formulario antes de guardar (20 pts)
    * No permitir campos vacios (7 pts) 
    * Seleccionar Genero y Doctor debe ser obligatorio (3 pts) 
    * Si detecta algún error, este debe ser desplegado al usuario (3 pts) 
    * Un doctor no puede tener más de dos pacientes cargados (7 pts) 

Si el formulario es valido (20 pts)
    * Utilizar un arreglo y objetos para manejar los registros (7 pts) 
    * Los registros agregados deben ser desplegados en la etiqueta section (7pts)
    * Mensaje de exito al usuario (3 pts) 
    * Limpiar campos para permitir nuevo registro (3 pts) 

Bonus ( No evaluado pero puede reemplazar algun item Fallido o no realizado)
    * Las horas del doctor Juanito Perez se despliegan en verde
      Las horas del doctor Pepito Paga Doble se despliegan en azul
*/

document.addEventListener('DOMContentLoaded', function () {
    const pacientes = [];

    function validar_campo(nombre_campo) {
        const input = document.querySelector(`#${nombre_campo}`);
        return input.value;
    }

    function mostrar_error(nombre_campo) {
        const input = document.querySelector(`#${nombre_campo}`);
        input.classList.remove('error');
    }

    function quitar_error(nombre_campo) {
        const input = document.querySelector(`#${nombre_campo}`);
        input.classList.add('error');
    }

    function cargar_pacientes(){
        const respuesta = document.querySelector('#respuesta');
        
        pacientes.forEach(element => {
            console.log(element);
        });
    }

    const btnSave = document.querySelector('#btn_save');

    btnSave.addEventListener('click', function () {
        const name = validar_campo('name');
        const father_name = validar_campo('father_name');
        const mother_name = validar_campo('mother_name');
        const age = validar_campo('age');
        const gender = validar_campo('gender');
        const doctor = validar_campo('doctor');

        console.log(name);
        if (name === "") {
            mostrar_error('error_name');
            setTimeout(() => {
                quitar_error('error_name')
            }, 3000);
        }
        else if (father_name === "") {
            mostrar_error('error_father_name');
            setTimeout(() => {
                quitar_error('error_father_name')
            }, 3000);
        }
        else if (mother_name === "") {
            mostrar_error('error_mother_name');
            setTimeout(() => {
                quitar_error('error_mother_name')
            }, 3000);
        }
        else if (age === "") {
            mostrar_error('error_age');
            setTimeout(() => {
                quitar_error('error_age')
            }, 3000);
        }
        else if (gender === "0") {
            mostrar_error('error_gender');
            setTimeout(() => {
                quitar_error('error_gender')
            }, 3000);
        }
        else if (doctor === "0") {
            mostrar_error('error_doctor');
            setTimeout(() => {
                quitar_error('error_doctor')
            }, 3000);
        }
        else {
            alert("Se ha agregado paciente!");
            // Crear objeto paciente
            const paciente = {
                name,
                father_name,
                mother_name, 
                age, 
                gender, 
                doctor
            }

            pacientes.push(paciente);
            cargar_pacientes();
        }
    })
})
