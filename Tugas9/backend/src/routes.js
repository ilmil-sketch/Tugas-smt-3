import { Hono } from 'hono';
import { inventaris } from './data.js';

const routes = new Hono();

// Ambil semua barang
routes.get('/api/inventaris', (c) => {
  return c.json({
    data: inventaris,
    total: inventaris.length,
  });
});

// Ambil satu barang berdasarkan id
routes.get('/api/inventaris/:id', (c) => {
  const id = c.req.param('id');
  const barang = inventaris.find((item) => item.id === id);

  if (!barang) {
    return c.json({ pesan: 'Barang tidak ditemukan' }, 404);
  }

  return c.json({ data: barang });
});

// Tambah barang baru
routes.post('/api/inventaris', async (c) => {
  const body = await c.req.json();

  const barangBaru = {
    id: String(body.id),
    nama: body.nama,
    jumlah: Number(body.jumlah),
    kondisi: body.kondisi,
  };

  inventaris.push(barangBaru);

  return c.json(
    {
      pesan: 'Barang berhasil ditambahkan',
      data: barangBaru,
    },
    201
  );
});

export default routes;