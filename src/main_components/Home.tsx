import  { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import useDarkSkyAnimationStore from "../stores/useDarkSkyAnimationStore";
import SimpleNavbar from '../navbar-variations/SimpleNavbar'
import { useNavigate } from "react-router-dom";

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { initializePixels, startAnimation, stopAnimation } = useDarkSkyAnimationStore();
  const navigate = useNavigate();

  useEffect(() => {
    initializePixels();
    const canvas = canvasRef.current;
    if (canvas) {
      startAnimation(canvas);
    }
    return () => {
      stopAnimation();
    };
  }, [initializePixels,startAnimation,stopAnimation]);

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
      <SimpleNavbar 
        onNavigate={(path) => navigate(path)}
        menuItems={[
          { label: "Home", path: "/" },
          { label: "Whoami", path: "/whoami" },
          { label: "Projects", path: "/projects" },
          { label: "music", path: "/music" },
          { label: "Contact", path: "/contact" }
        ]}
      />
    </Box>
  );
};

export default App;
