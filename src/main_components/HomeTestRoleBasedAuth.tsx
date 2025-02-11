import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import useDarkSkyAnimationStore from "../stores/useDarkSkyAnimationStore";
import RoleBasedNavbar from "../reusable_components/RoleBasedNavbar";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { initializePixels, startAnimation, stopAnimation } = useDarkSkyAnimationStore();
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState("user");

  useEffect(() => {
    initializePixels();
    const canvas = canvasRef.current;
    if (canvas) {
      startAnimation(canvas);
    }
    return () => {
      stopAnimation();
    };
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#001F3F",
      }}
    >
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ position: "absolute", zIndex: 1 }}
      />

      {/* Role-Based Navbar with Always Visible Login/Logout */}
      <RoleBasedNavbar
        isAuthenticated={isAuthenticated}
        role={role}
        onNavigate={(path) => navigate(path)}
        onLogin={() => {
          setIsAuthenticated(true);
          setRole("admin"); // For testing purposes
        }}
        onLogout={() => {
          setIsAuthenticated(false);
          setRole("user");
        }}
        menuItems={[
          { label: "Home", path: "/" },
          { label: "Projects", path: "/projects" },
          { label: "About", path: "/about" },
          { label: "Contact", path: "/contact" }
        ]}
      />
    </Box>
  );
};

export default Home;
