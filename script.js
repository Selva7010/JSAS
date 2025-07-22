var tamil=document.getElementById("tamil")
var english=document.getElementById("english")
var maths=document.getElementById("maths")
var sceince=document.getElementById("sceince")
var social=document.getElementById("social")
var tTotalmark=document.getElementById("tmark")
var tAverage=document.getElementById("taverage")
var tGrade=document.getElementById("tgrade")
var status1=document.getElementById("status")
var subjectstatus1=document.getElementById("substatus1")
var subjectstatus2=document.getElementById("substatus2")
var subjectstatus3=document.getElementById("substatus3")
var subjectstatus4=document.getElementById("substatus4")
var subjectstatus5=document.getElementById("substatus5")
var submitbtn=document.getElementById("submit")
var clearbtn=document.getElementById("clear")

submitbtn.addEventListener("click",function(event){
    event.preventDefault()
    var Tamil=Number(tamil.value)
    var English=Number(english.value)
    var Maths=Number(maths.value)
    var Sceince=Number(sceince.value)
    var Social=Number(social.value)
    var total=Tamil+English+Maths+Sceince+Social
    var average=total/5

    var Status=average

    var tamilmark=Tamil
    var englishmark=English
    var mathsmark=Maths
    var sceincemark=Sceince
    var socialmark=Social

    if(tamilmark<35){
        status1.innerHTML="Overall Status : Fail"
        subjectstatus1.innerHTML="Someone Subject is : Fail"
        status1.style.color="red"
        subjectstatus1.style.color="red"  
        subjectstatus1.style.display="block"
    }
    else if(englishmark<35){
        status1.innerHTML="Overall Status : Fail"
        subjectstatus1.innerHTML="Someone Subject is : Fail"
        status1.style.color="red"
        subjectstatus1.style.color="red"
        subjectstatus1.style.display="block"
    }
    else if(mathsmark<35){
        status1.innerHTML="Overall Status : Fail"
        subjectstatus1.innerHTML="Someone Subject is : Fail"
        status1.style.color="red"
        subjectstatus1.style.color="red"
        subjectstatus1.style.display="block"
    }
    else if(sceincemark<35){
         status1.innerHTML="Overall Status : Fail"
        subjectstatus1.innerHTML="Someone Subject is : Fail"
        status1.style.color="red"
        subjectstatus1.style.color="red"
        subjectstatus1.style.display="block"
    }
    else if(socialmark<35){
        status1.innerHTML="Overall Status : Fail"
        subjectstatus1.innerHTML="English Subject is : Fail"
        status1.style.color="red"
        subjectstatus1.style.color="red"
        subjectstatus1.style.display="block"
    }
    else{
        status1.innerHTML="Overall Status : Pass"
        // subjectstatus1.innerHTML=""
        status1.style.color="white"  
        subjectstatus1.style.display="none" 
       
    }

    
    var averagemark=average
    if(averagemark>=90){
        tGrade.innerHTML="Grade : A+"
    }
    else if(averagemark>=80 && average<=89){
        tGrade.innerHTML="Grade : A"
    }
    else if(averagemark>=70 && average<=79){
        tGrade.innerHTML="Grade : B"
    }
    else if(averagemark>=60 && average<=69){
        tGrade.innerHTML="Grade : C"
    }
    else if(averagemark>=50 && average<=59){
        tGrade.innerHTML="Grade : D"
    }
    else{
        tGrade.innerHTML="Grade : F"
    }

    

    tAverage.innerHTML="Average : " + average +"%"
    tTotalmark.innerHTML="Total Mark : " + total

    
})

