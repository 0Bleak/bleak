import React, { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface AuthNavbarProps {
  isAuthenticated: boolean;
  onNavigate: (path: string) => void;
  onLogin: () => void;
  onLogout: () => void;
  menuItems?: { label: string; path: string }[];
  customStyles?: { button?: object; container?: object; iconButton?: object };
}

const AuthNavbar: React.FC<AuthNavbarProps> = ({
  isAuthenticated,
  onNavigate,
  onLogin,
  onLogout,
  menuItems = [],
  customStyles = {},
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();

  const toggleNavbar = () => setIsExpanded(!isExpanded);

  return (
    <Box
      sx={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1000,
        ...customStyles.container,
      }}
    >
      {!isExpanded ? (
        <IconButton
          onClick={toggleNavbar}
          sx={{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
            ...customStyles.iconButton,
          }}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.palette.background.paper,
            padding: "16px",
            minWidth: "220px",
            borderRadius: "10px",
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: theme.shadows[5],
            backdropFilter: "blur(6px)",
            transition: "all 0.3s ease",
            animation: "slideIn 0.3s ease-out",
            "@keyframes slideIn": {
              from: { opacity: 0, transform: "translateX(50px)" },
              to: { opacity: 1, transform: "translateX(0)" },
            },
          }}
        >
          <IconButton
            onClick={toggleNavbar}
            sx={{
              color: theme.palette.text.primary,
              alignSelf: "flex-end",
              "&:hover": { transform: "rotate(180deg)" },
              transition: "all 0.3s ease",
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Render menu items only if they exist */}
          {menuItems.length > 0 &&
            menuItems.map((item, index) => (
              <Button
                key={index}
                sx={{
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.primary.main,
                  textTransform: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  margin: "5px 0",
                  fontWeight: 500,
                  width: "100%",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                    transform: "translateY(-1px)",
                    boxShadow: theme.shadows[3],
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={() => onNavigate(item.path)}
              >
                {item.label}
              </Button>
            ))}

          {/* Always show Login/Logout buttons */}
          <Button
            sx={{
              color: theme.palette.text.primary,
              backgroundColor: isAuthenticated ? theme.palette.error.main : theme.palette.success.main,
              textTransform: "none",
              padding: "8px 12px",
              borderRadius: "8px",
              fontSize: "0.9rem",
              margin: "5px 0",
              fontWeight: 500,
              width: "100%",
              "&:hover": {
                backgroundColor: isAuthenticated ? theme.palette.error.dark : theme.palette.success.dark,
                transform: "translateY(-1px)",
                boxShadow: theme.shadows[3],
              },
              transition: "all 0.3s ease",
            }}
            onClick={isAuthenticated ? onLogout : onLogin}
          >
            {isAuthenticated ? "Logout" : "Login"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AuthNavbar;
