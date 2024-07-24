const apiRequest=async (url='', opstionalObj=null, errorMsg=null)=>{
    try{
        const response=await fetch(url, opstionalObj)
        if(!response.ok) throw Error("Please Reload The App")
    } catch(err) {
        errorMsg=err.message
    } finally{
        return errorMsg
    }
}

export default apiRequest