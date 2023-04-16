// sending username and password to api provided
export default async function handler(req, res) {
    const { username, password } = req.body;
    const data = { username, password };
    const url = 'https://fn-uks-dev-eng-fe-mock-svc.azurewebsites.net/api/sign-in';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    
  
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
  
      res.status(200).json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  }