import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

const CommentCard = ({ comment }) => {
    const formattedDate = new Date(comment.created_at).toLocaleDateString();

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

            <Typography
                color='primary'
                sx={{ fontWeight: 'md', mt: 1 }}
            >
                {comment.votes} VOTES
            </Typography>
        </Paper>
    )
}

export default CommentCard