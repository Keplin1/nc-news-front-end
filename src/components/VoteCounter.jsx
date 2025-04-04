
import { addArticleVote } from './API';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const VoteCounter = ({ currentVotesCount, setVotesCount, articleId, setError }) => {

    const handleVote = () => {

        setVotesCount((currentVotesCount) => currentVotesCount + 1);
        setError(null);
        addArticleVote(articleId).catch(() => {
            setVotesCount((currentVotesCount) => currentVotesCount - 1);
            setError("Your vote was not successful. Please try again!");
        });
    };

    return (
        <div>
            <Button variant='contained' size="small" onClick={handleVote} endIcon={<ThumbUpIcon />}>{currentVotesCount} </Button>

        </div>
    );


}
export default VoteCounter