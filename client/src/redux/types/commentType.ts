type CommentType = {
    comment: string;
    date: string;
    productId: string;
    userId: {
        email: string;
        _id: string;
    };
    parentCommentId: string;
    _id:string;
} 

export default CommentType