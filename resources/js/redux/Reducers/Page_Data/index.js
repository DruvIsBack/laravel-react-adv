import PageSlugs from '../../Constraints/Page';

export default (state = PageSlugs.updatePage.init, {type, payload})=>{
    switch(type){
        case PageSlugs.updatePage.slug:
                return payload;
    }
    return state;
};
