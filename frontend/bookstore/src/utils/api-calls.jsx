import axios from "axios";
// Localhost 
// const dbURL = "http://127.0.0.1:8000";
// prod backend url
const dbURL = 'http://bpksan.pythonanywhere.com/';

async function apiCall(reqUrl) {
  const data = await axios.get(dbURL + reqUrl);
  // console.log(data.data);
  return data.data;
}

async function getAllBooks() {
  const data = await apiCall("/books/all");
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
    const data = await axios.get(dbURL + "/books/" + bookID + "/info");
    return data.data;
}

async function getTransactionsByMembId(membId){
  const data = await axios.get(dbURL + "/user/" + membId+ "/transactions");
  return data.data;
}

async function getTransactionsByBookId(bookId){
  const data = await axios.get(dbURL + "/book/" + bookId+ "/transactions");
  return data.data;
}

async function postTransaction(postInfo) {
  // console.log("Posting\n", postInfo);
  await axios.post(dbURL + "/book/borrow", postInfo);
}

async function postBook(bookInfo) {
  console.log('Posting\n',bookInfo);
  // await axios.post(dbURL + "/book/add", bookInfo);
}

async function patchMemberById(membId, memberInfo){
  await axios.patch(dbURL + "/users/" + membId, memberInfo)
}

async function deleteMemberById(membId){
  await axios.delete(dbURL + "/users/" + membId)
}

async function deleteBookById(bookId){
  await axios.delete( dbURL + "/books/" + bookId + "/info")
}

export {
    axios , 
    dbURL ,
    apiCall , 
    getAllBooks ,
    getAllUsers ,
    postMember ,
    getTransactions ,
    getMemberByID ,
    getBookByID ,
    postTransaction ,
    postBook ,
    patchMemberById ,
    deleteMemberById ,
    getTransactionsByMembId ,
    getTransactionsByBookId ,
    deleteBookById
}




