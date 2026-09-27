-- alphauzs.com subdomain platform database schema

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS subdomains (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'inactive',
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS dns_records (
  id TEXT PRIMARY KEY,
  subdomain_id TEXT NOT NULL,
  record_type TEXT NOT NULL,
  name TEXT NOT NULL,
  content TEXT NOT NULL,
  ttl INTEGER DEFAULT 1,
  proxied INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (subdomain_id) REFERENCES subdomains(id)
);

CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_subdomains_name ON subdomains(name);
CREATE INDEX IF NOT EXISTS idx_subdomains_user ON subdomains(user_id);
CREATE INDEX IF NOT EXISTS idx_dns_records_subdomain ON dns_records(subdomain_id);
CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);
