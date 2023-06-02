import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';

 const Item = ({item}) => {
    return (
        <Card
            sx={{
                width: "30%",
                maxHeight: "35vh",
                m: "5px",
             }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "85%",
                }}
            >
                <Box
                    sx={{
                        height: "30%",
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        height: "70%",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            p: "0.5em",
                        }}
                    >
                        <img
                            width={50}
                            height={100}
                            src={`${item.picture}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.picture}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            loading="lazy"
                        />
                    </Box>
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            {item.about}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardActions
                sx={{
                    height: "15%",
                }}
            >
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default Item;