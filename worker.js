// alphauzs.com — Subdomain Platform (single file)
// Everything in one file: frontend, API, subdomain proxy, inactive page

// ========== INACTIVE PAGE HTML ==========
const inactivePageHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subdomain Inactive | alphauzs</title>
</head>
<body style="margin:0; padding:0; background-color:#09090B; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#09090B" style="padding:15px 10px;">
    <tr>
      <td align="center">
        <div style="max-width:380px; margin:0 auto; background-color:#121214; border-radius:20px; -webkit-border-radius:20px; overflow:hidden; border:1px solid #27272A; text-align:center;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="padding:20px 20px 10px 20px;">
                <table border="0" cellspacing="0" cellpadding="0" style="width:100%; background-color:#18181B; border-radius:50px; -webkit-border-radius:50px; border:1px solid #3F3F46;">
                  <tr>
                    <td align="center" style="padding:10px 0; color:#FFFFFF; font-size:15px; font-weight:800; letter-spacing:0.5px;">
                      alphauzs
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:10px 20px 14px 20px;">
                <h2 style="color:#FAFAFA; margin:0 0 6px 0; font-size:18px; font-weight:700; letter-spacing:-0.3px; text-align:center;">Subdomain Inactive</h2>
                <p style="color:#A1A1AA; font-size:13px; line-height:1.4; margin:0; text-align:center;">
                  This subdomain is registered but has no active deployment.
                </p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:0 20px 16px 20px;">
                <table border="0" cellspacing="0" cellpadding="0" style="width:100%; background-color:#18181B; border-radius:50px; -webkit-border-radius:50px; border:1px solid #3F3F46;">
                  <tr>
                    <td align="center" style="padding:10px 0;">
                      <span style="font-family:'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace; font-size:12px; font-weight:800; color:#F43F5E; letter-spacing:1px; display:inline-block; white-space:nowrap;">ERR_CONNECTION_INACTIVE</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:0 20px 18px 20px;">
                <p style="color:#71717A; font-size:11px; line-height:1.5; margin:0; text-align:center;">
                  &bull; If you are the owner, please check your <strong style="color:#A1A1AA;">DNS records</strong>.<br>
                  &bull; It may take a few minutes for changes to propagate.
                </p>
              </td>
            </tr>
            <tr>
              <td align="center" bgcolor="#09090B" style="padding:14px 20px; border-top:1px solid #1E1E22;">
                <p style="margin:0; font-size:10px; color:#52525B; line-height:1.4; text-align:center;">
                  &copy; 2026 <strong>alphauzs inc.</strong> All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;

