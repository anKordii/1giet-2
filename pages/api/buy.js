import { supabase } from '../../lib/initSupabase';

const sleep = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 350);
});

export default async function anime(req, res) {
  const { body, method } = req;
  const { nickname, cost, safety, code } = body;

  if (method === "POST") {
    if (!nickname || !cost || cost && cost <= 0 || !safety || !code) {
      return res.status(422).json({
        message: "Proszę wypełnić wymagane pola.",
      });
    }
    try {
        const { data, error } = await supabase.from('orders').insert({
          nickname: nickname,
          cost: Number(cost), 
          safety: safety, 
          code: code
        }).single();
        if(error){
            await sleep();
            return res.status(500).json({message: res.error, status: 500});
        }
        await sleep();
        return res.status(200).json({message: 'Przyjęto zamówienie', status: 200, response: data});

    } catch (error) {
        await sleep();
        return res.status(500).json({message: error.message, status: 500});
    }
  }
  return res.status(404).send("Not found");
};
