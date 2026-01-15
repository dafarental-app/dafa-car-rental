import { defineField, defineType } from "sanity";

export default defineType({
  name: "vehicle",
  title: "Kendaraan (Armada)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama Kendaraan",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "type",
      title: "Tipe Kendaraan",
      type: "string",
      options: {
        list: [
          { title: "Mobil (Car)", value: "car" },
          { title: "Motor (Scooter)", value: "scooter" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Harga Harian (Default)",
      description: "Harga normal per satu hari. Wajib diisi.",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    // --- BAGIAN YANG DIUPDATE ---
    defineField({
      name: "pricing",
      title: "Opsi Paket Harga (Khusus Motor)",
      description:
        "Atur paket 3 hari (tampil per hari) atau Bulanan (tampil total).",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              type: "string",
              title: "Nama Paket",
              description: 'Contoh: "Paket 3 Hari" atau "Paket Bulanan"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "price",
              type: "number",
              title: "Nominal Harga",
              description:
                'PENTING: Jika "/day", masukkan harga rata-rata per hari. Jika "Total", masukkan harga total lunas.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "unit",
              type: "string",
              title: "Tipe Satuan",
              description: "Pilih bagaimana harga ini ditampilkan ke user.",
              options: {
                list: [
                  { title: "Per Hari (/day)", value: "/day" },
                  { title: "Harga Total (Nett)", value: "total" },
                ],
                layout: "radio", // Tampil sebagai tombol radio button biar gampang dipilih
              },
              initialValue: "/day",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "label",
              price: "price",
              unit: "unit",
            },
            prepare(selection) {
              const { title, price, unit } = selection;
              // Format tampilan preview di Sanity Studio
              const formattedPrice = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0,
              }).format(price);

              const unitLabel = unit === "/day" ? "/hari" : "(Total)";
              return {
                title: title,
                subtitle: `${formattedPrice} ${unitLabel}`,
              };
            },
          },
        },
      ],
    }),
    // --- AKHIR UPDATE ---

    defineField({
      name: "image",
      title: "Foto Kendaraan",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "transmission",
      title: "Transmisi",
      type: "string",
      options: { list: ["Matic", "Manual"] },
    }),
    defineField({
      name: "fuel",
      title: "Bahan Bakar",
      type: "string",
    }),
    defineField({
      name: "seats",
      title: "Jumlah Kursi",
      type: "number",
    }),
    defineField({
      name: "year",
      title: "Tahun Kendaraan",
      type: "number",
    }),
  ],
});
