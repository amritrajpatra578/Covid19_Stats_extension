fetch('https://data.covid19india.org/v4/min/data.min.json')
.then(response=>{
   return response.json()
})
.then(data =>{
    console.log(data);
    document.getElementById('confirmed').textContent += data.OR.total.confirmed
    document.getElementById('deceased').textContent += data.OR.total.deceased
    document.getElementById('recovered').textContent += data.OR.total.recovered
    document.getElementById('tested').textContent += data.OR.total.tested
    document.getElementById('1st').textContent += data.OR.total.vaccinated1
    document.getElementById('2nd').textContent += data.OR.total.vaccinated2
    
})
