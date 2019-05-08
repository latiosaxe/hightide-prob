import Prismic from 'prismic-javascript'

import Vue from 'vue'
import JQuery from 'jquery'

const utils = {
  setLazyImages (classSelector, tagSelector = 'img') {
    let $ = JQuery;
    const selector = tagSelector + '.' + classSelector;
    $(document).ready(function () {
      const lazyImages = [].slice.call(document.querySelectorAll(selector));

      if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              //lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove(classSelector);
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        });

        lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      } else {
        // Possibly fall back to a more compatible method here
      }
    });
  },
  formatContent (elem, justTetx = false) {
    const initialText = elem.map(item =>  item.text === "" ? "<br/>" : item.text ).join('');
    let finalText = initialText;

    const sections = elem.map(item => {
      return item.spans.length ?
        item.spans.map(tag => {
          return {...tag, length: tag.end - tag.start, text: item.text.slice(tag.start, tag.end)}
        }).sort( (a,b) => b.length - a.length )
        :
        [{
          type: 'span',
          start: 0,
          end: item.text.length,
          text: item.text.slice(0, item.text.length),
          length: item.text.length
        }];
    });

    sections.map(section => {
      section.map( tag => {
        if (tag.text !== ' ') {
          let tagName = tag.type === 'hyperlink' ? 'a' : 'span';

          if (tag.text === '') {
            tagName = 'p';
          }

          const newTag = `<${tagName} ${tagName === 'a' ? ' href="' + tag.data.url + '"' : ''} ${tagName === 'a' ? ' target="' + tag.data.target + '" ' : ''} class="${tag.type}">${tag.text}</${tagName}>`;

          finalText = finalText.replace(tag.text, newTag);

          return newTag;
        }
      });
    });

    return justTetx ? initialText : finalText;
  },
  getPrismicData(elements) {
      let responseData = {}
      console.log("Getting Data");
      Prismic.getApi(process.env.apiPrismicUrl + '/api/v2', {accessToken: process.env.apiPrismicToken}).then(function(api) {
        return api.query(
          Prismic.Predicates.any('document.type', elements)
        );
      }).then(function(response) {
        // console.log( response.results );
        if(response.results.length > 0){
          responseData.status = 400;
          responseData.data = response.results;
        }else{
          responseData.status = 300;
          responseData.message = 'No results';
        }
        console.log( responseData );
        return responseData;
      });
    },
  getPrismicDataPage(elements, size, page) {
      let responseData = {}
      console.log("Getting Data Page");
      Prismic.getApi(process.env.apiPrismicUrl + '/api/v2', {accessToken: process.env.apiPrismicToken}).then(function(api) {
        return api.query(
          Prismic.Predicates.any('document.type', elements),
          { pageSize : size, page : page }

        );
      }).then(function(response) {
        // console.log( response.results );
        if(response.results.length > 0){
          responseData.status = 400;
          responseData.data = response.results;
        }else{
          responseData.status = 300;
          responseData.message = 'No results';
        }
        console.log( responseData );
        return responseData;
      });
    },
}

export default utils
