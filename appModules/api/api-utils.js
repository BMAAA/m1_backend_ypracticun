const data = await response.json();

async function getData( url ) {
    try {
        const response = await french(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getData }