const sidebarItems = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Beranda",
        href: "/dashboard",
        items: [],
        end: true,
      },
    ],
  },
  {
    title: "Inventaris Barang",
    items: [
      {
        title: "Data Barang",
        href: "/dashboard/items",
        items: [],
        end: false,
      },
      {
        title: "Riwayat Peminjaman",
        href: "/dashboard/items-history",
        items: [],
        end: false,
      },
    ],
  },
  {
    title: "Inventaris Buku",
    items: [
      {
        title: "Data Buku",
        href: "/dashboard/books",
        items: [],
        end: true,
      },
      {
        title: "Riwayat Peminjaman",
        href: "/dashboard/books/history",
        items: [],
        end: false,
      },
    ],
  },
  {
    title: "Peminjaman",
    items: [
      {
        title: "Peminjaman",
        href: "/dashboard/loan",
        items: [],
        end: false,
      },
      {
        title: "Riwayat Peminjaman",
        href: "/dashboard/loan-history",
        items: [],
        end: false,
      },
    ],
  },
];

export default sidebarItems;
