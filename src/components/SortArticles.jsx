import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const SortArticles = ({ newParams, setSearchParams }) => {

    const [sortValue, setSort] = useState('');
    const navigate = useNavigate();

    function handleSort(event) {
        event.preventDefault();

        setSort(event.target.value);

        if (event.target.value === 'none') {
            navigate('/');
            return;
        }

        if (event.target.value === "newest") {
            newParams.set("sort_by", 'created_at');
            newParams.set("order", 'desc');
        }
        else if (event.target.value === 'oldest') {
            newParams.set("sort_by", 'created_at');
            newParams.set("order", 'asc');
        }
        else if (event.target.value === 'highest_votes') {
            newParams.set("sort_by", 'votes');
            newParams.set("order", 'desc');
        }
        else if (event.target.value === 'lowest_votes') {
            newParams.set("sort_by", 'votes');
            newParams.set("order", 'asc');
        }
        else if (event.target.value === 'most_comments') {
            newParams.set("sort_by", 'comment_count');
            newParams.set("order", 'desc');
        }
        else if (event.target.value === 'least_comments') {
            newParams.set("sort_by", 'comment_count');
            newParams.set("order", 'asc');
        }

        setSearchParams(newParams);
    }

    return (

        <Box sx={{ maxWidth: 200, margin: '20px 0' }}>
            <FormControl fullWidth size="small" >
                <InputLabel
                    id="sort-label"
                    sx={{
                        color: 'text.secondary',
                        '&.Mui-focused': {
                            color: '#9e9e9e', // Grey color when focused/minimized
                        },
                        '&.MuiInputLabel-shrink': {
                            color: '#9e9e9e', // Grey color when minimized
                        }
                    }}
                >
                    Sort results...
                </InputLabel>

                <Select
                    color="neutral"
                    labelid="handleSort"
                    id='handleSort'
                    value={sortValue}
                    label="None"
                    onChange={handleSort}
                    sx={{
                        backgroundColor: '#f5f7fa',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#e0e4e8'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#c0c4c8'
                        },
                        '& .MuiSelect-select': {
                            padding: '8px 12px'
                        },
                        '& .Mui-selected': {
                            backgroundColor: '#e6f0f5'
                        }
                    }}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                maxHeight: 200,
                                '& .MuiMenuItem-root': {
                                    padding: '6px 12px',
                                    '&.Mui-selected': {
                                        backgroundColor: '#e6f0f5'
                                    }
                                }
                            }
                        }
                    }}
                >
                    <MenuItem value={'none'}>None</MenuItem>
                    <MenuItem value={'newest'}>Newest first</MenuItem>
                    <MenuItem value={'oldest'}> Oldest first</MenuItem>
                    <MenuItem value={'highest_votes'}>Highest voted</MenuItem>
                    <MenuItem value={'lowest_votes'}>Lowest voted</MenuItem>
                    <MenuItem value={'most_comments'}>Most commented</MenuItem>
                    <MenuItem value={'least_comments'}>Least commented</MenuItem>
                </Select>
            </FormControl>
        </Box >
    )
}

export default SortArticles;