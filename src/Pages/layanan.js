import React, { Component } from "react";

import {
  Segment,
  Container,
  Accordion,
  Icon,
  List,
  Table,
  Menu,
  Label,
  Image
} from "semantic-ui-react";

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
            {/* <div>
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
                <Accordion.Title
                  active={activeIndex === 10}
                  index={10}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  Konversi
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 10}>
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
                        Bukti pemilikan tanah/alas hak milik adat/bekas milik
                        adat
                      </List.Item>
                      <List.Item as="li">
                        Foto copy SPPT PBB Tahun berjalan yang telah dicocokkan
                        dengan aslinya oelh petugas loket dan penyerahan bukti
                        SSB (BPHTB)
                      </List.Item>
                      <List.Item as="li">
                        Melampirkan bukti SSP/PPh sesuai dengan ketentuan
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Penyelesaian</h5>
                      </List.Item>
                      <List.Item as="li">98 hari kerja</List.Item>
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
                        Biaya dihitung berdasarkan luas bidang yang dimohon
                      </List.Item>
                    </List>
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 11}
                  index={11}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  Wakaf
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 11}>
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
                        Bukti pemilikan tanah/alas hak milik adat/bekas milik
                        adat
                      </List.Item>
                      <List.Item as="li">
                        Akta Ikrar Wakaf/Surat Ikrar Wakaf
                      </List.Item>
                      <List.Item as="li">
                        Foto copy SPPT PBB Tahun berjalan yang telah dicocokkan
                        dengan aslinya oelh petugas loket dan penyerahan bukti
                        SSB (BPHTB)
                      </List.Item>
                      <List.Item as="li">
                        Melampirkan bukti SSP/PPh sesuai dengan ketentuan
                      </List.Item>
                      <br />
                      <List.Item>
                        <h5>Penyelesaian</h5>
                      </List.Item>
                      <List.Item as="li">98 hari kerja</List.Item>
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
                        Biaya dihitung berdasarkan luas bidang yang dimohon
                      </List.Item>
                    </List>
                  </p>
                </Accordion.Content>
              </Accordion>
            </div> */}
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    Pelayanan Pemeliharaan Data Pendaftaran Tanah
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Pemecahan Bidang</List.Header>
                          <List.Description>
                            Suatu bidang tanah yang sudah bersertipikat dapat
                            dipecah menjadi beberapa bagian yang masing-masing
                            merupakan satuan bidang baru dengan status hukum
                            yang sama dengan bidang tanah semula.Dalam
                            pendaftaran pemecahan bidang, Surat Ukur, Buku Tanah
                            dan Sertipikat Hak Atas Tanah semula dinyatakan
                            tidak berlaku lagi.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Penggabungan Bidang</List.Header>
                          <List.Description>
                            Dua bidang tanah atau lebih yang sudah bersertipikat
                            yang letaknya berbatasan dan kesemuanya atas nama
                            pemilik yang sama dapat digabung menjadi satu satuan
                            bidang baru, jika semuanya dipunyai dengan jenis hak
                            yang sama.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Pemisahan Bidang</List.Header>
                          <List.Description>
                            Suatu bidang tanah yang sudah bersertipikat dapat
                            dipisahkan sebagian atau beberapa bagian yang
                            selanjutnya merupakan satuan bidang baru dengan
                            status hukum yang sama dengan bidang tanah semula.
                            Dalam pendaftaran pemisahan bidang, Surat Ukur, Buku
                            Tanah dan Sertipikat yang lama tetap berlaku untuk
                            bidang tanah semula setelah dikurangi bidang tanah
                            yang dipisahkan
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            {/* tabel 2 ================================================================ */}
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Pelayanan Peralihan Hak</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Jual Beli</List.Header>
                          <List.Description>
                            Jual beli merupakan peralihan hak sebagai akibat
                            telah dibuatnya suatu perjanjian dengan mana pihak
                            yang satu mengikatkan dirinya untuk menyerahkan
                            sebidang tanah dan pihak lainnya untuk membayar
                            harga yang telah dijanjikan.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Hibah</List.Header>
                          <List.Description>
                            Hibah merupakan peralihan hak sebagai akibat adanya
                            suatu perjanjian dengan mana si penghibah di waktu
                            hidupnya dengan cuma-cuma dan dengan tidak dapat
                            ditarik kembali menyerahkan sebidang tanah guna
                            keperluan si penerima hibah yang menerima penyerahan
                            itu.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Pewarisan</List.Header>
                          <List.Description>
                            Pewarisan merupakan peralihan hak yang terjadi
                            sebagai akibat suatu peristiwa hukum, yaitu matinya
                            seorang pewaris atau dengan kata lain adalah
                            peralihan hak yang terjadi karena pemberinya
                            meninggal dunia.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Tukar Menukar</List.Header>
                          <List.Description>
                            Tukar menukar merupakan peralihan hak yang terjadi
                            karena adanya suatu perjanjian dengan mana kedua
                            belah pihak mengikatkan dirinya untuk saling
                            memberikan suatu barang secara bertimbal balik
                            sebagai gantinya suatu barang yang lain.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pemasukan Dalam Perusahaan
                          </List.Header>
                          <List.Description>
                            Pemasukan dalam perusahaan (inbreng) yaitu peralihan
                            hak yang terjadi sebagai akibat adanya perjanjian
                            dengan mana pihak yang satu memasukkan tanahnya
                            sebagai penyertaan ke dalam suatu Perseroan Terbatas
                            sebagai pihak kedua, selanjutnya pihak kedua
                            mengganti nilai tanah tersebut dengan saham
                            perusahaan dimaksud.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pembagian Hak Bersama
                          </List.Header>
                          <List.Description>
                            TPembagian hak bersama merupakan peralihan hak yang
                            terjadi sebagai akibat timbulnya perjanjian diantara
                            para pihak untuk mengakhiri suatu pemilikan bersama.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Lelang</List.Header>
                          <List.Description>
                            Lelang yaitu penjualan barang yang terbuka untuk
                            umum dengan penawaran harga secara tertulis dan/atau
                            lisan yang semakin meningkat atau menurun untuk
                            mencapai harga tertinggi yang didahului dengan
                            pengumuman lelang.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            {/* tabel 3 ================================================================== */}
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    Pelayanan Pendaftaran Tanah Pertama Kali
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Konversi, Pengakuan dan Penegasan
                          </List.Header>
                          <List.Description>
                            Konversi, pengakuan dan penegasan yaitu permohonan
                            pembuatan sertipikat hak atas tanah yang berasal
                            dari tanah milik adat yang diajukan oleh pemegang
                            hak tanah milik adat ke kantor pertanahan, pada
                            dasarnya diproses melalui kegiatan pengukuran bidang
                            tanah, penelitian alat bukti oleh panitia
                            pemeriksaan tanah (Panitia A), kemudian diumumkan
                            selama 60 (enam puluh) hari, jika dalam waktu
                            pengumuman tidak ada yang mengajukan keberatan, maka
                            diterbitkan sertipikat melalui pencatatan konversi,
                            penegasan dan pengakuan hak.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Konversi, Pengakuan dan Penegasan Wakaf
                          </List.Header>
                          <List.Description>
                            Konversi, pengakuan dan penegasan wakaf yaitu
                            permohonan pembuatan sertipikat wakaf yang berasal
                            dari tanah milik adat yang diajukan oleh nazir atau
                            orang yang ditunjuk mendaftarkan tanah wakaf ke
                            kantor pertanahan, pada dasarnya diproses melalui
                            kegiatan pengukuran bidang tanah, penelitian alat
                            bukti oleh panitia pemeriksaan tanah (Panitia A),
                            kemudian diumumkan selama 60 (enam puluh) hari, jika
                            dalam waktu pengumuman tidak ada yang mengajukan
                            keberatan, maka diterbitkan sertipikat wakaf.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    Pelayanan Informasi Pertanahan
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Blokir</List.Header>
                          <List.Description>blokir</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Pengecekan</List.Header>
                          <List.Description>pengecekan</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Sita</List.Header>
                          <List.Description>sita</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Pengangkatan Sita</List.Header>
                          <List.Description>pengangkatan sita</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Surat Keterangan Pendaftaran Tanah
                          </List.Header>
                          <List.Description>
                            surat keterangan pendaftaran tanah
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            {/* tabel 4 ================================================================ */}
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Pelayanan Hak Tanggungan</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pendaftaran Hak Tanggungan
                          </List.Header>
                          <List.Description>
                            pendaftaran hak tanggungan
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Roya</List.Header>
                          <List.Description>roya</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Peralihan Hak Tanggungan
                          </List.Header>
                          <List.Description>
                            peralihan hak tanggungan
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Perubahan Kreditur</List.Header>
                          <List.Description>
                            perubahan kreditur
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            {/* tabel 5 ================================================================ */}
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    Pelayanan Sertipikat Pengganti
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pengganti Sertipikat Hilang
                          </List.Header>
                          <List.Description>
                            Permohonan penggantian sertipikat karena hilang
                            harus disertai pernyataan di bawah sumpah dari
                            pemilik tanah di hadapan Kepala Kantor Pertanahan
                            letak tanah yang bersangkutan mengenai hilangnya
                            sertipikat tersebut yang dituangkan dalam surat
                            pernyataan. Penerbitan Sertipikat Pengganti
                            didahului dengan pengumuman 1 (satu) kali dalam
                            salah satu surat kabar harian setempat atas biaya
                            pemohon jika dalam jangka waktu 30 (tiga puluh) hari
                            dihitung sejak hari pengumuman tidak ada yang
                            mengajukan keberatan mengenai akan diterbitkannya
                            sertipikat pengganti tersebut maka diterbitkan
                            sertipikat baru. Untuk penerbitan Sertipikat
                            pengganti tidak dilakukan pengukuran maupun
                            pemeriksaan tanah dan nomor hak tidak diubah.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pengganti Sertipikat Lama
                          </List.Header>
                          <List.Description>
                            Permohonan penerbitan sertipikat pengganti karena
                            masih menggunakan blanko sertipikat lama dapat
                            diajukan oleh yang berkepentingan dengan melampirkan
                            sertipikat yang bersangkutan. Dalam hal penggantian
                            sertipikat karena masih menggunakan blanko lama,
                            Sertipikat yang lama ditahan dan dimusnahkan.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pengganti Sertipikat Rusak
                          </List.Header>
                          <List.Description>
                            Permohonan penerbitan sertipikat pengganti karena
                            rusak dapat diajukan oleh yang berkepentingan dengan
                            melampirkan sertipikat atau sisa sertipikat yang
                            bersangkutan. Sertipikat dianggap rusak apabila ada
                            bagian yang tidak terbaca atau ada halaman yang
                            sobek atau terlepas, akan tetapi masih tersisa
                            bagian sertipikat yang cukup untuk mengidentifikasi
                            adanya sertipikat tersebut. Dalam hal penggantian
                            sertipikat karena rusak, Sertipikat atau sisa
                            sertipikat yang lama ditahan dan dimusnahkan.
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            {/* tabel 6 ================================================================ */}
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    Pelayanan Hak Milik Satuan Rumah Susun
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Pendaftaran HMSRS</List.Header>
                          <List.Description>
                            pendaftaran hak milik satuan rumah susun
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Perpanjangan HMSRS</List.Header>
                          <List.Description>
                            perpanjangan hak milik satuan rumah susun
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            {/* tabel 7 ================================================================ */}
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Pelayanan Perubahan Hak</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Perubahan Hak Wakaf</List.Header>
                          <List.Description>
                            perubahan hak wakaf
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Perubahan Hak Rumah Tinggal
                          </List.Header>
                          <List.Description>
                            perubahan hak rumah tinggal
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            {/* tabel 8 ================================================================ */}
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Pelayanan Pengukuran</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Pengembalian Batas</List.Header>
                          <List.Description>
                            pengembalian batas
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Mengetahui Luas</List.Header>
                          <List.Description>mengetahui luas</List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            {/* tabel 9 ================================================================ */}
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    Pelayanan Pemberian Hak Atas Tanah
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pemberian Hak Milik Perorangan
                          </List.Header>
                          <List.Description>
                            Pelayanan Pemberian Hak Milik Perorangan
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pemberian Hak Milik Badan Hukum
                          </List.Header>
                          <List.Description>
                            Pelayanan Pemberian Hak Milik Badan Hukum
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pemberian Hak Guna Usaha Perorangan
                          </List.Header>
                          <List.Description>
                            Pelayanan Pemberian Hak Guna Usaha Perorangan
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pemberian Hak Guna Usaha Badan Hukum
                          </List.Header>
                          <List.Description>
                            Pelayanan Pemberian Hak Guna Usaha Badan Hukum
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pemberian Hak Guna Bangunan Perorangan
                          </List.Header>
                          <List.Description>
                            elayanan Pemberian Hak Bangunan Perorangan
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pemberian Hak Guna Bangunan Badan Hukum
                          </List.Header>
                          <List.Description>
                            Pelayanan Pemberian Hak Bangunan Bangunan Badan
                            Hukum
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pemberian Hak Pakai Perorangan WNI
                          </List.Header>
                          <List.Description>
                            Pelayanan Pemberian Hak Pakai Perorangan WNI
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pemberian Hak Pakai Perorangan WNA
                          </List.Header>
                          <List.Description>
                            Pelayanan Pemberian Hak Pakai Perorangan WNA
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pemberian Hak Pakai Badan Hukum Indonesia
                          </List.Header>
                          <List.Description>
                            Pelayanan Pemberian Hak Pakai Badan Hukum Indonesia
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pemberian Hak Pakai Badan Hukum Asing
                          </List.Header>
                          <List.Description>
                            Pelayanan Pemberian Hak Pakai Badan Hukum Asing
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            PPemberian Hak Pakai Instansi Pemerintah
                          </List.Header>
                          <List.Description>
                            Pelayanan Pemberian Hak Pakai Instansi Pemerintah
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pemberian Hak Pakai Pemerintah Asing
                          </List.Header>
                          <List.Description>
                            Pelayanan Pemberian Hak Pakai Pemerintah Asing
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pemberian Hak Pengelolaan Instansi Pemerintah, BUMN
                            dan BUMD
                          </List.Header>
                          <List.Description>
                            Pelayanan Pemberian Hak Pengelolaan Instansi
                            Pemerintah, BUMN dan BUMD
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">Pemberian Hak Wakaf</List.Header>
                          <List.Description>
                            Pelayanan Pemberian Hak Wakaf
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">P3MB atau Prk5</List.Header>
                          <List.Description>p3mb atau prk5</List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            {/* tabel 10 ================================================================ */}
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    Pelayanan Perpanjangan Hak Atas Tanah
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Perpanjangan Hak Guna Usaha
                          </List.Header>
                          <List.Description>
                            perpanjangan hak guna usaha
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Perpanjangan Hak Guna Bangunan Atau Hak Pakai
                          </List.Header>
                          <List.Description>
                            perpanjangan hak guna bangunan atau hak pakai
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            {/* tabel 11 ================================================================ */}
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Pelayanan Pembaruan Hak</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pembaruan Hak Guna Usaha Perorangan
                          </List.Header>
                          <List.Description>
                            pembaruan hak guna usaha perorangan
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pembaruan Hak Guna Usaha Badan Hukum
                          </List.Header>
                          <List.Description>
                            pembaruan hak guna usaha badan hukum
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pembaruan Hak Guna Bangunan Perorangan
                          </List.Header>
                          <List.Description>
                            pembaruan hak guna bangunan perorangan
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pembaruan Hak Guna Bangunan Badan Hukum
                          </List.Header>
                          <List.Description>
                            pembaruan hak guna bangunan badan hukum
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pembaruan Hak Pakai Perorangan WNI
                          </List.Header>
                          <List.Description>
                            pembaruan hak pakai perorangan wni
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pembaruan Hak Pakai Perorangan WNA
                          </List.Header>
                          <List.Description>
                            pembaruan hak pakai perorangan wna
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pembaruan Hak Pakai Badan Hukum Indonesia
                          </List.Header>
                          <List.Description>
                            pembaruan hak pakai perorangan badan hukum indonesia
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pembaruan Hak Pakai Badan Hukum Asing
                          </List.Header>
                          <List.Description>
                            pembaruan hak pakai perorangan badan hukum asing
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pembaruan Hak Pakai Instansi Pemerintah
                          </List.Header>
                          <List.Description>
                            pembaruan hak pakai instansi pemerintah
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pembaruan Hak Pakai Pemerintah Asing
                          </List.Header>
                          <List.Description>
                            pembaruan hak pakai pemerintah asing
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            {/* tabel 12 ================================================================ */}
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    Pelayanan Pertimbangan Teknis Pertanahan
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pertimbangan Teknis Pertanahan Dalam Rangka Izin
                            Lokasi
                          </List.Header>
                          <List.Description>
                            pertimbangan teknis dalam rangka izin lokasi
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header as="a">
                            Pertimbangan Teknis Pertanahan Dalam Rangka Izin
                            Perubahan Penggunaan Tanah
                          </List.Header>
                          <List.Description>
                            pertimbangan teknis dalam rangka izin perubahan
                            penggunaan tanah
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            {/* tabel 13 ================================================================ */}
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layanan;
