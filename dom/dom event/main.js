// DOM event
//1 , INPUT / SELECT
//2. Key Up / Down
// lấy ra value của input

 var inputElement= document.querySelector('input[type="text"]');
 inputElement.oninput = function(e){
    console.log(e.target.value);
 }

 //check box
 var inputElement = document.querySelector('input[type="checkbox"]');
 inputElement.onchange = function (e) {
   console.log(e.target.checked);
 };
 // select
 var inputElement = document.querySelector('select');
 inputElement.onchange = function (e) {
   console.log(e.target.value);
 };
 // key up
 var inputElement = document.querySelector('input[type="text"]');
 inputElement.onkeyup = function (e) {
   console.log(e.target.value);}
    // BÀN PHÍM
    document.onkeypress= function(e){
        switch(e.which){
            case 27:
                console.log('ẼXIT');
                break;
                case 13:
                    console.log('send chat');
                    break;
        }
    }


    // 3. preventDefault
    // 2. stopPropagation

        // 3. preventDefault
        var aElements = document.links;
       
        for (var i=0; i<aElements; i++){
          aElements[i].onclick= function(e){
            if( !e.target.href.startsWith( 'https://www.youtube.com/')){
              e.preventDefault();
            }
          }
        }