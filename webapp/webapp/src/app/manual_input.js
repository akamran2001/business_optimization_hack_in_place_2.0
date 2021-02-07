import React from "react";

function inputButton() {
    return (
        <div style={{paddingTop: '25px'}}>
            <h2>Input Transaction</h2>
            <form className="inputform">
                <div>
                    <label>
                        <p>Item&nbsp;&nbsp;</p>
                    </label>
                    <input type="text" placeholder="Enter item name"/>
                </div>
                <div>
                    <label>
                        <p>Total&nbsp;</p>
                    </label>
                    <input type="text" placeholder="Total price"/>
                </div>
                <div>
                    <input type="submit" value="Enter"/>
                </div>
            </form>
        </div>
    )
}
export default inputButton;