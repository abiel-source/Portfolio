import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

const NAV = [
  { label: "Spotlight", id: "spotlight" },
  { label: "Work", id: "experience" },
  { label: "Projects", id: "projects" },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1, minHeight: 64 }}>
          {/* Left: Name */}
          <Box sx={{ flex: 1 }}>
            <Button
              component={RouterLink}
              to="/"
              sx={{
                color: "text.primary",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Abiel Kim
            </Button>
          </Box>

          {/* Middle: Navigation (desktop only) */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {NAV.map((item) => (
                <Button
                  key={item.id}
                  component={RouterLink}
                  to="/"
                  state={{ scrollToId: item.id }}
                  variant="text"
                  disableRipple
                  sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    color: "text.primary",
                    minWidth: "auto",
                    p: 0,
                    "&:hover": { backgroundColor: "transparent", opacity: 0.8 },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Right: Contact + Mobile menu */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button
              component={RouterLink}
              to="/contact"
              sx={{
                textTransform: "none",
                bgcolor: "#fff",
                color: "#000",
                borderRadius: 999,
                px: 2.5,
                fontWeight: 500,
                "&:hover": { bgcolor: "rgba(255,255,255,0.85)" },
              }}
            >
              Contact
            </Button>

            {isMobile && (
              <>
                <IconButton
                  aria-label="Open menu"
                  onClick={() => setDrawerOpen(true)}
                  sx={{
                    ml: 0.5,
                    border: "1px solid rgba(255,255,255,0.18)",
                    bgcolor: "rgba(255,255,255,0.06)",
                    borderRadius: 999,
                  }}
                >
                  <MenuIcon />
                </IconButton>

                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                  PaperProps={{
                    sx: {
                      bgcolor: "#000",
                      width: 300,
                      borderLeft: "1px solid rgba(255,255,255,0.08)",
                    },
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <List>
                      {NAV.map((item) => (
                        <ListItemButton
                          key={item.id}
                          component={RouterLink}
                          to="/"
                          state={{ scrollToId: item.id }}
                          onClick={() => setDrawerOpen(false)}
                          sx={{ borderRadius: 2 }}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      ))}

                      <Box sx={{ mt: 1 }}>
                        <Button
                          fullWidth
                          component={RouterLink}
                          to="/contact"
                          onClick={() => setDrawerOpen(false)}
                          sx={{
                            textTransform: "none",
                            bgcolor: "#fff",
                            color: "#000",
                            borderRadius: 999,
                            fontWeight: 500,
                            "&:hover": { bgcolor: "rgba(255,255,255,0.85)" },
                          }}
                        >
                          Contact
                        </Button>
                      </Box>
                    </List>
                  </Box>
                </Drawer>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
