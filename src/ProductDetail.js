import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes,  useLocation } from 'react-router-dom';
import './styles/productDetail.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import ButtonBuy from './ButtonBuy';

import {ReactComponent as ScalesLogo} from './svg/img-scales.svg';
import iconReviews  from './svg/productInfo/img-reviews.svg';
import binancelogo from "./svg/productInfo/payment/binance.svg";
import aplepaylogo from "./svg/productInfo/payment/icon-apple-pa.svg";
import googlepaylogo from "./svg/productInfo/payment/icon-google-pay.svg";
import mastercardlogo from "./svg/productInfo/payment/icon-mastercard.svg";
import visalogo from "./svg/productInfo/payment/icon-visa.svg";
import ProductImagesSlider from './ProductImagesSlider';
import { useSelector , useDispatch} from 'react-redux';
import {  openCommentMenu } from './store/actions';
import CommentFormModal from './CommentForm';
const ProductDetail = () => {
  
  const dispatch = useDispatch();

  const location = useLocation();
  const product = location.state;
  const productComments = (useSelector(state => state.cart.productComments));

  return (
    <div className='container'>
	<CommentFormModal productId={product.id} ></CommentFormModal>
      <div className='product__row'>
      <div className='product__col'>

    <div className='product__slider'>
      <ProductImagesSlider images={product.imagesUrl} />
    </div>

    <div class="product__specs">
		<p class="product__specs-title">Характеристики</p>
			<div class="product__specs-table">
							<table cellspacing="0" cellpadding="0">
																<tbody>
                <tr>
									<td>Стан товару</td>
									<td>{product.characterization.status}</td>
								</tr>
																<tr>
									<td>Відеокарта</td>
                  <td>{product.characterization.videocard}</td>
								</tr>
																<tr>
									<td>Процесор</td>
                  <td>{product.characterization.processor}</td>
								</tr>
																<tr>
									<td>Чипсет материнської плати</td>
                  <td>{product.characterization.cipset}</td>
								</tr>
																<tr>
									<td>Обсяг оперативної пам'яті</td>
									<td>{product.characterization.RAM}</td>
								</tr>
																<tr>
									<td>Потужність БЖ</td>
									<td>{product.characterization.PSU}</td>
								</tr>
																<tr>
									<td>Попередньо встановлене ПЗ</td>
                  <td>{product.characterization.OS}</td>
								</tr>
																<tr>
									<td>Об'єм SSD</td>
									<td>{product.characterization.SSD}</td>
								</tr>
																<tr>
									<td>Об'єм HHD</td>
									<td>{product.characterization.HDD}</td>
								</tr>
														
															</tbody></table>
						</div>
											</div>

      
    </div>

      <div className='product__col'>

        <div className='product__info'>



        <div class="product__heading d-none d-lg-flex">
							<h1 class="product__title text-uppercase">{product.name}</h1>

															<p class="product__id">Код:  116876FR </p>
													</div>
        

                          <div class="product__subheading product__subheading--pc">
							<div class="product__status product__status_in-stock">
								<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none" viewBox="0 0 11 11">
									<g clip-path="url(.aasdasd21dasd21e1asda12e)">
										<path fill="#068650" d="M10.744 1.798a.872.872 0 0 0-1.233 0L3.958 7.352 1.49 4.884A.873.873 0 1 0 .256 6.118L3.34 9.203a.87.87 0 0 0 1.234 0l6.17-6.17a.872.872 0 0 0 0-1.235Z"></path>
									</g>
									<defs>
										<clipPath class="aasdasd21dasd21e1asda12e">
											<path fill="#fff" d="M0 0h11v11H0z"></path>
										</clipPath>
									</defs>
								</svg>
								В наявності
							</div>
                                                            <p class="product__warranty-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path d="M8.00034 17.7771C7.80433 17.7771 7.60959 17.7325 7.43077 17.6434L4.86993 16.363C3.70427 15.7852 2.72384 14.8923 2.03983 13.7855C1.35582 12.6788 0.995611 11.4026 1.00004 10.1016V3.81021C1.00004 3.15091 1.49706 2.60616 2.15636 2.5438C4.00453 2.36858 5.76156 1.65847 7.21249 0.500345C7.43573 0.320865 7.71358 0.223022 8.00002 0.223022C8.28646 0.223022 8.56431 0.320865 8.78755 0.500345C10.2384 1.65857 11.9955 2.36869 13.8437 2.5438C14.1598 2.57212 14.4539 2.71785 14.668 2.95227C14.882 3.18669 15.0005 3.49278 15 3.81021V10.1016C15 12.77 13.5172 15.1692 11.1301 16.363L8.56927 17.6434C8.39237 17.7316 8.198 17.7774 8.00034 17.7771ZM7.99461 1.49566C7.10677 2.21107 6.10922 2.7784 5.04048 3.17573C4.15098 3.50753 3.22175 3.72106 2.27664 3.81085L2.27219 10.1016C2.26854 11.1661 2.5633 12.2103 3.12302 13.1158C3.68274 14.0213 4.48503 14.7519 5.43887 15.2245L7.9997 16.5049L10.5605 15.2245C11.5143 14.7518 12.3166 14.0213 12.8763 13.1158C13.436 12.2103 13.7308 11.1661 13.7272 10.1016V3.81021C11.6315 3.61371 9.6394 2.80924 7.99461 1.49566Z" fill="#23459B"></path>
                                        <path d="M7.36434 11.1994H7.36243C7.27755 11.1993 7.19355 11.1822 7.11539 11.1491C7.03724 11.1159 6.96652 11.0675 6.90741 11.0066L4.99824 9.04013C4.93915 8.98035 4.89249 8.90945 4.86095 8.83154C4.82941 8.75362 4.81362 8.67023 4.81449 8.58618C4.81536 8.50213 4.83287 8.41908 4.86601 8.34184C4.89915 8.26459 4.94727 8.19468 5.00758 8.13613C5.06789 8.07758 5.1392 8.03156 5.2174 8.00073C5.2956 7.9699 5.37913 7.95486 5.46317 7.95649C5.54721 7.95811 5.63009 7.97637 5.70703 8.01021C5.78398 8.04405 5.85346 8.0928 5.91146 8.15363L7.36625 9.65234L10.0919 6.87831C10.2101 6.75797 10.3713 6.68952 10.54 6.68803C10.7087 6.68654 10.8711 6.75212 10.9914 6.87035C11.1118 6.98858 11.1802 7.14978 11.1817 7.31847C11.1832 7.48717 11.1176 7.64955 10.9994 7.76989L7.81745 11.0091C7.75823 11.0694 7.68761 11.1172 7.60971 11.1499C7.5318 11.1826 7.44881 11.1994 7.36434 11.1994Z" fill="#23459B"></path>
                                        <path d="M8.00034 17.7771C7.80433 17.7771 7.60959 17.7325 7.43077 17.6434L4.86993 16.363C3.70427 15.7852 2.72384 14.8923 2.03983 13.7855C1.35582 12.6788 0.995611 11.4026 1.00004 10.1016V3.81021C1.00004 3.15091 1.49706 2.60616 2.15636 2.5438C4.00453 2.36858 5.76156 1.65847 7.21249 0.500345C7.43573 0.320865 7.71358 0.223022 8.00002 0.223022C8.28646 0.223022 8.56431 0.320865 8.78755 0.500345C10.2384 1.65857 11.9955 2.36869 13.8437 2.5438C14.1598 2.57212 14.4539 2.71785 14.668 2.95227C14.882 3.18669 15.0005 3.49278 15 3.81021V10.1016C15 12.77 13.5172 15.1692 11.1301 16.363L8.56927 17.6434C8.39237 17.7316 8.198 17.7774 8.00034 17.7771ZM7.99461 1.49566C7.10677 2.21107 6.10922 2.7784 5.04048 3.17573C4.15098 3.50753 3.22175 3.72106 2.27664 3.81085L2.27219 10.1016C2.26854 11.1661 2.5633 12.2103 3.12302 13.1158C3.68274 14.0213 4.48503 14.7519 5.43887 15.2245L7.9997 16.5049L10.5605 15.2245C11.5143 14.7518 12.3166 14.0213 12.8763 13.1158C13.436 12.2103 13.7308 11.1661 13.7272 10.1016V3.81021C11.6315 3.61371 9.6394 2.80924 7.99461 1.49566Z" stroke="#23459B" stroke-width="0.4"></path>
                                        <path d="M7.36434 11.1994H7.36243C7.27755 11.1993 7.19355 11.1822 7.11539 11.1491C7.03724 11.1159 6.96652 11.0675 6.90741 11.0066L4.99824 9.04013C4.93915 8.98035 4.89249 8.90945 4.86095 8.83154C4.82941 8.75362 4.81362 8.67023 4.81449 8.58618C4.81536 8.50213 4.83287 8.41908 4.86601 8.34184C4.89915 8.26459 4.94727 8.19468 5.00758 8.13613C5.06789 8.07758 5.1392 8.03156 5.2174 8.00073C5.2956 7.9699 5.37913 7.95486 5.46317 7.95649C5.54721 7.95811 5.63009 7.97637 5.70703 8.01021C5.78398 8.04405 5.85346 8.0928 5.91146 8.15363L7.36625 9.65234L10.0919 6.87831C10.2101 6.75797 10.3713 6.68952 10.54 6.68803C10.7087 6.68654 10.8711 6.75212 10.9914 6.87035C11.1118 6.98858 11.1802 7.14978 11.1817 7.31847C11.1832 7.48717 11.1176 7.64955 10.9994 7.76989L7.81745 11.0091C7.75823 11.0694 7.68761 11.1172 7.60971 11.1499C7.5318 11.1826 7.44881 11.1994 7.36434 11.1994Z" stroke="#23459B" stroke-width="0.4"></path>
                                    </svg>
                                    Гарантія: 6міс.
                                </p>
                            							<div class="product-subheading__rating">
								<svg xmlns="http://www.w3.org/2000/svg" width="106" height="18" viewBox="0 0 106 18" fill="none">
									<path d="M17.5223 6.43786L11.9885 5.59258L9.5082 0.309375C9.32294 -0.08514 8.67567 -0.08514 8.49041 0.309375L6.01082 5.59258L0.477107 6.43786C0.374936 6.45355 0.279065 6.4971 0.200021 6.56371C0.120977 6.63033 0.0618171 6.71743 0.0290357 6.81547C-0.00374562 6.9135 -0.00888021 7.01867 0.0141957 7.11943C0.0372716 7.22019 0.0876657 7.31265 0.159845 7.38664L4.18 11.5073L3.22971 17.3328C3.21274 17.437 3.22543 17.5438 3.26632 17.6411C3.30722 17.7384 3.37467 17.8223 3.46096 17.8831C3.54726 17.9439 3.64892 17.9791 3.75432 17.9849C3.85972 17.9906 3.9646 17.9666 4.05699 17.9155L8.99968 15.1839L13.9424 17.9163C14.0348 17.9674 14.1396 17.9914 14.245 17.9856C14.3504 17.9799 14.4521 17.9446 14.5384 17.8838C14.6247 17.823 14.6921 17.7392 14.733 17.6419C14.7739 17.5446 14.7866 17.4377 14.7697 17.3335L13.8194 11.5081L17.8395 7.38739C17.9119 7.31342 17.9625 7.22091 17.9857 7.12004C18.0089 7.01917 18.0038 6.91386 17.971 6.81569C17.9382 6.71752 17.879 6.63031 17.7998 6.56365C17.7206 6.49698 17.6246 6.45346 17.5223 6.43786Z" fill="#FFC107"></path>
									<path d="M39.5223 6.43786L33.9885 5.59258L31.5082 0.309375C31.3229 -0.08514 30.6757 -0.08514 30.4904 0.309375L28.0108 5.59258L22.4771 6.43786C22.3749 6.45355 22.2791 6.4971 22.2 6.56371C22.121 6.63033 22.0618 6.71743 22.029 6.81547C21.9963 6.9135 21.9911 7.01867 22.0142 7.11943C22.0373 7.22019 22.0877 7.31265 22.1598 7.38664L26.18 11.5073L25.2297 17.3328C25.2127 17.437 25.2254 17.5438 25.2663 17.6411C25.3072 17.7384 25.3747 17.8223 25.461 17.8831C25.5473 17.9439 25.6489 17.9791 25.7543 17.9849C25.8597 17.9906 25.9646 17.9666 26.057 17.9155L30.9997 15.1839L35.9424 17.9163C36.0348 17.9674 36.1396 17.9914 36.245 17.9856C36.3504 17.9799 36.4521 17.9446 36.5384 17.8838C36.6247 17.823 36.6921 17.7392 36.733 17.6419C36.7739 17.5446 36.7866 17.4377 36.7697 17.3335L35.8194 11.5081L39.8395 7.38739C39.9119 7.31342 39.9625 7.22091 39.9857 7.12004C40.0089 7.01917 40.0038 6.91386 39.971 6.81569C39.9382 6.71752 39.879 6.63031 39.7998 6.56365C39.7206 6.49698 39.6246 6.45346 39.5223 6.43786Z" fill="#FFC107"></path>
									<path d="M61.5223 6.43786L55.9885 5.59258L53.5082 0.309375C53.3229 -0.08514 52.6757 -0.08514 52.4904 0.309375L50.0108 5.59258L44.4771 6.43786C44.3749 6.45355 44.2791 6.4971 44.2 6.56371C44.121 6.63033 44.0618 6.71743 44.029 6.81547C43.9963 6.9135 43.9911 7.01867 44.0142 7.11943C44.0373 7.22019 44.0877 7.31265 44.1598 7.38664L48.18 11.5073L47.2297 17.3328C47.2127 17.437 47.2254 17.5438 47.2663 17.6411C47.3072 17.7384 47.3747 17.8223 47.461 17.8831C47.5473 17.9439 47.6489 17.9791 47.7543 17.9849C47.8597 17.9906 47.9646 17.9666 48.057 17.9155L52.9997 15.1839L57.9424 17.9163C58.0348 17.9674 58.1396 17.9914 58.245 17.9856C58.3504 17.9799 58.4521 17.9446 58.5384 17.8838C58.6247 17.823 58.6921 17.7392 58.733 17.6419C58.7739 17.5446 58.7866 17.4377 58.7697 17.3335L57.8194 11.5081L61.8395 7.38739C61.9119 7.31342 61.9625 7.22091 61.9857 7.12004C62.0089 7.01917 62.0038 6.91386 61.971 6.81569C61.9382 6.71752 61.879 6.63031 61.7998 6.56365C61.7206 6.49698 61.6246 6.45346 61.5223 6.43786Z" fill="#FFC107"></path>
									<path d="M83.5223 6.43786L77.9885 5.59258L75.5082 0.309375C75.3229 -0.08514 74.6757 -0.08514 74.4904 0.309375L72.0108 5.59258L66.4771 6.43786C66.3749 6.45355 66.2791 6.4971 66.2 6.56371C66.121 6.63033 66.0618 6.71743 66.029 6.81547C65.9963 6.9135 65.9911 7.01867 66.0142 7.11943C66.0373 7.22019 66.0877 7.31265 66.1598 7.38664L70.18 11.5073L69.2297 17.3328C69.2127 17.437 69.2254 17.5438 69.2663 17.6411C69.3072 17.7384 69.3747 17.8223 69.461 17.8831C69.5473 17.9439 69.6489 17.9791 69.7543 17.9849C69.8597 17.9906 69.9646 17.9666 70.057 17.9155L74.9997 15.1839L79.9424 17.9163C80.0348 17.9674 80.1396 17.9914 80.245 17.9856C80.3504 17.9799 80.4521 17.9446 80.5384 17.8838C80.6247 17.823 80.6921 17.7392 80.733 17.6419C80.7739 17.5446 80.7866 17.4377 80.7697 17.3335L79.8194 11.5081L83.8395 7.38739C83.9119 7.31342 83.9625 7.22091 83.9857 7.12004C84.0089 7.01917 84.0038 6.91386 83.971 6.81569C83.9382 6.71752 83.879 6.63031 83.7998 6.56365C83.7206 6.49698 83.6246 6.45346 83.5223 6.43786Z" fill="#FFC107"></path>
									<path d="M105.522 6.43786L99.9885 5.59258L97.5082 0.309375C97.3229 -0.08514 96.6757 -0.08514 96.4904 0.309375L94.0108 5.59258L88.4771 6.43786C88.3749 6.45355 88.2791 6.4971 88.2 6.56371C88.121 6.63033 88.0618 6.71743 88.029 6.81547C87.9963 6.9135 87.9911 7.01867 88.0142 7.11943C88.0373 7.22019 88.0877 7.31265 88.1598 7.38664L92.18 11.5073L91.2297 17.3328C91.2127 17.437 91.2254 17.5438 91.2663 17.6411C91.3072 17.7384 91.3747 17.8223 91.461 17.8831C91.5473 17.9439 91.6489 17.9791 91.7543 17.9849C91.8597 17.9906 91.9646 17.9666 92.057 17.9155L96.9997 15.1839L101.942 17.9163C102.035 17.9674 102.14 17.9914 102.245 17.9856C102.35 17.9799 102.452 17.9446 102.538 17.8838C102.625 17.823 102.692 17.7392 102.733 17.6419C102.774 17.5446 102.787 17.4377 102.77 17.3335L101.819 11.5081L105.84 7.38739C105.912 7.31342 105.962 7.22091 105.986 7.12004C106.009 7.01917 106.004 6.91386 105.971 6.81569C105.938 6.71752 105.879 6.63031 105.8 6.56365C105.721 6.49698 105.625 6.45346 105.522 6.43786Z" fill="#FFC107"></path>
								</svg>
							</div>
							<div class="product-subheading__reviews">
								<span class="product-subheading__reviews-icon">
									<img src={iconReviews} alt="reviews"/>
								</span>

								<span>2</span>
							</div>
						</div>

          <div class="product__buy">
            <div class="product-price-wrapper">
							<p class="product__price">
                <span>{product.price}₴</span>
                                   
                </p>
          
                                    								
								
             </div>

             <div className='product__buttons'>
              <div className='product__buttons-head'>

              <ButtonBuy product={product} > </ButtonBuy>
                <div className='product__basket-item'>
                <FavoriteBorderIcon className='product__buttons-logo' ></FavoriteBorderIcon>
                <ScalesLogo className='product__buttons-logo'></ScalesLogo>
                </div>
                
                


              </div>


             </div>

             </div>
        </div>


        <div class="product-block">
  <h2 class="product-block__title">Оплата</h2>
  <div class="product-block--payment">
	<div>
		<span style={{fontSize: "16px"}}>Оплата під час отримання товару, Оплата карткою у відділенні, Google Pay, Картою онлайн, Безготівковими для юридичних осіб, -5% знижки при оплаті від 500 грн карткою Mastercard Універсальна/Універсальна Gold від ПриватБанк, Безготівковий для фізичних осіб, Apple Pay, Оплатити онлайн картою "єПідтримка", Visa, Mastercard </span><a href="/oplata/"><span  style={{fontSize: "16px"}}>Детальніше</span></a>
	</div>
	<div className='product__payment-logo'>
		<span>
			<img src={binancelogo} alt="binance"/>
		</span>
		<span>
			<img src={aplepaylogo} alt="whitepay"/>
		</span>
	
		<span>
			<img src={googlepaylogo} alt="gpay"/>
		</span>
		<span>
			<img src={visalogo} alt="visa"/>
		</span>
		<span>
			<img src={mastercardlogo}  alt="mastercard"/>
		</span>
	</div>
</div>
</div>


<div class="product-block">
                                    <h2 class="product-block__title">Гарантія</h2>
                                    <div class="product-block__description product-block__description--garanty">
    <span >Обмін/повернення товару належної якості протягом </span>
    <b><span >14 днів</span></b><span >.</span>
    <span >Весь наш товар має гарантію. </span>
    <a href="/obmen-i-vozvrat/"><span >Детальніше</span></a>
</div>
                                </div>

								<div class="products-reviews products-reviews--pc">
							<div class="products-reviews__header">
								<h2 class="products-reviews__title">Відгуки (<span>{productComments.length}</span>)</h2>
																	<button type="button" onClick={()=>{

																	
																		dispatch(openCommentMenu())
																	}} class="btn btn_seventh product__button-online products-reviews__btn" data-toggle="modal" data-target="#us-review-modal--pc">Залишити відгук</button>

									<div class="modal" id="us-review-modal--pc" tabindex="-1" role="dialog" aria-labelledby="us-review" style={{display: 'none'}} aria-hidden="true">
										<div class="modal-dialog modal-dialog-centered" role="document" style={{justifycontent: 'center'}} >
						
										</div>
									</div>

									<div class="modal modal-answer-review" tabindex="-1" role="dialog" aria-labelledby="us-review" aria-hidden="true">
										<div class="modal-dialog modal-dialog-centered" role="document" style={{justifycontent: 'center'}}>
											<div class="modal-content popup-review">
												<div class="popup-review-header">
					
												</div>

									
											</div>
										</div>
									</div>
															</div>

							<div class="products-reviews__body">
																	    <p class="no-product-reviews">{(productComments.length==0)?"Немає відгуків про цей товар.":productComments.map((item)=>(

																			<div className='product-review'>
																		<p class="product-review__body">
																					{item}
																					</p>
																			</div>
																		))}
																			</p>

															</div>
						</div>

    </div>


</div>

      
    </div>
  );
};

export default ProductDetail;