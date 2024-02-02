let defaultResult=0;

let currentResult=defaultResult;

let logentri=[];

function getuserinput(){
    return parseInt(userInput.value);

}

function predec(oprater,resultbeforcal,calnumber){

    const caldec=`${resultbeforcal} ${oprater} ${calnumber}`;
    outputResult(currentResult,caldec);

}

function logobjfun(opration,revresult,number,result){

    let logobj={
        opration:opration,
        revresult:revresult,
        number:number,
        result:result
    }
    logentri.push(logobj);
    console.log(logentri);
}

function add(){

    const enternumber=getuserinput()
    const initnumber = currentResult;
    currentResult+=enternumber;
    logobjfun("addition",initnumber,enternumber,currentResult)
    predec('+',initnumber,enternumber);

}


function sub(){

    const enternumber=getuserinput()
    const initnumber = currentResult;
    currentResult-=-enternumber;
    logobjfun("subtraction",initnumber,enternumber,currentResult)
    predec('-',initnumber,enternumber);

}


function mul(){

    const enternumber=getuserinput()
    const initnumber = currentResult;
    currentResult*=enternumber;
    logobjfun("multiply",initnumber,enternumber,currentResult)
    predec('*',initnumber,enternumber);

}


function div(){

    const enternumber=getuserinput()
    const initnumber = currentResult;
    currentResult/=enternumber;
    logobjfun("division",initnumber,enternumber,currentResult)
    predec('/',initnumber,enternumber);

}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',mul);
divideBtn.addEventListener('click',div);
//addBtn.addEventListener('click',add());
// this syntxt to not click btn then add function is call 
