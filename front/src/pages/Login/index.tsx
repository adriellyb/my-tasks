import React from "react";
import { Avatar, Button, Container, Grid, Paper, TextField } from "@mui/material";
import EnergySavingsLeafRoundedIcon from '@mui/icons-material/EnergySavingsLeafRounded';

import image from '../../img/bg-login.webp';

function Login() {

    return (
        <div>
            <Grid container spacing={0} columns={16}>
                <Grid item xs={8} style={{ boxShadow: "15px 0px 39px -18px rgba(0,0,0,0.72)", boxSizing: "border-box" }}>
                    <Paper elevation={0} square={true} style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: 969 }} />
                </Grid>
                <Grid item xs={8}>
                    <Container maxWidth="sm">
                        <div className="avatar" style={{ display: "flex", justifyContent: "center",  marginTop: 50}} >
                            <Avatar sx={{ bgcolor: "rgb(75,89,61)" }}>
                                <EnergySavingsLeafRoundedIcon />
                            </Avatar>
                        </div>

                        <div className="title" style={{ fontSize: 20, fontWeight: "400", color: "rgb(75,89,61)", textAlign: "center", letterSpacing: 3, textTransform: "uppercase", marginTop: 10 }}>My Tasks</div>

                        <TextField id="email" label="E-mail" variant="outlined" style={{ marginTop: 50 }} color={"success"} fullWidth />
                        <TextField id="senha" label="Senha" variant="outlined" type={"password"} style={{ marginTop: 30 }} color={"success"} fullWidth />

                        <Button variant="contained" style={{ marginTop: 50 }} fullWidth>Entrar</Button>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login;