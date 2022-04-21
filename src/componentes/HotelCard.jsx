import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function HotelCard({dataHotel, setDatosHotelModal }) {


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="imagen-hotel"
        height="140"
        image= {dataHotel.imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dataHotel.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span className="fw-bold">Dirección:{' '}</span>{dataHotel.direccion}<br/>
          <span className="fw-bold">Teléfono:{' '}</span>{dataHotel.telefono}<br/>
          <span className="fw-bold">E-mail:{' '}</span>{dataHotel.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={ () => setDatosHotelModal(dataHotel)}>Ver más</Button>
      </CardActions>
    </Card>
  );
}