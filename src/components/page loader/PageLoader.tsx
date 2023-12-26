import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Container } from './PageLoader.style'

export default function PageLoader() {
    return (
        <Container>
    <Box sx={{ width: '100%', height:'100%' }}>
      <LinearProgress />
            </Box>
    </Container>
  );
}