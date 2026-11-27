import { Hono } from 'hono'
import { inventaris } from './data.js'

const routes = new Hono()

// Menampilkan seluruh data inventaris
routes.get('/api/inventaris', (c) => {
  return c.json({ inventaris })
})

// Menampilkan data inventaris berdasarkan id
routes.get('/api/inventaris/:id', (c) => {
  const id = Number(c.req.param('id'))
  const IdBarang = inventaris.find((item) => item.id === id)

  if (!IdBarang) {
    return c.json({
      Status: 'eror',
      Message: `Barang dengan id ${id} tidak ada`
    }, 404)
  }

  return c.json({
    Status: 'Succes',
    IdBarang
  })
})

// Menambah data inventaris
routes.post('/api/inventaris', async (c) => {
  const tambah = await c.req.json()
  
  const dataBaru = {
    id: Number(tambah.id),
    nama: tambah.nama,
    jumlah: Number(tambah.jumlah),
    kondisi: tambah.kondisi
  }

  inventaris.push(dataBaru)

  return c.json({
    Status: 'Succes',
    data: dataBaru
  }, 201)
})

export default routes