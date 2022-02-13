
import { AppBar , Toolbar, Typography} from "@mui/material";

export default function NavBar() {
	return (
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" > Tasks App </Typography>
				</Toolbar>
			</AppBar>
	);
}
