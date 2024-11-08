import React from "react";

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setcategry = props.setcategry;
    function filterhandler(title) {
        setcategry(title);
    }
    return(

        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
            {
                filterData.map( (singledata) => (
                    <button className={`text-lg px-2 py-1 rounded-md font-medium text-white border-2 bg-black hover:bg-opacity-50 transition-all duration-200
                        ${category === singledata.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`}
                       onClick={() => filterhandler(singledata.title)} key={singledata.id}>{singledata.title}</button>
                 ) )
            }
        </div>
    );
}

export default Filter;