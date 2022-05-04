import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import ProductList from "../../components/list";
import SelectSmall from "../../common/Select/Select";
const Store = () => {
    return (
        <Grid container spacing={3} alignItems="stretch" sx={{mt:2, mx:2}}>
            <Grid item xs={9}>
                <Box sx={{dispaly:"flex" , m:2}}>
                    <Typography variant="subtitle1">Filter</Typography>
                    <SelectSmall/>
                    <SelectSmall/>
                </Box>
                <ProductList/>
            </Grid>
            <Grid item xs={3}>
                
            </Grid>
        </Grid>
    );
}
 
export default Store;