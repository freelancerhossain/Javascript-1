function calculateBMI(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    
    let bmi= weight / (height*height);
    let bmiResult;
    if(bmi<18.5){
        bmiResult="Underweight";
    }
    else if(bmi>=18.5 && bmi<24.9){
        bmiResult="Normal Weight";
    }
    else if(bmi>=25 && bmi<29.9){
        bmiResult="Overweight";
    }
    else{
        bmiResult="Obese";
    }
    document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)}. You are ${bmiResult}.`;
}