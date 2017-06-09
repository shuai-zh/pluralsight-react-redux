import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Author Selectors', () => {
    describe('authorsFormattedForDropdown', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                {
                    id: 'shuai-zhang', firstName: 'Shuai', lastName: 'Zhang'
                }, {
                    id: 'james-smith', firstName: 'James', lastName: 'Smith'
                }
            ];

            const expected = [
                {
                    value: 'shuai-zhang',
                    text: 'Shuai Zhang'
                }, {
                    value: 'james-smith',
                    text: 'James Smith'
                }
            ];

            expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        });
    });
});