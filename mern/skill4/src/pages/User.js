import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Stack } from '@mui/material';
import Profile from './Profile';

function User({ data }) {
    return (
        <a href={data.html_url} target="_blank"> <Card onClick={<Profile name={data.login} />} style={{ width: "100%", border: '2px double black', margin: 8 }}>
            <CardActionArea>
                <Stack direction="row">
                    <CardMedia sx={{ width: 150, borderRadius: 50, margin: 5 }}
                        component="img"
                        height="150"
                        image={data.avatar_url}
                        alt={data.login}
                    />
                    <CardContent sx={{ margin: 5 }}>
                        <Typography gutterBottom variant="h5" component="div" >
                            {data.login}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        All people are nothing but tools. It doesn't matter how it's done. 
                        It doesn't matter what needs to be sacrificed. In this world, winning is everything. 
                        As long as I win in the end...That's all that matters.
                        </Typography>
                    </CardContent>
                </Stack>
            </CardActionArea>
        </Card></a>
    )
}

export default User