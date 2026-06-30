import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CharacterCard from './CharacterCard';

describe('Pruebas en <CharacterCard />', () => {
  
  it('debe renderizar correctamente la información del personaje', () => {
    const mockCharacter = {
      id: 1,
      name: "Philip J. Fry",
      gender: "MALE",
      status: "ALIVE",
      image: "https://futuramaapi.com/static/img/human/philip-j_-fry.webp"
    };

    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByText('Philip J. Fry')).toBeDefined();
    expect(screen.getByText('MALE')).toBeDefined();
    expect(screen.getByText('ALIVE')).toBeDefined();
  });

});