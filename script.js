

document.addEventListener('DOMContentLoaded',function(){

    const namedisp=document.getElementById("typewriter");
    const nameenter=document.getElementById("uname");
    nameenter.addEventListener("keypress",function(e){
        if(e.key === 'Enter')
            dispfunc();
    });

    function dispfunc() {
        const username = document.getElementById("uname").value;

        let imgsec = document.getElementById("imgdisplay");
        imgsec.innerHTML = `<img src="https://ghchart.rshah.org/${username}" alt="${username}'s Contribution Graph">`;
        

        const namedisp = document.getElementById("typewriter");
        namedisp.innerHTML = `<p>The Contribution Graph of ${username}.`;
    }

});




