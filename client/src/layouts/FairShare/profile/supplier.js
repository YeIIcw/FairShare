import PageLayout from 'examples/LayoutContainers/PageLayout';
import React from 'react';
import './suplier.css';

function Supplier() {
  return (
    <PageLayout>
      <div className="container">
        <h1>Profile</h1>
        <div>Company name</div>
        <table>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>Cupcakes</td>
            <td>500</td>
            <td>Weil's Of Westdale Bakery</td>
            <td>TBD</td>
          </tr>
          <tr>
            <td>Jam</td>
            <td>30</td>
            <td>Indens Gourmet</td>
            <td>Delivering</td>
          </tr>
          <tr>
            <td>Bread</td>
            <td>10</td>
            <td>Adam's Bakery</td>
            <td><a  href="/mapdisplay"><div>Delivering</div></a></td>
          </tr>
        </table>
        <a href="/surplusform"><button>Submit an Item</button></a>
        <a href="/mapdisplay"><button>Check Delivery</button></a>
        <a href="/"><button>Logout</button></a>
      </div>
    </PageLayout>
  );
}

export default Supplier;
