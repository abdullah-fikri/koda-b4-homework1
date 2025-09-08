const antrian = (nama, time)=>{
    return  new Promise((resolve, reject) =>{
        if(typeof nama !== 'string'){
            reject('error')
        }else{
            setTimeout(()=>{
                resolve(nama)
            },time)
        }
    })
}

antrian("John", 1500).then(res=>{
    console.log(res)
    antrian('Ed', 2000).then(res=>{
        console.log(res)
        antrian('Jane', 500).then(res=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }).catch((err)=>{
        console.log(err)
    })
}).catch((err)=>{
    console.log(err)
})





async function antrian2(){
    try {
        const nama1 = await antrian('john', 1500)
        console.log(nama1)
        const nama2 = await antrian('Ed', 2000)
        console.log(nama1)
        const nama3 = await antrian('Jane', 500)
        console.log(nama1)
    }catch{
        console.log('error')
    }
}
antrian2()