import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Success endpoint
app.post("/select-ticket/success", (req, res) => {
  const { ticketId, userId } = req.body;

  // Simulate a success response
  return res.status(200).json({
    status: "success",
    message: "Ticket selected successfully",
    data: {
      ticketId,
      userId,
      seatNumber: "A12",
      price: 5000,
    },
  });
});

// Failure endpoint
app.post("/select-ticket/fail", (req, res) => {
  return res.status(400).json({
    status: "error",
    message: "Ticket selection failed. Ticket is no longer available.",
  });
});


// Sample ticket list
const tickets = [
  { id: "T001", name: "Regular", price: 5000 },
  { id: "T002", name: "VIP", price: 10000 },
  { id: "T003", name: "VVIP", price: 20000 },
];

// GET ticket list for dropdown
app.get("/tickets", (_req, res) => {
  return res.status(200).json({
    status: "success",
    message: "Available tickets",
    data: tickets,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
