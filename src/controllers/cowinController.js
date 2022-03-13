let axios = require("axios")

let getStates = async function (req, res) {
 try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
const getByDistricts = async function(req,res){
    try{
     let di =  req.query.district_id
     let d = req.query.date
     
     let options = 
     {   
         method:'get',
         url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${di}&date=${d}` 
         }
    
         let result = await axios(options)
         
         res.status(200).send({msg : result.data})
     }
    catch(err){ 
        res.status(500).send({error:err.message})}
 }
    
 let getSortedCities = async function(req , res){
     try {
         let cities = ["Bengaluru" , "Mumbai" , "Kolkata" , "Chennai" , " London" , "Moscow"]
         let cityObjArray = []

         for(let i = 0; i < cities.length; i++){
             let obj = {city : cities[i]} // {city : "Bengaluru"}
             let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d238c647159abe718d958641a43d688b`)
         console.log(resp.data.main.temp)

         obj.temp = resp.data.main.temp // {city : "Bengaluru" , temp : "301.2"}
         cityObjArray.push(obj)
         }

         let sorted = cityObjArray.sort( function (a,b)
            { return a.temp - b.temp }
         )
         console.log(sorted)
         res.status(200).send({status : true , data : sorted})
     }
     catch(err){ 
        res.status(500).send({error:err.message})
    }
 }
 
 let memeCreate = async  function(req , res) {
     try {
         let option = {
           method : "post",
           url : "https://api.imgflip.com/caption_image?template_id=181913649&text0=Codinginotherbootcamps&text1=CodinginFunctionUp&username=chewie12345&password=meme@123"
         }
         let result = await axios(option)
         res.status(200).send({ status : true , data : result.data})
        }
     catch(err){ 
        res.status(500).send({error:err.message})
    }
 }
 

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp;
module.exports.getByDistricts = getByDistricts;
module.exports.getSortedCities = getSortedCities;
module.exports.memeCreate = memeCreate;