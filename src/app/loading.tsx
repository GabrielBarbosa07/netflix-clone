"use client";

import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <CircularProgress color="error" />
    </div>
  );
}
