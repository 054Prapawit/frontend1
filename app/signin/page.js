'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        Accept : 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    
    if (data.token) {
      localStorage.setItem('token', data.token);
      router.push('/users');
    } else {
      router.push('/sign');
    }
  };

  return (
    <>
    <br /><br /><br />
    <div className="container">
    <div class="card">
  <div class="card-header bg-dark text-white">
    SignUp Form
  </div>
  <div class="card-body">

  <form className="row g-3" onSubmit={handleSubmit}>
  <div className="col-md-6">
    <label for="basic-url" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
      <input type="text" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)} required />
    </div>
  </div>
  <div className="col-md-6">
  <label for="basic-url" className="form-label">Password</label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
      <input type="password" className="form-control" value={password} onChange={(e) => setPassWord(e.target.value)} required />
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-danger"><i class="bi bi-box-arrow-right"></i> Sign In</button>
  </div>
</form>
</div>
</div>

</div>
    </>
  );
}