-- ============================================================
-- Gize PLC Website — Database Initialization Script
-- ============================================================
-- Run this once to set up your PostgreSQL database:
--   psql -U your_user -d gize_plc -f sql/init.sql
-- ============================================================

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(255) NOT NULL,
  email       VARCHAR(255) NOT NULL,
  phone       VARCHAR(50),
  service     VARCHAR(100),
  message     TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Index for querying by date
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at);

-- Grant permissions (adjust role name as needed)
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO your_app_user;
