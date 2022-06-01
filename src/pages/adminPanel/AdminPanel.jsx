import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Button, Card, Typography } from "@mui/material";
import AddNewProduct from "./AddNewProduct";
import Table from "../../common/table/Table";
import { data } from "./fake_data";
import TableRow from "../../common/table/TableRow";
import TableCell from "../../common/table/TableCell";
import { constant } from "../../utils/constant";
import { ProductContext } from "../../context/context";

const AdminPanel = () => {
  const [openModal, setOpenModal] = useState(false);
  const { store, dispatch } = useContext(ProductContext);
  console.log(store.products);
  useEffect(() => {
    axios
      .get("http://api.developer-studio.ir/api/products")
      .then((res) => dispatch({ type: "GET_DATA_LIST", payload: res.data }));
  }, []);

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://api.developer-studio.ir/api/delete-product",
        { product_id: id },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: ` Bearer ${token}`,
          },
        }
      )
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <Button variant="contained" onClick={() => setOpenModal(true)}>
          {constant.BUTTONS.ADD_PRODUCT}
        </Button>
        <Button variant="contained">{constant.BUTTONS.CANCLE}</Button>
        <Button variant="contained">{constant.BUTTONS.REMOVE}</Button>
      </div>
      <Card>
        {store.products.length > 0 ? (
          <>
            <Table>
              {store?.products?.map((d) => (
                <TableRow>
                  <TableCell type="checkbox" xs={1} sm={1} />
                  <TableCell type="text" value={d.short_name} xs={4} sm={4} />
                  <TableCell type="text" value={d.price} xs={2} sm={2} />
                  <TableCell type="text" value="2" xs={4} sm={4} />
                  <TableCell type="text" value="20%" xs={2} sm={2} />
                  <TableCell
                    type="text"
                    value={d.category.name}
                    xs={2}
                    sm={2}
                  />
                  <TableCell type="text" value={d.origin.name} xs={4} sm={4} />
                  <TableCell
                    type="button"
                    value={constant.BUTTONS.EDIT}
                    xs={1}
                    sm={1}
                    handleClick={() => handleDelete(d.id)}
                  />
                  <TableCell
                    type="button"
                    value={constant.BUTTONS.REMOVE}
                    xs={2}
                    sm={2}
                    handleClick={() => handleDelete(d.id)}
                  />
                </TableRow>
              ))}
            </Table>
          </>
        ) : (
          <Typography variant="h5">اطلاعاتی ثبت نشده</Typography>
        )}
      </Card>
      <AddNewProduct isOpen={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default AdminPanel;
