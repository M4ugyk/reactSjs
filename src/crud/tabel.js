import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";

const Tabel = ({bukus, editData, hapusData}) => {
  return (
    <Container className="mt-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Buku</th>
            <th>Deskripsi</th>
            <th>Harga Buku</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {bukus.map((buku, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{buku.nama}</td>
                <td>{buku.deskripsi}</td>
                <td>{buku.harga}</td>
                <td>
                  <button className="btn btn-warning mr-1" onClick={() => editData(buku.id) }>Edit</button>
                  <button className="btn btn-danger mr-1" onClick={() => hapusData(buku.id) }>Hapus</button>
                </td>
              </tr>
            );
          })}

        </tbody>
      </Table>
    </Container>
  );
};

export default Tabel
