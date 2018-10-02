const BASE = 'http://localhost:3000'
let getUser= function(id){
    return fetch(BASE + '/users' + id)
    .then((resp)=>{
        let json=resp.json()
        return json
    })
}
export {getUser}
