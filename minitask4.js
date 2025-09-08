const url = "https://jsonplaceholder.typicode.com/users"
const api = fetch(url)
api.then((ress)=>{
    ress.json().then(ressJson=> {
        let email = []
        ressJson.forEach(item => {
            email.push(item.email.toLowerCase())
        });
        console.log(email)
    }).catch((err)=>{
        console.log(err)
    })
}).catch(err =>{
    console.log(err)
})


// async await 

async function email2(){
    try{
        let respons = await api
        let data = await respons.json()
        let email2 = []
        data.forEach(item => {
            email2.push(item.email.toLowerCase())
        })
        console.log(email2)
    }catch(err){
        console.log(err)
    }
}
email2()


const obj = {
    A : 'a',
    B : 'b',
    C : 'c',
    D : 'd',
    E : 'e',
    F : 'f',
    G: 'g',
    H : 'h',
    I : 'i',
    J: 'j',
    H: 'h',
    I: 'i',
    J : 'j',
    K : 'k',
    L : 'l',
    M : 'm',
    N : 'n',
    O : 'o',
    P : 'p',
    Q : 'q',
    R: 'r',
    S : 's',
    T : 't',
    U : 'u',
    V : 'v',
    W : 'w',
    X : 'x',
    Y: 'y',
    Z: 'z'
}



api.then((ress)=>{
    ress.json().then(ressJson=> {
        let email = []
        for(let i = 0; i < ressJson.length; i++){
            let emailSementara = ressJson[i].email
            email = [
                ...email,
                ...[emailSementara]
            ]
        }
        let lower = []
        for(let k = 0;k < email.length; k++){
            let tempLower = ''
            let tempEmail = email[k]
            for(let x = 0; x < tempEmail.length;x++){
                let char = tempEmail[x]
                if(obj[char]){
                    tempLower += obj[char]
                }else{
                    tempLower += char
                }
            }
            lower[k] = tempLower
        }
        console.log(lower)
    }).catch((err)=>{
        console.log(err)
    })
}).catch(err =>{
    console.log(err)
})


async function email3(){
    try{
        let respon = await api
    let data = await respon.json()
    let email = []
        for(let i = 0; i < data.length; i++){
            let emailSementara = data[i].email
            email = [
                ...email,
                ...[emailSementara]
            ]
        }
        let lower = []
        for(let k = 0;k < email.length; k++){
            let tempLower = ''
            let tempEmail = email[k]
            for(let x = 0; x < tempEmail.length;x++){
                let char = tempEmail[x]
                if(obj[char]){
                    tempLower += obj[char]
                }else{
                    tempLower += char
                }
            }
            lower[k] = tempLower
        }
        console.log(lower)
    }catch(err){
        console.log(err)
    }
    
}

email3()