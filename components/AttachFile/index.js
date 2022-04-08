import { CardContent, Stack, IconButton, Typography, Link } from "@mui/material"
import AttachFileIcon from "@mui/icons-material/AttachFile"

export default function AttactFile() {
  return (
    <CardContent>
      <Stack>
        <Typography variant="title" color="text.secondary">
          Attach File
        </Typography>
        <Stack direction="row" spacing={0} alignItems="conter">
          <IconButton size="small">
            <AttachFileIcon />
          </IconButton>
          <Link component="button" variant="body2">
            Update Design OKRSs.pdf
          </Link>
        </Stack>
      </Stack>
    </CardContent>
  )
}
