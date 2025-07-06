 const apiKey="9f66ae7d0594a399106529160038c322";
 const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 const inputBox=document.querySelector("#input");
 const searchbtn=document.querySelector(".search");
 const icon=document.querySelector("#weathericon");

 async function check(city) {
    const response= await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);



    document.querySelector("#h1").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector("#city").innerHTML=data.name;
    document.querySelector("#humi").innerHTML=data.main.humidity +"%";
    document.querySelector("#wind").innerHTML=data.wind.speed+"km/h Wind Speed";

    if(data.weather[0].main=="Clear"){
        icon.src="img/sun2.png";
       
    }
    else if(data.weather[0].main=="Rain"){
        icon.src="img/rain1.png";
       

    }
    else if(data.weather[0].main=="Clouds"){
        icon.src="img/cloud.jpg";
        

    }
    else if(data.weather[0].main=="Mist"){
        icon.src="img/mist.png";

    }



    
 }
 searchbtn.addEventListener("click",(ev)=>{
     check(inputBox.value);

 })
