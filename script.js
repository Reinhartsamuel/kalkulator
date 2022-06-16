function insert(num){
    document.form.textarea.value=document.form.textarea.value+num
}

// ini gak bisa nih ga tau kenapa
// function samaDengan(){
// var akuMauMakanSiomay=document.form.textarea.value;    
// try {akuMauMakanSiomay = eval(akuMauMakanSiomay);
//       } catch (err) {
//         alert("Syntax Error Woi!!");
// }}

function hapusSatu(){
    var akuMauMakanSiomay= document.form.textarea.value;
    document.form.textarea.value=akuMauMakanSiomay.substring(0,akuMauMakanSiomay.length-1)
}

function bersihkan(){
    document.form.textarea.value=('')    
}
function hasil(){
try{document.getElementById('textarea').value = eval (document.getElementById('textarea').value);
    }catch (err){
        alert ("ERROR!!!!");
}}