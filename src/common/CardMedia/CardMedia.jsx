import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CommonCard = ({image,name,price,style}) => {
  return (
    <Card sx={style ? style : {maxWidth:"270"}}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="product card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">add to basket</Button>
        <Button size="small">add to favs</Button>
      </CardActions>
    </Card>
  )
}

export default CommonCard