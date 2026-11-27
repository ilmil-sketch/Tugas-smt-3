export function renderPanel() {
  return `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8" />
      <title>Inventaris Lab</title>
      <style>
        body { font-family: sans-serif; background: #0f0b1e; color: #fff; max-width: 650px; margin: 30px auto; }
        .box { background: #1a1230; padding: 15px; border-radius: 8px; margin-bottom: 15px; }
        a, button { background: #9333ea; color: #fff; padding: 8px 12px; border: none; border-radius: 5px; text-decoration: none; cursor: pointer; }
        input, select { padding: 7px; border-radius: 5px; margin: 4px 4px 4px 0; }
        pre { background: #090612; padding: 10px; border-radius: 6px; }
      </style>
    </head>
    <body>
      <h2>Inventaris Lab</h2>

      <div class="box">
        <h3>Cek GET</h3>
        <a href="/api/inventaris">Semua</a>
        <a href="/api/inventaris/1">ID 1</a>
        <a href="/api/inventaris/2">ID 2</a>
        <a href="/api/inventaris/3">ID 3</a>
        <a href="/api/inventaris/4">ID 4</a>

        <div style="margin-top: 10px;">
          <input id="cekId" placeholder="Ketik ID (misal: 5)" />
          <button type="button" onclick="bukaId()">Cek ID</button>
        </div>
      </div>

      <div class="box">
        <h3>Tambah Barang (POST)</h3>
        <form id="formPost">
          <input id="id" placeholder="ID" required />
          <input id="nama" placeholder="Nama" required />
          <input id="jumlah" type="number" placeholder="Jumlah" required />
          <select id="kondisi">
            <option value="Baik">Baik</option>
            <option value="Perlu Cek">Perlu Cek</option>
          </select>
          <button type="submit">Kirim</button>
        </form>
        <pre id="hasil">Menunggu...</pre>
      </div>

      <script>
        function bukaId() {
          const nilaiId = document.getElementById('cekId').value.trim();
          if (!nilaiId) return;
          window.location.href = '/api/inventaris/' + nilaiId;
        }

        formPost.addEventListener('submit', async (e) => {
          e.preventDefault();
          const res = await fetch('/api/inventaris', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: id.value,
              nama: nama.value,
              jumlah: Number(jumlah.value),
              kondisi: kondisi.value,
            }),
          });
          hasil.textContent = JSON.stringify(await res.json(), null, 2);
        });
      </script>
    </body>
    </html>
  `;
}