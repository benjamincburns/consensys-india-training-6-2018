const Prompt = require('prompt');
const fs     = require('fs');
const Wallet = require('ethereumjs-wallet');Prompt.start();

var schema = {
    properties: {
        walletFilename: {
            //validator: /^[a-zA-Z0-9\-]+$/,
            //warning: 'Wallet name must be only letters, numbers or dashes',
            required: true,
        },
        password: {
            hidden: true,
            required: true,
        }
    }
};

class PasswordProvider {
  constructor(url) {
    Prompt.get(schema, function(err, result) {
      var strJson = fs.readFileSync(result.walletFilename, 'utf8');
      var wallet  = Wallet.fromV3(strJson, result.password);
      this.privKey = wallet.getPrivateKey();
      this._provider = new HDWalletProvider([privKey.toString('hex')], url);
    });
  }

  send(...args) {
    this._provider.send(...args);
  }

  sendAsync(...args) {
    this._provider.send(...args);
  }
}

module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
  }
};
