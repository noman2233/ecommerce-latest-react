export const userColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "username",
    headerName: "Name",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "user",
    headerName: "Image",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              params.row.img ||
              "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            }
            alt="avatar"
          />
        </div>
      );
    },
  },
];

export const productColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Title",
    width: 150,
  },
  {
    field: "product",
    headerName: "image",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt="product" />
        </div>
      );
    },
  },
  {
    field: "category",
    headerName: "Category",
    width: 130,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 230,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  }, 
   {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
  },
];


