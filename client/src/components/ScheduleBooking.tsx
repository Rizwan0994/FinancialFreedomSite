import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";


export default function ScheduleBooking() {
  const [slots, setSlots] = useState<any[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  const [calendarId] = useState("VrZxJK7ZdP1EWBJ8aWnc"); // Replace with your real ID

  const startDate = new Date().toISOString().split("T")[0];
  const endDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const fetchSlots = async () => {
    const response = await fetch(
      "https://0bd.44a.myftpupload.com/wp-json/ghl/v1/calendar-slots/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ calendarId, startDate, endDate }),
      }
    );
    const result = await response.json();
    setSlots(result?.slots || []);
  };

  const handleBooking = async () => {
    if (!selectedSlot) return;

    const payload = {
      calendarId,
      contact: {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "+1234567890",
      },
      appointment: {
        startTime: selectedSlot.startTime,
        endTime: selectedSlot.endTime,
        title: "Workshop Booking",
        description: "Scheduled via website",
      },
    };

    const res = await fetch(
      "https://0bd.44a.myftpupload.com/wp-json/ghl/v1/book-appointment/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    const result = await res.json();
    alert(result.success ? "Appointment Booked!" : "Booking Failed");
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Schedule a Workshop</h2>
      <div className="grid grid-cols-2 gap-4">
        {slots.map((slot, index) => (
          <Button
            key={index}
            onClick={() => setSelectedSlot(slot)}
            variant={selectedSlot === slot ? "default" : "outline"}
          >
            {format(new Date(slot.startTime), "PPpp")}
          </Button>
        ))}
      </div>
      {selectedSlot && (
        <div className="mt-4">
          <p>Selected: {format(new Date(selectedSlot.startTime), "PPpp")}</p>
          <Button onClick={handleBooking} className="mt-2">
            Confirm Booking
          </Button>
        </div>
      )}
    </div>
  );
};

