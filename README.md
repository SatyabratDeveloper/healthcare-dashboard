# 🩺 Healthcare Dashboard (React + Tailwind CSS)

A **responsive**, **pixel-perfect** Healthcare Dashboard built using **React**, styled with **Tailwind CSS**, and powered by **Vite** for ultra-fast development.
This project features a **static UI** showcasing anatomical details, health metrics, appointment schedules, and activity feeds — ideal for admin panels or medical dashboards.

---

## 🖼️ Features

- 📊 **Dashboard Layout** – Clean, responsive 3-column design
- 🣍 **Anatomy Section** – Visual highlight of body parts with health tags
- ❤️ **Health Status Cards** – Progress bars with color-coded indicators
- 🗖️ **Appointment Scheduler** – Upcoming appointments by day
- 🦓 **Activity Feed** – Tracks recent health-related activities
- 📱 **Fully Responsive** – Optimized for all screen sizes using Tailwind breakpoints

---

## 🛠️ Tech Stack

| Tool                                     | Description                                |
| ---------------------------------------- | ------------------------------------------ |
| [React](https://reactjs.org/)            | Component-based UI library                 |
| [Vite](https://vitejs.dev/)              | Fast bundler and dev server                |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS for rapid UI development |
| [Lucide Icons](https://lucide.dev/)      | Beautiful, consistent SVG icons            |

---

## 📂 Folder Structure

```
src/
├── assets/                # Static images and icons
├── components/            # Reusable UI components
│   ├── AnatomySection.jsx
│   ├── HealthStatusCard.jsx
│   ├── ActivityFeed.jsx
│   ├── CalendarView.jsx
│   ├── SimpleAppointmentCard.jsx
│   └── ...
├── data/                  # Extracted static data (navLinks, healthData, etc.)
├── pages/                 # Page-level components (e.g., Dashboard)
├── App.jsx
└── main.jsx
```

---

## ✨ Getting Started

```bash
# Clone the repository
git clone https://github.com/SatyabratDeveloper/healthcare-dashboard.git
cd healthcare-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`
