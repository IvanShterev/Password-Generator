import { useState } from 'react';

const PasswordGen = () => {
    const [passwordLength, setPasswordLength] = useState(9);
    const [password, setPassword] = useState('');
    const [copied, setCopied] = useState(false); 
    const [options, setOptions] = useState({
        lowercase: false,
        uppercase: false,
        numbers: false,
        symbols: false,
    });

    const handleSliderChange = (event) => {
        setPasswordLength(event.target.value);
    };

    const handleOptionChange = (event) => {
        const { name, checked } = event.target;
        setOptions((prevOptions) => ({
            ...prevOptions,
            [name]: checked,
        }));
    };

    const generatePassword = () => {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()-_=+[]{}<>?';
        
        let characterPool = '';
        if (options.lowercase) characterPool += lowercaseChars;
        if (options.uppercase) characterPool += uppercaseChars;
        if (options.numbers) characterPool += numberChars;
        if (options.symbols) characterPool += symbolChars;

        if (characterPool === '') {
            alert('Please select at least one option for password generation.');
            return;
        }

        let generatedPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characterPool.length);
            generatedPassword += characterPool[randomIndex];
        }
        setPassword(generatedPassword);
    };

    const copyPassword = () => {
        if(password !== ''){
            navigator.clipboard.writeText(password).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        }
    };

    return (
        <>
            <span className='line'></span>
            <div className="pass-len-cont">
                <span>Password Length</span>
                <input
                    type="range"
                    min="6"
                    max="25"
                    value={passwordLength}
                    onChange={handleSliderChange}
                    className="slider"
                />
                <div className="password-length-display">
                    <span id='pass-length'>{passwordLength}</span>
                </div>
            </div>
            <span className='line'></span>

            <div className="pass-options-cont">
                <span>Password Options</span>
                <div className="options">
                    <div className="option">
                        <input type="checkbox" name="lowercase" checked={options.lowercase} onChange={handleOptionChange} />
                        <span>LowerCase (a-z)</span>
                    </div>

                    <div className="option">
                        <input type="checkbox" name="uppercase" checked={options.uppercase} onChange={handleOptionChange} />
                        <span>UpperCase (A-Z)</span>
                    </div>

                    <div className="option">
                        <input type="checkbox" name="numbers" checked={options.numbers} onChange={handleOptionChange} />
                        <span>Numbers (0-9)</span>
                    </div>

                    <div className="option">
                        <input type="checkbox" name="symbols" checked={options.symbols} onChange={handleOptionChange} />
                        <span>Symbols (!-$^+)</span>
                    </div>
                </div>
            </div>
            <span className='line'></span>

            <div className="password-cont">
                <span>Click to Copy Password</span>
                <div className="pass-copy-cont">
                    <span>{password}</span>
                    <svg onClick={copyPassword} className="copy-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    {copied && <span className="copied-text">Copied!</span>}
                </div>
            </div>
            <span className='line'></span>

            <div className="generate-pass-cont">
                <span>Click to Generate Password</span>
                <button onClick={generatePassword}><span>GENERATE PASSWORD</span></button>
            </div>
        </>
    );
};

export default PasswordGen;
