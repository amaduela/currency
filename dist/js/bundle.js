function createTR (origin, data) {
	var table = document.querySelector("#"+origin);
	var tr = document.createElement("tr");
	var tdBuy = document.createElement("td");
	var tdSell = document.createElement("td");
	var tdCurrency = document.createElement("td");

	tdCurrency.textContent = data.name;
	tdBuy.textContent = data.buy;
	tdSell.textContent = data.sell;

	tr.appendChild(tdCurrency);
	tr.appendChild(tdBuy);
	tr.appendChild(tdSell);

	table.appendChild(tr);
}

function bank(name) {
	var xhr = new XMLHttpRequest();
	var bim = "http://benchambule.ml/bankin/bankin.php?service=xr&bank=bim",
	bci = "http://benchambule.ml/bankin/bankin.php?service=xr&bank=bci",
	unico = "http://benchambule.ml/bankin/bankin.php?service=xr&bank=unico",
	standard = "http://benchambule.ml/bankin/bankin.php?service=xr&bank=standard",
	url = "";

	if(name == "bim"){
		url = bim;
	}
	else if (name == "bci"){
		url = bci;
	}
	else if (name == "standard"){
		url = standard;
	}
	else if (name == "unico"){
		url = unico;
	}

	xhr.open("GET", "./dist/json/"+name);

	xhr.addEventListener("load", function () {
		if (xhr.status == 200) {
			var result = xhr.responseText;
			var data = JSON.parse(result);

			for(var i in data){
				createTR(name, data[i]);
			}
		}
	});
	xhr.send();
}
bank("bim");
bank("bci");
bank("unico");
bank("standard");