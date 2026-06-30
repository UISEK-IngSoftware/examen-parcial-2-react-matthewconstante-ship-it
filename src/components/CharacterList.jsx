import { Box, Typography } from '@mui/material';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters }) => {
  if (!characters || characters.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h6" sx={{ color: '#66fcf1', fontFamily: 'Space Grotesk' }}>
          Escaneando el universo... No se encontraron personajes.
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="character-list-container">
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </Box>
  );
};

export default CharacterList;