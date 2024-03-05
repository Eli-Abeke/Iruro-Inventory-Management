import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import DashboardNav from "./navigation";
import CommandWindow from "./commandwindow";
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export async function getServerSideProps() {
  // Fetch data from Supabase
  const { data, error } = await supabase
  .from('inventories')
  .select('*');

  return {
    props: {
      data: data || [],
    },
  };
}



export function Inventory() {
  const inv = getServerSideProps()
  return (
    (<div className="flex w-full min-h-screen">
      <DashboardNav/>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-lg md:text-2xl">Inventory</h1>
          <div className={"px-[12vw] h-12 overflow-visible w-full"}>
            <div className={"h-max z-50"}>
            <CommandWindow/>
            </div>
          
          </div>
          <Button className="ml-auto" size="sm">
            Add item
          </Button>
        </div>
        <div className="border rounded-lg shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Item</TableHead>
                <TableHead className="w-[150px]">Date Created</TableHead>
                <TableHead>Currently with</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Laptop</TableCell>
                <TableCell>2023-02-01</TableCell>
                <TableCell>John Doe</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Monitor</TableCell>
                <TableCell>2023-02-15</TableCell>
                <TableCell>Jane Smith</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Keyboard</TableCell>
                <TableCell>2023-03-10</TableCell>
                <TableCell>Andrew Johnson</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mouse</TableCell>
                <TableCell>2023-03-22</TableCell>
                <TableCell>Emily Williams</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Chair</TableCell>
                <TableCell>2023-04-05</TableCell>
                <TableCell>Michael Brown</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>)
  );
}






