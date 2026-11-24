import { Hono } from 'hono';

const app = new Hono();

const inventarisLab = [
  { id: '1', nama: 'Komputer', jumlah: 20, kondisi: 'Baik' },
  { id: '2', nama: 'Proyektor', jumlah: 4, kondisi: 'Baik' },
  { id: '3', nama: 'Switch', jumlah: 6, kondisi: 'Baik' },
  { id: '4', nama: 'Router', jumlah: 5, kondisi: 'Perlu Cek' },
];

app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>API Inventaris Lab</title>
      <style>
        body {
          font-family: system-ui, sans-serif;
          background: #0f0b1e;
          color: #f3e8ff;
          max-width: 720px;
          margin: 40px auto;
          padding: 0 20px;
        }
        .card {
          background: #1a1230;
          border: 1px solid #3b2667;
          border-radius: 10px;
          padding: 18px;
          margin-bottom: 18px;
        }
        a.btn, button {
          display: inline-block;
          background: #9333ea;
          color: #fff;
          text-decoration: none;
          border: none;
          border-radius: 6px;
          padding: 9px 14px;
          margin: 4px 6px 4px 0;
          cursor: pointer;
          font-size: 14px;
        }
        a.btn:hover, button:hover {
          background: #a855f7;
        }
        input, select {
          padding: 8px;
          border-radius: 6px;
          border: 1px solid #4c3282;
          background: #0f0b1e;
          color: #fff;
          margin: 4px 6px 4px 0;
        }
        pre {
          background: #090612;
          padding: 14px;
          border-radius: 8px;
          overflow-x: auto;
          border: 1px solid #2b1c4d;
        }
      </style>
    </head>
    <body>
      <h2>Inventaris Lab — Panel Uji Cepat</h2>

      <div class="card">
        <h3>1. Cek Endpoint GET (Tinggal Klik)</h3>
        <a class="btn" href="/api/inventaris">GET Semua Inventaris</a>
        <a class="btn" href="/api/inventaris/1">ID 1 (Komputer)</a>
        <a class="btn" href="/api/inventaris/2">ID 2 (Proyektor)</a>
        <a class="btn" href="/api/inventaris/3">ID 3 (Switch)</a>
        <a class="btn" href="/api/inventaris/4">ID 4 (Router)</a>
      </div>

      <div class="card">
        <h3>2. Tambah Barang Baru (POST /api/inventaris)</h3>
        <form id="postForm">
          <input type="text" id="id" placeholder="ID (misal: 5)" required />
          <input type="text" id="nama" placeholder="Nama barang" required />
          <input type="number" id="jumlah" placeholder="Jumlah" min="1" required />
          <select id="kondisi">
            <option value="Baik">Baik</option>
            <option value="Perlu Cek">Perlu Cek</option>
          </select>
          <button type="submit">Kirim POST</button>
        </form>
        <pre id="hasil">Hasil respon akan muncul di sini...</pre>
      </div>

      <script>
        document.getElementById('postForm').addEventListener('submit', async (e) => {
          e.preventDefault();
          const payload = {
            id: document.getElementById('id').value,
            nama: document.getElementById('nama').value,
            jumlah: Number(document.getElementById('jumlah').value),
            kondisi: document.getElementById('kondisi').value,
          };
          const res = await fetch('/api/inventaris', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          const data = await res.json();
          document.getElementById('hasil').textContent = JSON.stringify(data, null, 2);
        });
      </script>
    </body>
    </html>
  `);
});

app.get('/api/inventaris', (c) => {
  return c.json({
    data: inventarisLab,
    total: inventarisLab.length,
  });
});

app.get('/api/inventaris/:id', (c) => {
  const id = c.req.param('id');
  const item = inventarisLab.find((barang) => barang.id === id);

  if (!item) {
    return c.json({ pesan: `Barang dengan ID ${id} tidak ditemukan` }, 404);
  }

  return c.json({ data: item });
});

app.post('/api/inventaris', async (c) => {
  const body = await c.req.json();

  if (!body.id || !body.nama || body.jumlah === undefined || !body.kondisi) {
    return c.json(
      { pesan: 'Field id, nama, jumlah, dan kondisi wajib diisi' },
      400
    );
  }

  const sudahAda = inventarisLab.some((barang) => barang.id === String(body.id));
  if (sudahAda) {
    return c.json(
      { pesan: `Barang dengan ID ${body.id} sudah ada` },
      409
    );
  }

  const barangBaru = {
    id: String(body.id),
    nama: String(body.nama),
    jumlah: Number(body.jumlah),
    kondisi: String(body.kondisi),
  };

  inventarisLab.push(barangBaru);

  return c.json(
    {
      pesan: 'Berhasil menambahkan barang inventaris',
      data: barangBaru,
    },
    201
  );
});

export default app;