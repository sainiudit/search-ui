import { $$ } from '../../../../src/utils/Dom';
import { MLFacetHeader } from '../../../../src/ui/MLFacet/MLFacetHeader/MLFacetHeader';
import { MLFacet, IMLFacetOptions } from '../../../../src/ui/MLFacet/MLFacet';
import { MLFacetTestUtils } from '../MLFacetTestUtils';

export function MLFacetHeaderTest() {
  describe('MLFacetHeader', () => {
    let mLFacetHeader: MLFacetHeader;
    let facet: MLFacet;
    let baseOptions: IMLFacetOptions;

    beforeEach(() => {
      baseOptions = { title: 'hello' };
      initializeComponent();
    });

    function initializeComponent() {
      facet = MLFacetTestUtils.createFakeFacet(baseOptions);
      mLFacetHeader = new MLFacetHeader(facet);
    }

    function collapseElement() {
      return $$(mLFacetHeader.element).find('.coveo-ml-facet-header-collapse');
    }

    function expandElement() {
      return $$(mLFacetHeader.element).find('.coveo-ml-facet-header-expand');
    }

    function titleElement() {
      return $$(mLFacetHeader.element).find('.coveo-ml-facet-header-title');
    }

    function clearElement() {
      return $$(mLFacetHeader.element).find('.coveo-ml-facet-header-clear');
    }

    it('should create an accessible title', () => {
      expect($$(titleElement()).getAttribute('aria-label')).toBeTruthy();
      expect($$(titleElement()).find('span').innerHTML).toBe(baseOptions.title);
    });

    it('should create a hidden waitAnimationElement', () => {
      const waitAnimationElement = $$(mLFacetHeader.element).find('.coveo-ml-facet-header-wait-animation');
      expect($$(waitAnimationElement).isVisible()).toBe(false);
    });

    it(`when calling showLoading
      waitAnimationElement show be visible after the delay`, done => {
      const waitAnimationElement = $$(mLFacetHeader.element).find('.coveo-ml-facet-header-wait-animation');
      mLFacetHeader.showLoading();
      expect($$(waitAnimationElement).isVisible()).toBe(false);

      setTimeout(() => {
        expect($$(waitAnimationElement).isVisible()).toBe(true);
        done();
      }, MLFacetHeader.showLoadingDelay + 1);
    });

    it('should create an hidden clear button', () => {
      const clearElement = $$(mLFacetHeader.element).find('.coveo-ml-facet-header-clear');

      expect($$(clearElement).isVisible()).toBe(false);
    });

    it(`when calling showClear
      the clear button should be visible`, () => {
      mLFacetHeader.toggleClear(true);

      expect($$(clearElement()).isVisible()).toBe(true);
    });

    it(`when clicking on the clear button
      should perform the correct actions on the facet`, () => {
      mLFacetHeader.toggleClear(true);
      $$(clearElement()).trigger('click');

      expect(facet.reset).toHaveBeenCalledTimes(1);
      expect(facet.enableFreezeFacetOrderFlag).toHaveBeenCalledTimes(1);
      expect(facet.triggerNewQuery).toHaveBeenCalledTimes(1);
    });

    describe('when passing the option enableCollapse as false', () => {
      beforeEach(() => {
        baseOptions.enableCollapse = false;
        initializeComponent();
      });

      it('should not create collapse & expand buttons', () => {
        expect(collapseElement()).toBeFalsy();
        expect(expandElement()).toBeFalsy();
      });

      it('should not throw an error when calling the toggleCollapse method', () => {
        expect(() => mLFacetHeader.toggleCollapse(true)).not.toThrow();
      });
    });

    describe('when passing the option enableCollapse as true', () => {
      beforeEach(() => {
        baseOptions.enableCollapse = true;
        initializeComponent();
      });

      it('should create collapse & expand buttons', () => {
        expect(collapseElement()).toBeTruthy();
        expect(expandElement()).toBeTruthy();
      });

      it('should add the coveo-clickable class to the title', () => {
        expect($$(titleElement()).hasClass('coveo-clickable')).toBe(true);
      });

      it(`when clicking on the title
        should call the toggleCollapse method of the MLFacet`, () => {
        $$(titleElement()).trigger('click');

        expect(facet.toggleCollapse).toHaveBeenCalledTimes(1);
      });
    });
  });
}