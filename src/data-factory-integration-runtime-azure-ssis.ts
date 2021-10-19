// https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryIntegrationRuntimeAzureSsisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#data_factory_name DataFactoryIntegrationRuntimeAzureSsis#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#description DataFactoryIntegrationRuntimeAzureSsis#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#edition DataFactoryIntegrationRuntimeAzureSsis#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#license_type DataFactoryIntegrationRuntimeAzureSsis#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#location DataFactoryIntegrationRuntimeAzureSsis#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#max_parallel_executions_per_node DataFactoryIntegrationRuntimeAzureSsis#max_parallel_executions_per_node}
  */
  readonly maxParallelExecutionsPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#name DataFactoryIntegrationRuntimeAzureSsis#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#node_size DataFactoryIntegrationRuntimeAzureSsis#node_size}
  */
  readonly nodeSize: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#number_of_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#resource_group_name DataFactoryIntegrationRuntimeAzureSsis#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * catalog_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#catalog_info DataFactoryIntegrationRuntimeAzureSsis#catalog_info}
  */
  readonly catalogInfo?: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo;
  /**
  * custom_setup_script block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#custom_setup_script DataFactoryIntegrationRuntimeAzureSsis#custom_setup_script}
  */
  readonly customSetupScript?: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript;
  /**
  * express_custom_setup block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#express_custom_setup DataFactoryIntegrationRuntimeAzureSsis#express_custom_setup}
  */
  readonly expressCustomSetup?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup;
  /**
  * package_store block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#package_store DataFactoryIntegrationRuntimeAzureSsis#package_store}
  */
  readonly packageStore?: DataFactoryIntegrationRuntimeAzureSsisPackageStore[];
  /**
  * proxy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#proxy DataFactoryIntegrationRuntimeAzureSsis#proxy}
  */
  readonly proxy?: DataFactoryIntegrationRuntimeAzureSsisProxy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#timeouts DataFactoryIntegrationRuntimeAzureSsis#timeouts}
  */
  readonly timeouts?: DataFactoryIntegrationRuntimeAzureSsisTimeouts;
  /**
  * vnet_integration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#vnet_integration DataFactoryIntegrationRuntimeAzureSsis#vnet_integration}
  */
  readonly vnetIntegration?: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration;
}
export interface DataFactoryIntegrationRuntimeAzureSsisCatalogInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#administrator_login DataFactoryIntegrationRuntimeAzureSsis#administrator_login}
  */
  readonly administratorLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#administrator_password DataFactoryIntegrationRuntimeAzureSsis#administrator_password}
  */
  readonly administratorPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#dual_standby_pair_name DataFactoryIntegrationRuntimeAzureSsis#dual_standby_pair_name}
  */
  readonly dualStandbyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#pricing_tier DataFactoryIntegrationRuntimeAzureSsis#pricing_tier}
  */
  readonly pricingTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#server_endpoint DataFactoryIntegrationRuntimeAzureSsis#server_endpoint}
  */
  readonly serverEndpoint: string;
}

