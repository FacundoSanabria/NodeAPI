$('document').ready(function(){
    $.get("http://localhost:3000/api", function(data, status){
        // alert("Data: " + data + "\nStatus: " + status);
        var JSONdata = JSON.parse(data);

        //create empty table 
        var table = document.createElement("table"), row, dniCell, nameCell, surnameCell,
                                                        dniHeader, nameHeader, surnameHeader;
        table.className = "personsTable";
        document.getElementById("results").appendChild(table);
        
        //create table headers
        row = document.createElement("tr");
        surnameHeader = document.createElement("th");
        nameHeader = document.createElement("th");
        dniHeader = document.createElement("th");
        surnameHeader.innerHTML = "apellido";
        nameHeader.innerHTML = "nombre";
        dniHeader.innerHTML = "DNI";
        table.appendChild(row);
        row.appendChild(surnameHeader);
        row.appendChild(nameHeader);
        row.appendChild(dniHeader);
        
        //cycle throug persons to fill table
        jQuery.each(JSONdata, function(i, person) {
            row = document.createElement("tr");
            surnameCell = document.createElement("td");
            nameCell = document.createElement("td");
            dniCell = document.createElement("td");
            surnameCell.innerHTML = person.apellido;
            nameCell.innerHTML = person.nombre;
            dniCell.innerHTML = person.dni;
            table.appendChild(row);
            row.appendChild(surnameCell);
            row.appendChild(nameCell);
            row.appendChild(dniCell);
        }) 
    });

    document.getElementById("submit-bttn").onclick = function () {
        location.href = "../crearPersonas/crearPersonas.html";
    };
});

