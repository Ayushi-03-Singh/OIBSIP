
const  convertbtn = document.querySelector(".convert");

convertbtn.addEventListener("click", function() {
        const inputTemperature = parseFloat(document.getElementById("temp-val").value);
        const unit= document.getElementById("unit").value;
    
        let convertedTemperature;
    
        if(unit === 'Celsius' ){
            convertedTemperature = (inputTemperature * 9/5) + 32;
            document.getElementById("result").textContent = `${convertedTemperature} degree Fahrenheit.`
        }
        else if(unit === 'Fahrenheit'){
    
            convertedTemperature = (inputTemperature - 32)* 5/9;
            document.getElementById("result").textContent = ` ${convertedTemperature} degree Celsius.`
           
        }
        else{
            document.getElementById("result").textContent = `please select a valid unit`
        }
});