function dataFactoryIntegrationRuntimeAzureSsisCatalogInfoToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference | DataFactoryIntegrationRuntimeAzureSsisCatalogInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrator_login: cdktf.stringToTerraform(struct!.administratorLogin),
    administrator_password: cdktf.stringToTerraform(struct!.administratorPassword),
    dual_standby_pair_name: cdktf.stringToTerraform(struct!.dualStandbyPairName),
    pricing_tier: cdktf.stringToTerraform(struct!.pricingTier),
    server_endpoint: cdktf.stringToTerraform(struct!.serverEndpoint),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // administrator_login - computed: false, optional: true, required: false
  private _administratorLogin?: string | undefined; 
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string | undefined) {
    this._administratorLogin = value;
  }
  public resetAdministratorLogin() {
    this._administratorLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin
  }

  // administrator_password - computed: false, optional: true, required: false
  private _administratorPassword?: string | undefined; 
  public get administratorPassword() {
    return this.getStringAttribute('administrator_password');
  }
  public set administratorPassword(value: string | undefined) {
    this._administratorPassword = value;
  }
  public resetAdministratorPassword() {
    this._administratorPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorPasswordInput() {
    return this._administratorPassword
  }

  // dual_standby_pair_name - computed: false, optional: true, required: false
  private _dualStandbyPairName?: string | undefined; 
  public get dualStandbyPairName() {
    return this.getStringAttribute('dual_standby_pair_name');
  }
  public set dualStandbyPairName(value: string | undefined) {
    this._dualStandbyPairName = value;
  }
  public resetDualStandbyPairName() {
    this._dualStandbyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStandbyPairNameInput() {
    return this._dualStandbyPairName
  }

  // pricing_tier - computed: false, optional: true, required: false
  private _pricingTier?: string | undefined; 
  public get pricingTier() {
    return this.getStringAttribute('pricing_tier');
  }
  public set pricingTier(value: string | undefined) {
    this._pricingTier = value;
  }
  public resetPricingTier() {
    this._pricingTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingTierInput() {
    return this._pricingTier
  }

  // server_endpoint - computed: false, optional: false, required: true
  private _serverEndpoint?: string; 
  public get serverEndpoint() {
    return this.getStringAttribute('server_endpoint');
  }
  public set serverEndpoint(value: string) {
    this._serverEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverEndpointInput() {
    return this._serverEndpoint
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#blob_container_uri DataFactoryIntegrationRuntimeAzureSsis#blob_container_uri}
  */
  readonly blobContainerUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#sas_token DataFactoryIntegrationRuntimeAzureSsis#sas_token}
  */
  readonly sasToken: string;
}

function dataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference | DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_container_uri: cdktf.stringToTerraform(struct!.blobContainerUri),
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // blob_container_uri - computed: false, optional: false, required: true
  private _blobContainerUri?: string; 
  public get blobContainerUri() {
    return this.getStringAttribute('blob_container_uri');
  }
  public set blobContainerUri(value: string) {
    this._blobContainerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blobContainerUriInput() {
    return this._blobContainerUri
  }

  // sas_token - computed: false, optional: false, required: true
  private _sasToken?: string; 
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }
  public set sasToken(value: string) {
    this._sasToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenInput() {
    return this._sasToken
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}
  */
  readonly secretVersion?: string;
}

function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference | DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // linked_service_name - computed: false, optional: false, required: true
  private _linkedServiceName?: string; 
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string) {
    this._linkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceNameInput() {
    return this._linkedServiceName
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName
  }

  // secret_version - computed: false, optional: true, required: false
  private _secretVersion?: string | undefined; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string | undefined) {
    this._secretVersion = value;
  }
  public resetSecretVersion() {
    this._secretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#password DataFactoryIntegrationRuntimeAzureSsis#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#target_name DataFactoryIntegrationRuntimeAzureSsis#target_name}
  */
  readonly targetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#user_name DataFactoryIntegrationRuntimeAzureSsis#user_name}
  */
  readonly userName: string;
  /**
  * key_vault_password block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#key_vault_password DataFactoryIntegrationRuntimeAzureSsis#key_vault_password}
  */
  readonly keyVaultPassword?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword;
}

function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    target_name: cdktf.stringToTerraform(struct!.targetName),
    user_name: cdktf.stringToTerraform(struct!.userName),
    key_vault_password: dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordToTerraform(struct!.keyVaultPassword),
  }
}

export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}
  */
  readonly secretVersion?: string;
}

function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference | DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // linked_service_name - computed: false, optional: false, required: true
  private _linkedServiceName?: string; 
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string) {
    this._linkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceNameInput() {
    return this._linkedServiceName
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName
  }

  // secret_version - computed: false, optional: true, required: false
  private _secretVersion?: string | undefined; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string | undefined) {
    this._secretVersion = value;
  }
  public resetSecretVersion() {
    this._secretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#license DataFactoryIntegrationRuntimeAzureSsis#license}
  */
  readonly license?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#name DataFactoryIntegrationRuntimeAzureSsis#name}
  */
  readonly name: string;
  /**
  * key_vault_license block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#key_vault_license DataFactoryIntegrationRuntimeAzureSsis#key_vault_license}
  */
  readonly keyVaultLicense?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense;
}

