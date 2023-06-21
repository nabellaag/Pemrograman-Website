SELECT tp.id, judul, konten,gambar, tc.nama, tpn.nama, tpn.foto, tpn.deskripsi FROM `tb_post` as tp 
JOIN tb_category as tc on tp.category=tc.id 
JOIN tb__penulis as tpn on tp.penulis = tpn.id;