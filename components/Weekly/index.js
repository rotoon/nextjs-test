import { useState } from "react"
import { Button, Stack, Box } from "@mui/material/"
import { AiOutlineLike, AiOutlineGift } from "react-icons/ai"
import { VscComment } from "react-icons/vsc"
import { IoDiamondOutline } from "react-icons/io5"

import ChartComponent from "@components/Chart"
import ListItem from "@components/ListItem"

import { useStore } from "@store/index"

const buttons = [
  {
    title: "Like",
    icon: <AiOutlineLike />,
  },
  {
    title: "Comment",
    icon: <VscComment />,
  },
  {
    title: "Point",
    icon: <AiOutlineGift />,
  },
  {
    title: "Diamond",
    icon: <IoDiamondOutline />,
  },
]

export default function Weekly() {
  const [type, setType] = useState("Like")
  const { viewType } = useStore()

  return (
    <Box>
      <Stack direction="row" spacing={1}>
        {buttons.map((button) => (
          <Button
            style={{ fontSize: "0.6rem", borderRadius: 30 }}
            key={button.title}
            variant={type === button.title ? "contained" : "outlined"}
            startIcon={button.icon}
            onClick={() => setType(button.title)}
          >
            {button.title}
          </Button>
        ))}
      </Stack>
      {viewType === "statistic" ? (
        <ChartComponent type={type} />
      ) : (
        <ListItem type={type} />
      )}
    </Box>
  )
}
