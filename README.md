# Attendance Metrics

Attendance Metrics is a lightweight, easy-to-use system built to help students and faculty manage, track, and visualize attendance data. It enables efficient attendance logging, automatic percentage calculation, and warning generation for low attendance — making academic tracking more transparent and streamlined.

 Features

- Add, update, and delete subjects
- Mark daily attendance (present/absent)
- Automatically calculate attendance percentage
- Visual dashboard with metrics and warnings
- Responsive UI for desktop and mobile (if applicable)
- Option to export or backup data (CSV or database)

 Tech Stack

- **Frontend**: React + Tailwind CSS (optional)
- **Backend**: Node.js + Express
- **Database**: Supabase (PostgreSQL)
- **Others**: Socket.IO (if real-time updates), Redux (if state management used)

 Project Structure

```bash
attendance-metrics/
├── client/               # Frontend (if using React/Vite)
├── server/               # Express backend
├── supabase/             # Database schema & config
├── .env                  # Environment variables
└── README.md

