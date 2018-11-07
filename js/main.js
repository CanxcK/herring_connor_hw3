(() =>{
    
   
    function fetchData(){
        // console.log("gv");
        fetch(./includes/connect.php)
        .then(res => res.json())
        .then(data => {
            parseBeeData(data[0]);
        })
        .catch(function(error){
            console.error(error);
        });

    }

    function parseBeeData(bee){
        //debugger;
        // take the database data and put it on page
        const { bee_id, heading, info } = bee
        document.querySelector("#footerText").textContent = info;
        document.querySelector("#footerHead").textContent = heading;
        
        
    };
    fetchData();
})();



TweenMax.from("#Honeycomb2, #Honeycomb1", 1, {scale:0});
TweenMax.from("#hc_1, #hc_2, #hc_3, #hc_4, #hc_5, #hc_6, #hc_7", 1, {scale:0});

TweenMax.from("#bees1, #bees2", 1, {scale:0});


