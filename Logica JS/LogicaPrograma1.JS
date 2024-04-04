document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("CalcularPrograma1").addEventListener("click", function() {
        // Obtener los valores de los campos de entrada
        var tiempoEjecucionPc1 = parseFloat(document.getElementById("TiempoEjecucionPc1").value);
        var frecuenciaProcesador1 = parseFloat(document.getElementById("FrecuenciaProcesador1").value);
        var numeroInstruccionesPc1 = parseFloat(document.getElementById("NumeroInstruccionesPc1").value);

        var tiempoEjecucionPc2 = parseFloat(document.getElementById("TiempoEjecucionPc2").value);
        var frecuenciaProcesador2 = parseFloat(document.getElementById("FrecuenciaProcesador2").value);
        var numeroInstruccionesPc2 = parseFloat(document.getElementById("NumeroInstruccionesPc2").value);

        // Cálculos comparativos
        var tiempoTotalEjecucionPc1 = tiempoEjecucionPc1 * numeroInstruccionesPc1;
        var tiempoTotalEjecucionPc2 = tiempoEjecucionPc2 * numeroInstruccionesPc2;

        var frecuenciaPc1 = frecuenciaProcesador1 / tiempoTotalEjecucionPc1;
        var frecuenciaPc2 = frecuenciaProcesador2 / tiempoTotalEjecucionPc2;

        // Mostrar resultados en SweetAlert2
        Swal.fire({
            icon: 'info',
            title: 'Resultados',
            html: '<p>El tiempo total de ejecución de la PC 1 es: ' + tiempoTotalEjecucionPc1.toFixed(2) + '</p>' +
                '<p>El tiempo total de ejecución de la PC 2 es: ' + tiempoTotalEjecucionPc2.toFixed(2) + '</p>' +
                '<p>La frecuencia de la PC 1 es: ' + frecuenciaPc1.toFixed(2) + '</p>' +
                '<p>La frecuencia de la PC 2 es: ' + frecuenciaPc2.toFixed(2) + '</p>',
            confirmButtonText: 'OK'
        });
    });

    document.getElementById("RegresarMenuPrincipal1").addEventListener("click", function() {
        window.location.href = "Index.html";
    });

});
