import { Grid, Paper, Box, Stack, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

import { AiOutlineLike, AiOutlineGift } from "react-icons/ai"
import { VscComment } from "react-icons/vsc"
import { IoDiamondOutline } from "react-icons/io5"

function ItemBox({ data }) {
  const PaperStyled = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: "center",
    height: 200,
    lineHeight: "60px",
  }))
  return (
    <Box gridColumn="span 6">
      <PaperStyled elevation={2}>
        <Stack spacing={1}>
          <Typography variant="title" color="primary" gutterBottom>
            {data.icon()}
            {data.title}
          </Typography>
          <Typography variant="h3" color="inhirit" component="span">
            {data.value}
          </Typography>
          <Typography variant="body2" gutterBottom component="span">
            {data.unit}
          </Typography>
        </Stack>
      </PaperStyled>
    </Box>
  )
}

const mockData = [
  {
    title: "Like",
    icon: () => <AiOutlineLike />,
    value: Math.floor(Math.random() * 1000),
    unit: "Likes",
  },
  {
    title: "Comment",
    icon: () => <VscComment />,
    value: Math.floor(Math.random() * 1000),
    unit: "Comments",
  },
  {
    title: "Point",
    icon: () => <AiOutlineGift />,
    value: Math.floor(Math.random() * 1000),
    unit: "Point",
  },
  {
    title: "Diamond",
    icon: () => <IoDiamondOutline />,
    value: Math.floor(Math.random() * 1000),
    unit: "Diamond",
  },
]
export default function Daily() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          {mockData.map((data, index) => (
            <ItemBox key={index} data={data} />
          ))}
        </Box>
      </Grid>
    </Grid>
  )
}
