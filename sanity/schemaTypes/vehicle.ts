import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'vehicle',
  title: 'Kendaraan (Armada)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Kendaraan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name' },
    }),
    defineField({
      name: 'type',
      title: 'Tipe Kendaraan',
      type: 'string',
      options: {
        list: [
          { title: 'Mobil (Car)', value: 'car' },
          { title: 'Motor (Bike)', value: 'bike' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Harga Harian (Default)',
      description: 'Harga per hari. Wajib diisi.',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pricing',
      title: 'Opsi Paket Harga (Khusus Motor)',
      description: 'Isi ini jika ada paket 3 hari, 7 hari, dll.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label (Contoh: 3 Hari)' },
            { name: 'price', type: 'number', title: 'Harga (Contoh: 115000)' },
            { name: 'unit', type: 'string', title: 'Satuan (Contoh: /day)', initialValue: '/day' },
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Foto Kendaraan',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'transmission',
      title: 'Transmisi',
      type: 'string',
      options: { list: ['Matic', 'Manual'] },
    }),
    defineField({
      name: 'fuel',
      title: 'Bahan Bakar',
      type: 'string',
    }),
    defineField({
      name: 'seats',
      title: 'Jumlah Kursi',
      type: 'number',
    }),
    defineField({
      name: 'year',
      title: 'Tahun Kendaraan',
      type: 'number',
    }),
  ],
})