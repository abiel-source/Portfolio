import { useMemo, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

function getActiveTabIndex() {
  const hash = window.location.hash || "";
  const idx = NAV.findIndex((x) => x.href === hash);
  return idx === -1 ? 0 : idx;
}

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const value = useMemo(() => (typeof window !== "undefined" ? getActiveTabIndex() : 0), []);

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
              href="#top"
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

          {/* Middle: Tabs (desktop only) */}
          {!isMobile && (
            <Tabs
              value={value}
              centered
              textColor="inherit"
              TabIndicatorProps={{ style: { display: "none" } }}
              sx={{
                px: 1,
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 999,
                bgcolor: "rgba(255,255,255,0.03)",
                "& .MuiTab-root": {
                  textTransform: "none",
                  minHeight: 44,
                  px: 2,
                  color: "rgba(255,255,255,0.72)",
                  borderRadius: 999,
                },
                "& .MuiTab-root:hover": {
                  bgcolor: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.92)",
                },
              }}
            >
              {NAV.map((item) => (
                <Tab key={item.href} label={item.label} href={item.href} />
              ))}
            </Tabs>
          )}

          {/* Right: Contact + Mobile menu */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 1 }}>
            <Button
              href="#contact"
              variant="outlined"
              sx={{
                textTransform: "none",
                borderColor: "rgba(255,255,255,0.18)",
                bgcolor: "rgba(255,255,255,0.06)",
                color: "text.primary",
                borderRadius: 999,
                px: 2,
                "&:hover": { bgcolor: "rgba(255,255,255,0.10)", borderColor: "rgba(255,255,255,0.26)" },
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
                    sx: { bgcolor: "#000", width: 300, borderLeft: "1px solid rgba(255,255,255,0.08)" },
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <List>
                      {NAV.map((item) => (
                        <ListItemButton
                          key={item.href}
                          component="a"
                          href={item.href}
                          onClick={() => setDrawerOpen(false)}
                          sx={{ borderRadius: 2 }}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      ))}

                      <Box sx={{ mt: 1 }}>
                        <Button
                          fullWidth
                          href="#contact"
                          onClick={() => setDrawerOpen(false)}
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            borderColor: "rgba(255,255,255,0.18)",
                            bgcolor: "rgba(255,255,255,0.06)",
                            borderRadius: 999,
                            "&:hover": { bgcolor: "rgba(255,255,255,0.10)" },
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
