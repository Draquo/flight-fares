import { fares } from '/data.js';

const fareElement = function (departureAirport, arrivalAirport, arrivalDate, price, currency,time) {
  return `<h1>
      ${departureAirport} --> ${arrivalAirport} 
      ${arrivalDate} 
      ${price} ${currency} ${time}
    </h1>`;
}

const loadEvent = function () {
  const root = document.getElementById("root");
  console.log(fares);
  
  const from = prompt("start destinastion?")
  const toDetinatsiom = prompt("Destinacion?")

  const duration = function(outbound){
    let timeDeparture = new Date(outbound.departureDate);
    let timeArrived = new Date(outbound.arrivalDate);
    return (timeArrived - timeDeparture)/1000/60
  }
  fares.forEach(fare => {
    if(fare.outbound.departureAirport.city.name === from){
      const  h1FareElement = fareElement(
      fare.outbound.departureAirport.city.name,
      fare.outbound.arrivalAirport.city.name,
      fare.outbound.arrivalDate,
      fare.outbound.price.value,
      fare.outbound.price.currencySymbol,
      `${duration(fare.outbound)} miniutes`,

    )
    root.insertAdjacentHTML('beforeend', h1FareElement)
  }});


  let chepest = fares[0]
  fares.forEach(fare =>{
    if (fare.outbound.price.value < chepest.outbound.price.value){
      chepest = fare
    }
  })
  root.insertAdjacentHTML('beforeend', `<P>The chepest fare: ${chepest.outbound.departureAirport.city.name} --> ${chepest.outbound.arrivalAirport.city.name}, a price: ${chepest.outbound.price.value}${chepest.outbound.price.currencySymbol}</P>`)

 
  let counter = 0
  fares.forEach(fare => {
    if(fare.outbound.departureAirport.city.name === from  && fare.outbound.arrivalAirport.city.name === toDetinatsiom){
      counter++
    }
  })
 
  root.insertAdjacentHTML('beforeend', `<P>The fligts from ${from} to ${toDetinatsiom} are ${counter}</P>`)

  


    
  //   root.insertAdjacentHTML('beforeend', h1FareElement)
  // });
  
}


window.addEventListener("load", loadEvent);


//departureAirport.city.name —> arrivalAirport.city.name arrivalDate price.value
//price.currencySymbol

//eg. 
//Kraków - Barcelona 2022-12-21T14:00:00 98 zł//

//  function findData(data){
//   for(let)
//  }