function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license: cdktf.stringToTerraform(struct!.license),
    name: cdktf.stringToTerraform(struct!.name),
    key_vault_license: dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseToTerraform(struct!.keyVaultLicense),
  }
}

export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#environment DataFactoryIntegrationRuntimeAzureSsis#environment}
  */
  readonly environment?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#powershell_version DataFactoryIntegrationRuntimeAzureSsis#powershell_version}
  */
  readonly powershellVersion?: string;
  /**
  * command_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#command_key DataFactoryIntegrationRuntimeAzureSsis#command_key}
  */
  readonly commandKey?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey[];
  /**
  * component block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#component DataFactoryIntegrationRuntimeAzureSsis#component}
  */
  readonly component?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent[];
}

function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference | DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    powershell_version: cdktf.stringToTerraform(struct!.powershellVersion),
    command_key: cdktf.listMapper(dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyToTerraform)(struct!.commandKey),
    component: cdktf.listMapper(dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentToTerraform)(struct!.component),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get environment() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('environment') as any;
  }
  public set environment(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment
  }

  // powershell_version - computed: false, optional: true, required: false
  private _powershellVersion?: string | undefined; 
  public get powershellVersion() {
    return this.getStringAttribute('powershell_version');
  }
  public set powershellVersion(value: string | undefined) {
    this._powershellVersion = value;
  }
  public resetPowershellVersion() {
    this._powershellVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powershellVersionInput() {
    return this._powershellVersion
  }

  // command_key - computed: false, optional: true, required: false
  private _commandKey?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey[] | undefined; 
  public get commandKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('command_key') as any;
  }
  public set commandKey(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey[] | undefined) {
    this._commandKey = value;
  }
  public resetCommandKey() {
    this._commandKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandKeyInput() {
    return this._commandKey
  }

  // component - computed: false, optional: true, required: false
  private _component?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent[] | undefined; 
  public get component() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('component') as any;
  }
  public set component(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent[] | undefined) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisPackageStore {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#name DataFactoryIntegrationRuntimeAzureSsis#name}
  */
  readonly name: string;
}

function dataFactoryIntegrationRuntimeAzureSsisPackageStoreToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisPackageStore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataFactoryIntegrationRuntimeAzureSsisProxy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#path DataFactoryIntegrationRuntimeAzureSsis#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#self_hosted_integration_runtime_name DataFactoryIntegrationRuntimeAzureSsis#self_hosted_integration_runtime_name}
  */
  readonly selfHostedIntegrationRuntimeName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#staging_storage_linked_service_name DataFactoryIntegrationRuntimeAzureSsis#staging_storage_linked_service_name}
  */
  readonly stagingStorageLinkedServiceName: string;
}

