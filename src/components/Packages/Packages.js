import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useHistory } from 'react-router';

const Packages = ({ item }) => {
    const { name, image, Descriptions, _id, Duration, Cost } = item 
    const history = useHistory()
    const buttonHandeler = id => {
    
        history.push(`/bookingpackage/${id}`);
    }
    return (
        <div className='mx-auto'>
            <Card sx={{ maxWidth: 310, minWidth: 300, height: 'auto' }}>
                <CardMedia
                    component="img"
                    height="350"
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 500 }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {Descriptions.slice(0, 150)}....
                    </Typography>
                    <Box sx={{
                            mt: 2,
                            textAlign: 'center',
                            fontWeight: 500
                        }}>
                        <Typography variant="p" color="text.secondary">
                            <AccessTimeIcon/> Duration: {Duration} - <AttachMoneyIcon/> Cost: ${Cost}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box sx={{
                            mx: 'auto',
                            width: '100%',
                            m: 1,
                            borderRadius: 1,
                            textAlign: 'center',
                        }}
                    >
                        <Button onClick={() => buttonHandeler(_id)} size="medium" variant="contained" color="success">Book Now</Button>
                    </Box>
                </CardActions>
            </Card>
        </div>
    )
}

export default Packages
