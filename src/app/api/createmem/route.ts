import prismadb from '@/lib/prismadb'

export async function POST(req: Request){
    try{
        console.log('Received request:', req.body);
        const data = await req.json();
        console.log(data)

        const membership = await prismadb.membership.create({
            data: {
                address: data.address,
                benefits: data.benefits,
                nfturl: data.nfturl,
                price: data.price,
                subtitle: data.subtitle,
                title: data.title
            }
        })
        console.log('Created membership:', membership);

        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",

            },
            status: 201,
        });

    }catch(error){
        console.log(error)
        return Response.json({ error: 'Internal Server Error' });
    }
} 

