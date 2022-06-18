let axios= require("axios")
const LondonWhether=async function(req,res){
    try{
        let city=req.query.q
        let appId=req.query.appid
        const whether={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId} `
        }
        let result=await axios( whether )
        console.log(result)
        let data = result.data.main.temp
        res.status(200).send({ msg: data, status: true })
    }catch(err){
        console.log(err.message)
        res.status(500).send({ msg: err.message })
    }

}

const citysByTemp=async function(req,res){
    try{
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityArrya=[]
        for(let i=0;i<cities.length;i++){
            let obj={city:cities[i]}
            let resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=fcffc60d14da0edfc88a6d8717f4a75f `)
            console.log(resp.data.main.temp)
            obj.temp=resp.data.main.temp
            cityArrya.push(obj)
        }
        let sorting=cityArrya.sort(function(a,b){return a.temp-b.temp})
        console.log(sorting)
        res.status(200).send({status:true,data:sorting})
    }catch(err){
        console.log(err.message)
        res.status(500).send({msg:err.message})

    }
}
module.exports.LondonWhether=LondonWhether 
module.exports.citysByTemp=citysByTemp