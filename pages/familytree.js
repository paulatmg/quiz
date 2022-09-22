import Head from 'next/head';

export default function Contact() {

  const submitContact = async (event) => {

    event.preventDefault();
    const name = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const country = event.target.country.value;
    const region = event.target.region.value;

    const res = await fetch('/api/familytreefunctions', {
      body: JSON.stringify({
        name: name,
        lastName: lastName,
        country: country,
        region: region
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    
    const result = await res.json();

    if (result.msg){
      alert(result.msg)
    } else {
      alert(`FAMILY TREE -  FIRST NAME: ${result.name}, last name: ${result.lastName}, COUNTRY: ${result.country}, REGION: ${result.region}`);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Head>
        <title>Family Tree</title>
        <meta name='description' content='Contact us' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-xs my-2 overflow-hidden rounded shadow-lg'>
        <div className='px-6 py-4'>
          <div className='mb-2 text-xl font-bold'>Family Tree</div>
          <form className='flex flex-col' onSubmit={submitContact}>

          <br />
            <br />
            
            <label htmlFor='firstName' className='mb-2 italic'> First Name </label>
            <input
              className='mb-4 border-b-2'
              id='firstName'
              name='firstName'
              type='text'
            //  autoComplete='firstName'
             // required
            />

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
            
            <label htmlFor='country' className='mb-2 italic'> Country </label>
            <input
              className='mb-4 border-b-2'
              id='country'
              name='country'
              type='text'
              //autoComplete='email'
            //  required
            />
            
            <br />
            <br />
            
            <label htmlFor='region' className='mb-2 italic'> Region or City </label>
            <input
              className='mb-4 border-b-2'
              id='region'
              name='region'
              type='text'
              //autoComplete='country'
             // required
            />

            <br />
            <br />
            <br />
            <br />
            <br />

            <button type='login' className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'> Next Step </button>
          </form>
        </div>
      </div>
    </div>
  );
}