let StartFunc = async () => {
    let jVarLocalVoucherRef = getUrlQueryParams({ inGetKey: "VoucherRef" });

    let jVarLocalFetchUrl = `/bin/Factory/VoucherDetails/${jVarLocalVoucherRef}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();
    console.log("data: ", data);
    return await data;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };