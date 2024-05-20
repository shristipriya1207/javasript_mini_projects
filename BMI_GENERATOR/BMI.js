const form = document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    if(height ==='' || height <0 || isNaN(height)){
        result.style.color="red";
        result.innerHTML="please enter valid height"
    }
    else if(weight ===''|| weight<0|| isNaN(weight)){
        result.style.color="red";
        result.innerHTML="please enter valid weight"
        
    }
    else{
        const BMI = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = `Calculated BMI is ${BMI}`;
        if(BMI <18.6){
            result.innerHTML= result.innerHTML + " underweight";
        }
        else if( BMI > 18.6 && BMI <24.9 ){
            result.innerHTML= result.innerHTML + " Normal range";
        }
        else if(BMI > 24.9){
            result.innerHTML= result.innerHTML + " Overweight";
        }
        result.style.color="green";
    }

    
});