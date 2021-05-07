import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Beranda',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'CV',
    route: '/cv',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Identitas Diri',
        to: '/identitasdiri',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Riwayat Jabatan',
        to: '/riwayatjabatan',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Riwayat Kontrak',
        to: '/riwayatkontrak',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Riwayat Kinerja',
        to: '/riwayatkinerja',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Riwayat Suamai / Istri',
        to: '/riwayatsuamiistri',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Riwayat Anak',
        to: '/riwayatanak',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Riwayat Pendidikan Umum',
        to: '/riwayatpendidikan',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Diklat / Seminar',
        to: '/riwayatseminar',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'SKP',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/skp',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Buat SKP',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Realisasi SKP Harian',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Realisasi SKP Bulanan',
        to: '/buttons/button-dropdowns',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Nilai SKP',
        to: '/buttons/button-dropdowns',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Nilai Perilaku',
        to: '/buttons/button-dropdowns',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Nilai Prestasi Kerja',
        to: '/buttons/button-dropdowns',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'History',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Cuti',
    route: '/icons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Buat Cuti',
        to: '/icons/coreui-icons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Daftar Cuti',
        to: '/icons/flags',
      },
    ],
  },

]

export default _nav
