import axios from 'axios'
const dbURL = 'http://127.0.0.1:8000'

async function apiCall(reqUrl){
    const data = await axios.get(dbURL+reqUrl);
    // console.log(data.data);
    return data.data;
}

async function getAllBooks()
{
    const data = await apiCall('/books/all');
    return data;
}

async function postMember(memberInfo)
{
    await axios.post(dbURL+'/users/',memberInfo);
}

async function getAllUsers()
{
    const data = await apiCall('/users/');
    // console.log(data);
    return data;
}

async function getTransactions()
{
    const data = await apiCall('/transactions/');
    // console.log(data);
    return data;
}

async function getMemberByID(memID) {
    const data = await axios.get(dbURL + "/users/" + memID);
    // console.log(data.data);
    return data.data;
}

async function getBookByID(bookID) {
    console.log(bookID);
    const data = await axios.get(dbURL + "/books/" + bookID + "/info");
    console.log(data.data);
    return data.data;
}

export {
    apiCall , 
    getAllBooks ,
    getAllUsers ,
    postMember ,
    getTransactions ,
    getMemberByID ,
    getBookByID
}