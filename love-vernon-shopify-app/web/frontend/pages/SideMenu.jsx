import './sidemenu.css'

export function SideMenu() {
    return (
        <div id="sidemenu">
            <h1> MENU </h1>
            <p class="sidetext"> Account Settings</p>
            <input type="text" placeholder="Search" id="searchbar"></input>
            <div id="filterbox">
                <p id="filtertitle"> Filter: </p>
                <input type="checkbox" id="sports" name="sports"></input>
                <label for="sports"> Sports </label><br></br>
                <input type="checkbox" id="tech" name="tech"></input>
                <label for="tech"> Tech </label><br></br>
                <input type="checkbox" id="cooking" name="cooking"></input>
                <label for="cooking"> Cooking </label><br></br>
                <input type="checkbox" id="adventure" name="adventure"></input>
                <label for="adventure"> Adventure </label><br></br>
            </div>
            <p class="sidetext"> Edit Your Events </p>
            <p class="sidetext"> Login </p>
        </div>
    )
}