// ========== PLATFORM UI HTML ==========
const platformHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>alphauzs — Subdomain Platform</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { background:#09090B; color:#FAFAFA; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; min-height:100vh; }
    a { color:#6366F1; text-decoration:none; }
    a:hover { text-decoration:underline; }
    .navbar { background:#121214; border-bottom:1px solid #27272A; padding:16px 24px; display:flex; justify-content:space-between; align-items:center; }
    .navbar .logo { font-size:20px; font-weight:800; letter-spacing:0.5px; }
    .navbar .logo span { color:#6366F1; }
    .navbar .nav-links { display:flex; gap:20px; align-items:center; }
    .navbar .nav-links a { color:#A1A1AA; font-size:14px; }
    .navbar .nav-links a:hover { color:#FAFAFA; text-decoration:none; }
    .btn { padding:8px 16px; border-radius:8px; border:none; cursor:pointer; font-size:14px; font-weight:600; transition:0.2s; }
    .btn-primary { background:#6366F1; color:#fff; }
    .btn-primary:hover { background:#5558E9; }
    .btn-secondary { background:#27272A; color:#FAFAFA; border:1px solid #3F3F46; }
    .btn-secondary:hover { background:#3F3F46; }
    .btn-danger { background:#F43F5E; color:#fff; }
    .btn-danger:hover { background:#E11D48; }
    .btn-sm { padding:6px 12px; font-size:13px; }
    .container { max-width:900px; margin:0 auto; padding:40px 24px; }
    .hero { text-align:center; padding:60px 20px; }
    .hero h1 { font-size:42px; font-weight:800; letter-spacing:-1px; margin-bottom:16px; }
    .hero h1 span { color:#6366F1; }
    .hero p { color:#A1A1AA; font-size:18px; max-width:500px; margin:0 auto 32px; line-height:1.6; }
    .search-box { max-width:500px; margin:0 auto; display:flex; gap:0; }
    .search-box input { flex:1; padding:14px 16px; background:#18181B; border:1px solid #3F3F46; border-radius:10px 0 0 10px; color:#FAFAFA; font-size:16px; outline:none; }
    .search-box input:focus { border-color:#6366F1; }
    .search-box .suffix { padding:14px 16px; background:#18181B; border:1px solid #3F3F46; border-left:none; border-radius:0 10px 10px 0; color:#71717A; font-size:16px; display:flex; align-items:center; }
    .search-box .btn { border-radius:0 10px 10px 0; padding:14px 24px; font-size:16px; }
    .card { background:#121214; border:1px solid #27272A; border-radius:16px; padding:24px; margin-bottom:20px; }
    .card h3 { font-size:18px; margin-bottom:16px; }
    .form-group { margin-bottom:16px; }
    .form-group label { display:block; font-size:14px; color:#A1A1AA; margin-bottom:6px; }
    .form-group input { width:100%; padding:12px 14px; background:#18181B; border:1px solid #3F3F46; border-radius:8px; color:#FAFAFA; font-size:15px; outline:none; }
    .form-group input:focus { border-color:#6366F1; }
    .badge { display:inline-block; padding:4px 10px; border-radius:20px; font-size:12px; font-weight:600; }
    .badge-inactive { background:#27272A; color:#A1A1AA; }
    .badge-active { background:#166534; color:#4ADE80; }
    .records-table { width:100%; border-collapse:collapse; }
    .records-table th { text-align:left; padding:10px 12px; font-size:13px; color:#71717A; border-bottom:1px solid #27272A; }
    .records-table td { padding:10px 12px; font-size:14px; border-bottom:1px solid #1E1E22; }
    .sub-item { display:flex; justify-content:space-between; align-items:center; padding:16px; background:#18181B; border:1px solid #27272A; border-radius:12px; margin-bottom:12px; cursor:pointer; transition:0.2s; }
    .sub-item:hover { border-color:#3F3F46; }
    .sub-item .sub-name { font-size:16px; font-weight:600; }
    .sub-item .sub-name span { color:#71717A; font-weight:400; }
    .sub-item .sub-actions { display:flex; gap:8px; align-items:center; }
    .modal-overlay { position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); display:flex; align-items:center; justify-content:center; z-index:100; }
    .modal { background:#121214; border:1px solid #27272A; border-radius:16px; padding:32px; max-width:440px; width:90%; }
    .modal h2 { font-size:22px; margin-bottom:20px; }
    .modal .close { float:right; cursor:pointer; color:#71717A; font-size:24px; background:none; border:none; }
    .modal .close:hover { color:#FAFAFA; }
    .toast { position:fixed; bottom:24px; right:24px; padding:14px 20px; border-radius:10px; font-size:14px; z-index:200; animation:slideIn 0.3s; }
    .toast-success { background:#166534; color:#4ADE80; }
    .toast-error { background:#991B1B; color:#F87171; }
    @keyframes slideIn { from{transform:translateX(100%);opacity:0;} to{transform:translateX(0);opacity:1;} }
    .hidden { display:none !important; }
    .auth-box { max-width:400px; margin:40px auto; }
    .auth-box .card { padding:32px; }
    .auth-box h2 { text-align:center; margin-bottom:24px; }
    .auth-box .switch { text-align:center; margin-top:16px; font-size:14px; color:#71717A; }
    .auth-box .btn { width:100%; padding:12px; font-size:16px; }
    .dns-section { margin-top:20px; }
    .dns-section h4 { font-size:15px; margin-bottom:12px; color:#A1A1AA; }
    .add-record-form { display:flex; gap:8px; margin-bottom:16px; flex-wrap:wrap; }
    .add-record-form select, .add-record-form input { padding:10px 12px; background:#18181B; border:1px solid #3F3F46; border-radius:8px; color:#FAFAFA; font-size:14px; outline:none; }
    .add-record-form input:focus, .add-record-form select:focus { border-color:#6366F1; }
    .add-record-form .type-select { width:90px; }
    .add-record-form .name-input { width:100px; }
    .add-record-form .content-input { flex:1; min-width:150px; }
  </style>
</head>
<body>
<div class="navbar">
  <div class="logo">alpha<span>uzs</span></div>
  <div class="nav-links" id="nav-links">
    <a href="#" onclick="showHome();return false;">Home</a>
    <a href="#" onclick="showDashboard();return false;" id="nav-dashboard" class="hidden">Dashboard</a>
    <a href="#" onclick="showLogin();return false;" id="nav-login">Login</a>
    <a href="#" onclick="showRegister();return false;" id="nav-register">Register</a>
    <a href="#" onclick="logout();return false;" id="nav-logout" class="hidden">Logout</a>
  </div>
</div>
<div id="home-view">
  <div class="hero">
    <h1>Get your <span>.alphauzs.com</span> subdomain</h1>
    <p>Claim a free subdomain, point it to your server, and go live in minutes. No credit card required.</p>
    <div class="search-box">
      <input type="text" id="search-subdomain" placeholder="yourname" onkeydown="if(event.key==='Enter')checkSubdomain()">
      <div class="suffix">.alphauzs.com</div>
      <button class="btn btn-primary" onclick="checkSubdomain()">Check</button>
    </div>
    <div id="search-result" style="margin-top:16px;font-size:15px;"></div>
  </div>
</div>
<div id="login-view" class="hidden">
  <div class="auth-box">
    <div class="card">
      <h2>Login</h2>
      <div class="form-group"><label>Email</label><input type="email" id="login-email" placeholder="you@example.com"></div>
      <div class="form-group"><label>Password</label><input type="password" id="login-password" placeholder="••••••••"></div>
      <button class="btn btn-primary" onclick="doLogin()">Login</button>
      <div class="switch">Don't have an account? <a href="#" onclick="showRegister();return false;">Register</a></div>
    </div>
  </div>
</div>
<div id="register-view" class="hidden">
  <div class="auth-box">
    <div class="card">
      <h2>Create Account</h2>
      <div class="form-group"><label>Email</label><input type="email" id="reg-email" placeholder="you@example.com"></div>
      <div class="form-group"><label>Password</label><input type="password" id="reg-password" placeholder="••••••••"></div>
      <button class="btn btn-primary" onclick="doRegister()">Register</button>
      <div class="switch">Already have an account? <a href="#" onclick="showLogin();return false;">Login</a></div>
    </div>
  </div>
</div>
<div id="dashboard-view" class="hidden">
  <div class="container">
    <h2 style="font-size:28px;margin-bottom:24px;">Your Subdomains</h2>
    <div class="card">
      <h3>Claim New Subdomain</h3>
      <div style="display:flex;gap:8px;">
        <input type="text" id="claim-name" placeholder="yourname" style="flex:1;padding:12px 14px;background:#18181B;border:1px solid #3F3F46;border-radius:8px;color:#FAFAFA;font-size:15px;outline:none;" onkeydown="if(event.key==='Enter')claimSubdomain()">
        <div style="padding:12px 14px;background:#18181B;border:1px solid #3F3F46;border-left:none;border-radius:0 8px 8px 0;color:#71717A;font-size:15px;display:flex;align-items:center;margin-left:-9px;">.alphauzs.com</div>
        <button class="btn btn-primary" onclick="claimSubdomain()">Claim</button>
      </div>
      <div id="claim-result" style="margin-top:12px;font-size:14px;"></div>
    </div>
    <div id="subdomains-list" style="margin-top:24px;"><p style="color:#71717A;">Loading...</p></div>
  </div>
</div>
<div id="dns-modal" class="modal-overlay hidden">
  <div class="modal" style="max-width:600px;">
    <button class="close" onclick="closeDNSModal()">&times;</button>
    <h2 id="dns-modal-title">Manage DNS</h2>
    <div class="dns-section">
      <h4>DNS Records</h4>
      <div class="add-record-form">
        <select class="type-select" id="record-type"><option value="A">A</option><option value="AAAA">AAAA</option><option value="CNAME">CNAME</option><option value="TXT">TXT</option><option value="MX">MX</option></select>
        <input class="name-input" type="text" id="record-name" placeholder="@" value="@">
        <input class="content-input" type="text" id="record-content" placeholder="IP or hostname">
        <button class="btn btn-primary btn-sm" onclick="addDNSRecord()">Add</button>
      </div>
      <table class="records-table" id="records-table">
        <thead><tr><th>Type</th><th>Name</th><th>Content</th><th></th></tr></thead>
        <tbody id="records-body"></tbody>
      </table>
    </div>
    <p style="margin-top:16px;font-size:13px;color:#71717A;">Adding a DNS record activates the subdomain. Removing all records deactivates it.</p>
  </div>
</div>
<script>
  let authToken = localStorage.getItem('alphauzs_token');
  let currentSubdomainId = null;
  if (authToken) { showDashboard(); } else { showHome(); }
  function showHome() { hideAll(); document.getElementById('home-view').classList.remove('hidden'); updateNav(); }
  function showLogin() { hideAll(); document.getElementById('login-view').classList.remove('hidden'); }
  function showRegister() { hideAll(); document.getElementById('register-view').classList.remove('hidden'); }
  function showDashboard() { if (!authToken) { showLogin(); return; } hideAll(); document.getElementById('dashboard-view').classList.remove('hidden'); loadSubdomains(); updateNav(); }
  function hideAll() { ['home-view','login-view','register-view','dashboard-view'].forEach(id => document.getElementById(id).classList.add('hidden')); }
  function updateNav() {
    if (authToken) {
      document.getElementById('nav-login').classList.add('hidden');
      document.getElementById('nav-register').classList.add('hidden');
      document.getElementById('nav-dashboard').classList.remove('hidden');
      document.getElementById('nav-logout').classList.remove('hidden');
    } else {
      document.getElementById('nav-login').classList.remove('hidden');
      document.getElementById('nav-register').classList.remove('hidden');
      document.getElementById('nav-dashboard').classList.add('hidden');
      document.getElementById('nav-logout').classList.add('hidden');
    }
  }
  function toast(msg, type) { const t = document.createElement('div'); t.className = 'toast toast-' + (type || 'success'); t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), 3000); }
  async function api(path, method, body) {
    const headers = { 'Content-Type': 'application/json' };
    if (authToken) headers['Authorization'] = 'Bearer ' + authToken;
    const resp = await fetch('/api/' + path, { method, headers, body: body ? JSON.stringify(body) : undefined });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error || 'Request failed');
    return data;
  }
  async function doRegister() {
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    try { const data = await api('auth/register', 'POST', { email, password }); authToken = data.token; localStorage.setItem('alphauzs_token', authToken); toast('Account created!'); showDashboard(); }
    catch (e) { toast(e.message, 'error'); }
  }
  async function doLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    try { const data = await api('auth/login', 'POST', { email, password }); authToken = data.token; localStorage.setItem('alphauzs_token', authToken); toast('Logged in!'); showDashboard(); }
    catch (e) { toast(e.message, 'error'); }
  }
  async function logout() { try { await api('auth/logout', 'POST'); } catch (e) {} authToken = null; localStorage.removeItem('alphauzs_token'); showHome(); }
  async function checkSubdomain() {
    const name = document.getElementById('search-subdomain').value.trim().toLowerCase();
    const el = document.getElementById('search-result');
    if (!name) { el.innerHTML = '<span style="color:#F43F5E;">Please enter a name</span>'; return; }
    try {
      const data = await api('subdomains/check', 'POST', { name });
      if (data.available) { el.innerHTML = '<span style="color:#4ADE80;">✓ ' + name + '.alphauzs.com is available!</span> <a href="#" onclick="showRegister();return false;" style="color:#6366F1;">Register to claim →</a>'; }
      else if (data.reason === 'taken') { el.innerHTML = '<span style="color:#F43F5E;">✗ ' + name + '.alphauzs.com is taken</span>'; }
      else if (data.reason === 'reserved') { el.innerHTML = '<span style="color:#F59E0B;">⚠ This name is reserved</span>'; }
      else { el.innerHTML = '<span style="color:#F43F5E;">✗ Invalid name</span>'; }
    } catch (e) { el.innerHTML = '<span style="color:#F43F5E;">' + e.message + '</span>'; }
  }
  async function loadSubdomains() {
    try {
      const data = await api('subdomains', 'GET');
      const list = document.getElementById('subdomains-list');
      if (data.subdomains.length === 0) { list.innerHTML = '<div class="card"><p style="color:#71717A;text-align:center;">No subdomains yet. Claim one above!</p></div>'; return; }
      list.innerHTML = data.subdomains.map(s => {
        const badge = s.status === 'active' ? '<span class="badge badge-active">Active</span>' : '<span class="badge badge-inactive">Inactive</span>';
        return '<div class="sub-item" onclick="openDNSModal(\\''+s.id+'\\',\\''+s.name+'\\')"><div class="sub-name">' + s.name + '<span>.alphauzs.com</span></div><div class="sub-actions">' + badge + ' <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation();openDNSModal(\\''+s.id+'\\',\\''+s.name+'\\')">Manage DNS</button></div></div>';
      }).join('');
    } catch (e) { toast(e.message, 'error'); }
  }
  async function claimSubdomain() {
    const name = document.getElementById('claim-name').value.trim().toLowerCase();
    const el = document.getElementById('claim-result');
    if (!name) { el.innerHTML = '<span style="color:#F43F5E;">Enter a name</span>'; return; }
    try { await api('subdomains/claim', 'POST', { name }); toast('Subdomain claimed!'); document.getElementById('claim-name').value = ''; el.innerHTML = ''; loadSubdomains(); }
    catch (e) { el.innerHTML = '<span style="color:#F43F5E;">' + e.message + '</span>'; }
  }
  function openDNSModal(subId, subName) { currentSubdomainId = subId; document.getElementById('dns-modal-title').textContent = subName + '.alphauzs.com — DNS Records'; document.getElementById('dns-modal').classList.remove('hidden'); loadDNSRecords(subId); }
  function closeDNSModal() { document.getElementById('dns-modal').classList.add('hidden'); currentSubdomainId = null; }
  async function loadDNSRecords(subId) {
    try {
      const data = await api('dns/records/list', 'POST', { subdomain_id: subId });
      const tbody = document.getElementById('records-body');
      if (data.records.length === 0) { tbody.innerHTML = '<tr><td colspan="4" style="color:#71717A;text-align:center;padding:20px;">No records yet. Add one above to activate this subdomain.</td></tr>'; return; }
      tbody.innerHTML = data.records.map(r => '<tr><td style="font-weight:600;">' + r.record_type + '</td><td>' + r.name + '</td><td style="word-break:break-all;">' + r.content + '</td><td><button class="btn btn-danger btn-sm" onclick="deleteDNSRecord(\\''+r.id+'\\')">×</button></td></tr>').join('');
    } catch (e) { toast(e.message, 'error'); }
  }
  async function addDNSRecord() {
    const type = document.getElementById('record-type').value;
    const name = document.getElementById('record-name').value || '@';
    const content = document.getElementById('record-content').value;
    if (!content) { toast('Content required', 'error'); return; }
    try { await api('dns/records', 'POST', { subdomain_id: currentSubdomainId, record_type: type, name, content, proxied: false }); toast('Record added — subdomain activated!'); document.getElementById('record-content').value = ''; loadDNSRecords(currentSubdomainId); loadSubdomains(); }
    catch (e) { toast(e.message, 'error'); }
  }
  async function deleteDNSRecord(recordId) {
    try { await api('dns/records/delete', 'POST', { record_id: recordId }); toast('Record deleted'); loadDNSRecords(currentSubdomainId); loadSubdomains(); }
    catch (e) { toast(e.message, 'error'); }
  }
</script>
</body>
</html>`;

// ========== HELPER FUNCTIONS ==========
function json(data, extraHeaders = {}) {
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json', ...extraHeaders } });
}
function jsonError(message, status, extraHeaders = {}) {
  return new Response(JSON.stringify({ error: message }), { status, headers: { 'Content-Type': 'application/json', ...extraHeaders } });
}
function getToken(request) {
  const auth = request.headers.get('Authorization');
  if (!auth || !auth.startsWith('Bearer ')) return null;
  return auth.slice(7);
}
async function getUserFromRequest(request, env) {
  const token = getToken(request);
  if (!token) return null;
  const session = await env.DB.prepare('SELECT s.*, u.email FROM sessions s JOIN users u ON s.user_id = u.id WHERE s.token = ? AND s.expires_at > ?').bind(token, new Date().toISOString()).first();
  if (!session) return null;
  return { id: session.user_id, email: session.email };
}
async function hashPassword(password) {
  const data = new TextEncoder().encode(password + 'alphauzs_salt_2026');
  const hash = await crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(hash)));
}
async function verifyPassword(password, hash) {
  return await hashPassword(password) === hash;
}

// ========== API HANDLER ==========
async function handleAPI(request, env) {
  const url = new URL(request.url);
  const method = request.method;
  const path = url.pathname.replace('/api/', '');
  const corsHeaders = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, Authorization' };
  if (method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

  try {
    if (path === 'auth/register' && method === 'POST') {
      const { email, password } = await request.json();
      if (!email || !password) return jsonError('Email and password required', 400, corsHeaders);
      const existing = await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first();
      if (existing) return jsonError('Email already registered', 409, corsHeaders);
      const userId = crypto.randomUUID();
      const passwordHash = await hashPassword(password);
      await env.DB.prepare('INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?)').bind(userId, email, passwordHash).run();
      const token = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)').bind(token, userId, new Date(Date.now() + 7*24*60*60*1000).toISOString()).run();
      return json({ token, user: { id: userId, email } }, corsHeaders);
    }
    if (path === 'auth/login' && method === 'POST') {
      const { email, password } = await request.json();
      if (!email || !password) return jsonError('Email and password required', 400, corsHeaders);
      const user = await env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(email).first();
      if (!user) return jsonError('Invalid credentials', 401, corsHeaders);
      const valid = await verifyPassword(password, user.password_hash);
      if (!valid) return jsonError('Invalid credentials', 401, corsHeaders);
      const token = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)').bind(token, user.id, new Date(Date.now() + 7*24*60*60*1000).toISOString()).run();
      return json({ token, user: { id: user.id, email: user.email } }, corsHeaders);
    }
    if (path === 'auth/logout' && method === 'POST') {
      const token = getToken(request);
      if (token) await env.DB.prepare('DELETE FROM sessions WHERE token = ?').bind(token).run();
      return json({ success: true }, corsHeaders);
    }
    if (path === 'auth/me' && method === 'GET') {
      const user = await getUserFromRequest(request, env);
      if (!user) return jsonError('Not authenticated', 401, corsHeaders);
      return json({ user: { id: user.id, email: user.email } }, corsHeaders);
    }
    if (path === 'subdomains' && method === 'GET') {
      const user = await getUserFromRequest(request, env);
      if (!user) return jsonError('Not authenticated', 401, corsHeaders);
      const subs = await env.DB.prepare('SELECT * FROM subdomains WHERE user_id = ? ORDER BY created_at DESC').bind(user.id).all();
      return json({ subdomains: subs.results }, corsHeaders);
    }
    if (path === 'subdomains/claim' && method === 'POST') {
      const user = await getUserFromRequest(request, env);
      if (!user) return jsonError('Not authenticated', 401, corsHeaders);
      const { name } = await request.json();
      if (!name) return jsonError('Subdomain name required', 400, corsHeaders);
      if (!/^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$/.test(name)) return jsonError('Invalid name. Use 3-63 chars, lowercase, numbers, hyphens.', 400, corsHeaders);
      const reserved = ['www','mail','admin','api','app','blog','shop','support','ns1','ns2','ftp','smtp','pop','imap'];
      if (reserved.includes(name)) return jsonError('This subdomain is reserved', 400, corsHeaders);
      const existing = await env.DB.prepare('SELECT id FROM subdomains WHERE name = ?').bind(name).first();
      if (existing) return jsonError('Subdomain already taken', 409, corsHeaders);
      const subId = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO subdomains (id, user_id, name, status) VALUES (?, ?, ?, ?)').bind(subId, user.id, name, 'inactive').run();
      return json({ success: true, subdomain: { id: subId, name, status: 'inactive' } }, corsHeaders);
    }
    if (path === 'subdomains/check' && method === 'POST') {
      const { name } = await request.json();
      if (!name) return jsonError('Name required', 400, corsHeaders);
      if (!/^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$/.test(name)) return json({ available: false, reason: 'invalid' }, corsHeaders);
      const reserved = ['www','mail','admin','api','app','blog','shop','support','ns1','ns2','ftp','smtp','pop','imap'];
      if (reserved.includes(name)) return json({ available: false, reason: 'reserved' }, corsHeaders);
      const existing = await env.DB.prepare('SELECT id FROM subdomains WHERE name = ?').bind(name).first();
      if (existing) return json({ available: false, reason: 'taken' }, corsHeaders);
      return json({ available: true }, corsHeaders);
    }
    if (path === 'dns/records' && method === 'POST') {
      const user = await getUserFromRequest(request, env);
      if (!user) return jsonError('Not authenticated', 401, corsHeaders);
      const { subdomain_id, record_type, name, content, ttl, proxied } = await request.json();
      if (!subdomain_id || !record_type || !content) return jsonError('Missing required fields', 400, corsHeaders);
      const sub = await env.DB.prepare('SELECT * FROM subdomains WHERE id = ? AND user_id = ?').bind(subdomain_id, user.id).first();
      if (!sub) return jsonError('Subdomain not found', 404, corsHeaders);
      const recordId = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO dns_records (id, subdomain_id, record_type, name, content, ttl, proxied) VALUES (?, ?, ?, ?, ?, ?, ?)').bind(recordId, subdomain_id, record_type, name || '@', content, ttl || 1, proxied ? 1 : 0).run();
      await env.DB.prepare('UPDATE subdomains SET status = ? WHERE id = ?').bind('active', subdomain_id).run();
      return json({ success: true, record: { id: recordId, record_type, name, content } }, corsHeaders);
    }
    if (path === 'dns/records/list' && method === 'POST') {
      const user = await getUserFromRequest(request, env);
      if (!user) return jsonError('Not authenticated', 401, corsHeaders);
      const { subdomain_id } = await request.json();
      if (!subdomain_id) return jsonError('Subdomain ID required', 400, corsHeaders);
      const sub = await env.DB.prepare('SELECT * FROM subdomains WHERE id = ? AND user_id = ?').bind(subdomain_id, user.id).first();
      if (!sub) return jsonError('Subdomain not found', 404, corsHeaders);
      const records = await env.DB.prepare('SELECT * FROM dns_records WHERE subdomain_id = ? ORDER BY created_at DESC').bind(subdomain_id).all();
      return json({ records: records.results }, corsHeaders);
    }
    if (path === 'dns/records/delete' && method === 'POST') {
      const user = await getUserFromRequest(request, env);
      if (!user) return jsonError('Not authenticated', 401, corsHeaders);
      const { record_id } = await request.json();
      if (!record_id) return jsonError('Record ID required', 400, corsHeaders);
      const record = await env.DB.prepare('SELECT * FROM dns_records WHERE id = ?').bind(record_id).first();
      if (!record) return jsonError('Record not found', 404, corsHeaders);
      const sub = await env.DB.prepare('SELECT * FROM subdomains WHERE id = ? AND user_id = ?').bind(record.subdomain_id, user.id).first();
      if (!sub) return jsonError('Not authorized', 403, corsHeaders);
      await env.DB.prepare('DELETE FROM dns_records WHERE id = ?').bind(record_id).run();
      const remaining = await env.DB.prepare('SELECT COUNT(*) as count FROM dns_records WHERE subdomain_id = ?').bind(record.subdomain_id).first();
      if (remaining.count === 0) await env.DB.prepare('UPDATE subdomains SET status = ? WHERE id = ?').bind('inactive', record.subdomain_id).run();
      return json({ success: true }, corsHeaders);
    }
    return jsonError('Not found', 404, corsHeaders);
  } catch (err) {
    return jsonError('Server error: ' + err.message, 500, corsHeaders);
  }
}

// ========== SUBDOMAIN HANDLER ==========
async function handleSubdomain(request, env) {
  const url = new URL(request.url);
  const subdomainName = url.hostname.replace('.alphauzs.com', '');
  const sub = await env.DB.prepare('SELECT * FROM subdomains WHERE name = ?').bind(subdomainName).first();
  if (!sub || sub.status === 'inactive') {
    return new Response(inactivePageHTML, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
  }
  const records = await env.DB.prepare('SELECT * FROM dns_records WHERE subdomain_id = ?').bind(sub.id).all();
  if (!records.results || records.results.length === 0) {
    return new Response(inactivePageHTML, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
  }
  const aRecord = records.results.find(r => r.record_type === 'A');
  const cnameRecord = records.results.find(r => r.record_type === 'CNAME');
  let originHost = aRecord ? aRecord.content : (cnameRecord ? cnameRecord.content : null);
  if (!originHost) {
    return new Response(inactivePageHTML, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
  }
  const proxyUrl = `https://${originHost}${url.pathname}${url.search}`;
  try {
    const proxyResp = await fetch(proxyUrl, { method: request.method, headers: request.headers, body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined, redirect: 'manual' });
    const respHeaders = new Headers(proxyResp.headers);
    respHeaders.set('X-Subdomain-Proxy', 'alphauzs.com');
    return new Response(proxyResp.body, { status: proxyResp.status, statusText: proxyResp.statusText, headers: respHeaders });
  } catch (err) {
    return new Response(inactivePageHTML, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=60' } });
  }
}

// ========== MAIN WORKER ==========
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostname = url.hostname;
    if (hostname.endsWith('.alphauzs.com') && hostname !== 'alphauzs.com') {
      return handleSubdomain(request, env);
    }
    if (url.pathname.startsWith('/api/')) {
      return handleAPI(request, env);
    }
    return new Response(platformHTML, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' } });
  }
};
