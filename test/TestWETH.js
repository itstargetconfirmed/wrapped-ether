const Token = artifacts.require('WETH')

contract('WETH Test', async accounts  => {

    it('first account balance should be 10 WETH after transfering 10 ETH.', async () => {
        // get contract instance.
        const token = await Token.deployed(); 

        // use web3 to get the address of the first account. 
        const addresses  = await web3.eth.getAccounts(); 
        const first_address = addresses[0];

        // send 10 ETH to WETH contract.
        const tx = await token.deposit({
            from: first_address,
            value: '10000000000000000000'
        });

        // check WETH balance of first account. 
        const balance = await token.balanceOf.call(first_address);

        // test balance for 10 WETH. 
        assert.equal(balance, '10000000000000000000');
    });

    it('first account balance should be 5 WETH.', async () => {
        
        const token = await Token.deployed(); 

        // use web3 to get the address of the first account. 
        const addresses  = await web3.eth.getAccounts(); 
        const first_address = addresses[0];


        // withdraw 5 WETH. 
        const tx = await token.withdraw('5000000000000000000', {
            from: first_address
        });

        // check WETH balance of first account. 
        const balance = await token.balanceOf.call(first_address);

        // test balance for 5 WETH. 
        assert.equal(balance, '5000000000000000000');

    });

});