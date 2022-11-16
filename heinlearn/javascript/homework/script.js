const form = document.getElementById('form');
const fname = document.getElementById('name');
const myanMark = document.getElementById('myanMark');
const engMark = document.getElementById('engMark');
const mathMark = document.getElementById('mathMark');
const phyMark = document.getElementById('phyMark');
const cheMark = document.getElementById('cheMark');
const bioMark = document.getElementById('bioMark');

form.addEventListener('submit', e=>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs = () =>{
    const fnameValue = fname.value.trim();
    const myanMarkValue = myanMark.value.trim();
    const engMarkValue = engMark.value.trim();
    const mathMarkValue = mathMark.value.trim();
    const phyMarkValue = phyMark.value.trim();
    const cheMarkValue = cheMark.value.trim();
    const bioMarkValue = bioMark.value.trim();

    
    if(fnameValue === ''){
        setError(fname, '*Your Name is Required!');
    }else{
        setSuccess(fname);
    }

    if(myanMarkValue === ''){
        setError(myanMark, '*Myanmar Mark is Required!');
    }else{
        setSuccess(myanMark);
    }

    if(engMarkValue === ''){
        setError(engMark, '*English Mark is Required!');
    }else{
        setSuccess(engMark);
    }

    if(mathMarkValue === ''){
        setError(mathMark, '*Mathematic Mark is Required!');
    }else{
        setSuccess(mathMark);
    }

    if(phyMarkValue === ''){
        setError(phyMark, '*Physics Mark is Required!');
    }else{
        setSuccess(phyMark);
    }

    if(cheMarkValue === ''){
        setError(cheMark, '*Chemistry Mark is Required!');
    }else{
        setSuccess(cheMark);
    }

    if(bioMarkValue === ''){
        setError(bioMark, '*Biology Mark is Required!');
    }else{
        setSuccess(bioMark);
    }

    if(fnameValue !== '' && myanMarkValue !== '' && engMarkValue !== '' && mathMarkValue !== '' && phyMarkValue !== '' && cheMarkValue !== '' && bioMarkValue !== ''){
        showData();
    }
    
}


function showData(){
    //alert('ok')
    //get Data
    let name = document.myForm.name.value;
    let myanMark = parseInt(document.myForm.myanMark.value);
    let engMark = parseInt(document.myForm.engMark.value);
    let mathMark = parseInt(document.myForm.mathMark.value);
    let phyMark = parseInt(document.myForm.phyMark.value);
    let cheMark = parseInt(document.myForm.cheMark.value);
    let bioMark = parseInt(document.myForm.bioMark.value);
    let total = myanMark+engMark+mathMark+phyMark+cheMark+bioMark;


    let subjectMarkList = [];
    let subjectMark = {
        stuName : name,
        myanMark : myanMark,
        engMark : engMark,
        mathMark : mathMark,
        phyMark : phyMark,
        cheMark : cheMark,
        bioMark : bioMark,
        Total : total
    }
    
    subjectMarkList.push(subjectMark);
    let data = '';

for(let i = 0; i < subjectMarkList.length; i++){
    let subjectMark = subjectMarkList[i];
    data = data + `
    <tr>
        <td>${i+1}</td>
        <td>${subjectMark.stuName}</td>
        <td>${subjectMark.myanMark}</td>
        <td>${subjectMark.engMark}</td>
        <td>${subjectMark.mathMark}</td>
        <td>${subjectMark.phyMark}</td>
        <td>${subjectMark.cheMark}</td>
        <td>${subjectMark.bioMark}</td>
        <td>${subjectMark.Total}</td>

    </tr>
    `;
    let myanmar = subjectMark.myanMark;
    let english = subjectMark.engMark;
    let mathematics = subjectMark.mathMark;
    let physics = subjectMark.phyMark;
    let chemistry = subjectMark.cheMark;
    let biology = subjectMark.bioMark;


    if(myanmar >= 40 && english >= 40 && mathematics >= 40 && physics >= 40 && chemistry >= 40 && biology >= 40){
        if(myanmar >= 70 || english >= 70 || mathematics >= 80 || physics >= 80 || chemistry >= 80 || biology >= 70){
            if(myanmar >= 70 && english >= 70 && mathematics >= 80 && physics >= 80 && chemistry >= 80 && biology >= 80){
                document.getElementById('result').innerHTML =`<tr><td colspan="2">Pass or Fail</td><td colspan="7">${name} has passed the Exam with All D.</td></tr>`;
            }else{
                document.getElementById('result').innerHTML =`<tr><td colspan="2">Pass or Fail</td><td colspan="7">${name} has passed the Exam with Distinction.</td></tr>`;
            }
        }else{
            document.getElementById('result').innerHTML =`<tr><td colspan="2">Pass or Fail</td><td colspan="7">${name} has passed the Exam.</td></tr>`;
        }
    }else if(myanmar<40 || english<40 || mathematics <40 || physics<40 |chemistry<40 || biology<40){
        document.getElementById('result').innerHTML =`<tr><td colspan="2">Pass or Fail</td><td colspan="7">${name} has failed the Exam.</td></tr>`;
    }else{
        document.getElementById('result').innerHTML =`<tr><td colspan="2">Pass or Fail</td><td colspan="7">${name} has failed the Exam.</td></tr>`;
    }
}
document.getElementById('myData').innerHTML = data;
}
