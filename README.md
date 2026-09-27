# alphauzs.com — Subdomain Platform

## Deploy qadamlari (dashboard orqali, terminal kerak emas):

### 1. D1 database yaratish
- Dashboard → Storage & Databases → D1 SQL Database → Create database
- Nomi: `alphauzs-platform`
- Yaratilgach, database ga kiring → Query tab
- `schema.sql` faylidagi kodni joylab Run bosing

### 2. Worker ga D1 binding qo'shish
- Dashboard → Workers & Pages → alphauzs-platform Worker ga kiring
- Settings → Bindings → Add binding → D1 database
- Variable name: `DB`
- Database: `alphauzs-platform`

### 3. Worker kodini joylash
- Edit code ga kiring
- `worker.js` faylini oching
- Ichidagi hamma kodni o'chiring
- `worker.js` fayli ichidagi kodni copy-paste qiling
- Deploy bosing

### 4. Route qo'shish
- Worker → Settings → Triggers → Add route
- `alphauzs.com/*` → alphauzs-platform
- `*.alphauzs.com/*` → alphauzs-platform
