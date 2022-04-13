const makeRequest = location => {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`);
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

const processRequest = response => {
    return new Promise((resolve, reject) => {
        console.log('Processing Response');
        resolve(`Extra Information ${response}`)
    })
}

async function doWork() {
    try {
        const response = await makeRequest('Google') // if await is not provided, it just returns Promise
        console.log('Response Received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    }
    catch (err) {
        console.log(err);
    }

}

doWork();