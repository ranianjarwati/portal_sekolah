<template>
    <nav class="navbar">
        <div class="container nav-inner">
            <a href="#beranda" class="brand">
                <div class="brand-icon"><i class="fas fa-school"></i></div>
                <div>
                    <span class="brand-name">SMK Digital Nusantara</span>
                    <span class="brand-sub">Profil Sekolah</span>
                </div>
            </a>

            <input type="checkbox" id="navToggle">
            <label for="navToggle" class="nav-toggle" aria-label="Menu">
                <i class="fas fa-bars icon-bars"></i>
                <i class="fas fa-times icon-close"></i>
            </label>

            <ul class="nav-links">
                <li><router-link to="/" class="nav-link">Beranda</router-link></li>
                <li><router-link to="/#tentang" class="nav-link">Tentang</router-link></li>
                <li><router-link to="/#visi-misi" class="nav-link">Visi &amp; Misi</router-link></li>
                <li><router-link to="/jurusan" class="nav-link">Jurusan</router-link></li>
                <li><router-link to="/prestasi" class="nav-link">Prestasi</router-link></li>
                <li><router-link to="/fasilitas" class="nav-link">Fasilitas</router-link></li>
                <li><router-link to="/#kontak" class="btn-nav nav-link">Kontak</router-link></li>
            </ul>
            
        </div>
    </nav>
</template>