import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

// CV 

const IdentitasDiri = React.lazy(() => import('./views/cv/identitasdiri/IdentitasDiri'));
const RiwayatJabatan = React.lazy(() => import('./views/cv/riwayatjabatan/RiwayatJabatan'));
const RiwayatKontrak = React.lazy(() => import('./views/cv/riwayatkontrak/RiwayatKontrak'));
const RiwayatKinerja = React.lazy(() => import('./views/cv/riwayatkinerja/RiwayatKinerja'));
const RiwayatSuamiIstri = React.lazy(() => import('./views/cv/riwayatsuamiistri/RiwayatSuamiIstri'));
const RiwayatAnak = React.lazy(() => import('./views/cv/riwayatanak/RiwayatAnak'));
const RiwayatPendidikan = React.lazy(() => import('./views/cv/riwayatpendidikan/RiwayatPendidikan'));
const RiwayatSeminar = React.lazy(() => import('./views/cv/riwayatseminar/RiwayatSeminar'));

// SKP

const DashboardSKP = React.lazy(() => import('./views/skp/dashboard/Dashboard'));
const BuatSKP = React.lazy(() => import('./views/skp/buatskp/BuatSkp'));
const SkpHarian = React.lazy(() => import('./views/skp/skpharian/SkpHarian'));
const SkpBulanan = React.lazy(() => import('./views/skp/skpbulanan/SkpBulanan'));
const PilihSkp = React.lazy(() => import('./views/skp/pilihskp/PilihSkp'));
const SkpTugasTambahan = React.lazy(() => import('./views/skp/skptambahan/SkpTugasTambahan'));
const SkpLainLain = React.lazy(() => import('./views/skp/skplainlain/SkpLainLain'));
const NilaiSkp = React.lazy(() => import('./views/skp/nilaiskp/NilaiSkp'));
const NilaiPerilaku = React.lazy(() => import('./views/skp/nilaiperilaku/NilaiPerilaku'));
const NilaiPrestasiKerja = React.lazy(() => import('./views/skp/nilaiprestasikerja/NilaiPrestasiKerja'));
const History = React.lazy(() => import('./views/skp/history/History'));

// Cuti
const BuatCuti = React.lazy(() => import('./views/cuti/buatcuti/BuatCuti'));
const DaftarCuti = React.lazy(() => import('./views/cuti/daftarcuti/DaftarCuti'));




const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },

  // CV
  { path: '/identitasdiri',  name: 'Identitas Diri', component: IdentitasDiri },
  { path: '/riwayatjabatan',  name: 'Riwayat Jabatan', component: RiwayatJabatan },
  { path: '/riwayatkontrak',  name: 'Riwayat Kontrak', component: RiwayatKontrak },
  { path: '/riwayatkinerja',  name: 'Riwayat Kinerja', component: RiwayatKinerja },
  { path: '/riwayatsuamiistri',  name: 'Riwayat Suami Istri', component: RiwayatSuamiIstri },
  { path: '/riwayatanak',  name: 'Riwayat Anak', component: RiwayatAnak },
  { path: '/riwayatpendidikan',  name: 'Riwayat Pendidikan', component: RiwayatPendidikan },
  { path: '/riwayatseminar',  name: 'Riwayat Seminar', component: RiwayatSeminar },

// SKP
{ path: '/skp',  name: 'SKP', component: DashboardSKP },
{ path: '/buatskp',  name: 'Buat SKP', component: BuatSKP },
{ path: '/skpharian',  name: 'SKP Harian', component: SkpHarian},
{ path: '/skpbulanan',  name: 'SKP Bulanan', component: SkpBulanan},
{ path: '/pilihskp',  name: 'Pilih SKP', component: PilihSkp},
{ path: '/skptambahan',  name: 'SKP Tambahan', component: SkpTugasTambahan},
{ path: '/skplainlain',  name: 'SKP Lain Lain', component: SkpLainLain},
{ path: '/nilaiskp',  name: 'Nilai SKP', component: NilaiSkp},
{ path: '/nilaiperilaku',  name: 'Nilai Perilaku', component: NilaiPerilaku},
{ path: '/nilaiprestasikerja',  name: 'Nilai Prestasi Kerja', component: NilaiPrestasiKerja},
{ path: '/history',  name: 'History', component: History},

// Cuti
{ path: '/buatcuti',  name: 'Buat Cuti', component: BuatCuti},
{ path: '/daftarcuti',  name: 'Daftar Cuti', component: DaftarCuti},


];

export default routes;
