webpackJsonpCoveo__temporary([28],{179:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function u(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(u,s)}a((o=o.apply(e,t||[])).next())})},u=this&&this.__generator||function(e,t){function n(e){return function(t){return o([e,t])}}function o(n){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(u=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(u=u.call(i,n[1])).done)return u;switch(i=0,u&&(n=[0,u.value]),n[0]){case 0:case 1:u=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(u=a.trys,!(u=u.length>0&&u[u.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!u||n[1]>u[0]&&n[1]<u[3])){a.label=n[1];break}if(6===n[0]&&a.label<u[1]){a.label=u[1],u=n;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(n);break}u[2]&&a.ops.pop(),a.trys.pop();continue}n=t.call(e,a)}catch(e){n=[6,e],i=0}finally{r=u=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,i,u,s,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s};Object.defineProperty(t,"__esModule",{value:!0});var s=n(6),a=n(7),l=n(30),c=n(1),p=n(9),f=n(2),g=n(3);n(325);var h=n(0),d=n(319),y=n(141),m=n(82),b=n(385),v=n(52),S=function(e){function t(n,o,r){var i=e.call(this,n,t.ID,r)||this;return i.options=o,i.fieldValueCache=new d.SuggestionsCache,i.options=a.ComponentOptions.initComponentOptions(n,t,o),i.facetValueSuggestionsProvider=new b.FacetValueSuggestionsProvider(i.queryController,{field:i.options.field}),i.queryStateFieldFacetId="f:"+i.options.field,i.options.templateHelper||(i.options.templateHelper=t.defaultTemplate),f.$$(i.root).on(l.OmniboxEvents.populateOmniboxSuggestions,function(e,t){t.suggestions.push(i.getSuggestions(t.omnibox))}),i}return o(t,e),t.defaultTemplate=function(e,t){var n=m.DomUtils.highlightElement(e.keyword,t.getText(),"coveo-omnibox-hightlight2"),o=m.DomUtils.highlightElement(e.value,e.value,"coveo-omnibox-hightlight"),r=this.options.displayEstimateNumberOfResults?" ("+v.l("ResultCount",e.numberOfResults.toString())+")":"";return""+v.l("KeywordInCategory",n,o)+r},t.prototype.getSuggestions=function(e){return i(this,void 0,void 0,function(){var t,n;return u(this,function(o){switch(o.label){case 0:return 0==this.options.numberOfSuggestions?[2,[]]:(t=e.getText(),[4,this.getFacetValueSuggestions(t,e)]);case 1:return n=o.sent(),[2,n||[]]}})})},t.prototype.getQuerySuggestionsKeywords=function(e){return i(this,void 0,void 0,function(){var t;return u(this,function(n){switch(n.label){case 0:return this.options.useQuerySuggestions&&e.suggestionAddon?[4,e.suggestionAddon.getSuggestion()]:[3,2];case 1:return t=n.sent()||[],[2,t.map(function(e){return e.text})];case 2:return[2,[]]}})})},t.prototype.getFacetValueSuggestions=function(e,t){return i(this,void 0,void 0,function(){var n,o,r,i,s,a,l,c=this;return u(this,function(u){switch(u.label){case 0:return n=this.options.useValueFromSearchbox?[e]:[],[4,this.getQuerySuggestionsKeywords(t)];case 1:o=u.sent(),r=h.unique(n.concat(o)),u.label=2;case 2:return u.trys.push([2,4,,5]),[4,this.fieldValueCache.getSuggestions("fv"+r.join(""),function(){return c.facetValueSuggestionsProvider.getSuggestions(r)})];case 3:return i=u.sent(),this.logger.debug("FacetValue Suggestions Results",i),s=this.queryStateModel.get(this.queryStateFieldFacetId)||[],a=i.filter(function(e){return c.isSuggestionRowAlreadyCheckedInFacet(e,s)}),[2,this.rankSuggestionRows(a).map(function(e){return c.mapFacetValueSuggestion(e,t)})];case 4:return l=u.sent(),this.logger.error(l),[2,[]];case 5:return[2]}})})},t.prototype.isSuggestionRowAlreadyCheckedInFacet=function(e,t){return!t.some(function(t){return t==e.value})},t.prototype.rankSuggestionRows=function(e){var t=e.sort(function(e,t){return t.score.distanceFromTotalForField-e.score.distanceFromTotalForField}).slice(),n=Math.ceil(this.options.numberOfSuggestions/2),o=-Math.floor(this.options.numberOfSuggestions/2),r=t.splice(0,n);if(0!=o){var i=t.slice(o);return r.concat(i)}return r},t.prototype.mapFacetValueSuggestion=function(e,t){var n=this;return{html:this.buildDisplayNameForRow(e,t),onSelect:function(){return n.onRowSelection(e,t)}}},t.prototype.buildDisplayNameForRow=function(e,n){try{return this.options.templateHelper.call(this,e,n)}catch(o){return this.logger.error("Could not apply template from options for the given row. Will use default template.",o,e,n),t.defaultTemplate.call(this,e,n)}},t.prototype.onRowSelection=function(e,t){t.setText(e.keyword);var n=r({},this.queryStateModel.get(y.QueryStateModel.attributesEnum.fv)),o=n[this.options.field.toString()]||[];n[this.options.field.toString()]=o.concat([e.value]),this.queryStateModel.set(y.QueryStateModel.attributesEnum.fv,n),this.usageAnalytics.logSearchEvent(p.analyticsActionCauseList.omniboxField,{}),this.queryController.executeQuery()},t.ID="FacetValueSuggestions",t.doExport=function(){g.exportGlobally({FacetValueSuggestions:t})},t.options={field:a.ComponentOptions.buildFieldOption({required:!0}),numberOfSuggestions:a.ComponentOptions.buildNumberOption({defaultValue:5,min:1}),useQuerySuggestions:a.ComponentOptions.buildBooleanOption({defaultValue:!0}),useValueFromSearchbox:a.ComponentOptions.buildBooleanOption({postProcessing:function(e,t){return e||!t.useQuerySuggestions}}),displayEstimateNumberOfResults:a.ComponentOptions.buildBooleanOption({defaultValue:!1}),templateHelper:a.ComponentOptions.buildCustomOption(function(){return null})},t}(s.Component);t.FacetValueSuggestions=S,c.Initialization.registerAutoCreateComponent(S)},319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this.cache={}}return e.prototype.getSuggestions=function(e,t){var n=this;if(!e||0===e.length)return null;if(null!=this.cache[e])return this.cache[e];var o=t();return this.cache[e]=o,o.catch(function(){return n.clearSuggestion(e)}),this.cache[e]},e.prototype.clearSuggestion=function(e){if(!e||0===e.length)return null;delete this.cache[e]},e}();t.SuggestionsCache=o},325:function(e,t){},385:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function u(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(u,s)}a((o=o.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){function n(e){return function(t){return o([e,t])}}function o(n){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(u=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(u=u.call(i,n[1])).done)return u;switch(i=0,u&&(n=[0,u.value]),n[0]){case 0:case 1:u=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(u=a.trys,!(u=u.length>0&&u[u.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!u||n[1]>u[0]&&n[1]<u[3])){a.label=n[1];break}if(6===n[0]&&a.label<u[1]){a.label=u[1],u=n;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(n);break}u[2]&&a.ops.pop(),a.trys.pop();continue}n=t.call(e,a)}catch(e){n=[6,e],i=0}finally{r=u=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,i,u,s,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this.queryController=e,this.options=t}return e.prototype.getSuggestions=function(e){return o(this,void 0,void 0,function(){var t;return r(this,function(n){switch(n.label){case 0:return[4,this.getFieldValuesToQuery(e)];case 1:return t=n.sent(),[2,this.getAllSuggestionsRows(t.responses,t.reference)]}})})},e.prototype.getAllSuggestionsRows=function(e,t){var n=this;return e.reduce(function(e,o){var r=o.values.map(function(e){return{numberOfResults:e.numberOfResults,keyword:o.keyword,value:e.value,score:n.computeScoreForSuggestionRow(e,t),field:n.options.field}});return e.concat(r)},[])},e.prototype.getFieldValuesToQuery=function(e){return o(this,void 0,void 0,function(){var t,n,o,i,u,s,a,l=this;return r(this,function(r){switch(r.label){case 0:return t=this.buildReferenceFieldValueRequest(),n=this.getQueryToExecuteParts(),o=e.map(function(e){return l.buildListFieldValueRequest(n.concat([e]).join(" "))}),i=o.concat([t]),[4,this.queryController.getEndpoint().listFieldValuesBatch({batch:i})];case 1:return u=r.sent(),s=this.computeReferenceFromBatch(u.pop()),a=u.map(function(t,n){return{keyword:e[n],values:t}}),[2,{responses:a,reference:s}]}})})},e.prototype.computeScoreForSuggestionRow=function(e,t){var n=t.fieldsTotal[e.value]||t.smallestTotal;return{distanceFromTotalForField:(n-e.numberOfResults)/n*100}},e.prototype.computeReferenceFromBatch=function(e){var t={};return e.forEach(function(e){return t[e.value]=e.numberOfResults}),{fieldsTotal:t,smallestTotal:e[e.length-1].numberOfResults}},e.prototype.buildListFieldValueRequest=function(e){return{field:this.options.field,ignoreAccents:!0,maximumNumberOfValues:3,queryOverride:e}},e.prototype.buildReferenceFieldValueRequest=function(){return{field:this.options.field}},e.prototype.getQueryToExecuteParts=function(){var e=this.queryController.getLastQuery();return[e&&e.aq?this.removeFieldExpressionFromExpression(this.options.field.toString(),e.aq):"",e.cq].filter(function(e){return!!e})},e.prototype.removeFieldExpressionFromExpression=function(e,t){return t.replace(new RegExp(e+"==([^)]*)","gi"),"").replace(new RegExp(e+"==[^ ]*","gi"),"")},e}();t.FacetValueSuggestionsProvider=i}});