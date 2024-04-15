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

async function getAllUsers()
{
    const data = await apiCall('/users/');
    // console.log(data);
    return data;
}

async function postTransaction(postInfo)
{
    console.log('Posting\n',postInfo);
    await axios.post(dbURL+'/transactions/',postInfo);
}

export {
    apiCall , 
    getAllBooks ,
    getAllUsers ,
    postTransaction
}