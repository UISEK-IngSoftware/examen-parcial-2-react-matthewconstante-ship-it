import { Card, CardContent, Avatar, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  const { name, gender, status, image } = character;

  const getStatusClass = (statusStr) => {
    switch (statusStr?.toUpperCase()) {
      case 'ALIVE': return 'status-alive';
      case 'DEAD': return 'status-dead';
      default: return 'status-unknown';
    }
  };

  return (
    <Card className="character-card" elevation={0}>
      <Avatar
        src={image}
        alt={name}
        variant="rounded"
        className="character-avatar"
        sx={{ width: 85, height: 85 }}
        aria-label={`Imagen de perfil de ${name}`}
      />
      <CardContent className="character-info">
        <Typography variant="h6" component="h2" className="character-card-name">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#a8b2d1' }}>
          <strong>Género:</strong> {gender}
        </Typography>
        <Typography variant="body2" sx={{ color: '#a8b2d1', mt: 0.5 }}>
          <strong>Estado:</strong> <span className={getStatusClass(status)}>{status}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCard;