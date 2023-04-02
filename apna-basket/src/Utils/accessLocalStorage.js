export const getData=(key)=>{
    try{
        let data=JSON.parse(localStorage.getItem(key))
        return data;
    }
    catch(e){
        return "undefined";
    }
   
}
export const setData=(key,sdata)=>{
    localStorage.setItem(key,JSON.stringify(sdata));
}