
let block=4;

let pack=8;
let pack2=6;


function quantity(){let square=document.getElementById('lenght__calc').value*document.getElementById('width__calc').value;
let calculate=square / block ;
let num__pack=calculate / pack;
let num__ost=calculate % pack;
let num__pack2=num__ost / pack2;
let num__pack_mat=Math.trunc(num__pack);

 console.log(('You will need '),(num__pack_mat),('packs of 8 pcs'),('and'),(num__pack2),('packs of 6 pcs') ) ;
    

}
