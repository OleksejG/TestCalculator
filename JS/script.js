
let block=4;

let pack=8;
let pack2=6;


function quantity(){let square=document.getElementById('lenght__calc').value*document.getElementById('width__calc').value;
let calculate=square / block ;
let num__pack=calculate / pack;
let num__pack_mat=Math.trunc(num__pack);
let num__ost=calculate % pack;
let num__pack2__ost=num__ost / pack2;
let num__pack2=calculate / pack2;

if(calculate===6,calculate===12){alert('You will need  '+num__pack2+' packs of 6 pcs') ;}
else if (calculate>6,calculate<9) {alert('You will need sfgh  '+num__pack+' packs of 8 pcs  ');}

else if(num__pack>1){alert('You will need  '+num__pack_mat+' packs of 8 pcs  '+'and '+num__pack2__ost+' packs of 6 pcs') ;
} else{alert('You will need  '+num__pack2+' packs of 6 pcs') ;
}

 
    

}
