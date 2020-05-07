
renderTable();

function redirect(){
    window.location.href = "index.html"
}

var clearStorage = document.getElementById('clearScoresBtn');
clearStorage.addEventListener("click", ()=>{
    localStorage.clear();
    var HighScoreTable = document.getElementById("highScoreTable");
    HighScoreTable.removeChild(HighScoreTable.firstChild);
    renderTable();
});

function renderTable(){
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if(storedScores){
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
        table.setAttribute("class", "table table-sm table-bordered text-center")
    
        for(var i=0; i < storedScores.scores.length; i++){
            var tr = document.createElement("tr")
            var score = storedScores.scores[i]
            tr.innerHTML = `<td>${score.initials} </td><td> ${score.scores}</td>`;    
            table.append(tr);
        }
    }
}
