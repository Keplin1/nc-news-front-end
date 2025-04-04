import {
    ListItem, ListItemAvatar, Avatar, Typography, Paper, Box,
    Dialog, Button, DialogActions, DialogTitle, Alert
} from '@mui/material';
import Chip from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';

import { deleteComment } from './API'
import { UserContext } from "../contexts/UserContext"
import { useContext, useState } from 'react';

const CommentCard = ({ comment, comments, setComments, setCommentDelete }) => {
    const formattedDate = new Date(comment.created_at).toLocaleDateString();
    const { user } = useContext(UserContext);

    const [open, setOpen] = useState(false);

    const [error, setError] = useState(null);
    const handleDelete = () => {
        deleteComment(comment.comment_id).then(() => {

            setCommentDelete(true);
            const filteredComments = comments.filter((com => com.comment_id !== comment.comment_id));
            setComments(filteredComments);


            handleClose();

        }).catch(() => {

            setError('Sorry, your comment was not deleted, please try again')
        })
    }



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Paper
            elevation={1}
            sx={{
                marginBottom: 2,
                padding: 2,
                backgroundColor: '#f8f9fa',
                borderRadius: 2,
                border: '1px solid #e0e0e0',
            }}
        >
            <ListItem alignItems="flex-start" sx={{ padding: 0 }}>
                <ListItemAvatar>
                    <Avatar alt={comment.author} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>

                <Box sx={{ width: '100%' }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1,
                        width: '100%'
                    }}>
                        <Typography
                            component="span"
                            variant="h6"
                            sx={{ color: 'text.primary', display: 'inline', paddingBottom: 2 }}
                        >
                            {comment.author}
                        </Typography>

                        <Typography sx={{ color: 'text.secondary' }}>
                            {formattedDate}
                        </Typography>
                    </Box>
                    <Typography variant="body1">
                        {comment.body}
                    </Typography>
                </Box>
            </ListItem>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1,
                width: '100%'
            }}>
                <Typography
                    color='primary'
                    sx={{ fontWeight: 'md', mt: 1 }}
                >
                    {comment.votes} VOTES
                </Typography>
                {comment.author === user ? <Chip
                    variant="soft"
                    color="danger"
                    sx={{ display: 'flex', justifyContent: 'flex-end' }}
                    endDecorator={<ChipDelete onDelete={handleClickOpen} />}
                >
                    Delete comment
                </Chip> : null}
            </Box>
            {error ?
                <Alert variant="outlined" severity="error">
                    {error}
                </Alert>
                : null}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                disableRestoreFocus
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete this comment?"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    )
}

export default CommentCard