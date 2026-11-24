import { Hono } from "hono"

const app = new Hono()

// Data awal inventaris laboratorium
const inventarisLab = [
  { id: "1", nama: "Komputer", jumlah: 20, kondisi: "Baik" },
  { id: "2", nama: "Proyektor", jumlah: 4, kondisi: "Baik" },
  { id: "3", nama: "Switch", jumlah: 6, kondisi: "Baik" },
  { id: "4", nama: "Router", jumlah: 5, kondisi: "Perlu Cek" }
]

// Cek awal server
app.get("/", (c) => {
  return c.text("API Inventaris Lab siap digunakan!")
})

// 1. GET semua data inventaris
app.get("/api/inventaris", (c) => {
  return c.json({
    data: inventarisLab,
    total: inventarisLab.length
  })
})

// 2. GET detail satu barang berdasarkan id
app.get("/api/inventaris/:id", (c) => {
  const id = c.req.param("id")
  const item = inventarisLab.find((barang) => barang.id === id)

  if (!item) {
    return c.json({ error: "Barang inventaris tidak ditemukan" }, 404)
  }

  return c.json({ data: item })
})

// 3. POST tambah barang baru
app.post("/api/inventaris", async (c) => {
  const body = await c.req.json()
  inventarisLab.push(body)

  return c.json({
    pesan: "Berhasil menambahkan barang inventaris",
    data: body
  }, 201)
})

export default app