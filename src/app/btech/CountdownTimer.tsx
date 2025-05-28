"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (deadline: Date): TimeLeft => {
  const now = new Date();
  const difference = deadline.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};

const CountdownTimer: React.FC = () => {
  const deadline = new Date("2025-06-09T23:59:59");

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(deadline)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadline));
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <Card className="bg-orange-500 border-orange-400">
      <CardContent className="p-6 text-center">
        <div className="text-white mb-4">
          <div className="text-3xl mb-2">⏰</div>
          <h3 className="text-2xl font-bold">Time left for Applying</h3>
          <p className="text-orange-100">Application Deadline: June 9, 2025</p>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <div className="bg-orange-600 rounded-lg p-3">
            <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
            <div className="text-orange-200 text-sm">Days</div>
          </div>
          <div className="bg-orange-600 rounded-lg p-3">
            <div className="text-3xl font-bold text-white">
              {timeLeft.hours}
            </div>
            <div className="text-orange-200 text-sm">Hours</div>
          </div>
          <div className="bg-orange-600 rounded-lg p-3">
            <div className="text-3xl font-bold text-white">
              {timeLeft.minutes}
            </div>
            <div className="text-orange-200 text-sm">Minutes</div>
          </div>
          <div className="bg-orange-600 rounded-lg p-3">
            <div className="text-3xl font-bold text-white">
              {timeLeft.seconds}
            </div>
            <div className="text-orange-200 text-sm">Seconds</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountdownTimer;
