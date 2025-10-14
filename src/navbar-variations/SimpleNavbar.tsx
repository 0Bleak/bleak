import { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface SimpleNavbarProps {
  onNavigate: (path: string) => void;
  menuItems: { label: string; path: string }[];
  customStyles?: { button?: object; container?: object };
}

const SimpleNavbar = ({
  onNavigate,
  menuItems,
  customStyles = {},
}: SimpleNavbarProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          display: { xs: "none", md: "flex" },
          gap: "8px",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(12px)",
          padding: "8px",
          borderRadius: "50px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          ...customStyles.container,
        }}
      >
        {menuItems.map((item, index) => (
          <Button
            key={item.path}
            onClick={() => {
              setActiveIndex(index);
              onNavigate(item.path);
            }}
            sx={{
              color: activeIndex === index ? "#ffffff" : "rgba(255, 255, 255, 0.6)",
              textTransform: "none",
              padding: "8px 24px",
              fontSize: "0.9rem",
              fontWeight: 500,
              borderRadius: "50px",
              backgroundColor: activeIndex === index ? "rgba(255, 255, 255, 0.1)" : "transparent",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                color: "#ffffff",
              },
              transition: "all 0.2s ease",
              ...customStyles.button,
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>

      <IconButton
        onClick={() => setMobileOpen(!mobileOpen)}
        sx={{
          position: "fixed",
          top: "24px",
          right: "24px",
          zIndex: 1001,
          display: { xs: "flex", md: "none" },
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {mobileOpen && (
        <Box
          sx={{
            position: "fixed",
            top: "80px",
            right: "24px",
            zIndex: 1000,
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            gap: "8px",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(12px)",
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {menuItems.map((item, index) => (
            <Button
              key={item.path}
              onClick={() => {
                setActiveIndex(index);
                onNavigate(item.path);
                setMobileOpen(false);
              }}
              sx={{
                color: activeIndex === index ? "#ffffff" : "rgba(255, 255, 255, 0.6)",
                textTransform: "none",
                padding: "10px 24px",
                fontSize: "0.9rem",
                fontWeight: 500,
                borderRadius: "8px",
                justifyContent: "flex-start",
                minWidth: "140px",
                backgroundColor: activeIndex === index ? "rgba(255, 255, 255, 0.1)" : "transparent",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                },
                transition: "all 0.2s ease",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      )}
    </>
  );
};

export default SimpleNavbar;