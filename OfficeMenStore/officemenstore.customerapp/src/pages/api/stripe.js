// import Stripe from 'stripe';

// const stripe = new Stripe(
//   'sk_test_51Hqmw9EnylLNWUqjP36GV1DkreuhVt1E4l7L1y7YwhvjES8OylYVpKjpIxTjv1FqKWq81pZWBjycNIJH9n1jfI7800n4seyJCHsk_test_51Ovc3HK59UUfgaiCmg4IGAkMj66ns3pR9hrVDDrWyzG37aWGXucoYippeoBzDNYThEU32nBdFFeODg5Z23M5hl3400ZmZtjp2b',
// );

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const params = {
//         submit_type: 'pay',
//         mode: 'payment',
//         payment_method_types: ['card'],
//         billing_address_collection: 'auto',
//         shipping_options: [{ shipping_rate: 'shr_1OvhAkK59UUfgaiCHZsgvILJ' }],
//         line_items: req.body.map((item) => {
//           const img = item.image[0].asset._ref;
//           const newImage = img
//             .replace('image-', 'https://cdn.sanity.io/images/vfxfwnaw/production/')
//             .replace('-webp', '.webp');

//           return {
//             price_data: {
//               currency: 'usd',
//               product_data: {
//                 name: item.name,
//                 images: [newImage],
//               },
//               unit_amount: item.price * 100,
//             },
//             adjustable_quantity: {
//               enabled: true,
//               minimum: 1,
//             },
//             quantity: item.quantity,
//           };
//         }),
//         success_url: `${req.headers.origin}/success`,
//         cancel_url: `${req.headers.origin}/canceled`,
//       };

//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create(params);

//       res.status(200).json(session);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }
