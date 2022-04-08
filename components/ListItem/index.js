import * as React from "react"
import {
  List,
  Stack,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material"
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"
import { AiOutlineLike, AiOutlineGift } from "react-icons/ai"
import { VscComment } from "react-icons/vsc"
import { IoDiamondOutline } from "react-icons/io5"
import { useRouter } from "next/router"

const mockData = [
  {
    role: "Graphic Design",
    name: "Urson Marjanski",
    like: 63,
    comment: 99,
    point: 65,
    diamond: 568,
  },
  {
    role: "Administrative",
    name: "Roseann Spearett",
    like: 38,
    comment: 48,
    point: 31,
    diamond: 329,
  },
  {
    role: "Graphic Design",
    name: "Ruby Barukh",
    like: 84,
    comment: 21,
    point: 25,
    diamond: 486,
  },
  {
    role: "Graphic Design",
    name: "Bertha Seaman",
    like: 15,
    comment: 10,
    point: 36,
    diamond: 480,
  },
  {
    role: "Operator",
    name: "Boyd De Freyne",
    like: 16,
    comment: 28,
    point: 79,
    diamond: 517,
  },
  {
    role: "Writer",
    name: "Malissa Losemann",
    like: 34,
    comment: 21,
    point: 65,
    diamond: 650,
  },
  {
    role: "Social Worker",
    name: "Nikos Sheldrick",
    like: 87,
    comment: 22,
    point: 69,
    diamond: 428,
  },
  {
    role: "Accountant IV",
    name: "Randa Swinyard",
    like: 50,
    comment: 45,
    point: 72,
    diamond: 970,
  },
  {
    role: "Accountant II",
    name: "Willow Wandrich",
    like: 56,
    comment: 23,
    point: 25,
    diamond: 101,
  },
  {
    role: "Staff Accountant I",
    name: "Ruttger Halden",
    like: 3,
    comment: 57,
    point: 66,
    diamond: 321,
  },
]

function iconsCheck(type) {
  let icon
  switch (type) {
    case "Like":
      icon = <AiOutlineLike color="blue" sx={{ width: 15, height: 15 }} />
      break
    case "Comment":
      icon = <VscComment color="blue" sx={{ width: 15, height: 15 }} />
      break
    case "Point":
      icon = <AiOutlineGift color="blue" sx={{ width: 15, height: 15 }} />
      break
    case "Diamond":
      icon = <IoDiamondOutline color="blue" sx={{ width: 15, height: 15 }} />
      break
  }
  return icon
}

export default function ItemsList({ type }) {
  const router = useRouter()

  return (
    <List>
      {mockData.map((data, index) => (
        <Stack
          key={index}
          spacing={1}
          direction="row"
          alignItems="center"
          my={2}
          onClick={() => router.push("/report")}
          style={{
            cursor: "pointer",
          }}
        >
          <Avatar sx={{ width: 30, height: 30, bgcolor: "black" }}>
            {index + 1}
          </Avatar>
          <ListItem
            alignItems="center"
            disablePadding
            style={{
              border: "1px solid #eee",
              borderRadius: "15px",
            }}
            secondaryAction={
              <Stack spacing={1} direction="row" alignItems="end">
                {iconsCheck(type)}
                <Typography fontSize={12}>
                  {data[type.toLowerCase()]}
                </Typography>

                <Typography fontSize={12}>{type}</Typography>
              </Stack>
            }
          >
            <ListItemAvatar>
              <Avatar sx={{ width: 35, height: 35, ml: 1 }} />
            </ListItemAvatar>
            <ListItemText
              sx={{ fontSize: "0.5rem" }}
              primary={
                <Stack
                  spacing={1}
                  direction="row"
                  alignItems="center"
                  width="175px"
                >
                  <Typography fontSize={12}>
                    <b>
                      {data.name}
                      {", "}
                    </b>
                    {data.role}
                  </Typography>
                </Stack>
              }
              secondary={
                <Stack
                  spacing={1}
                  direction="row"
                  alignItems="center"
                  width="175px"
                >
                  <LibraryBooksIcon sx={{ width: 15, height: 15 }} />

                  <Typography fontSize={12} maxWidth={75}>
                    Daily Report
                  </Typography>
                </Stack>
              }
            />
          </ListItem>
        </Stack>
      ))}
    </List>
  )
}
