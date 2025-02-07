// Función para mostrar el calendario
function renderCalendar() {
    const daysContainer = document.getElementById('days');
    const monthYear = document.getElementById('month-year');
    
    const today = new Date();
    const currentMonth = today.getMonth(); // 0 = Enero, 1 = Febrero, etc.
    const currentYear = today.getFullYear();
    const currentDay = today.getDate();

    // Meses y días de la semana
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    // Mostrar mes y año
    monthYear.innerText = `${months[currentMonth]} ${currentYear}`;

    // Limpiar el contenido de los días
    daysContainer.innerHTML = "";

    // Primer día del mes y total de días del mes
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Crear las cabeceras de los días de la semana
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.innerText = day;
        dayElement.style.fontWeight = 'bold';
        dayElement.style.color = '#ff69b4';
        daysContainer.appendChild(dayElement);
    });

    // Agregar los días al calendario
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('empty');
        daysContainer.appendChild(emptyDay); // Deja un espacio vacío al principio
    }

    for (let day = 1; day <= totalDaysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.innerText = day;
        dayElement.classList.add('day');

        // Si el día es el de hoy, agregar clase "today"
        if (day === currentDay) {
            dayElement.classList.add('today');
        } else if (day < currentDay) {
            // Para los días pasados, mostrar caritas tristes
            dayElement.classList.add('past-day');
        }

        daysContainer.appendChild(dayElement);
    }
}

// Cargar el calendario al iniciar
renderCalendar();
