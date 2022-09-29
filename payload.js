// payload.js
try{
var dvv=document.getElementById('education');
var sec=dvv.parentElement;//Getting the education section

var jsn={}

var liTags=sec.getElementsByTagName('li');//Getting the list of educations

console.log("Education")
console.log("------------------------")
var i=1
for (let lit of liTags)
{
    var laTag=lit.getElementsByClassName("visually-hidden")//Getting the details inside
    if (laTag.length>1){
        var ar=[]
        for (let t of laTag )
        {
            let rgx=/logo$/i;//preventing the case of not having the logo for the institution
            if (!(rgx.test(t.textContent))){
            ar.push(t.textContent);
            console.log(t.textContent);}
        }
    jsn[i++]=ar;
    console.log("")}
}
console.log(`json >`, jsn)
}
catch(err){
    console.log('No education details present')
    
}



