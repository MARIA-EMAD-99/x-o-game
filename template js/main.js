var turn= 'x';
var mytitle = document.querySelector('.title');
var square = [];
function wait(num1,num2,num3){
    mytitle.innerHTML= `${square[num1]} winner`;
    document.getElementById('item'+num1).style.backgroundColor='#000000';
    document.getElementById('item'+num2).style.backgroundColor='#000000';
    document.getElementById('item'+num3).style.backgroundColor='#000000';

    setInterval(function(){mytitle.innerHTML += '.'},1000)
    setTimeout(function(){location.reload()},4000)
}
function winner(){
    for(let i=1;i<10;i++){
      square[i]=document.getElementById('item'+i).innerHTML;
      
    }
    if(square[1]==square[2] && square[2]==square[3] && square[2]!=''){
        wait(1,2,3);
    }
   else if(square[4]==square[5]&&square[5]==square[6]&&square[5]!=''){
    wait(4,5,6)
    }
    else if(square[7]==square[8]&&square[8]==square[9]&&square[9]!=''){
        wait(7,8,9)
    }
    else if(square[1]==square[4]&&square[4]==square[7]&&square[7]!=''){
        wait(1,4,7)
    }
    else if(square[2]==square[5]&&square[5]==square[8]&&square[5]!=''){
        wait(2,5,8)
    }
    else if(square[3]==square[6]&&square[6]==square[9]&&square[9]!=''){
        wait(3,6,9)
    }
    else if(square[1]==square[5]&&square[5]==square[9]&&square[9]!=''){
        wait(1,5,9)
    }
    else if(square[3]==square[5]&&square[5]==square[7]&&square[7]!=''){
        wait(3,5,7)
    }
}
// function run(num4, num5, num6) {
//     setTimeout(function () {
//         location.reload();
//     }, 1000);
// }

function loser() {
    for (let i = 1; i < 10; i++) {
        square[i] = document.getElementById('item' + i).innerHTML;
    }

    if (square[1] !== square[2] && square[2] !== square[3] && square[2] !== '') {
        alert('done')
        // run(1, 2, 3);
    } else if (!(square[4] === square[5] && square[5] === square[6] && square[5] !== '')) {
        // run(4, 5, 6);
    } else if (!(square[7] === square[8] && square[8] === square[9] && square[9] !== '')) {
        // run(7, 8, 9);
    } else if (!(square[1] === square[4] && square[4] === square[7] && square[7] !== '')) {
        // run(1, 4, 7);
    } else if (!(square[2] === square[5] && square[5] === square[8] && square[5] !== '')) {
        // run(2, 5, 8);
    } else if (!(square[3] === square[6] && square[6] === square[9] && square[9] !== '')) {
        // run(3, 6, 9);
    } else if (!(square[1] === square[5] && square[5] === square[9] && square[9] !== '')) {
        // run(1, 5, 9);
    } else if (!(square[3] === square[5] && square[5] === square[7] && square[7] !== '')) {
        // run(3, 5, 7);
    }
}






function game(id){
  var myele= document.getElementById(id)
 if(turn==='x' && myele.innerHTML==''){
    myele.innerHTML='x';
    turn='o'
 mytitle.innerHTML= 'o';
 }
 else if(turn==='o' && myele.innerHTML==''){
myele.innerHTML='o';
turn='x'
mytitle.innerHTML= 'x';
 }
 winner()
 loser()
} 
