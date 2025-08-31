/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {
      let output = '';

      if (params.codeMaxHeight !== '30rem') {
            output += ` 
         pre {   
               max-height: ${params.codeMaxHeight};
        }`;
      }

      if (params.galleryItemGap !== '0.26667rem') {
            output += `
        .gallery {
               margin: 2.66667rem -${params.galleryItemGap};
        }
        .gallery__item {
               padding: ${params.galleryItemGap};
        }
        
        .gallery__item a::after {
               bottom: ${params.galleryItemGap};
               height: calc(100% - ${params.galleryItemGap} * 2);              
               left: ${params.galleryItemGap};
               right: ${params.galleryItemGap};
               top: ${params.galleryItemGap};
               width: calc(100% - ${params.galleryItemGap} * 2);  
        }`;
      }

      if (params.lazyLoadEffect === 'fadein') {
            output += ` 
         img[loading] {
               opacity: 0;
         }

         img.is-loaded {
               opacity: 1;
               transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1); 
         }`;
      }

      return output;
}

module.exports = generateOverride;
