import {
  Card,
  CardHeader,
  CardActions,
  Stack,
  Avatar,
  IconButton,
  Typography,
  Paper,
  InputBase,
  Divider,
  Box,
  Button,
  Link,
} from "@mui/material"
import { AiOutlineLike, AiOutlineGift } from "react-icons/ai"
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"
import AddCircleIcon from "@mui/icons-material/AddCircle"

import Comment from "@components/Comment"
import AttachFile from "@components/AttachFile"
import ImageAttach from "@components/ImageAttach"
import Content from "@components/Content"

const Report = ({}) => {
  return (
    <>
      <Card sx={{ my: 1 }}>
        <CardHeader
          avatar={<Avatar></Avatar>}
          title="Urson Marjanski"
          subheader="Graphic Design"
          action={
            <Stack alignItems="flex-end">
              <Typography variant="body2" color="text.secondary">
                8/4/2565
              </Typography>
              <Typography variant="body2" color="text.secondary">
                12:45
              </Typography>
            </Stack>
          }
        />

        <Content />

        <ImageAttach />

        <AttachFile />

        <Comment />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-around",
            bgcolor: "aliceblue",
            color: "text.secondary",
            p: 1,
            "& span": {
              fontSize: "12px",
              color: "grey",
            },
          }}
        >
          <Typography variant="body">Read (12)</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body">Unread (25)</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body">Like (10)</Typography>
          <Link variant="body2">{`View >`}</Link>
        </Box>
        <CardActions width="100%">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-around",
              p: 2,
            }}
          >
            <Button
              style={{ fontSize: "0.6rem", borderRadius: 30, minWidth: 150 }}
              variant={"outlined"}
              startIcon={<AiOutlineLike />}
            >
              Give Point
            </Button>
            <Button
              style={{ fontSize: "0.6rem", borderRadius: 30, minWidth: 150 }}
              variant={"outlined"}
              startIcon={<AiOutlineGift />}
            >
              Like
            </Button>
          </Box>
        </CardActions>

        <Paper sx={{ p: 2, display: "flex", alignItems: "center" }}>
          <IconButton size="large" edge="center">
            <AiOutlineLike />
          </IconButton>
          <IconButton size="large" edge="center">
            <AddPhotoAlternateIcon />
          </IconButton>
          <IconButton size="large" edge="center">
            <AddCircleIcon />
          </IconButton>
          <InputBase
            sx={{
              ml: 1,
              border: "1px solid gray",
              borderRadius: "12px",
              p: 1,
              flex: 1,
            }}
            placeholder="Comment"
          />
        </Paper>
      </Card>
    </>
  )
}

export default Report
