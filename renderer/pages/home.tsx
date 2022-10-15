import React from 'react';
import Head from 'next/head';
import MainLayout from '../layouts/mainLayout/MainLayout';
import QRCode from 'react-qr-code';
import ContentTextArea from '../components/contentTextArea/ContentTextArea';
import useQrContent from '../hooks/useQrContent';
import DownloadButton from '../components/downloadButton/DownloadButton';
import ClearButton from '../components/clearButton/ClearButton';

function Home() {

  const { content, setContent, onChange: onChangeQrContent, clearContent, prettyJson, parsePlainText } = useQrContent()

  return (
    <React.Fragment>
      <Head>
        <title>QR yourself!</title>
      </Head>
      <MainLayout>
        <div className='grid grid-col-1 text-2xl w-full text-center pt-2 px-5'>
          <div className='my-3'>
            <h1 className='font-bold text-4xl text-white mb-4'>QR yourself!</h1>
            {/* <p className='text-xs text-slate-300 font-light mt-5'>QR code generator</p> */}
          </div>
          {/* QR Code */}
          <div className='mt-3 mb-4'>
            <div id='qr-code-container' className=' h-fit w-fit text-center mx-auto bg-white p-3 rounded-lg'>
              <QRCode value={content} id="qr-code" className={`${!content && 'invisible'}`} />
            </div>
          </div>

          {/* Text Content */}
          <div className='text-md w-1/2 mx-auto'>
            <ContentTextArea
              content={content}
              onChange={onChangeQrContent}
              clearContent={clearContent}
              prettyJson={prettyJson}
              parsePlainText={parsePlainText}
            />

            <div className='pb-4'>
              {Boolean(content) && (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <ClearButton
                    onClick={clearContent}
                  />
                  <DownloadButton />
                </div>
              )}
            </div>

          </div>
        </div>
        {/* <div className='grid grid-col-1 text-2xl w-full text-center'>
          <img className='ml-auto mr-auto' src='/images/logo.png' />
          <span>⚡ Electron ⚡</span>
          <span>+</span>
          <span>Next.js</span>
          <span>+</span>
          <span>tailwindcss</span>
          <span>=</span>
          <span>💕 </span>
        </div>
        <div className='mt-1 w-full flex-wrap flex justify-center'>
          <Link href='/next'>
            <a className='btn-blue'>Go to next page</a>
          </Link>
        </div> */}
      </MainLayout>
    </React.Fragment>
  );
}

export default Home;
