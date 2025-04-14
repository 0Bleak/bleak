import  { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface RoleBasedNavbarProps {
  isAuthenticated: boolean;
  role: string;
  onNavigate: (path: string) => void;
  onLogin: () => void;
  onLogout: () => void;
  menuItems?: { label: string; path: string; roles?: string[] }[];
  customStyles?: { button?: object; container?: object; iconButton?: object };
}

const RoleBasedNavbar = ({
  isAuthenticated,
  role,
  onNavigate,
  onLogin,
  onLogout,
  menuItems = [],
  customStyles = {},
} :RoleBasedNavbarProps)=> {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();

  const toggleNavbar = () => setIsExpanded(!isExpanded);

  const filteredMenuItems = menuItems.filter(
    (item) => !item.roles || item.roles.includes(role)
  );

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
              backgroundColor: "#222222",
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
            border: `1px solid ${theme.palette.primary.main}`,
            boxShadow: "0px 8px 32px rgba(255, 255, 255, 0.1)",
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

          {filteredMenuItems.map((item, index) => (
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
                  backgroundColor: theme.palette.secondary.main,
                  transform: "translateY(-1px)",
                  boxShadow: "0px 4px 12px rgba(255, 255, 255, 0.1)",
                },
                transition: "all 0.3s ease",
              }}
              onClick={() => onNavigate(item.path)}
            >
              {item.label}
            </Button>
          ))}

          <Button
            sx={{
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.error.main,
              textTransform: "none",
              padding: "8px 12px",
              borderRadius: "8px",
              fontSize: "0.9rem",
              margin: "5px 0",
              fontWeight: 500,
              width: "100%",
              "&:hover": {
                backgroundColor: theme.palette.error.dark,
                transform: "translateY(-1px)",
                boxShadow: "0px 4px 12px rgba(255, 255, 255, 0.1)",
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

export default RoleBasedNavbar;


// <RoleBasedNavbar
//   isAuthenticated={true}
//   role="admin"
//   onNavigate={(path) => console.log("Navigate to:", path)}
//   onLogin={() => console.log("Logging in")}
//   onLogout={() => console.log("Logging out")}
//   menuItems={[
//     { label: "Dashboard", path: "/dashboard", roles: ["admin"] },
//     { label: "Users", path: "/users", roles: ["admin"] },
//     { label: "Settings", path: "/settings", roles: ["admin", "moderator"] },
//     { label: "Profile", path: "/profile", roles: ["admin", "user", "moderator"] },
//   ]}
// />
