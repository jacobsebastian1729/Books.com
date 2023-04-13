import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';

import fetchProductComment from '../../redux/thunks/comment';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ProductListType from '../../redux/types/productType';
import axios from 'axios';
import ProductCommentItem from './ProductCommentItem';
import CommentType from '../../redux/types/commentType';

type ProductDetails = {
    prop: ProductListType;
}



export default function ProductComment({prop}: ProductDetails){

    //const [productComments, setProductComments] = useState<CommentType[]>([])
    const productComments = useSelector(
        (state: RootState) => state.commentList.productCommentList)


    const dispatch = useDispatch<AppDispatch>();    

    //const commentIdUrl = `http://localhost:8001/comments/parentcomments/${prop._id}`;
    const commentIdUrl = `https://books-backend-jbyp.onrender.com/comments/parentcomments/${prop._id}`;
    

   // function fetchProductComments(){
   //     if (!prop._id) {
   //         console.log("Product ID is not defined.");
   //        return;
   //     }
   //     axios
   //     .get(commentIdUrl)
   //     .then((res) => res.data)
   //    .then((data) => setProductComments(data))
   //     .catch((error) => console.log(error,'error'))
    //}

   // useEffect(() => {
    //           fetchProductComments()
    //    }, []);

   useEffect(() => {
        dispatch(fetchProductComment(commentIdUrl));
    }, [dispatch, commentIdUrl]);

    //console.log(productComments,"commentList")
    
//////////////
const [isLogin, setIsLogin] = useState<boolean>(false)

const userId = localStorage.getItem("userId")

useEffect(() => {
    if (userId === null || userId.length === 0) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  }, []);


////////////////
    const [value, setValue] = useState('');

    function handleCommentChange(event: React.ChangeEvent<HTMLInputElement>) {
        if(isLogin){
        const newValue = event.currentTarget.value;
        setValue(newValue);
        }
        else{
            setLoginMessage(true);
        }
      }


      //const userId = localStorage.getItem("userId")
      //const productIdUrl = `http://localhost:8001/comments/${userId}`;
      const productIdUrl = `https://books-backend-jbyp.onrender.com/comments/${userId}`;

      function postComment(){
    
        if( value !== ''){
            //console.log(productList, 'value')
        axios
            .post(productIdUrl, {
                comment: value,
                productId: prop._id
            })
            .then((res) => {
                window.location.reload();
            })
            .catch((error) => console.log(error))
        }
      }
      //////////////////////////////////////
      const [loginMessage, setLoginMessage] = useState(false)

      const loginhandleClose = () => {
        setLoginMessage(false);
      };

    return <div>
        <Box sx={{ flexGrow: 1, backgroundColor: 'white', paddingLeft: 9 }}>
        <Typography variant="h5" gutterBottom sx={{ backgroundColor: 'white'}}> 
        Comments
      </Typography>

      <Grid container spacing={0} p={0}>
          <Grid
            item
            xs={8}
            style={{ color: "white", backgroundColor: "#fafafa" }}
            display= 'flex'
          >
            <Avatar sx={{ bgcolor: deepOrange[500], mt: 0.8, mr:2, ml: 0.8 }}>N</Avatar>
            <TextField id="filled-basic" label="Add a comment..." variant="filled" onChange={handleCommentChange} style={{width: '80%'}}/>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{ backgroundColor: 'pink', m: .5}} onClick={postComment}>
              
              <SendIcon />
            
          </IconButton>
          </Grid>
          </Grid>

          {/*<Button variant="contained" onClick={postComment} >done</Button>*/}

        </Box>
        
        <Box paddingLeft={3}>
        {
            productComments.map((comment) => {
                return <ProductCommentItem key={comment._id} prop={comment}/>
            })
        }
    </Box>
    <Dialog
        open={loginMessage}
        onClose={loginhandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please Login"}
        </DialogTitle>
      </Dialog>
        
    </div>
}