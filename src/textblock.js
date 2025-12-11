import './App.css';

function TextBlock() {
    return (
        <div id="textblock">
            <div id="textblock-container">
                <h1 id="textblock-title">Sample Text?</h1>
                <p id="textblock-content">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /><br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /><br />
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <footer id='textblock-footer'>Demo Created With 🧡 By&nbsp;<a id="textblock-devsense" href="https://youtube.com/c/DevSense19">DevSense</a></footer>
        </div>
    );
}

export default TextBlock;