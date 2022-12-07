import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import HomeIcon from '@mui/icons-material/Home';

const Topbar = () => {
    const theme = useTheme();
    const colors = theme.palette;
    return (
        <Box display='flex' justifyContent='space-between'p={2} backgroundColor={colors.primary[400]}>
            <IconButton>
                <HomeIcon/> &nbsp;
                Demo
            </IconButton>
            <IconButton> Options </IconButton>
        </Box>
    );
};

export default Topbar;