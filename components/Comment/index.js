import {
  CardHeader,
  CardContent,
  CardActions,
  Stack,
  Avatar,
  Typography,
  Divider,
  Box,
  Button,
} from "@mui/material"
import { AiOutlineLike } from "react-icons/ai"

const Comment = () => (
  <Box>
    <CardHeader
      avatar={<Avatar />}
      title="Randa Swinyard"
      subheader="Accountant IV"
    />
    <CardContent>
      <Stack alignItems="flex-start">
        <Typography variant="comment">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        </Typography>
      </Stack>
      <Stack alignItems="flex-start">
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        </Typography>
      </Stack>
    </CardContent>
    <CardActions width="100%">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          px: 1,
        }}
      >
        <Stack direction="row" spacing={1} justifyContent="flex-start">
          <Typography variant="caption" display="block">
            2 days ago
          </Typography>
          <Typography variant="caption" display="block" color="primary">
            2 People Likes
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button
            style={{ fontSize: "0.6rem", borderRadius: 30 }}
            startIcon={<AiOutlineLike />}
          >
            Reply
          </Button>
          <Button
            style={{ fontSize: "0.6rem", borderRadius: 30 }}
            startIcon={<AiOutlineLike />}
          >
            Like
          </Button>
        </Stack>
      </Box>
    </CardActions>
    <Divider flexItem />
  </Box>
)
export default Comment