function dataFactoryIntegrationRuntimeAzureSsisProxyToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference | DataFactoryIntegrationRuntimeAzureSsisProxy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    self_hosted_integration_runtime_name: cdktf.stringToTerraform(struct!.selfHostedIntegrationRuntimeName),
    staging_storage_linked_service_name: cdktf.stringToTerraform(struct!.stagingStorageLinkedServiceName),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // self_hosted_integration_runtime_name - computed: false, optional: false, required: true
  private _selfHostedIntegrationRuntimeName?: string; 
  public get selfHostedIntegrationRuntimeName() {
    return this.getStringAttribute('self_hosted_integration_runtime_name');
  }
  public set selfHostedIntegrationRuntimeName(value: string) {
    this._selfHostedIntegrationRuntimeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selfHostedIntegrationRuntimeNameInput() {
    return this._selfHostedIntegrationRuntimeName
  }

  // staging_storage_linked_service_name - computed: false, optional: false, required: true
  private _stagingStorageLinkedServiceName?: string; 
  public get stagingStorageLinkedServiceName() {
    return this.getStringAttribute('staging_storage_linked_service_name');
  }
  public set stagingStorageLinkedServiceName(value: string) {
    this._stagingStorageLinkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingStorageLinkedServiceNameInput() {
    return this._stagingStorageLinkedServiceName
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#create DataFactoryIntegrationRuntimeAzureSsis#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#delete DataFactoryIntegrationRuntimeAzureSsis#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#read DataFactoryIntegrationRuntimeAzureSsis#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#update DataFactoryIntegrationRuntimeAzureSsis#update}
  */
  readonly update?: string;
}

function dataFactoryIntegrationRuntimeAzureSsisTimeoutsToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference | DataFactoryIntegrationRuntimeAzureSsisTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisVnetIntegration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#public_ips DataFactoryIntegrationRuntimeAzureSsis#public_ips}
  */
  readonly publicIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#subnet_id DataFactoryIntegrationRuntimeAzureSsis#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#subnet_name DataFactoryIntegrationRuntimeAzureSsis#subnet_name}
  */
  readonly subnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#vnet_id DataFactoryIntegrationRuntimeAzureSsis#vnet_id}
  */
  readonly vnetId?: string;
}

function dataFactoryIntegrationRuntimeAzureSsisVnetIntegrationToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference | DataFactoryIntegrationRuntimeAzureSsisVnetIntegration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.publicIps),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    vnet_id: cdktf.stringToTerraform(struct!.vnetId),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // public_ips - computed: false, optional: true, required: false
  private _publicIps?: string[] | undefined; 
  public get publicIps() {
    return this.getListAttribute('public_ips');
  }
  public set publicIps(value: string[] | undefined) {
    this._publicIps = value;
  }
  public resetPublicIps() {
    this._publicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpsInput() {
    return this._publicIps
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string | undefined; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // subnet_name - computed: false, optional: true, required: false
  private _subnetName?: string | undefined; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string | undefined) {
    this._subnetName = value;
  }
  public resetSubnetName() {
    this._subnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName
  }

  // vnet_id - computed: false, optional: true, required: false
  private _vnetId?: string | undefined; 
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
  public set vnetId(value: string | undefined) {
    this._vnetId = value;
  }
  public resetVnetId() {
    this._vnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIdInput() {
    return this._vnetId
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html azurerm_data_factory_integration_runtime_azure_ssis}
*/
export class DataFactoryIntegrationRuntimeAzureSsis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_integration_runtime_azure_ssis";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html azurerm_data_factory_integration_runtime_azure_ssis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryIntegrationRuntimeAzureSsisConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryIntegrationRuntimeAzureSsisConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_integration_runtime_azure_ssis',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._edition = config.edition;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._maxParallelExecutionsPerNode = config.maxParallelExecutionsPerNode;
    this._name = config.name;
    this._nodeSize = config.nodeSize;
    this._numberOfNodes = config.numberOfNodes;
    this._resourceGroupName = config.resourceGroupName;
    this._catalogInfo = config.catalogInfo;
    this._customSetupScript = config.customSetupScript;
    this._expressCustomSetup = config.expressCustomSetup;
    this._packageStore = config.packageStore;
    this._proxy = config.proxy;
    this._timeouts = config.timeouts;
    this._vnetIntegration = config.vnetIntegration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName?: string; 
  public get dataFactoryName() {
    return this.getStringAttribute('data_factory_name');
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryNameInput() {
    return this._dataFactoryName
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // edition - computed: false, optional: true, required: false
  private _edition?: string | undefined; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string | undefined) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string | undefined; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string | undefined) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // max_parallel_executions_per_node - computed: false, optional: true, required: false
  private _maxParallelExecutionsPerNode?: number | undefined; 
  public get maxParallelExecutionsPerNode() {
    return this.getNumberAttribute('max_parallel_executions_per_node');
  }
  public set maxParallelExecutionsPerNode(value: number | undefined) {
    this._maxParallelExecutionsPerNode = value;
  }
  public resetMaxParallelExecutionsPerNode() {
    this._maxParallelExecutionsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelExecutionsPerNodeInput() {
    return this._maxParallelExecutionsPerNode
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // node_size - computed: false, optional: false, required: true
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize
  }

  // number_of_nodes - computed: false, optional: true, required: false
  private _numberOfNodes?: number | undefined; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number | undefined) {
    this._numberOfNodes = value;
  }
  public resetNumberOfNodes() {
    this._numberOfNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // catalog_info - computed: false, optional: true, required: false
  private _catalogInfo?: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo | undefined; 
  private __catalogInfoOutput = new DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference(this as any, "catalog_info", true);
  public get catalogInfo() {
    return this.__catalogInfoOutput;
  }
  public putCatalogInfo(value: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo | undefined) {
    this._catalogInfo = value;
  }
  public resetCatalogInfo() {
    this._catalogInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInfoInput() {
    return this._catalogInfo
  }

  // custom_setup_script - computed: false, optional: true, required: false
  private _customSetupScript?: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript | undefined; 
  private __customSetupScriptOutput = new DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference(this as any, "custom_setup_script", true);
  public get customSetupScript() {
    return this.__customSetupScriptOutput;
  }
  public putCustomSetupScript(value: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript | undefined) {
    this._customSetupScript = value;
  }
  public resetCustomSetupScript() {
    this._customSetupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSetupScriptInput() {
    return this._customSetupScript
  }

  // express_custom_setup - computed: false, optional: true, required: false
  private _expressCustomSetup?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup | undefined; 
  private __expressCustomSetupOutput = new DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference(this as any, "express_custom_setup", true);
  public get expressCustomSetup() {
    return this.__expressCustomSetupOutput;
  }
  public putExpressCustomSetup(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup | undefined) {
    this._expressCustomSetup = value;
  }
  public resetExpressCustomSetup() {
    this._expressCustomSetup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressCustomSetupInput() {
    return this._expressCustomSetup
  }

  // package_store - computed: false, optional: true, required: false
  private _packageStore?: DataFactoryIntegrationRuntimeAzureSsisPackageStore[] | undefined; 
  public get packageStore() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('package_store') as any;
  }
  public set packageStore(value: DataFactoryIntegrationRuntimeAzureSsisPackageStore[] | undefined) {
    this._packageStore = value;
  }
  public resetPackageStore() {
    this._packageStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageStoreInput() {
    return this._packageStore
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: DataFactoryIntegrationRuntimeAzureSsisProxy | undefined; 
  private __proxyOutput = new DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference(this as any, "proxy", true);
  public get proxy() {
    return this.__proxyOutput;
  }
  public putProxy(value: DataFactoryIntegrationRuntimeAzureSsisProxy | undefined) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryIntegrationRuntimeAzureSsisTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryIntegrationRuntimeAzureSsisTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // vnet_integration - computed: false, optional: true, required: false
  private _vnetIntegration?: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration | undefined; 
  private __vnetIntegrationOutput = new DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference(this as any, "vnet_integration", true);
  public get vnetIntegration() {
    return this.__vnetIntegrationOutput;
  }
  public putVnetIntegration(value: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration | undefined) {
    this._vnetIntegration = value;
  }
  public resetVnetIntegration() {
    this._vnetIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIntegrationInput() {
    return this._vnetIntegration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      edition: cdktf.stringToTerraform(this._edition),
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      max_parallel_executions_per_node: cdktf.numberToTerraform(this._maxParallelExecutionsPerNode),
      name: cdktf.stringToTerraform(this._name),
      node_size: cdktf.stringToTerraform(this._nodeSize),
      number_of_nodes: cdktf.numberToTerraform(this._numberOfNodes),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      catalog_info: dataFactoryIntegrationRuntimeAzureSsisCatalogInfoToTerraform(this._catalogInfo),
      custom_setup_script: dataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptToTerraform(this._customSetupScript),
      express_custom_setup: dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupToTerraform(this._expressCustomSetup),
      package_store: cdktf.listMapper(dataFactoryIntegrationRuntimeAzureSsisPackageStoreToTerraform)(this._packageStore),
      proxy: dataFactoryIntegrationRuntimeAzureSsisProxyToTerraform(this._proxy),
      timeouts: dataFactoryIntegrationRuntimeAzureSsisTimeoutsToTerraform(this._timeouts),
      vnet_integration: dataFactoryIntegrationRuntimeAzureSsisVnetIntegrationToTerraform(this._vnetIntegration),
    };
  }
}
