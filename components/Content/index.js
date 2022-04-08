import { CardContent, Stack, Typography } from "@mui/material"

export default function Content() {
  return (
    <CardContent>
      <Stack alignItems="flex-start">
        <Typography variant="title" color="text.secondary">
          Content 1
        </Typography>
        <Typography variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        </Typography>
      </Stack>
    </CardContent>
  )
}
