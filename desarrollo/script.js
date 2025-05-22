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

    function validar_doctor(id_doctor) {
        console.log(id_doctor);

        const cantidad = pacientes.filter(function (paciente) { // cantidad = []
            return paciente.doctor == id_doctor;
        }, 0)
        console.log(cantidad);

        return cantidad.length;
    }

    function mostrar_error(nombre_campo) {
        const input = document.querySelector(`#${nombre_campo}`);
        input.classList.remove('error');
    }

    function quitar_error(nombre_campo) {
        const input = document.querySelector(`#${nombre_campo}`);
        input.classList.add('error');
    }

    function limpiar_campos() {
        const inputs = document.querySelectorAll('input');
        const selects = document.querySelectorAll('select');

        inputs.forEach(function (i) {
            i.value = '';
        });

        selects.forEach(function (s) {
            s.selectedIndex = 0;
        })
    }

    function cargar_pacientes() {
        const respuesta = document.querySelector('#respuesta');
        respuesta.innerHTML = ''; // Limpia lo que hay dentro del div respuesta
        const tabla = document.createElement('table');
        tabla.classList.add('table');
        tabla.innerHTML = `
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Edad</th>
                <th>Doctor</th>
            </tr>
        </thead>`;

        const tbody = document.createElement('tbody');
        pacientes.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${p.name}</td>
            <td>${p.father_name} ${p.mother_name}</td>
            <td>${p.age}</td>
            <td>${p.doctor == 1 ? 'Juanito Perez' : 'Pepito Paga Doble'}</td>
            `
            if (p.doctor == 1) {
                tr.classList.add('table-success');
            }
            else {
                tr.classList.add('table-info');
            }

            tbody.append(tr);
        });
        tabla.append(tbody);
        respuesta.appendChild(tabla);
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
        if (name.trim() === "") { // .trim() quitar espacio vacios "Hola mundo" -> "Holamundo"
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
            // Crear objeto paciente
            const paciente = {
                name,
                father_name,
                mother_name,
                age,
                gender,
                doctor
            }

            const cantidad = validar_doctor(doctor); // 2

            if (cantidad == 2) {
                alert('Doctor con horas copadas!');
                return
            }

            pacientes.push(paciente);
            cargar_pacientes();
            limpiar_campos();
            alert("Se ha agregado paciente!");
        }
    })
})
