/* eslint-disable react/prop-types */
import {useState,useEffect} from 'react'
import BookImg from "../assets/book.png";
// import { FaCheck } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { getBookByID, getTransactionsByBookId } from "../utils/api-calls";
import Updatebook from './Updatebook';
import Deletebook from './Deletebook';
import Transaction from './Transaction';


function Bookinfo() {
  const { bookID } = useParams();
  const [book,setBook] = useState([]);
  const [transacs, setTransac] = useState([]);
  const [openEdit, setOpen] = useState(false);
  const [openDelete,setDelete] = useState(false);

  useEffect(() => {
    const dataFetch = async () => {
      let bdata = await getBookByID(bookID);
      setBook(bdata);
    };
    dataFetch().then(async()=>{
    //   console.log("----",member);
      let tdata = await getTransactionsByBookId(bookID);
      setTransac(tdata);
    });
  }, []);
//   console.log(">>>>",transacs);

  // console.log("dbhdgf",member);
  return (
    <div className="container">
      <div className="container bg-dark border rounded mt-3">
        <div className="row">
          <div className="col-md-8">
            <div className=" bg-white text-dark rounded m-4">
              <br />
              <h3 className="text-start mx-2 border-bottom pb-2">{book.title}</h3>
              
              <h5 className="text-start mx-2">ID : #0000{book.book_id}</h5>
              <h5 className="text-start mx-2">Author : {book.author}</h5>
              <h5 className="text-start mx-2">Number of copies : {book.no_of_copies}</h5>
              <h5 className="text-start mx-2">Genre : {book.categories}</h5>
              

              <br />
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={BookImg}
              alt=""
              style={{ width: "100%" }}
              className="img-fluid card-img"
            />
            <div className='d-flex justify-content-center'>
              <button className="bg-white text-dark m-1 w-50" onClick={()=>{setOpen(true)}}>
                Edit
              </button>   
              <button className="bg-white text-dark m-1 w-50" onClick={()=>{setDelete(true)}}>
                Delete
              </button>
            </div>
            
          </div>
          
        </div>
      </div>
      <div className="mt-3">
        <div className="container ">
          <h4>All Transactions</h4>
          <div>
            {
                transacs ? 
                Object.values(transacs).map((transac,index)=>{
                    // console.log(">>>>",transac);
                    return (
                        <Transaction
                            key={index} 
                            infoMemb={transac.memb} 
                            infoBook={transac.book} 
                            infoBorrow={transac.borrow_date} 
                            infoReturned={transac.return_date} 
                            infoStatus={transac.status}
                        />
                    )
                }):
                <><div>No transactions yet!</div></>

            }
            </div>
        </div>
      </div>
      {openEdit && <Updatebook closeModal={setOpen} bookData={book}/>}
      {openDelete && <Deletebook closeModal={setDelete} bookData={book}/>}

    </div>
  );
}

export default Bookinfo;
