export default function getlocalStorageFunctions() {
  return `
  // for fetching and saving json data to/from browser localStorage!
  
  export function fetchData(name){
    let data = localStorage.getItem(name)
    try{
      data = JSON.parse(data)
    } catch(e){
      //
    }
    return data;
  }
  
  export function saveData(name, data){
    if(data){
      if(typeof data === 'object'){
        data = JSON.stringify(data)
      }
      localStorage.setItem(name, data)
    } else {
      localStorage.removeItem(name)
    } 
  }
    `;
}
