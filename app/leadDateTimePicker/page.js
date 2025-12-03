"use client";

import React, { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { ArrowLeft } from "lucide-react";

export default function LeadDateTimePicker() {
    const now = new Date();
    const [startDate] = useState(now.toISOString().split('T')[0]);
    const [startTime] = useState(now.toTimeString().slice(0, 8));
    const [remindDate, setRemindDate] = useState('');
    const [remindTime, setRemindTime] = useState('00:00');
    const [showCalendar, setShowCalendar] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const daysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysArray = [];

        const firstDayOfWeek = firstDay.getDay();
        const prevMonthLastDay = new Date(year, month, 0).getDate();

        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            daysArray.push({
                day: prevMonthLastDay - i,
                isCurrentMonth: false
            });
        }

        for (let i = 1; i <= lastDay.getDate(); i++) {
            daysArray.push({
                day: i,
                isCurrentMonth: true
            });
        }

        const remainingDays = 42 - daysArray.length;
        for (let i = 1; i <= remainingDays; i++) {
            daysArray.push({
                day: i,
                isCurrentMonth: false
            });
        }

        return daysArray;
    };

    const handleDateSelect = (day, isCurrentMonth) => {
        if (!isCurrentMonth) return;

        const year = currentMonth.getFullYear();
        const month = String(currentMonth.getMonth() + 1).padStart(2, '0');
        const dayStr = String(day).padStart(2, '0');
        setRemindDate(`${year}-${month}-${dayStr}`);
        setShowCalendar(false);
    };

    const handleTimeClick = (hour) => {
        const hourStr = String(hour).padStart(2, '0');
        setRemindTime(`${hourStr}:00`);
        setShowTimePicker(false);
    };

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 gap-12">
                    {/* Lead Start Date */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-3">
                            Lead Start Date
                        </label>
                        <div className="flex gap-10">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={startDate}
                                    readOnly
                                    className="w-48 px-4 py-2.5 pr-12 border border-gray-300 rounded bg-gray-100 text-gray-700"
                                />
                                <button className="absolute right-0 top-0 h-full px-3 bg-blue-500 text-white rounded-r flex items-center justify-center">
                                    <Calendar className="w-5 h-5" />
                                </button>
                            </div>
                            <input
                                type="text"
                                value={startTime}
                                readOnly
                                className="w-32 px-4 py-2.5 border border-gray-300 rounded bg-gray-200 text-gray-700 text-center"
                            />
                        </div>
                    </div>

                    {/* Lead Remind Date */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-3">
                            Lead Remind Date
                        </label>
                        <div className="flex gap-10">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={remindDate || '0000-00-00'}
                                    readOnly
                                    onClick={() => {
                                        setShowCalendar(!showCalendar);
                                        setShowTimePicker(false);
                                    }}
                                    className="w-48 px-4 py-2.5 pr-12 border border-gray-300 rounded bg-white text-gray-400 cursor-pointer"
                                    placeholder="0000-00-00"
                                />
                                <button
                                    onClick={() => {
                                        setShowCalendar(!showCalendar);
                                        setShowTimePicker(false);
                                    }}
                                    className="absolute right-0 top-0 h-full px-3 bg-blue-500 text-white rounded-r flex items-center justify-center hover:bg-blue-600"
                                >
                                    <Calendar className="w-5 h-5" />
                                </button>
                            </div>
                            <input
                                type="text"
                                value={remindTime}
                                readOnly
                                onClick={() => {
                                    setShowTimePicker(!showTimePicker);
                                    setShowCalendar(false);
                                }}
                                className="w-32 px-4 py-2.5 border border-gray-300 rounded bg-white text-gray-700 text-center cursor-pointer"
                            />
                        </div>

                        {showCalendar && (
                            <div className="mt-1 mr-10 bg-white border border-gray-300 rounded-lg shadow-lg p-2 w-60">
                                <div className="flex items-center justify-between mb-2">
                                    <button
                                        onClick={prevMonth}
                                        className="text-blue-500 hover:text-blue-700 text-xl font-bold w-10 h-10 flex items-center justify-center"
                                    >
                                        <ArrowLeft size={256} strokeWidth={5} className="w-7 h-7" />
                                    </button>
                                    <h3 className="font-semibold text-gray-700">
                                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                    </h3>
                                    <button
                                        onClick={nextMonth}
                                        className="text-blue-500 hover:text-blue-700 text-xl font-bold w-8 h-8"
                                    >
                                        <ArrowRight size={270} strokeWidth={5} className="w-7 h-7" />
                                    </button>
                                </div>

                                <div className="grid grid-cols-7 gap-1 mb-1">
                                    {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(day => (
                                        <div key={day} className="text-center text-xs font-bold text-gray-600 py-1">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-7 gap-0">
                                    {daysInMonth(currentMonth).map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleDateSelect(item.day, item.isCurrentMonth)}
                                            disabled={!item.isCurrentMonth}
                                            className={`
                        py-1 text-center rounded text-sm
                        ${item.isCurrentMonth
                                                    ? 'text-gray-700 hover:bg-blue-100 cursor-pointer font-medium'
                                                    : 'text-gray-300 cursor-default'
                                                }
                        ${item.day === 2 && item.isCurrentMonth ? 'bg-blue-500 text-white font-bold' : ''}
                      `}
                                        >
                                            {item.day}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Time Picker */}
                        {showTimePicker && (
                            <div className="mt-3 bg-white ml-55 border border-gray-300 rounded-lg shadow-lg p-4 w-72">
                                <div className="text-center mb-2">
                                    <span className="text-3xl font-light text-blue-400">
                                        {remindTime.split(':')[0]} <span className="text-gray-400">:</span> {remindTime.split(':')[1]}
                                    </span>
                                </div>

                                <div className="relative w-56 h-56 mx-auto">
                                    <div className="absolute inset-0 border-2 border-gray-200 rounded-full"></div>

                                    {/* Hour numbers */}
                                    {[...Array(24)].map((_, i) => {
                                        const angle = (i * 15 - 90) * (Math.PI / 180);
                                        const radius = 92;
                                        const x = 112 + radius * Math.cos(angle);
                                        const y = 112 + radius * Math.sin(angle);

                                        return (
                                            <button
                                                key={i}
                                                onClick={() => handleTimeClick(i)}
                                                className={`    
                          absolute w-7 h-7 flex items-center justify-center rounded-full
                          text-xs hover:bg-blue-100 transition-colors
                          ${parseInt(remindTime.split(':')[0]) === i ? 'bg-blue-500 text-white font-bold' : 'text-gray-600'}
                        `}
                                                style={{
                                                    left: `${x - 14}px`,
                                                    top: `${y - 14}px`
                                                }}
                                            >
                                                {i}
                                            </button>
                                        );
                                    })}

                                    {/* Clock hand */}
                                    <div
                                        className="absolute w-0.5 bg-blue-400 origin-bottom"
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            height: '90px',
                                            transform: `translateX(-50%) translateY(-100%) rotate(${(parseInt(remindTime.split(':')[0]) * 15)}deg)`,
                                            transformOrigin: 'bottom center'
                                        }}
                                    >
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
                                    </div>

                                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}