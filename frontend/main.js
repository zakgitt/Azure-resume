window.addEventListener('DOMContentLoaded', (event)=>{
    getVisitCount();
})

const funtionapi = '';

 const getVisitCount = () => {
    let count = 30 
    fetch (funtionapi). then (Response => {
        return Response.json ()
    }).then(Response =>{
        console.log("website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
 });
 return count; 
    }
    
 