document.getElementById("tituloCentro").innerHTML = 'ESTADÍSTICAS CENTRO MÉDICO ÑUÑOA'

var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '08:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE'},
];

var dental = [
    {hora: '08:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE'},
];

//---------------------------------------RADIOLOGÍA-----------------------------------------
//------------------------2 Eliminar primer y último elemento de radiología-------------

radiologia.pop();
radiologia.shift();

document.getElementById("tituloRadio").innerHTML = `<h3>Atención en RADIOLOGÍA:</h3>`

var tablaRadio = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Prevision</th></tr> ";

for (var i = 0; i < radiologia.length; i++){
    tablaRadio +=   `<tr>
                <td>${radiologia[i].hora}</td>
                <td>${radiologia[i].especialista}</td>
                <td>${radiologia[i].paciente}</td>
                <td>${radiologia[i].rut}</td>
                <td>${radiologia[i].prevision}</td>
                </tr>`;
};
document.getElementById("cuerpo-tabla1").innerHTML = tablaRadio

//-----------------------------------------TRAUMATOLOGÍA-----------------------------------------
//------------------------------------1 Insertar horas-----------------------------------------

traumatologia.push(
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE',
    },
    {hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA',
    },
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE',
    },
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE',
    },
    {hora: '12:00', especialista: 'MATIAS ARAVENA ', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA',
    },
);

traumatologia.sort(function(a, b){
    let x = a.hora.toLowerCase();
    let y = b.hora.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});

document.getElementById("tituloTrauma").innerHTML = `<h3>Atención en TRAUMATOLOGÍA:</h3>`

var tablaTrauma = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Prevision</th></tr> ";

for (var i = 0; i < traumatologia.length; i++){
    tablaTrauma +=   `<tr>
    <td>${traumatologia[i].hora}</td>
    <td>${traumatologia[i].especialista}</td>
    <td>${traumatologia[i].paciente}</td>
    <td>${traumatologia[i].rut}</td>
    <td>${traumatologia[i].prevision}</td>
    </tr>`;
};
document.getElementById("cuerpo-tabla2").innerHTML = tablaTrauma

//-----------------------------------------------DENTAL-----------------------------------------

document.getElementById("tituloDental").innerHTML = `<h3>Atención en DENTAL:</h3>`

var tablaDental = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Prevision</th></tr> ";

for (var i = 0; i < dental.length; i++){
    tablaDental +=   `<tr>
                <td>${dental[i].hora}</td>
                <td>${dental[i].especialista}</td>
                <td>${dental[i].paciente}</td>
                <td>${dental[i].rut}</td>
                <td>${dental[i].prevision}</td>
                </tr>`;
};
document.getElementById("cuerpo-tabla3").innerHTML = tablaDental

//---------------------------3 Lista de consultas dentales-------------------------------------

document.getElementById("totalConsultasDental").innerHTML = 'TOTAL CONSULTAS DENTALES'

for (let i = 0; i < dental.length; i++){
    document.write(`<p>${dental[i].hora} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].rut} - ${dental[i].prevision}</p>`)
}

//---------------------------4 Lista total de pacientes-------------------------------------

var listaTotalPacientes = radiologia.concat(traumatologia, dental);

document.write("<h3>LISTA TOTAL DE PACIENTES</h3>")
for (let i = 0; i < listaTotalPacientes.length; i++){
    document.write(`<p>${listaTotalPacientes[i].paciente}</p>`)
}   

//--------------------------5 Filtrar pacientes ISAPRE DENTAL---------------------------------

document.write("<h3>LISTA DE PACIENTES CON ISAPRE - DENTAL</h3>")

var isapreDental = dental.filter(function(isapre){
    return isapre.prevision == 'ISAPRE';
});

isapreDental.forEach(function(isapre){
    document.write(`<p>${isapre.paciente} - ${isapre.prevision}</p>`)
})

//-------------------------6 Filtrar pacientes FONASA TRAUMA-----------------------------------

document.write("<h3>LISTA DE PACIENTES CON FONASA - TRAUMATOLOGÍA</h3>")

var fonasaTrauma = dental.filter(function(fonasa){
    return fonasa.prevision == 'FONASA';
});

fonasaTrauma.forEach(function(fonasa){
    document.write(`<p>${fonasa.paciente} - ${fonasa.prevision}</p>`)
})