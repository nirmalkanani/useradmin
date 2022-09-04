import axios from 'axios'

export const CheckData = async (email) => {
  try {
    let Check;
    const res = await axios.get("https://useradminnk-default-rtdb.asia-southeast1.firebasedatabase.app/login.json");
    const result = Object.values(res.data)
    result?.filter((element) => {
      if (element.email !== email) {
        Check = false
      } else {
        Check = true
      }
    })
    return {
      success: true,
      check: Check,
      data: result
    }
  } catch (err) {
    console.log("error in getting email id : ", err)
    return {
      success: false,
      message: (err && err.data && err.data.error) || "something went wrong"
    }
  }
}

export const checkEmail = async (email) => {
  try {
    const res = await axios.get("https://useradminnk-default-rtdb.asia-southeast1.firebasedatabase.app/login.json");
    const result = Object.values(res.data)
    const FilterData = Object.keys(res.data).map((element, index) => {
      return {
        ...result[index],
        key: element
      }
    })
    const FindEmail = FilterData.filter((element) => element.email === email)
    return {
      success: true,
      data: FindEmail,
      key: FindEmail[0].key
    }
  } catch (err) {
    console.log("error in getting email id : ", err)
    return {
      success: false,
      message: (err && err.data && err.data.error) || "something went wrong"
    }
  }
}