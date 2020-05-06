
function redirect(){
    window.location.href = "index.html"
}

var storedScores = JSON.parse(localStorage.getItem("scores"));

var table = document.createElement('table');
var p = document.getElementById("highScoreTable");
p.append(table);
table.innerHTML =   `<thead class="thead-light">
                            <tr>
                            <th>Initials</th>
                            <th>Score</th>
                            </tr>
                        </thead>`;
var tbody = document.createElement("tbody");
table.append(tbody);
table.setAttribute("class", "table table-bordered text-center")

for(var i=0; i < storedScores.scores.length; i++){
    
    
    var tr = document.createElement("tr")
    var score = storedScores.scores[i]
    tr.innerHTML = `<td>${score.initials} </td><td> ${score.scores}</td>`;    
    table.append(tr);
}

   
   