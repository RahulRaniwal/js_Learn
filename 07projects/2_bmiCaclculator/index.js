const form = document.querySelector('form')

form.addEventListener('submit' , (e) =>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Abe bawli traid valid height de.`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Abe bawli traid valid weight de.`;
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        
        if(parseInt(bmi )< 18.6){
            results.innerHTML = `<span>Underweight: ${bmi}</span>`
        }else if(parseInt(bmi) >= 18.6 && parseInt(bmi) <= 24.9){
            results.innerHTML = `<span>Normal Weight: ${bmi}</span>`
        }else{
            results.innerHTML = `<span>Overweight: ${bmi}</span>`
        }
    }

})


// Less than 18.6

// Normal Range = 18.6 and 24.9

// Overweight = Greater than 24.9