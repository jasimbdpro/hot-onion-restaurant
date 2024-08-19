import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInUsrWithEmailAndPassword } from '../firebase/firebaseConfig';

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        signInUsrWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-12">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                                <img src="/images/logo2.png"
                                                    style={{ width: '185px' }} alt="logo" />
                                                <h4 className="mt-1 h1 fw-bold mb-5 pb-1">Best food for your belly</h4>
                                            </div>

                                            <form onSubmit={handleSubmit}>
                                                <p>Please login to your account</p>

                                                <div data-mdb-input-init className="form-outline mb-4">


                                                    {/* Email Address  */}
                                                    <input type="email" id="form2Example11" className="form-control"
                                                        placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                    <label className="form-label" htmlFor="form2Example11">Username</label>
                                                </div>

                                                <div data-mdb-input-init className="form-outline mb-4">


                                                    {/* Password Field  */}
                                                    <input type="password" id="form2Example22" placeholder='Your password' className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                    <label className="form-label" htmlFor="form2Example22">Password</label>
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log
                                                        in</button>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don&apos;t have an account?</p>
                                                    <button onClick={() => navigate('/signup')} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger">Create new</button>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;