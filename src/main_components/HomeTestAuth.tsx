import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import useDarkSkyAnimationStore from "../stores/useDarkSkyAnimationStore";
import AuthNavbar from "../reusable_components/AuthNavbar";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { initializePixels, startAnimation, stopAnimation } = useDarkSkyAnimationStore();
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

      {/* Auth Navbar */}
      <AuthNavbar
        isAuthenticated={isAuthenticated}
        onNavigate={(path) => navigate(path)}
        onLogin={() => setIsAuthenticated(true)}
        onLogout={() => setIsAuthenticated(false)}
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
