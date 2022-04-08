import { CardMedia, CardContent, Stack, Typography } from "@mui/material"

export default function ImageAttach() {
  return (
    <CardContent>
      <Stack alignItems="flex-start">
        <Typography variant="title" color="text.secondary">
          Image
        </Typography>
        <Stack direction="row" spacing={1}>
          <CardMedia
            component="img"
            height="80"
            image={
              "https://tuambassador.org/wp-content/uploads/2019/06/no-image.jpg"
            }
            alt={"image"}
          />
          <CardMedia
            component="img"
            height="80"
            image={
              "https://tuambassador.org/wp-content/uploads/2019/06/no-image.jpg"
            }
            alt={"image"}
          />
          <CardMedia
            component="img"
            height="80"
            image={
              "https://tuambassador.org/wp-content/uploads/2019/06/no-image.jpg"
            }
            alt={"image"}
          />
        </Stack>
      </Stack>
    </CardContent>
  )
}
