import { useState } from 'react';
import { Container, AppBar, Toolbar, Typography, Alert, Box, Button, TextField, Pagination, Skeleton, Card, CardContent } from '@mui/material';
import CharacterList from '../components/CharacterList';
import { useCharacters } from '../hooks/useCharacters';
import './Home.css';

const Home = () => {
  const { characters, loading, error, page, setPage, refetch } = useCharacters();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderSkeletons = () => {
    return Array.from(new Array(5)).map((_, index) => (
      <Card key={index} sx={{ display: 'flex', mb: 2, p: 2, bgcolor: 'rgba(31, 40, 51, 0.5)', borderRadius: '12px' }}>
        <Skeleton variant="rounded" width={85} height={85} sx={{ bgcolor: 'rgba(102, 252, 241, 0.2)' }} />
        <CardContent sx={{ flex: 1, ml: 2, py: 0 }}>
          <Skeleton variant="text" width="60%" height={32} sx={{ bgcolor: 'rgba(102, 252, 241, 0.1)' }} />
          <Skeleton variant="text" width="40%" height={20} sx={{ bgcolor: 'rgba(102, 252, 241, 0.1)', mt: 1 }} />
          <Skeleton variant="text" width="40%" height={20} sx={{ bgcolor: 'rgba(102, 252, 241, 0.1)' }} />
        </CardContent>
      </Card>
    ));
  };

  return (
    <Box className="home-layout">
      <AppBar position="static" className="home-navbar">
        <Toolbar>
          <Typography variant="h5" className="home-app-title">
            🚀 PLANET EXPRESS API
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 5 }}>
        
        <TextField 
          fullWidth 
          variant="outlined" 
          placeholder="Buscar personaje... (Ej. Fry, Bender)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 4, input: { color: '#66fcf1' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgba(102, 252, 241, 0.3)' }, '&:hover fieldset': { borderColor: '#66fcf1' } } }}
        />

        {loading && (
          <Box sx={{ mt: 2 }}>
            {renderSkeletons()}
          </Box>
        )}

        {error && !loading && (
          <Box sx={{ mt: 4 }}>
            <Alert 
              severity="error" 
              variant="filled"
              action={<Button color="inherit" size="small" onClick={refetch}>REINTENTAR</Button>}
            >
              {error}
            </Alert>
          </Box>
        )}

        {!loading && !error && (
          <>
            <CharacterList characters={filteredCharacters} />
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
              <Pagination 
                count={5} 
                page={page} 
                onChange={(event, value) => setPage(value)} 
                color="info"
                sx={{ '& .MuiPaginationItem-root': { color: '#c5c6c7' }, '& .Mui-selected': { backgroundColor: 'rgba(102, 252, 241, 0.2) !important', color: '#66fcf1' } }}
              />
            </Box>
          </>
        )}

      </Container>
    </Box>
  );
};

export default Home;