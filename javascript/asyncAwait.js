function webServerConnect() {
    return fetch('http://jsonplaceholder.typicode.com/posts/1', {
        headers: {
            'Cache-control': 'no-cache',
        },
    }).then((response) => response.json());
}

async function getJSONData() {
    const result = await webServerConnect();
    console.log(result);
}
getJSONData();
