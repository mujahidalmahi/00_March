// Fetch API: GET, POST, basics::::
    // 
    {
        let url = fetch('https://randomuser.me/api/');
        url.then((rawData) => {
            return rawData.json();
        }).then((data) => {
            console.log(data.results[0].name.last);
        }).catch((err) => {
            console.log(err);
        })
    }
    // the rest are backend parts, we will cover them later