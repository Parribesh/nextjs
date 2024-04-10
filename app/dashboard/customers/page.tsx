import { fetchCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

export default async function Page() {
  const customer = await fetchCustomers();
  console.log('customer:', customer);
  return (
    <>
      {customer.map((customer) => (
        <div>
          <div>id: {customer.id}</div>
          <div>name: {customer.name}</div>
        </div>
      ))}
      {/* <CustomersTable customers={customer} /> */}
    </>
  );
}
