
function crearFamilia(nombre, miembros, tareas) {
  const familia = {
      nombre: nombre,
      miembros: miembros,
      tareas: tareas,
      semanas: [],
      agregarSemana: function(semana) {
          this.semanas.push(semana);
      },
      planificar: function(semanas) {
          for (let i = 0; i < semanas; i++) {
              const semana = [];
              for (let j = 0; j < this.tareas.length; j++) {
                  const tarea = this.tareas[j];
                  const miembro = this.miembros[j % this.miembros.length];
                  semana.push({ miembro: miembro, tarea: tarea });
              }
              this.agregarSemana(semana);
          }
      },
      mostrarPlanificacion: function() {
          console.log(`Planificación de tareas para la familia ${this.nombre}:`);
          this.semanas.forEach((semana, i) => {
              console.log(`Semana ${i + 1}:`);
              semana.forEach(({ miembro, tarea }) => {
                  console.log(`${miembro} le toca ${tarea}`);
              });
          });
      }
  };
  return familia;
}


const familiaSastre = crearFamilia("Sastre", ["Padre", "Madre", "Hijo", "Hija"], ["Poner lavadora", "Limpiar cocina", "Limpiar baño"]);
const familiaTorrens = crearFamilia("Torrens", ["Padre", "Madre", "Hijo", "Hija"], ["Planchar", "Limpiar baño"]);
const familiaMoll = crearFamilia("Moll", ["Padre", "Madre", "Hijo", "Hija Grande", "Hija Pequeña"], ["Poner lavadora", "Limpiar cocina", "Limpiar comedor", "Planchar", "Limpiar baño"]);




familiaSastre.planificar(52);
familiaTorrens.planificar(4);
familiaMoll.planificar(12);




familiaSastre.mostrarPlanificacion();
familiaTorrens.mostrarPlanificacion();
familiaMoll.mostrarPlanificacion();
