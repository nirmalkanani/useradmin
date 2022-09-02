import axios from 'axios'

    export const CheckData = async () => {
        
    }

  export const checkEmail = async (email) => {
    try{
        const res = await axios.get("https://useradminnk-default-rtdb.asia-southeast1.firebasedatabase.app/login.json");
        const result = Object.values(res.data)
        const FilterData = Object.keys(res.data).map((element, index) => { return { ...result[index], key:element}})

        const FindEmail = FilterData.filter((element) => element.email === email)
        return { success:true, data:FindEmail }

    } catch (err) {
        console.log("error in getting email id : ", err)
      return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
    }
  }