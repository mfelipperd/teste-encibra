'use client'
import {
  Avatar,
  Grid,
  Link,
  Stack,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { isGestor } from "@/app/functions/functions";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const gestor = isGestor()


  return (
    <Stack
      display='flex'
      flexDirection="row"
      justifyContent="space-between"
      alignContent={"center"}
      alignItems={"center"}
      bgcolor={'#c4d8ea'}
    >
      <Grid item xs={12} sm={4} md={3}>
        <Avatar style={isSmallScreen?{width: '50px', height: '50px', margin: '10px'}:{ width: '70px', height: '70px' }}>A</Avatar>
      </Grid>
      <Stack
        display='flex'
        flexDirection={isSmallScreen ? 'column' : 'row'}
        justifyContent={isSmallScreen ? 'center' : 'space-around'}
        width={isSmallScreen ? '20%' : '40rem'}
      >
        {isSmallScreen && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon/>
          </IconButton>
        )}
        <Stack
        display={isSmallScreen?'none':'flex'}
        flexDirection="row"
        justifyContent="space-around"
        width="100%"
        >
          <Link underline='hover' variant="button" href={'dashboard'}>Dashboard</Link>
          <Link underline='hover' variant="button" href={'/projetos'}>Projetos</Link>
          <Link underline='hover' variant="button" href={'/colaboradores'}>Colaboradores</Link>
          <Link underline='hover' variant="button" href={'/perfil'}>Meu Perfil</Link>        </Stack>
      </Stack>
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <List>
          <ListItem button component="a" href="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component="a" href="/projetos">
            <ListItemText primary="Projetos" />
          </ListItem>
          <ListItem button component="a" href="/colaboradores">
            <ListItemText primary="Colaboradores" />
          </ListItem>
          <ListItem button component="a" href="/perfil">
            <ListItemText primary="Meu Perfil" />
          </ListItem>
        </List>
      </Drawer>
    </Stack>
  );
}


