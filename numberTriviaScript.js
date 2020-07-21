const url='http://numbersapi.com/';
const type='/trivia';
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("button").onclick=()=>{
        const number=document.getElementById("number").value;
        console.log(number);
        const endpoint=url+number+type+"?json";
        fetch(endpoint).then(response=>{
            if(response.ok){
                return response.json();
            }
            throw new Error('Request failed!');
        }).then(jsonResponse=>{
            document.getElementById("trivia").innerHTML=jsonResponse.text;
            console.log(jsonResponse);
        }).catch(error=>{
            document.getElementById("trivia").innerHTML=`<p>${jsonResponse.text}</p>`;
            console.log(error);
        });
    }
})

