import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'; // Removed unused import
import { useNavigate } from 'react-router-dom'; // Adjusted import for useNavigate
import SideList from '../dashboard/Sidelist'; // Adjusted import path
import { Home } from '@mui/icons-material'; // Imported Home icon
import { ThemeProvider } from '@mui/material/styles'; // Adjusted import path
import { Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material'; // Adjusted import for dark mode icons
import { createTheme } from '@mui/material/styles';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const darkTheme1 = (dark)=>
  createTheme({
    palette: {
      mode: dark ? 'dark' : 'light', // Ternary operator to toggle between dark and light mode
    },
  });

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const navigate = useNavigate(); // Adjusted import and usage

  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <ThemeProvider theme={darkTheme1(dark)}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} var>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Tooltip title="Go to Home">
              <IconButton sx={{ mr: 1 }} onClick={() => navigate('/')}>
                <Home />
              </IconButton>
            </Tooltip>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}> {/* Corrected flexGrow property */}
              Dashboard
            </Typography>
            <IconButton onClick={() => setDark(!dark)}>
              {dark ? <Brightness7 /> : <Brightness4 />} {/* Corrected dark mode icons */}
            </IconButton>
          </Toolbar>
        </AppBar>
        <SideList open={open} setOpen={setOpen} /> {/* Adjusted props */}
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
