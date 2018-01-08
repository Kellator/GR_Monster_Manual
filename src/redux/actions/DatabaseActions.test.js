import * as actions from './DatabaseActions';

describe('fetching', () => {
    it('should create an action to show data is loading', () => {
        const expectedAction = {
            type: actions.FETCHING
        }
        expect(actions.fetching()).toEqual(expectedAction)
    })
});
// test for full list return data fetch
describe('fetchSuccess', () => {
    it('should create an action to show data has loaded and pass data', () => {
        const data = [{card: "cardData"}]
        const expectedAction = {
            type: actions.FETCH_SUCCESS,
            data
        }
        expect(actions.fetchSuccess(data)).toEqual(expectedAction)
    })
});

describe('fetchFail', () => {
    it('should create an action to show data failed to load and pass error', () => {
        const error = "error text"
        const expectedAction = {
            type: actions.FETCH_FAIL,
            error
        }
        expect(actions.fetchFail(error)).toEqual(expectedAction)
    })
});
// test for individual card data fetch
describe('cardFetchSuccess', () => {
    it('should create an action to show data has loaded and pass data', () => {
        const data = {card: "cardData"}
        const expectedAction = {
            type: actions.CARD_FETCH_SUCCESS,
            data
        }
        expect(actions.cardFetchSuccess(data)).toEqual(expectedAction)
    })
});

describe('cardFetchFail', () => {
    it('should create an action to show data failed to load and pass error', () => {
        const error = "error test"
        const expectedAction = {
            type: actions.CARD_FETCH_FAIL,
            error
        }
        expect(actions.cardFetchFail(error)).toEqual(expectedAction)
    })
});

describe('creating', () => {
    it('should create an action to show that an upload to db is in progress', () => {
        const expectedAction = {
            type: actions.CREATING
        }
        expect(actions.creating()).toEqual(expectedAction)
    })
});

describe('createSuccess', () => {
    it('should create an action to show upload of new data has been successful and pass data', () => {
        const data = {
            _id: "_id",
            name: "name",
            category: "category",
            level: "level",
            body: "body",
            description: "description"
        }
        const expectedAction = {
            type: actions.CREATE_SUCCESS,
            data
        }
        expect(actions.createSuccess(data)).toEqual(expectedAction)
    })
});

describe('createFail', () => {
    it('should create an action to show upload of new data has failed and pass error', () => {
        const error = "error text"
        const expectedAction = {
            type: actions.CREATE_FAIL,
            error
        }
        expect(actions.createFail(error)).toEqual(expectedAction)
    })
});

describe('setCard', () => {
    it('should create an action to show current selected card id', () => {
        const id = "id string"
        const expectedAction = {
            type: actions.SET_CARD,
            id
        }
        expect(actions.setCard(id)).toEqual(expectedAction)
    })
});

describe('setPage', () => {
    it('should create an action to show current wizardform page', () => {
        const page = 1
        const expectedAction = {
            type: actions.SET_PAGE,
            page
        }
        expect(actions.setPage(1)).toEqual(expectedAction)
    })
});

describe('returnNewList', () => {
    it('should create an action to show new list of items minus one with passed id after delete', () => {
        const id = "id string"
        const list = [{deletedCard: {_id: id}}]
        const expectedAction = {
            type: actions.NEW_LIST,
            id,
            list
        }
        expect(actions.returnNewList(id, list)).toEqual(expectedAction)
    })
});

describe('deleteSuccess', () => {
    it('should create an action to show that a database document has been successfully deleted', () => {
        const expectedAction = {
            type: actions.DELETE_SUCCESS
        }
        expect(actions.deleteSuccess()).toEqual(expectedAction)
    })
});

describe('deleteFail', () => {
    it('should create an actions to show that a database document delete request has failed and pass the error', () => {
        const error = "error text"
        const expectedAction = {
            type: actions.DELETE_FAIL,
            error
        }
        expect(actions.deleteFail(error)).toEqual(expectedAction)
    })
});