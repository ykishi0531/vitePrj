import { Container, Typography, Stack } from '@mui/material';
import { useState } from 'react';
import { Button } from '../../../components/Elements/Button';
import { LinkButton } from '../../../components/Elements/LinkButton';

export const Home = () => {
  const [num, setNum] = useState(0);
  const increment = () => {
    setNum((prev) => prev + 1);
  };
  const onClick = () => {
    increment();
    console.log(num);
  };
  return (
    <Container>
      <Stack>
        <Typography variant="h2">INDEX</Typography>
        <Button onClick={onClick}>Test</Button>
        <LinkButton to="/">Root</LinkButton>
      </Stack>
    </Container>
  );
};
