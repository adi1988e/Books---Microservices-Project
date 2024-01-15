import Router from "next/router";
import useRequest from "../../hooks/use-request";

const BookShow = ({ book }) => {
  const { doRequest, errors } = useRequest({
    url: "/api/orders",
    method: "post",
    body: {
      bookId: book.id,
    },
    onSuccess: (order) =>
      Router.push("/orders/[orderId]", `/orders/${order.id}`),
  });

  return (
    <div>
      <h1>{book.title}</h1>
      <h4>Price: {book.price}</h4>
      {errors}
      <button onClick={() => doRequest()} className="btn btn-primary">
        Purchase
      </button>
    </div>
  );
};

BookShow.getInitialProps = async (context, client) => {
  const { bookId } = context.query;
  const { data } = await client.get(`/api/books/${bookId}`);

  return { book: data };
};

export default BookShow;
