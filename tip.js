class Tipcalculator{
        
        //Decreasing the Tip% by 1 when clicked on (-) button in Tip % box
        
        check(tippercent){
                             
                try{
                        tippercent--;
                        
                        if(tippercent>=0 &&tippercent<=100){
                                document.getElementById("tippercent").value=tippercent;
                        }
                        else{
                                if(isNaN(tippercent) || tippercent<0 || tippercent>100){
                                        throw new exception('It is not a number');
                                }
                        }
                        

                }
                catch(err){
                        alert("Please Enter non Negative Percent Value for Tip");
                }
                


        }
        //Increasing the Tip% by 1 when clicked on (+) button in Tip % box
        checksum(tippercent){
                
              
               
                try{
                        tippercent++;
                        
                        if(tippercent>=0 &&tippercent<=100){
                                document.getElementById("tippercent").value=tippercent;
                        }
                        else{
                                if(isNaN(tippercent) || tippercent<0 || tippercent>100){
                                        throw new exception('It is not a number');
                                }
                        }
                        

                }
                catch(err){
                        alert("Please Enter Valid Percent Value i.e. Non Negative and less than equal to 100%");
                }
                


        }
        // Decreasing the num of people by one when clicked on negative signed button in Number of People input box
        checknum_people_minus(numofpeople){
              
               
                try{
                        numofpeople--;
                        
                        if(numofpeople>=0 ){
                                document.getElementById("peoplenum").value=numofpeople;
                        }
                        else{
                                if(isNaN(numofpeople) || numofpeople<0){
                                        throw new exception('It is not a number');
                                }
                        }
                        

                }
                catch(err){
                        alert("Invalid Number of People");
                }
                


        }

        // Increasing the num of people by one when clicked on negative signed button in it. When clicked on number of people input box

        checknum_people_sum(numofpeople){
              
               
                try{
                        numofpeople++;
                        
                        if(numofpeople>=0 ){
                                document.getElementById("peoplenum").value=numofpeople;
                        }
                        else{
                                if(isNaN(numofpeople) || numofpeople<0){
                                        throw new exception('It is not a number');
                                }
                        }
                        

                }
                catch(err){
                        alert("Invalid Number of people");
                }
                


        }
      // Returning the Tip per percent will Give and Total contribution of one People
      
        tippercent(billTotal,tippercent,numofpeople){

                if(isNaN(billTotal)||isNaN(tippercent)||isNaN(numofpeople)|| billTotal<0||tippercent<0||numofpeople<=0){
                        alert("Please enter Non Negative Data");
                }
                else{
                var percentage=parseInt(tippercent)*parseInt(billTotal)/100;
                var perpopletip=parseInt(percentage)/parseInt(numofpeople);
               perpopletip= perpopletip.toFixed(2);
                 
                
                var total=(parseInt(billTotal)+parseInt(percentage))/parseInt(numofpeople);
               total= total.toFixed(2);
               //Returning the per people tip after calculating
               
                document.getElementById("perperson").innerHTML='$ '+perpopletip;
                // Returning total contribution of one People in Total Payment
                document.getElementById("perpersoninvest").innerHTML='$ '+total;
                }
                
        }
        
         
}

// Instance of class

const obj=new Tipcalculator();

//Total contribution one per person tip and Total Payment Details Function
function show(){
        var billTotal=parseInt(document.getElementById("billTotal").value);
        var tippercent=parseInt(document.getElementById("tippercent").value);
        var numofpeople=parseInt(document.getElementById("peoplenum").value);

obj.tippercent(billTotal,tippercent,numofpeople);


}

// Decreasing Tip % when clicked on (-) button
function subtract(){
        var tippercent=parseInt(document.getElementById("tippercent").value);
        obj.check(parseInt(tippercent));

}

//Increasing Tip% by one when clicked on (+) button
function checksum(){
        var tippercent=parseInt(document.getElementById("tippercent").value);
        obj.checksum(parseInt(tippercent));

}
// Decreasing Number of People  when clicked on (-) button
function numpeople_sub(){
        var numofpeople=parseInt(document.getElementById("peoplenum").value);
        obj.checknum_people_minus(numofpeople);
}
////Increasing Number of People by one when clicked on (+) button

function numpeople_sum(){
        var numofpeople=parseInt(document.getElementById("peoplenum").value);
        obj.checknum_people_sum(numofpeople);
}








