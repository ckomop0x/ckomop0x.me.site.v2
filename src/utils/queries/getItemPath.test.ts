import getItemPath, { IGetItemPathProps } from './getItemPath';

describe('utils/queries', () => {
  describe('getItemPath', () => {
    it('Should return text with error', () => {
      const params: IGetItemPathProps = {
        attributes: {
          slug: null,
        },
      };
      expect(getItemPath(params)).toBe(
        'Wrong item format, should be item.slug:string',
      );
    });
    it('Should return params with slug', () => {
      const params: IGetItemPathProps = {
        attributes: {
          slug: 'main-post',
        },
      };
      expect(getItemPath(params)).toEqual({
        params: {
          slug: 'main-post',
        },
      });
    });
  });
});
