window.onload = function(){


    document.querySelector("#board div:nth-of-type(1)").setAttribute("class", "square"); 
    document.querySelector("#board div:nth-of-type(2)").setAttribute("class", "square");
    document.querySelector("#board div:nth-of-type(3)").setAttribute("class", "square");
    document.querySelector("#board div:nth-of-type(4)").setAttribute("class", "square");
    document.querySelector("#board div:nth-of-type(5)").setAttribute("class", "square");
    document.querySelector("#board div:nth-of-type(6)").setAttribute("class", "square");
    document.querySelector("#board div:nth-of-type(7)").setAttribute("class", "square");
    document.querySelector("#board div:nth-of-type(8)").setAttribute("class", "square");
	document.querySelector("#board div:nth-of-type(9)").setAttribute("class", "square");


    const x_mark = 'X';
	const o_mark = 'O';
    var status = document.getElementById("status");
    let State = true;

    const altSymbol = (symbol) => symbol === 'X' ? x_mark : o_mark;

    const Winner = (symbol) => {
		State = false;
  		if (symbol === 'X') {
			status.innerHTML = "Congratulations! " + `${altSymbol(symbol)}`+ " is the Winner!";
			document.getElementById('game').querySelector("div").setAttribute("class", "you-won");
  		} else {
			var win = status.innerHTML = "Congratulations! " + `<span>${altSymbol(symbol)}</span>`+ " is the Winner!";
			document.getElementById('game').querySelector("div").setAttribute("class", "you-won");
  		}
	};


    const gridBlocks = document.querySelectorAll('.square');

    const winCheck = () => {
		const topLeft = gridBlocks[0].classList[1];
		const topMiddle = gridBlocks[1].classList[1];
		const topRight = gridBlocks[2].classList[1];
		const middleLeft = gridBlocks[3].classList[1];
		const middleMiddle = gridBlocks[4].classList[1];
		const middleRight = gridBlocks[5].classList[1];
		const bottomLeft = gridBlocks[6].classList[1];
		const bottomMiddle = gridBlocks[7].classList[1];
		const bottomRight = gridBlocks[8].classList[1];
	  

		if (topLeft && topLeft === topMiddle && topLeft === topRight) {
		  Winner(topLeft);
		} else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
		  Winner(middleLeft);
		} else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
		  Winner(bottomLeft);
		} else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
		  Winner(topLeft);
		} else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
		  Winner(topMiddle);
		} else if (topRight && topRight === middleRight && topRight === bottomRight) {
		  Winner(topRight);
		} else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
		  Winner(topLeft);
		} else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
		  Winner(topRight);
		}
	};
	
    var gSquares =document.getElementById("board").querySelectorAll("div"), option = 0;
    var clicked = false;

    for (var t = 0; t < gSquares.length; t++){
		gSquares[t].onclick= function()  {
			if (!State || this.classList[1] === 'X' || this.classList[1] === 'O') {
				return;
			}
			
			if(option%2 === 0){

				winCheck();
				option += 1;
                this.innerHTML="X"
                this.classList.add("X");
                this.onclick=null;

			}else {

				winCheck();
				option += 1;
                this.innerHTML="O"
				this.classList.add("O");
                this.onclick=null;
			

		};
	}
		gSquares[t].addEventListener("mouseover", function (){
				this.classList.add("hover");
				winCheck();
			});
		
		gSquares[t].addEventListener("mouseout", function (){
			this.classList.remove("hover");
		});


	}


    var resetter = document.querySelector("button");

	resetter.onclick = function () {
	window.location.reload();
	}


}