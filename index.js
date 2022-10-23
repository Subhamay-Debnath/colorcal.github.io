let show=document.getElementById('displayunit')
        function input(x){
            show.value=show.value+x;
        }
        function cleanall(){
            show.value='';
        }
        function del(){
            show.value=show.value.slice(0,-1);
        }
        function eq()
        {
            try{
                show.value=eval(show.value);  
            }
            catch{
                show.value=("Error 405"); 
            }
            
        }
