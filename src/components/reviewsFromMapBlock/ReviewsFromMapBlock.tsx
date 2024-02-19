import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import mrtImage from "../../assets/content/main/reviewsMapBlock/mrt.png"
import operationImage from "../../assets/content/main/reviewsMapBlock/operation_2.png"
import mrtViewImage from "../../assets/content/main/reviewsMapBlock/mrt_image.png"

/**
 * Идентификатор для корректной навигации в шапке.
 * @interface
 *
 * @property {string} id Идентификатор блока.
 */
interface reviewsFromMapBlockProps {
  id: string;
}

/**
 * Картинки справа от виджета отзывов.
 * @interface
 *
 * @property {string} title Заголовок.
 * @property {string} image Ссылка на изображение.
 */
interface ReviewImage {
  title: string;
  image: string;
}

// HTML код виджета отзывов
const reviewsYandexMapLink = `
  <div style="width:100%;height:100%;min-height:300px;overflow:hidden;position:relative;">
    <iframe style="width:100%;height:100%;min-height:600px;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/209406402506?comments"></iframe>
    <a href="https://yandex.ru/maps/org/mnogoprofilnaya_klinika_1_volgogradskogo_gosudarstvennogo_meditsinskogo_universiteta/209406402506/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">Многопрофильная клиника № 1 Волгоградского государственного медицинского университета на карте Волгограда — Яндекс Карты</a>
  </div>
`;

/**
 * Компонент, отображающий блок отзывов
 *
 * @param {reviewsFromMapBlockProps} id - Идентификатор для корректной навигации в шапке.
 * @return {ReactNode} Отрисованный компонент ReviewsFromMapBlock
 */
const ReviewsFromMapBlock: React.FC<reviewsFromMapBlockProps> = ({ id }) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const [reviewsImages, setReviewsImages] = useState<ReviewImage[]>([]);

  useEffect(() => {
    const loadedReviewsImages: ReviewImage[] = [
      {
        title: "Image 1",
        // image: "https://i.ibb.co/F703W2g/reviews-image-3.png",
        image: operationImage,
      },
      {
        title: "Image 2",
        // image: "https://i.ibb.co/jVc79XQ/reviews-image-2.png",
        image: mrtViewImage,
      },
      {
        title: "Image 3",
        // image: "https://i.ibb.co/pRGKsK1/reviews-image-1.png",
        image: mrtImage,
      },
    ];

    setReviewsImages(loadedReviewsImages);
  }, []);

  return (
    <div id={id}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={6}>
          <div dangerouslySetInnerHTML={{ __html: reviewsYandexMapLink }}></div>
        </Grid>
        {isXsScreen ? (
          <Grid item xs={12} sm={6} md={6}></Grid>
        ) : (
          <Grid item xs={12} sm={6} md={6}>
            {reviewsImages.length > 0 && (
              <img
                src={reviewsImages[0].image}
                alt={reviewsImages[0].title}
                style={{
                  position: "relative",
                  left: "50%",
                  top: "35%",
                  zIndex: "2",
                  width:'60%',
                  borderRadius: '15px'
                }}
              />
            )}

            {reviewsImages.length > 1 && (
              <img
                src={reviewsImages[1].image}
                alt={reviewsImages[1].title}
                style={{
                  position: "relative",
                  left: "0",
                  top: "20%",
                  zIndex: "3",
                  width:'60%',
                  borderRadius: '15px'
                }}
              />
            )}

            {reviewsImages.length > 2 && (
              <img
                src={reviewsImages[2].image}
                alt={reviewsImages[2].title}
                style={{ position: "relative", left: "10%", bottom: "40%",
                 width: '50%',
                 borderRadius: '15px'
                }}
              />
            )}
            {/* <img src={reviewsImages[0].image} alt={reviewsImages[0].title} style={{position:'relative', left:'30%', top:'45%', zIndex:'2'}}/> */}
            {/* <img src={reviewsImages[1].image} alt={reviewsImages[1].title} style={{position:'relative', left:'0', top:'20%', zIndex:'3'}}/> */}
            {/* <img src={reviewsImages[2].image} alt={reviewsImages[2].title} style={{position:'relative', left:'10%', bottom:'40%'}}/> */}
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default ReviewsFromMapBlock;
