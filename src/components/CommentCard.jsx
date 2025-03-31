import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
const CommentCard = ({ comment }) => {

    return (
        <div sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={comment.author || "User"} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>

                <div style={{ width: '100%' }}>
                    <Typography level="h1"
                        component="span"
                        variant="h6"
                        sx={{ color: 'text.primary', display: 'inline', paddingBottom: 2, }}

                    >
                        {comment.author}
                    </Typography>
                    <Typography variant="body1">
                        {comment.body}
                    </Typography>
                </div>
            </ListItem >
        </div >





    )

}


export default CommentCard