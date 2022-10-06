import Head from 'next/head';
//import Link from 'next/link';

export default function Contact() {

  const submitContact = async (event) => {

    event.preventDefault();
    const subject = event.target.subject.value;
    // const lastName = event.target.lastName.value;
    // const email = event.target.email.value;
    // const password = event.target.password.value;

    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        subject: subject,
        // lastName: lastName,
        // email: email,
        // password: password
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();

    if (result.msg) {
      //alert(result.msg)
    } else {
      //alert(`Is this your full name: ${result[0].FirstName}`);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Head>
        <title>Programming</title>
        <meta name='description' content='Contact us' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-xs my-2 overflow-hidden rounded shadow-lg'>
        <div className='px-6 py-4'>
          <div className='mb-2 text-xl font-bold'>Type the subject</div>
          <form className='flex flex-col' onSubmit={submitContact}>

            <br />
            <br />

            <label htmlFor='subject' className='mb-2 italic'> Subject </label>
            <input
              className='mb-4 border-b-2'
              id='subject'
              name='subject'
              type='text'
            //  autoComplete='firstName'
            // required
            />
{/* 
            <br />
            <br />

            <label htmlFor='lastName' className='mb-2 italic'> Last Name </label>
            <input
              className='mb-4 border-b-2'
              id='lastName'
              name='lastName'
              type='text'
            // autoComplete='lastName'
            // required
            />

            <br />
            <br />

            <label htmlFor='email' className='mb-2 italic'> Email </label>
            <input
              className='mb-4 border-b-2'
              id='email'
              name='email'
              type='text'
            //autoComplete='email'
            //  required
            />

            <br />
            <br />

            <label htmlFor='password' className='mb-2 italic'> Password </label>
            <input
              className='mb-4 border-b-2'
              id='password'
              name='password'
              type='text'
            //autoComplete='country'
            // required
            /> */}

            <br />
            <br />
            <br />
            <br />
            <br />

            <button type='login' className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'> LOGIN
              {/* <Link href="/familytree">LOGIN!!!</Link> */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


