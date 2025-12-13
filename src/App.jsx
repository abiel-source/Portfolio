// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import sfuLogo from './assets/sfu_logo.png'
// import arloLogo from './assets/arlo_logo.png'
// import agLogo from './assets/3ag_logo.png'
// import micaLogo from './assets/mica_logo.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={arloLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import Header from "./components/Header";
import Hero from "./components/Hero";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function App() {
  return (
    <Box sx={{ bgcolor: "#000", minHeight: "100vh" }}>
      <Header />
      <main>
        <Hero />

        {/* placeholders */}
        {["work", "projects", "about", "contact"].map((id) => (
          <Box key={id} id={id} sx={{ py: 10, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <Container maxWidth="lg">
              <Typography sx={{ color: "rgba(255,255,255,0.65)" }}>
                {id.toUpperCase()} (coming soon)
              </Typography>
            </Container>
          </Box>
        ))}
      </main>
    </Box>
  );
}
