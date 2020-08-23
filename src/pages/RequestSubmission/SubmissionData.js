import helpingImg from '../../assets/images/helping.png';
import donateImg from '../../assets/images/donate.png';
import submissonImg from '../../assets/images/submission.png';

const submissionType = [
  {
    name: 'self',
    title: 'Sesuai Target',
    link: '/self',
    image: submissonImg,
    text:
      'Keluarga Pra-Sejahtera akan di prioritaskan dalam mendapatkan bantuan, Keluarga yang dirasa sudah sejahtera dapat mengajukan pencopotan agar sesuai dengan target.',
    tag: ['Pengajuan', 'DapatkanKeterangan'],
    step: [
      {
        number: 1,
        description:
          'Memilih jenis permohonan (Pengajuan Status, Pencopotan Status, atau Permintaan Surat Keterangan)',
      },
      {
        number: 2,
        description: 'Memasukan data yang diperlukan',
      },
      {
        number: 3,
        description:
          'Petugas akan datang kerumah anda untuk mensurvey (untuk Permintaan Surat Keterangan akan didapatkan langsung dari website)',
      },
      {
        number: 4,
        description: 'Petugas akan memberitahukan hasil lewat SMS/Whatsapp',
      },
    ],
  },
  {
    name: 'neighbour',
    title: 'Bantu Tetanggamu',
    image: helpingImg,
    text:
      'Bantu Tetanggamu untuk mendapatkan status Keluarga Pra-Sejahtera atau melaporkan kesalahan dalam penargetan Keluarga Pra-Sejahtera ataupun Keluarga yang dianggap sudah Sejahtera',
    link: '/neighbour',
    tag: ['Pengajuan', 'Laporkan'],
    step: [
      {
        number: 1,
        description:
          'Memilih jenis permohonan untuk Tetangga anda (Pengajuan Status, Pelaporan, atau Permintaan Surat Keterangan)',
      },
      {
        number: 2,
        description: 'Memasukan data yang diperlukan',
      },
      {
        number: 3,
        description:
          'Petugas akan datang kerumah anda untuk mensurvey (untuk Permintaan Surat Keterangan akan didapatkan langsung dari website)',
      },
      {
        number: 4,
        description: 'Petugas akan memberitahukan hasil lewat SMS/Whatsapp',
      },
    ],
  },
  {
    name: 'donation',
    title: 'Berikan Donasimu',
    image: donateImg,
    text:
      'Tak perlu repot dalam beramal, donasimu akan disalurkan langsung oleh petugas kepada Keluarga Pra-Sejahtera dengan target yang sesai',
    link: '/donation',
    tag: ['Pengajuan Data', 'Donasi'],
    step: [
      {
        number: 1,
        description:
          'Memilih lokasi yang ingin disalurkan donasinya',
      },
      {
        number: 2,
        description: 'Memasukan data yang diperlukan',
      },
      {
        number: 3,
        description:
          'Petugas akan menghubungi anda untuk proses donasi',
      },
      {
        number: 4,
        description: 'Petugas akan memberitahukan hasil lewat SMS/Whatsapp',
      },
    ],
  },
];

export { submissionType };
