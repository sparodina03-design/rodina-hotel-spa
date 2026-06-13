#!/bin/bash
# Start RODINA Hotel App (Production)
# Usage: bash scripts/start-app.sh

# Ensure PostgreSQL is running
PG_BIN="/home/z/.local/pg/usr/lib/postgresql/17/bin"
PGDATA="/home/z/my-project/.postgres/data"
PGHOST="/tmp"
PGPORT=5432

if ! "$PG_BIN/pg_ctl" -D "$PGDATA" status 2>/dev/null | grep -q "server is running"; then
  echo "Starting PostgreSQL..."
  "$PG_BIN/pg_ctl" -D "$PGDATA" -l /home/z/my-project/.postgres/logfile start
  sleep 2
fi

echo "PostgreSQL is running"

# Set environment
export DATABASE_URL="postgresql://z@localhost:5432/rodina_hotel"
export PORT=3000

cd /home/z/my-project

# Start Next.js production server
exec node node_modules/.bin/next start -p 3000
