import { Box , Typography, styled} from "@mui/material";
import { navData } from "../../constants/data";


// const component = styled(Box)`
//  display:flex;
// `

const ABC =styled(Box)`
display: flex;
margin: 55px 130px 0 130px;
justify-content: space-between;
`
const XYZ =styled(Box)`
padding: 12px 8px;
text-align:center;
`

const TEXT =styled(Typography)`
font-size: 14px;
font-weight:600;
font-family:inherit;
`
const NavBar= ()=>{
    return(
        <ABC >
            {
              navData.map(data => (
                <XYZ>
                  <img src={data.url} alt="nav" style={{ width: 64 }} />
                  <TEXT>{data.text}</TEXT>
                </XYZ>
              ))
            }
          </ABC>
    )
}

export default NavBar;