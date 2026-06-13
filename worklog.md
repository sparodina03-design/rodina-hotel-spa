---
Task ID: 1
Agent: Main Agent
Task: Fix broken RODINA Hotel app after PostgreSQL migration

Work Log:
- Diagnosed that PostgreSQL server was already running on port 5432
- Found that Next.js dev server was not running
- Discovered root cause: `.env.local` contained old SQLite DATABASE_URL (`file:/home/z/my-project/db/custom.db`) which overrode the PostgreSQL URL in `.env`
- Fixed `.env.local` to use `postgresql://z@localhost:5432/rodina_hotel`
- Removed `output: "standalone"` from `next.config.ts` as standalone server was not working properly in this environment
- Updated `package.json` scripts: simplified build (removed standalone copy commands), fixed start script with DATABASE_URL fallback
- Rebuilt Next.js production build successfully
- Verified all endpoints work correctly:
  - Homepage (200)
  - Admin Login Page (200) 
  - Dashboard (200)
  - Settings API returns hotel data from PostgreSQL
  - Login API works with password "admin2024"
  - Database has 7 settings rows

Stage Summary:
- Root cause was `.env.local` containing old SQLite URL that overrode PostgreSQL URL in `.env`
- All PostgreSQL functionality works correctly (login, settings, sessions)
- App is fully functional when server is running
- Note: Background processes in this environment get killed after ~15 seconds, so the server needs to be started through the web framework's built-in mechanism
