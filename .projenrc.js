const { CdktfProviderProject } = require('@cdktf/provider-project');

const project = new CdktfProviderProject({
  terraformProvider: 'azurerm@~> 2.0',
  eslint: false,
});

project.synth();
