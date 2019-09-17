import React, { Component } from "react";

import { Segment, Container, Accordion, Icon, List } from "semantic-ui-react";

import Footer from "./components/footer";

import "../App.css";

class Layanan extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { activeIndex } = this.state;

    return (
      <div>
        <div className="layanan-menu">
          <Container>
            <div>
              <h1 className="layanan-title">Layanan</h1>
            </div>
            <div className="layanan-isi">
              {" "}
              <Accordion fluid styled>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  Peralihan Hak Jual Beli
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>
                    <List as="ul">
                      <List.Item>
                        <h5>Persyaratan</h5>
                      </List.Item>
                      <List.Item as="li">
                        Formulir Permohonan yang sudah diisi dan ditandatangani
                        pemohon atau kuasanya diatas materai cukup
                      </List.Item>
                      <List.Item as="li">
                        Surat kuasa apabila dikuasakan
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy identitas pemohon (KTP,KK) dan kuasa apabila
                        dikuasakan, yang telah dicocokkan dengan aslinya oleh
                        petugas loket
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy akta pendirian dan pengesahan badan hukum yang
                        telah dicocokkan dengan aslinya oleh petugas loket bagi
                        badan hukum
                      </List.Item>
                      <List.Item as="li">Sertifikat Asli</List.Item>
                      <List.Item as="li">Akta jual beli dan PPAT</List.Item>
                      <List.Item as="li">
                        Fotocopy KTP dan para pihak penjual - pembeli dan atau
                        kuasanya
                      </List.Item>
                      <List.Item as="li">
                        Ijin pemindahan hak apabila di dalam sertifikat /
                        keputusannya dicantumkan tanda yang menyatakan bahwa hak
                        tersebut hanya boleh dipindahtangankan jika telah
                        diperoleh ijin dari instansi yang berwenang
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy SPPT dan PBB tahun berjalan yang telah
                        dicocokkan dengan aslinya oleh petugas loket, penyerahan
                        bukti SBB (BPHTB) dan bukti bayar uang pemasukan (pada
                        saat pendaftaran hak)
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Penyelesaian</h5>
                      </List.Item>
                      <List.Item as="li">5 hari kerja</List.Item>
                      <br />
                      <List.Item>
                        <h5>Keterangan</h5>
                      </List.Item>
                      <List.Item as="li">Identitas diri</List.Item>
                      <List.Item as="li">
                        Luas, letak dan penggunaan tanah yang dimohon
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah tidak sengketa
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah/bangunan dikuasai secara fisik
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Tarif</h5>
                      </List.Item>
                      <List.Item as="li">
                        Biaya dihitung berdasarkan nilai tanah yang dikeluarkan
                        oleh kantor pertanahan dengan rumus (nilai tanah(per m2)
                        * luas tanah (m2)) / 1000
                      </List.Item>
                    </List>
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  Peralihan Hak Pewarisan
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <p>
                    <List as="ul">
                      <List.Item>
                        <h5>Persyaratan</h5>
                      </List.Item>
                      <List.Item as="li">
                        Formulir Permohonan yang sudah diisi dan ditandatangani
                        pemohon atau kuasanya diatas materai cukup
                      </List.Item>
                      <List.Item as="li">
                        Surat kuasa apabila dikuasakan
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy identitas pemohon/para ahli waris (KTP,KK) dan
                        kuasa apabila dikuasakan, yang telah dicocokkan dengan
                        aslinya oleh petugas loket
                      </List.Item>
                      <List.Item as="li">Sertifikat Asli</List.Item>
                      <List.Item as="li">
                        Surat Keterangan Waris sesuai peraturan
                        perundang-undangan
                      </List.Item>
                      <List.Item as="li">Akte Wasiat Notariel</List.Item>
                      <List.Item as="li">
                        Fotocopy SPPT dan PBB tahun berjalan yang telah
                        dicocokkan dengan aslinya oleh petugas loket, penyerahan
                        bukti SBB (BPHTB) dan bukti bayar uang pemasukan (pada
                        saat pendaftaran hak)
                      </List.Item>
                      <List.Item as="li">
                        Penyerahan bukti SSB (BPHTB) bukti SSP/PPH untuk
                        perolehan tanah lebih dari 60 Juta Rupiah bukti bayar
                        uang pemasukan (pada saat pendaftaran hak)
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Penyelesaian</h5>
                      </List.Item>
                      <List.Item as="li">5 hari kerja</List.Item>
                      <br />
                      <List.Item>
                        <h5>Keterangan</h5>
                      </List.Item>
                      <List.Item as="li">Identitas diri</List.Item>
                      <List.Item as="li">
                        Luas, letak dan penggunaan tanah yang dimohon
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah tidak sengketa
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah/bangunan dikuasai secara fisik
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Tarif</h5>
                      </List.Item>
                      <List.Item as="li">
                        Biaya dihitung berdasarkan nilai tanah yang dikeluarkan
                        oleh kantor pertanahan dengan rumus (nilai tanah(per m2)
                        * luas tanah (m2)) / 1000
                      </List.Item>
                    </List>
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  Peralihan Hak Tukar Menukar
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <p>
                    <List as="ul">
                      <List.Item>
                        <h5>Persyaratan</h5>
                      </List.Item>
                      <List.Item as="li">
                        Formulir Permohonan yang sudah diisi dan ditandatangani
                        pemohon atau kuasanya diatas materai cukup
                      </List.Item>
                      <List.Item as="li">
                        Surat kuasa apabila dikuasakan
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy identitas pemohon/para ahli waris (KTP,KK) dan
                        kuasa apabila dikuasakan, yang telah dicocokkan dengan
                        aslinya oleh petugas loket
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy akta pendirian dan pengesahan badan hukum yang
                        telah dicocokkan dengan aslinya oleh petugas loket, bagi
                        badan hukum
                      </List.Item>
                      <List.Item as="li">Sertifikat Asli</List.Item>
                      <List.Item as="li">
                        Akta tukar menukar dari PPAT
                      </List.Item>
                      <List.Item as="li">
                        Ijin pemindahan hak apabila di dalam sertifikat /
                        keputusannya dicantumkan tanda yang menyatakan bahwa hak
                        tersebut hanya boleh dipindahtangankan jika telah
                        diperoleh ijin dari instansi berwenang
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy SPPT dan PBB tahun berjalan yang telah
                        dicocokkan dengan aslinya oleh petugas loket, penyerahan
                        bukti SBB (BPHTB) dan bukti bayar uang pemasukan (pada
                        saat pendaftaran hak)
                      </List.Item>
                      <List.Item as="li">
                        Penyerahan bukti SSB (BPHTB) bukti SSP/PPH untuk
                        perolehan tanah lebih dari 60 Juta Rupiah bukti bayar
                        uang pemasukan (pada saat pendaftaran hak)
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Penyelesaian</h5>
                      </List.Item>
                      <List.Item as="li">5 hari kerja</List.Item>
                      <br />
                      <List.Item>
                        <h5>Keterangan</h5>
                      </List.Item>
                      <List.Item as="li">Identitas diri</List.Item>
                      <List.Item as="li">
                        Luas, letak dan penggunaan tanah yang dimohon
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah tidak sengketa
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah/bangunan dikuasai secara fisik
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Tarif</h5>
                      </List.Item>
                      <List.Item as="li">
                        Biaya dihitung berdasarkan nilai tanah yang dikeluarkan
                        oleh kantor pertanahan dengan rumus (nilai tanah(per m2)
                        * luas tanah (m2)) / 1000
                      </List.Item>
                    </List>
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 3}
                  index={3}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  Peralihan Hak Lelang
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                  <p>
                    <List as="ul">
                      <List.Item>
                        <h5>Persyaratan</h5>
                      </List.Item>
                      <List.Item as="li">
                        Formulir Permohonan yang sudah diisi dan ditandatangani
                        pemohon atau kuasanya diatas materai cukup
                      </List.Item>
                      <List.Item as="li">
                        Surat kuasa apabila dikuasakan
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy identitas pemohon/para ahli waris (KTP,KK) dan
                        kuasa apabila dikuasakan, yang telah dicocokkan dengan
                        aslinya oleh petugas loket
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy akta pendirian dan pengesahan badan hukum yang
                        telah dicocokkan dengan aslinya oleh petugas loket, bagi
                        badan hukum
                      </List.Item>
                      <List.Item as="li">Sertifikat Asli</List.Item>
                      <List.Item as="li">Risalah Lelang</List.Item>
                      <List.Item as="li">
                        Penyerahan Bukti Pelunasan lelang
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy SPPT dan PBB tahun berjalan yang telah
                        dicocokkan dengan aslinya oleh petugas loket, penyerahan
                        bukti SBB (BPHTB) dan bukti bayar uang pemasukan (pada
                        saat pendaftaran hak)
                      </List.Item>
                      <List.Item as="li">
                        Putusan pengadilan yang telah memiliki kekuatan hukum
                        yang tetap (inkracht)
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Penyelesaian</h5>
                      </List.Item>
                      <List.Item as="li">5 hari kerja</List.Item>
                      <br />
                      <List.Item>
                        <h5>Keterangan</h5>
                      </List.Item>
                      <List.Item as="li">Identitas diri</List.Item>
                      <List.Item as="li">
                        Luas, letak dan penggunaan tanah yang dimohon
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah tidak sengketa
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah/bangunan dikuasai secara fisik
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Tarif</h5>
                      </List.Item>
                      <List.Item as="li">
                        Biaya dihitung berdasarkan nilai tanah yang dikeluarkan
                        oleh kantor pertanahan dengan rumus (nilai tanah(per m2)
                        * luas tanah (m2)) / 1000
                      </List.Item>
                    </List>
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 4}
                  index={4}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  Peralihan Hak Hibah
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 4}>
                  <p>
                    <List as="ul">
                      <List.Item>
                        <h5>Persyaratan</h5>
                      </List.Item>
                      <List.Item as="li">
                        Formulir Permohonan yang sudah diisi dan ditandatangani
                        pemohon atau kuasanya diatas materai cukup
                      </List.Item>
                      <List.Item as="li">
                        Surat kuasa apabila dikuasakan
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy identitas pemohon/para ahli waris (KTP,KK) dan
                        kuasa apabila dikuasakan, yang telah dicocokkan dengan
                        aslinya oleh petugas loket
                      </List.Item>
                      <List.Item as="li">Sertifikat Asli</List.Item>
                      <List.Item as="li">Akta hibah dari PPAT</List.Item>
                      <List.Item as="li">
                        Ijin pemindahan hak apabila di dalam sertifikat /
                        keputusannya dicantumkan tanda yang menyatakan bahwa hak
                        tersebut hanya boleh dipindahtangankan jika telah
                        diperoleh ijin dari instansi yang berwenang
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy SPPT dan PBB tahun berjalan yang telah
                        dicocokkan dengan aslinya oleh petugas loket, penyerahan
                        bukti SBB (BPHTB) dan bukti bayar uang pemasukan (pada
                        saat pendaftaran hak)
                      </List.Item>
                      <List.Item as="li">
                        Penyerahan bukti SSB (BPHTB) bukti SSP/PPH untuk
                        perolehan tanah lebih dari 60 Juta Rupiah
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Penyelesaian</h5>
                      </List.Item>
                      <List.Item as="li">5 hari kerja</List.Item>
                      <br />
                      <List.Item>
                        <h5>Keterangan</h5>
                      </List.Item>
                      <List.Item as="li">Identitas diri</List.Item>
                      <List.Item as="li">
                        Luas, letak dan penggunaan tanah yang dimohon
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah tidak sengketa
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah/bangunan dikuasai secara fisik
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Tarif</h5>
                      </List.Item>
                      <List.Item as="li">
                        Biaya dihitung berdasarkan nilai tanah yang dikeluarkan
                        oleh kantor pertanahan dengan rumus (nilai tanah(per m2)
                        * luas tanah (m2)) / 1000
                      </List.Item>
                    </List>
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 5}
                  index={5}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  Peralihan Hak Pembagian Hak Bersama
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 5}>
                  <p>
                    <List as="ul">
                      <List.Item>
                        <h5>Persyaratan</h5>
                      </List.Item>
                      <List.Item as="li">
                        Formulir Permohonan yang sudah diisi dan ditandatangani
                        pemohon atau kuasanya diatas materai cukup
                      </List.Item>
                      <List.Item as="li">
                        Surat kuasa apabila dikuasakan
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy identitas pemohon/para ahli waris (KTP,KK) dan
                        kuasa apabila dikuasakan, yang telah dicocokkan dengan
                        aslinya oleh petugas loket
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy akta pendirian dan pengesahan badan hukum yang
                        telah dicocokkan dengan aslinya oleh petugas loket
                      </List.Item>
                      <List.Item as="li">Sertifikat Asli</List.Item>
                      <List.Item as="li">
                        Akta pembagian hak bersama dari PPAT
                      </List.Item>
                      <List.Item as="li">
                        Ijin pemindahan hak apabila di dalam sertifikat /
                        keputusannya dicantumkan tanda yang menyatakan bahwa hak
                        tersebut hanya boleh dipindahtangankan jika telah
                        diperoleh ijin dari instansi yang berwenang
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy SPPT dan PBB tahun berjalan yang telah
                        dicocokkan dengan aslinya oleh petugas loket, penyerahan
                        bukti SBB (BPHTB) dan bukti bayar uang pemasukan (pada
                        saat pendaftaran hak)
                      </List.Item>
                      <List.Item as="li">
                        Penyerahan bukti SSB (BPHTB) bukti SSP/PPH untuk
                        perolehan tanah lebih dari 60 Juta Rupiah
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Penyelesaian</h5>
                      </List.Item>
                      <List.Item as="li">5 hari kerja</List.Item>
                      <br />
                      <List.Item>
                        <h5>Keterangan</h5>
                      </List.Item>
                      <List.Item as="li">Identitas diri</List.Item>
                      <List.Item as="li">
                        Luas, letak dan penggunaan tanah yang dimohon
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah tidak sengketa
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah/bangunan dikuasai secara fisik
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Tarif</h5>
                      </List.Item>
                      <List.Item as="li">
                        Biaya dihitung berdasarkan nilai tanah yang dikeluarkan
                        oleh kantor pertanahan dengan rumus (nilai tanah(per m2)
                        * luas tanah (m2)) / 1000
                      </List.Item>
                    </List>
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 6}
                  index={6}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  Peralihan Hak Pemasukan Dalam Perusahaan
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 6}>
                  <p>
                    <List as="ul">
                      <List.Item>
                        <h5>Persyaratan</h5>
                      </List.Item>
                      <List.Item as="li">
                        Formulir Permohonan yang sudah diisi dan ditandatangani
                        pemohon atau kuasanya diatas materai cukup
                      </List.Item>
                      <List.Item as="li">
                        Surat kuasa apabila dikuasakan
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy identitas pemohon/para ahli waris (KTP,KK) dan
                        kuasa apabila dikuasakan, yang telah dicocokkan dengan
                        aslinya oleh petugas loket
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy akta pendirian dan pengesahan badan hukum yang
                        telah dicocokkan dengan aslinya oleh petugas loket, bagi
                        badan hukum
                      </List.Item>
                      <List.Item as="li">Sertifikat Asli</List.Item>
                      <List.Item as="li">
                        Akta pembagian hak bersama dari PPAT
                      </List.Item>
                      <List.Item as="li">
                        Ijin pemindahan hak apabila di dalam sertifikat /
                        keputusannya dicantumkan tanda yang menyatakan bahwa hak
                        tersebut hanya boleh dipindahtangankan jika telah
                        diperoleh ijin dari instansi yang berwenang
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy SPPT dan PBB tahun berjalan yang telah
                        dicocokkan dengan aslinya oleh petugas loket, penyerahan
                        bukti SBB (BPHTB) dan bukti bayar uang pemasukan (pada
                        saat pendaftaran hak)
                      </List.Item>
                      <List.Item as="li">
                        Penyerahan bukti SSB (BPHTB) bukti SSP/PPH untuk
                        perolehan tanah lebih dari 60 Juta Rupiah
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Penyelesaian</h5>
                      </List.Item>
                      <List.Item as="li">5 hari kerja</List.Item>
                      <br />
                      <List.Item>
                        <h5>Keterangan</h5>
                      </List.Item>
                      <List.Item as="li">Identitas diri</List.Item>
                      <List.Item as="li">
                        Luas, letak dan penggunaan tanah yang dimohon
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah tidak sengketa
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah/bangunan dikuasai secara fisik
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Tarif</h5>
                      </List.Item>
                      <List.Item as="li">
                        Biaya dihitung berdasarkan nilai tanah yang dikeluarkan
                        oleh kantor pertanahan dengan rumus (nilai tanah(per m2)
                        * luas tanah (m2)) / 1000
                      </List.Item>
                    </List>
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 7}
                  index={7}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  Pemecahan
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 7}>
                  <p>
                    <List as="ul">
                      <List.Item>
                        <h5>Persyaratan</h5>
                      </List.Item>
                      <List.Item as="li">
                        Formulir Permohonan yang sudah diisi dan ditandatangani
                        pemohon atau kuasanya diatas materai cukup
                      </List.Item>
                      <List.Item as="li">
                        Surat kuasa apabila dikuasakan
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy identitas pemohon/para ahli waris (KTP,KK) dan
                        kuasa apabila dikuasakan, yang telah dicocokkan dengan
                        aslinya oleh petugas loket
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy akta pendirian dan pengesahan badan hukum yang
                        telah dicocokkan dengan aslinya oleh petugas loket, bagi
                        badan hukum
                      </List.Item>
                      <List.Item as="li">Sertifikat Asli</List.Item>
                      <List.Item as="li">
                        Rencana Tapak/Site Plan dari Pemerintah Kabupaten/Kota
                        setempat
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Penyelesaian</h5>
                      </List.Item>
                      <List.Item as="li">15 hari kerja</List.Item>
                      <br />
                      <List.Item>
                        <h5>Keterangan</h5>
                      </List.Item>
                      <List.Item as="li">Identitas diri</List.Item>
                      <List.Item as="li">
                        Luas, letak dan penggunaan tanah yang dimohon
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah tidak sengketa
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah/bangunan dikuasai secara fisik
                      </List.Item>
                      <List.Item as="li">Alasan Pemecahan</List.Item>
                      <br />
                      <List.Item>
                        <h5>Tarif</h5>
                      </List.Item>
                      <List.Item as="li">
                        Biaya dihitung berdasarkan jumlah bidang dan luas
                        masing-masing bidang pemecahan
                      </List.Item>
                    </List>
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 8}
                  index={8}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  Pemisahan
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 8}>
                  <p>
                    <List as="ul">
                      <List.Item>
                        <h5>Persyaratan</h5>
                      </List.Item>
                      <List.Item as="li">
                        Formulir Permohonan yang sudah diisi dan ditandatangani
                        pemohon atau kuasanya diatas materai cukup
                      </List.Item>
                      <List.Item as="li">
                        Surat kuasa apabila dikuasakan
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy identitas pemohon/para ahli waris (KTP,KK) dan
                        kuasa apabila dikuasakan, yang telah dicocokkan dengan
                        aslinya oleh petugas loket
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy akta pendirian dan pengesahan badan hukum yang
                        telah dicocokkan dengan aslinya oleh petugas loket, bagi
                        badan hukum
                      </List.Item>
                      <List.Item as="li">Sertifikat Asli</List.Item>
                      <List.Item as="li">
                        Rencana Tapak/Site Plan dari Pemerintah Kabupaten/Kota
                        setempat
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Penyelesaian</h5>
                      </List.Item>
                      <List.Item as="li">15 hari kerja</List.Item>
                      <br />
                      <List.Item>
                        <h5>Keterangan</h5>
                      </List.Item>
                      <List.Item as="li">Identitas diri</List.Item>
                      <List.Item as="li">
                        Luas, letak dan penggunaan tanah yang dimohon
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah tidak sengketa
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah/bangunan dikuasai secara fisik
                      </List.Item>
                      <List.Item as="li">Alasan Pemecahan</List.Item>
                      <br />
                      <List.Item>
                        <h5>Tarif</h5>
                      </List.Item>
                      <List.Item as="li">
                        Biaya dihitung berdasarkan jumlah bidang dan luas
                        masing-masing bidang pemecahan
                      </List.Item>
                    </List>
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 9}
                  index={9}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  Penggabungan
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 9}>
                  <p>
                    <List as="ul">
                      <List.Item>
                        <h5>Persyaratan</h5>
                      </List.Item>
                      <List.Item as="li">
                        Formulir Permohonan yang sudah diisi dan ditandatangani
                        pemohon atau kuasanya diatas materai cukup
                      </List.Item>
                      <List.Item as="li">
                        Surat kuasa apabila dikuasakan
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy identitas pemohon (KTP) dan kuasa apabila
                        dikuasakan, yang telah dicocokkan dengan aslinya oleh
                        petugas loket
                      </List.Item>
                      <List.Item as="li">
                        Fotocopy akta pendirian dan pengesahan badan hukum yang
                        telah dicocokkan dengan aslinya oleh petugas loket, bagi
                        badan hukum
                      </List.Item>
                      <List.Item as="li">Sertifikat Asli</List.Item>
                      <br />
                      <List.Item>
                        <h5>Penyelesaian</h5>
                      </List.Item>
                      <List.Item as="li">15 hari kerja</List.Item>
                      <br />
                      <List.Item>
                        <h5>Keterangan</h5>
                      </List.Item>
                      <List.Item as="li">Identitas diri</List.Item>
                      <List.Item as="li">
                        Luas, letak dan penggunaan tanah yang dimohon
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah tidak sengketa
                      </List.Item>
                      <List.Item as="li">
                        Pernyataan tanah/bangunan dikuasai secara fisik
                      </List.Item>
                      <List.Item as="li">Alasan Penggabungan</List.Item>
                      <br />
                      <List.Item>
                        <h5>Tarif</h5>
                      </List.Item>
                      <List.Item as="li">
                        Biaya dihitung berdasarkan luas penggabungan
                      </List.Item>
                    </List>
                  </p>
                </Accordion.Content>
              </Accordion>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layanan;
