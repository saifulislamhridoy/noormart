import React, { useState } from 'react'
import './Home.css'
import logo from "../../images/logo/logo.webp"
import cholesterol from '../../images/icon/cholesterol-1.webp'
import stomach from '../../images/icon/stomach.webp'
import medicalApp from '../../images/icon/medical-app.webp'
import kidneys from '../../images/icon/kidneys.webp'
import dumbbell from '../../images/icon/dumbbell.webp'
import organic from '../../images/icon/organic.webp'
import package1 from '../../images/package/package-1.webp'
import Swal from 'sweetalert2'

function Home() {
    const [data, setData] = useState({ price: 1499, package: 1 })
    const [selectedOption, setSelectedOption] = useState('package1');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        const placeOrder = {
            product: "weight loss GREEN COFFEE",
            package: data.package,
            price: data.price,
            name: event.target.name.value,
            address: event.target.address.value,
            number: event.target.number.value,
        }
        console.log(placeOrder)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank you',
            text: 'Your order has been received',
            showConfirmButton: false,
            timer: 1500
          })
    };
    return (
        <div>
            <div className='bg-color'>
                <div className='logo'>
                    <img height="100" width="100" src={logo}></img>
                </div>
                <div className='heading-title'>
                    <p>অতিরিক্ত ওজ'ন নিয়ে হাঁপিয়ে উঠেছেন? <br></br>
                        আজই নিন চার সপ্তাহের ফিটনেস চ্যালেঞ্জ ১০-২৫ কেজি পর্যন্ত কমান</p>
                </div>
                {/* complete */}
                <div className='yt-video'>

                    <iframe className='video-size'
                        width="614" height="614" src="https://www.youtube.com/embed/6G9BTCsdMN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
                <div className='button-wrapper'>
                    <a href='#order'>অর্ডার করুন</a>
                </div>
                <div className='why-drink'>
                    <h2>কেনো গ্রীন কফি খাবেন?</h2>
                    <div className='why-drink-section'>
                        <p>আমেরিকান ফর্মুলা মালয়েশিয়ায় তৈরি বাংলাদেশে প্যাকেজিং এই গ্রীন কফি নিয়মিত পান করলে <span className='highlight'>মাত্র চার সপ্তাহে</span> হয়ে উঠবেন <span className='highlight'>সুপারফিট</span> , <span span className='highlight'>আকর্ষণীয়</span> এবং <span className='highlight'>স্মার্ট</span></p>
                    </div>
                </div>
                {/* complete */}
                <div className='benefits-section'>
                    <div className='benefit-card'>
                        <div className='img-container'>
                            <img src={cholesterol}></img>
                        </div>
                        <h3>অতিরিক্ত চর্বি কমায়</h3>
                        <p>এটি হরমোনকে ব্যালেন্স এর মাধ্যমে শরীরের এবং ভূড়ি’র এক্সট্রা চ’র্বি + মাংশপেশি অর্থাৎ অতিরিক্ত মে’দ কমাতে সাহায্য করবে।</p>
                    </div>
                    <div className='benefit-card'>
                        <div className='img-container'>
                            <img src={stomach}></img>
                        </div>
                        <h3>গ্যাস্ট্রিক এর সমস্যায়</h3>
                        <p> গ্যাস্ট্রিক,বদহজম এবং অন্যান্য পেটের পিড়া থেকে সহজে মুক্তি দিতে সাহায্য করে।</p>
                    </div>
                    <div className='benefit-card'>
                        <div className='img-container'>
                            <img src={medicalApp}></img>
                        </div>
                        <h3>ডায়’বেটি’স</h3>
                        <p>ডায়’বেটি’স নিয়ন্ত্রণ সহ ডায়’বেটিস রোধে সাহায্য করে। র’ক্তে সুগারের মাত্রা কমাতে সাহায্য করে</p>
                    </div>
                    <div className='benefit-card'>
                        <div className='img-container'>
                            <img src={kidneys}></img>
                        </div>
                        <h3>কিডনি সমস্যার সমাধান</h3>
                        <p> কিডনি রোগমুক্ত রাখবে এবং কিডনির যাবতীয় সমস্যায় খুবই উপকারী</p>
                    </div>
                    <div className='benefit-card'>
                        <div className='img-container'>
                            <img src={dumbbell}></img>
                        </div>
                        <h3>যৌন রোগের জন্য</h3>
                        <p>আপনার যৌন দুর্বলতা দূর করবে এবং সময়কে বাড়িয়ে দিবে বহুগুণে</p>
                    </div>
                    <div className='benefit-card'>
                        <div className='img-container'>
                            <img src={organic}></img>
                        </div>
                        <h3>সম্পূর্ণ প্রাকৃতিক</h3>
                        <p>এটা সম্পূর্ন প্রাকৃতিকভাবে তৈরি ফুড সাপ্লি’মেন্ট যা শুধু মাত্র আপনার ও’জন কমানোর ক্ষেত্রেই কাজ করবে অন্যান্য কোনে ধরনের ক্ষতি বা সমস্যা করবে না।</p>
                    </div>
                </div>
                {/* complete */}
                <div>
                    <div className='package-title'>
                        <p>গ্রীন কফি খেলে ডা’য়ে’ট করা ছাড়াই ২৫ কেজি পর্য’ন্ত ও’জ’ন কমাতে পারেন ৪ সপ্তাহে</p>
                    </div>
                    <div className='package-container'>
                        <div className='package-card'>
                            <div className='package-img'>
                                <img src={package1}></img>
                            </div>
                            <h2>প্যাকেজ ১</h2>
                            <p>আপনার ৮ থেকে ১০ কেজি <br></br>
                                ও’জ’ন কমাবে <span>৪ সপ্তাহে</span></p>
                            <h3>রেগুলার মুল্যঃ <span className='highlight'> <del>১৯৯০ টাকা</del></span></h3>
                            <h3>অফার মুল্যঃ <span className='text-bold'>১৪৯৯ টাকা</span></h3>
                            <div className='order-btn'><a href='#order'>অর্ডার করুন</a></div>
                        </div>
                        <div className='special-package-card'>
                            <div className='package-img'>
                                <img src={package1}></img>
                            </div>
                            <h2>প্যাকেজ ৩</h2>
                            <p>আপনার ২০ থেকে ২৫ কেজি <br></br>
                                ও’জ’ন কমাবে <span>৪ সপ্তাহে</span></p>
                            <h3>রেগুলার মুল্যঃ <span className='highlight'> <del>৫৯৭০ টাকা</del></span></h3>
                            <h3>অফার মুল্যঃ <span className='text-bold'>৩৯৯৯ টাকা</span></h3>
                            <div className='order-btn'><a href='#order'>অর্ডার করুন</a></div>
                        </div>
                        <div className='package-card'>
                            <div className='package-img'>
                                <img src={package1}></img>
                            </div>
                            <h2>প্যাকেজ ২</h2>
                            <p>আপনার ১২ থেকে ১৮ কেজি <br></br>
                                ও’জ’ন কমাবে <span>৪ সপ্তাহে</span></p>
                            <h3>রেগুলার মুল্যঃ <span className='highlight'> <del>৩৮৮০ টাকা</del></span></h3>
                            <h3>অফার মুল্যঃ <span className='text-bold'>২৭৯৯ টাকা</span></h3>
                            <div className='order-btn'><a href='#order'>অর্ডার করুন</a></div>
                        </div>
                    </div>
                </div>
                {/* complete */}
                <div className='rules-section'>
                    <div className='eating-rules'>
                        <h3>খাওয়ার নিয়ম</h3>
                        <p>➧ গ্রীন কফি প্রতিদিন সকালে, দুপুরে, রাতে যেকোনো একবেলা, দুবেলা, তিন বেলা খাবারের আধঘন্টা পরে এক চামুচ করে এক কাপের ও কম ফুটন্ত গরম পানির সাথে মিক্স করে খেতে হবে। <span>( অবশ্যই আপনাকে চিনি ও ফ্যাট জাতীয় খাবার বর্জন করতে হবে)</span>।
                            আর আপনার ওজন এর উপরে বিবেচনা করা যেতে পারে। টেস্টের জন্য মধু ব্যবহার করতে পারেন।</p>
                    </div>
                </div>
            </div>
            {/* complete */}
            <div id='order'>
                <div className='order-section'>
                    <div className='products-content'>
                        <p>২ সপ্তাহের মধ্যে কাজ না করলে আমরা দিচ্ছি মানিব্যাক গ্যারান্টি!</p>

                        <div className='products-section'>
                            <h2>কোন প্যাকেজ নিতে চাচ্ছেন?</h2>
                            <div className='products'>
                                <div class="card-container" onClick={() => setData({ price: 1499, package: 1 })}>
                                    <span className='badge'>৮ থেকে ১০ কেজি</span>
                                    <label htmlFor='package-one' className='hr'>
                                        <input value="package1"
                                            checked={selectedOption === 'package1'}
                                            onChange={handleOptionChange} className='radio-btn' id='package-one' type="radio" name="radio"></input>
                                        <div className='pac-container'>
                                            <img src={package1}></img>
                                            <div className='card-title'>
                                                <p>প্যাকেজ ১ - weight loss GREEN COFFEE</p>
                                                <p>1,499 <span>৳</span>
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div class="card-container" onClick={() => setData({ price: 2799, package: 2 })}>
                                    <span className='badge'>১২ থেকে ১৮ কেজি</span>
                                    <label htmlFor='package-two' className='hr'>
                                        <input
                                        value="package2"
                                        checked={selectedOption === 'package2'}
                                        onChange={handleOptionChange} className='radio-btn' id='package-two' type="radio" name="radio"></input>
                                        <div className='pac-container'>
                                            <img src={package1}></img>
                                            <div className='card-title'>
                                                <p>প্যাকেজ ২ - weight loss GREEN COFFEE</p>
                                                <p>2,799 <span>৳</span>
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div class="card-container" onClick={() => setData({ price: 3999, package: 3 })}>
                                    <span className='badge'>২০ থেকে ২৫ কেজি</span>
                                    <label htmlFor='package-three' className='hr'>
                                        <div className='pac-container'>
                                            <input value="package3"
                                            checked={selectedOption === 'package3'}
                                            onChange={handleOptionChange} className='radio-btn' id='package-three' type="radio" name="radio"></input>
                                            <img src={package1}></img>
                                            <div>
                                                <p>প্যাকেজ ৩ - weight loss GREEN COFFEE</p>
                                                <p>3,999 <span>৳</span>
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* complete */}
                    <form onSubmit={submit} className='confirm-order'>
                        <div className='billing-details'>
                            <h2 className='billing-title'>Billing details</h2>
                            <div>
                                <div className='input-container'>
                                    <label className='input-title'>আপনার নামঃ</label>
                                    <input className='input-field' name='name' type="text" placeholder='আপনার নাম' required></input>
                                </div>
                                <div className='input-container'>
                                    <label className='input-title'>আপনার ঠিকানাঃ</label>
                                    <input className='input-field' name='address' type="text" placeholder='আপনার ঠিকানা' required></input>
                                </div>
                                <div className='input-container'>
                                    <label className='input-title'>আপনার ফোন নাম্বারঃ</label>
                                    <input className='input-field' name='number' type="number" placeholder='আপনার ফোন নাম্বার' required></input>
                                </div>
                            </div>
                        </div>
                        <div className='order-details'>
                            <h2 className='billing-title'>Your Order</h2>
                            <div className='sub-title'>
                                <p>Product</p>
                                <p>Subtotal</p>
                            </div>
                            <div className='sec-row'>
                                <div className='order-img'>
                                    <img src={package1}></img>
                                    <p>weight loss GREEN COFFEE - Package {data.package ? data.package : 1}</p>
                                </div>
                                <p>{data.package ? data.package : 1} × {data.price ? data.price : 1499}৳ </p>
                            </div>
                            <div className='third-row'>
                                <p>Subtotal</p>
                                <p>{data.price ? data.price : 1499}৳</p>
                            </div>
                            <div className='third-row'>
                                <p>Total</p>
                                <p>{data.price ? data.price : 1499}৳</p>
                            </div>
                            <div>
                                <div className='order-note'>
                                    <p className='order-note-title'>ক্যাশ অন ডেলিভারি</p>
                                    <p className='order-description'>আমরা দিচ্ছি ফ্রী ডেলিভারি, পণ্য হাতে পেয়ে দেখে রিসিভ করবেন, আশা করছি আপনি আমাদের পণ্যটি রিসিভ করবেন</p>
                                </div>
                                <div className='place-order'>
                                    <button type='submit'>অর্ডার জমা দিন  {data.price ? data.price : 1499} ৳</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <div className='footer'>
                <div className='footer-content'>
                    <div>
                        <a href='#'>Refund policy</a>
                        <a href='#'>Privacy policy</a>
                        <a href='#'>Terms of service</a>
                    </div>
                    <p>© 2023 Noormart.xyz - Muradpur Circle, Chittagong, Bangladesh</p>
                </div>
            </div>
        </div>
    )
}

export default Home