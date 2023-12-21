import axios from 'axios'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()


const app = express()
app.use(cors())

const username = 'chuboi';
const password = 'Chuboii00**';

const url = 'https://n3tdata.com/api/user';

const credentials = Buffer.from(`${username}:${password}`).toString('base64');

axios.post(url, {}, {
    headers: {
        'Authorization': `Basic ${credentials}`
    }
})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error.message);
    });

    // const payload = {
    //     network: 1,
    //     phone: 8039914037,
    //     data_plan: 1,
    //     bypass: false,
    //     'request-id': 'Data_12345678900'
    // };

    // const authToken = 'b9d09d4523aa5d77f2d9206f3b3f9e06cfeb6a8f676106bda2a4e1aaa73d';
    
    // axios.post(url, payload, {
    //     headers: {
    //         'Authorization': `Token ${authToken}`,
    //         'Content-Type': 'application/json'
    //     }
    // })
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.error(error.message);
    //     });
    
   
    const payload = {
        network: 1,
        phone: 8039914037, // Replace with the actual phone number
        plan_type: 'VTU',
        bypass: false,
        amount: 100,
        'request-id': 'Airtime_12345678900'
    };
    
    app.post('/topup', async (req, res) => {
        const url = 'https://n3tdata.com/api/topup';
        const authToken = 'b9d09d4523aa5d77f2d9206f3b3f9e06cfeb6a8f676106bda2a4e1aaa73d';
    
        const payload = {
            network: 1,
            phone: 8039914037, // Replace with the actual phone number
            plan_type: 'VTU',
            bypass: false,
            amount: 100,
            'request-id': 'Airtime_12345678900'
        };
    
        try {
            const response = await axios.post(url, payload, {
                headers: {
                    'Authorization': `Token ${authToken}`,
                    'Content-Type': 'application/json'
                }
            });
    
            res.json(response.data);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
    // axios.post(url2, payload, {
    //     headers: {
    //         'Authorization': `Token ${authToken}`,
    //         'Content-Type': 'application/json'
    //     }
    // }, (req, res) => {
        
    // })
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.error(error.message);
    //     });
    

app.listen("8080", () => {
    console.log("server listening on port 8080")
})