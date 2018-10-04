const BASE = 'http://localhost:3000'

let getUser = function(id){
    return fetch(BASE + '/users/' + id)
    .then((resp) => {
        let json=resp.json()
        return json
    })
}

let getHabits = function(userId){
  return fetch(BASE + '/users/' + userId + '/habits')
  .then((res) =>{
    let json=res.json()
    return json
  })
}

export {
    getUser, getHabits
}
