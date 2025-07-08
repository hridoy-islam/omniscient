"use client";
import { Mail, Clock } from "lucide-react";

export default function HeaderTop() {
  return (
    <div className="bg-slate-950/50 backdrop-blur-sm border-b border-slate-800/50 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-300 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>support@algopips.net</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>
              Mon - Fri: 09:00AM - 06:00PM | Saturday: 09:00AM - 05:00PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
