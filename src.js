var name1="Dharshini"+" "+"Thiyagarajan"
var i=0;
function typing(){
    if(i<name1.length){
        document.getElementById("name").innerHTML+=name1.charAt(i)
        i++;
        setTimeout(typing,250)
    }    
}
typing();

window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    var mainContent = document.getElementById('main');
  
    // Stop the loader and show the main content after 3 seconds (3000 milliseconds)
    setTimeout(function() {
      preloader.style.display = 'none';
      mainContent.style.display = 'block';
    }, 2000);
  });
  

