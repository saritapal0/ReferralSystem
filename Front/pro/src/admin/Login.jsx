import React from 'react';
import { Container, Grid, Paper, TextField, Button, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper elevation={3} style={{ padding: 20, width: '100%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                name="username"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                name="password"
                type="password"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default App;
