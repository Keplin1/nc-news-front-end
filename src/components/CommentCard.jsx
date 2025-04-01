import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/joy/Divider';

import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';


const CommentCard = ({ comment }) => {

    const formattedDate = new Date(comment.created_at).toLocaleDateString();

    return (
        <Paper
            elevation={1}
            sx={{
                width: '90%',
                marginBottom: 2,
                padding: 2,
                backgroundColor: '#f8f9fa',
                borderRadius: 2,
                border: '1px solid #e0e0e0',

            }}
        >
            <main sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: 'neutral' }}>

                <ListItem alignItems="flex-start" sx={{ paddingRight: 10 }}>


                    <ListItemAvatar>
                        <Avatar alt={comment.author} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>

                    <main style={{ width: '100%' }}>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            mb: 1
                        }}>
                            <Typography level="h1"
                                component="span"
                                variant="h6"
                                sx={{ color: 'text.primary', display: 'inline', paddingBottom: 2, }}

                            >
                                {comment.author}

                            </Typography>

                            <Typography level="body-xs" sx={{ color: 'text.secondary', alignItems: 'flex-end' }}>
                                {formattedDate}
                            </Typography>
                        </Box>
                        <Typography variant="body1">
                            {comment.body}
                        </Typography>
                    </main>
                </ListItem >

                <Typography
                    level="body-xs"
                    color='primary'
                    sx={{ fontWeight: 'md' }}
                >
                    {comment.votes} VOTES

                </Typography>
                <Divider orientation="vertical" />

            </main >

        </Paper>
    )
}


export default CommentCard