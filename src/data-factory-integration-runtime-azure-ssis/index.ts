// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryIntegrationRuntimeAzureSsisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#credential_name DataFactoryIntegrationRuntimeAzureSsis#credential_name}
  */
  readonly credentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#data_factory_id DataFactoryIntegrationRuntimeAzureSsis#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#description DataFactoryIntegrationRuntimeAzureSsis#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#edition DataFactoryIntegrationRuntimeAzureSsis#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#id DataFactoryIntegrationRuntimeAzureSsis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#license_type DataFactoryIntegrationRuntimeAzureSsis#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#location DataFactoryIntegrationRuntimeAzureSsis#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#max_parallel_executions_per_node DataFactoryIntegrationRuntimeAzureSsis#max_parallel_executions_per_node}
  */
  readonly maxParallelExecutionsPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#node_size DataFactoryIntegrationRuntimeAzureSsis#node_size}
  */
  readonly nodeSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * catalog_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#catalog_info DataFactoryIntegrationRuntimeAzureSsis#catalog_info}
  */
  readonly catalogInfo?: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo;
  /**
  * copy_compute_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#copy_compute_scale DataFactoryIntegrationRuntimeAzureSsis#copy_compute_scale}
  */
  readonly copyComputeScale?: DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale;
  /**
  * custom_setup_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#custom_setup_script DataFactoryIntegrationRuntimeAzureSsis#custom_setup_script}
  */
  readonly customSetupScript?: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript;
  /**
  * express_custom_setup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#express_custom_setup DataFactoryIntegrationRuntimeAzureSsis#express_custom_setup}
  */
  readonly expressCustomSetup?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup;
  /**
  * express_vnet_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#express_vnet_integration DataFactoryIntegrationRuntimeAzureSsis#express_vnet_integration}
  */
  readonly expressVnetIntegration?: DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration;
  /**
  * package_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#package_store DataFactoryIntegrationRuntimeAzureSsis#package_store}
  */
  readonly packageStore?: DataFactoryIntegrationRuntimeAzureSsisPackageStore[] | cdktf.IResolvable;
  /**
  * pipeline_external_compute_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#pipeline_external_compute_scale DataFactoryIntegrationRuntimeAzureSsis#pipeline_external_compute_scale}
  */
  readonly pipelineExternalComputeScale?: DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#proxy DataFactoryIntegrationRuntimeAzureSsis#proxy}
  */
  readonly proxy?: DataFactoryIntegrationRuntimeAzureSsisProxy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#timeouts DataFactoryIntegrationRuntimeAzureSsis#timeouts}
  */
  readonly timeouts?: DataFactoryIntegrationRuntimeAzureSsisTimeouts;
  /**
  * vnet_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#vnet_integration DataFactoryIntegrationRuntimeAzureSsis#vnet_integration}
  */
  readonly vnetIntegration?: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration;
}
export interface DataFactoryIntegrationRuntimeAzureSsisCatalogInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#administrator_login DataFactoryIntegrationRuntimeAzureSsis#administrator_login}
  */
  readonly administratorLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#administrator_password DataFactoryIntegrationRuntimeAzureSsis#administrator_password}
  */
  readonly administratorPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#dual_standby_pair_name DataFactoryIntegrationRuntimeAzureSsis#dual_standby_pair_name}
  */
  readonly dualStandbyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#elastic_pool_name DataFactoryIntegrationRuntimeAzureSsis#elastic_pool_name}
  */
  readonly elasticPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#pricing_tier DataFactoryIntegrationRuntimeAzureSsis#pricing_tier}
  */
  readonly pricingTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#server_endpoint DataFactoryIntegrationRuntimeAzureSsis#server_endpoint}
  */
  readonly serverEndpoint: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisCatalogInfoToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference | DataFactoryIntegrationRuntimeAzureSsisCatalogInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrator_login: cdktf.stringToTerraform(struct!.administratorLogin),
    administrator_password: cdktf.stringToTerraform(struct!.administratorPassword),
    dual_standby_pair_name: cdktf.stringToTerraform(struct!.dualStandbyPairName),
    elastic_pool_name: cdktf.stringToTerraform(struct!.elasticPoolName),
    pricing_tier: cdktf.stringToTerraform(struct!.pricingTier),
    server_endpoint: cdktf.stringToTerraform(struct!.serverEndpoint),
  }
}


export function dataFactoryIntegrationRuntimeAzureSsisCatalogInfoToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference | DataFactoryIntegrationRuntimeAzureSsisCatalogInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    administrator_login: {
      value: cdktf.stringToHclTerraform(struct!.administratorLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    administrator_password: {
      value: cdktf.stringToHclTerraform(struct!.administratorPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dual_standby_pair_name: {
      value: cdktf.stringToHclTerraform(struct!.dualStandbyPairName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elastic_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.elasticPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pricing_tier: {
      value: cdktf.stringToHclTerraform(struct!.pricingTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.serverEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisCatalogInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._administratorLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.administratorLogin = this._administratorLogin;
    }
    if (this._administratorPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.administratorPassword = this._administratorPassword;
    }
    if (this._dualStandbyPairName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStandbyPairName = this._dualStandbyPairName;
    }
    if (this._elasticPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticPoolName = this._elasticPoolName;
    }
    if (this._pricingTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.pricingTier = this._pricingTier;
    }
    if (this._serverEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverEndpoint = this._serverEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._administratorLogin = undefined;
      this._administratorPassword = undefined;
      this._dualStandbyPairName = undefined;
      this._elasticPoolName = undefined;
      this._pricingTier = undefined;
      this._serverEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._administratorLogin = value.administratorLogin;
      this._administratorPassword = value.administratorPassword;
      this._dualStandbyPairName = value.dualStandbyPairName;
      this._elasticPoolName = value.elasticPoolName;
      this._pricingTier = value.pricingTier;
      this._serverEndpoint = value.serverEndpoint;
    }
  }

  // administrator_login - computed: false, optional: true, required: false
  private _administratorLogin?: string; 
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }
  public resetAdministratorLogin() {
    this._administratorLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin;
  }

  // administrator_password - computed: false, optional: true, required: false
  private _administratorPassword?: string; 
  public get administratorPassword() {
    return this.getStringAttribute('administrator_password');
  }
  public set administratorPassword(value: string) {
    this._administratorPassword = value;
  }
  public resetAdministratorPassword() {
    this._administratorPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorPasswordInput() {
    return this._administratorPassword;
  }

  // dual_standby_pair_name - computed: false, optional: true, required: false
  private _dualStandbyPairName?: string; 
  public get dualStandbyPairName() {
    return this.getStringAttribute('dual_standby_pair_name');
  }
  public set dualStandbyPairName(value: string) {
    this._dualStandbyPairName = value;
  }
  public resetDualStandbyPairName() {
    this._dualStandbyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStandbyPairNameInput() {
    return this._dualStandbyPairName;
  }

  // elastic_pool_name - computed: false, optional: true, required: false
  private _elasticPoolName?: string; 
  public get elasticPoolName() {
    return this.getStringAttribute('elastic_pool_name');
  }
  public set elasticPoolName(value: string) {
    this._elasticPoolName = value;
  }
  public resetElasticPoolName() {
    this._elasticPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticPoolNameInput() {
    return this._elasticPoolName;
  }

  // pricing_tier - computed: false, optional: true, required: false
  private _pricingTier?: string; 
  public get pricingTier() {
    return this.getStringAttribute('pricing_tier');
  }
  public set pricingTier(value: string) {
    this._pricingTier = value;
  }
  public resetPricingTier() {
    this._pricingTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingTierInput() {
    return this._pricingTier;
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
    return this._serverEndpoint;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#data_integration_unit DataFactoryIntegrationRuntimeAzureSsis#data_integration_unit}
  */
  readonly dataIntegrationUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#time_to_live DataFactoryIntegrationRuntimeAzureSsis#time_to_live}
  */
  readonly timeToLive?: number;
}

export function dataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference | DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_integration_unit: cdktf.numberToTerraform(struct!.dataIntegrationUnit),
    time_to_live: cdktf.numberToTerraform(struct!.timeToLive),
  }
}


export function dataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference | DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_integration_unit: {
      value: cdktf.numberToHclTerraform(struct!.dataIntegrationUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_to_live: {
      value: cdktf.numberToHclTerraform(struct!.timeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataIntegrationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataIntegrationUnit = this._dataIntegrationUnit;
    }
    if (this._timeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLive = this._timeToLive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataIntegrationUnit = undefined;
      this._timeToLive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataIntegrationUnit = value.dataIntegrationUnit;
      this._timeToLive = value.timeToLive;
    }
  }

  // data_integration_unit - computed: false, optional: true, required: false
  private _dataIntegrationUnit?: number; 
  public get dataIntegrationUnit() {
    return this.getNumberAttribute('data_integration_unit');
  }
  public set dataIntegrationUnit(value: number) {
    this._dataIntegrationUnit = value;
  }
  public resetDataIntegrationUnit() {
    this._dataIntegrationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataIntegrationUnitInput() {
    return this._dataIntegrationUnit;
  }

  // time_to_live - computed: false, optional: true, required: false
  private _timeToLive?: number; 
  public get timeToLive() {
    return this.getNumberAttribute('time_to_live');
  }
  public set timeToLive(value: number) {
    this._timeToLive = value;
  }
  public resetTimeToLive() {
    this._timeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInput() {
    return this._timeToLive;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#blob_container_uri DataFactoryIntegrationRuntimeAzureSsis#blob_container_uri}
  */
  readonly blobContainerUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#sas_token DataFactoryIntegrationRuntimeAzureSsis#sas_token}
  */
  readonly sasToken: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference | DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_container_uri: cdktf.stringToTerraform(struct!.blobContainerUri),
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
  }
}


export function dataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference | DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blob_container_uri: {
      value: cdktf.stringToHclTerraform(struct!.blobContainerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sas_token: {
      value: cdktf.stringToHclTerraform(struct!.sasToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobContainerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobContainerUri = this._blobContainerUri;
    }
    if (this._sasToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasToken = this._sasToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blobContainerUri = undefined;
      this._sasToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blobContainerUri = value.blobContainerUri;
      this._sasToken = value.sasToken;
    }
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
    return this._blobContainerUri;
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
    return this._sasToken;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}
  */
  readonly secretVersion?: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference | DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference | DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linked_service_name: {
      value: cdktf.stringToHclTerraform(struct!.linkedServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkedServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedServiceName = this._linkedServiceName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkedServiceName = undefined;
      this._parameters = undefined;
      this._secretName = undefined;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkedServiceName = value.linkedServiceName;
      this._parameters = value.parameters;
      this._secretName = value.secretName;
      this._secretVersion = value.secretVersion;
    }
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
    return this._linkedServiceName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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
    return this._secretName;
  }

  // secret_version - computed: false, optional: true, required: false
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  public resetSecretVersion() {
    this._secretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#password DataFactoryIntegrationRuntimeAzureSsis#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#target_name DataFactoryIntegrationRuntimeAzureSsis#target_name}
  */
  readonly targetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#user_name DataFactoryIntegrationRuntimeAzureSsis#user_name}
  */
  readonly userName: string;
  /**
  * key_vault_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#key_vault_password DataFactoryIntegrationRuntimeAzureSsis#key_vault_password}
  */
  readonly keyVaultPassword?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword;
}

export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_name: {
      value: cdktf.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_password: {
      value: dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordToHclTerraform(struct!.keyVaultPassword),
      isBlock: true,
      type: "list",
      storageClassType: "DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._keyVaultPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultPassword = this._keyVaultPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._targetName = undefined;
      this._userName = undefined;
      this._keyVaultPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._targetName = value.targetName;
      this._userName = value.userName;
      this._keyVaultPassword.internalValue = value.keyVaultPassword;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // target_name - computed: false, optional: false, required: true
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // key_vault_password - computed: false, optional: true, required: false
  private _keyVaultPassword = new DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference(this, "key_vault_password");
  public get keyVaultPassword() {
    return this._keyVaultPassword;
  }
  public putKeyVaultPassword(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword) {
    this._keyVaultPassword.internalValue = value;
  }
  public resetKeyVaultPassword() {
    this._keyVaultPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultPasswordInput() {
    return this._keyVaultPassword.internalValue;
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList extends cdktf.ComplexList {
  public internalValue? : DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference {
    return new DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}
  */
  readonly secretVersion?: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference | DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference | DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linked_service_name: {
      value: cdktf.stringToHclTerraform(struct!.linkedServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkedServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedServiceName = this._linkedServiceName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkedServiceName = undefined;
      this._parameters = undefined;
      this._secretName = undefined;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkedServiceName = value.linkedServiceName;
      this._parameters = value.parameters;
      this._secretName = value.secretName;
      this._secretVersion = value.secretVersion;
    }
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
    return this._linkedServiceName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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
    return this._secretName;
  }

  // secret_version - computed: false, optional: true, required: false
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  public resetSecretVersion() {
    this._secretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#license DataFactoryIntegrationRuntimeAzureSsis#license}
  */
  readonly license?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}
  */
  readonly name: string;
  /**
  * key_vault_license block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#key_vault_license DataFactoryIntegrationRuntimeAzureSsis#key_vault_license}
  */
  readonly keyVaultLicense?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense;
}

export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license: cdktf.stringToTerraform(struct!.license),
    name: cdktf.stringToTerraform(struct!.name),
    key_vault_license: dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseToTerraform(struct!.keyVaultLicense),
  }
}


export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_license: {
      value: dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseToHclTerraform(struct!.keyVaultLicense),
      isBlock: true,
      type: "list",
      storageClassType: "DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._keyVaultLicense?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultLicense = this._keyVaultLicense?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._license = undefined;
      this._name = undefined;
      this._keyVaultLicense.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._license = value.license;
      this._name = value.name;
      this._keyVaultLicense.internalValue = value.keyVaultLicense;
    }
  }

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
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
    return this._name;
  }

  // key_vault_license - computed: false, optional: true, required: false
  private _keyVaultLicense = new DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference(this, "key_vault_license");
  public get keyVaultLicense() {
    return this._keyVaultLicense;
  }
  public putKeyVaultLicense(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense) {
    this._keyVaultLicense.internalValue = value;
  }
  public resetKeyVaultLicense() {
    this._keyVaultLicense.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultLicenseInput() {
    return this._keyVaultLicense.internalValue;
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList extends cdktf.ComplexList {
  public internalValue? : DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference {
    return new DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#environment DataFactoryIntegrationRuntimeAzureSsis#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#powershell_version DataFactoryIntegrationRuntimeAzureSsis#powershell_version}
  */
  readonly powershellVersion?: string;
  /**
  * command_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#command_key DataFactoryIntegrationRuntimeAzureSsis#command_key}
  */
  readonly commandKey?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey[] | cdktf.IResolvable;
  /**
  * component block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#component DataFactoryIntegrationRuntimeAzureSsis#component}
  */
  readonly component?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent[] | cdktf.IResolvable;
}

export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference | DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    powershell_version: cdktf.stringToTerraform(struct!.powershellVersion),
    command_key: cdktf.listMapper(dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyToTerraform, true)(struct!.commandKey),
    component: cdktf.listMapper(dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentToTerraform, true)(struct!.component),
  }
}


export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference | DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    powershell_version: {
      value: cdktf.stringToHclTerraform(struct!.powershellVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command_key: {
      value: cdktf.listMapperHcl(dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyToHclTerraform, true)(struct!.commandKey),
      isBlock: true,
      type: "list",
      storageClassType: "DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList",
    },
    component: {
      value: cdktf.listMapperHcl(dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentToHclTerraform, true)(struct!.component),
      isBlock: true,
      type: "list",
      storageClassType: "DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._powershellVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.powershellVersion = this._powershellVersion;
    }
    if (this._commandKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandKey = this._commandKey?.internalValue;
    }
    if (this._component?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environment = undefined;
      this._powershellVersion = undefined;
      this._commandKey.internalValue = undefined;
      this._component.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environment = value.environment;
      this._powershellVersion = value.powershellVersion;
      this._commandKey.internalValue = value.commandKey;
      this._component.internalValue = value.component;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // powershell_version - computed: false, optional: true, required: false
  private _powershellVersion?: string; 
  public get powershellVersion() {
    return this.getStringAttribute('powershell_version');
  }
  public set powershellVersion(value: string) {
    this._powershellVersion = value;
  }
  public resetPowershellVersion() {
    this._powershellVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powershellVersionInput() {
    return this._powershellVersion;
  }

  // command_key - computed: false, optional: true, required: false
  private _commandKey = new DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList(this, "command_key", false);
  public get commandKey() {
    return this._commandKey;
  }
  public putCommandKey(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey[] | cdktf.IResolvable) {
    this._commandKey.internalValue = value;
  }
  public resetCommandKey() {
    this._commandKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandKeyInput() {
    return this._commandKey.internalValue;
  }

  // component - computed: false, optional: true, required: false
  private _component = new DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList(this, "component", false);
  public get component() {
    return this._component;
  }
  public putComponent(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent[] | cdktf.IResolvable) {
    this._component.internalValue = value;
  }
  public resetComponent() {
    this._component.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component.internalValue;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_id DataFactoryIntegrationRuntimeAzureSsis#subnet_id}
  */
  readonly subnetId: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference | DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function dataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference | DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
    }
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisPackageStore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}
  */
  readonly name: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisPackageStoreToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisPackageStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataFactoryIntegrationRuntimeAzureSsisPackageStoreToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisPackageStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linked_service_name: {
      value: cdktf.stringToHclTerraform(struct!.linkedServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisPackageStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkedServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedServiceName = this._linkedServiceName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisPackageStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linkedServiceName = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linkedServiceName = value.linkedServiceName;
      this._name = value.name;
    }
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
    return this._linkedServiceName;
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
    return this._name;
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisPackageStoreList extends cdktf.ComplexList {
  public internalValue? : DataFactoryIntegrationRuntimeAzureSsisPackageStore[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference {
    return new DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_external_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_external_nodes}
  */
  readonly numberOfExternalNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_pipeline_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_pipeline_nodes}
  */
  readonly numberOfPipelineNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#time_to_live DataFactoryIntegrationRuntimeAzureSsis#time_to_live}
  */
  readonly timeToLive?: number;
}

export function dataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference | DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_external_nodes: cdktf.numberToTerraform(struct!.numberOfExternalNodes),
    number_of_pipeline_nodes: cdktf.numberToTerraform(struct!.numberOfPipelineNodes),
    time_to_live: cdktf.numberToTerraform(struct!.timeToLive),
  }
}


export function dataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference | DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_external_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfExternalNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_pipeline_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfPipelineNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_to_live: {
      value: cdktf.numberToHclTerraform(struct!.timeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfExternalNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfExternalNodes = this._numberOfExternalNodes;
    }
    if (this._numberOfPipelineNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfPipelineNodes = this._numberOfPipelineNodes;
    }
    if (this._timeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLive = this._timeToLive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numberOfExternalNodes = undefined;
      this._numberOfPipelineNodes = undefined;
      this._timeToLive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numberOfExternalNodes = value.numberOfExternalNodes;
      this._numberOfPipelineNodes = value.numberOfPipelineNodes;
      this._timeToLive = value.timeToLive;
    }
  }

  // number_of_external_nodes - computed: false, optional: true, required: false
  private _numberOfExternalNodes?: number; 
  public get numberOfExternalNodes() {
    return this.getNumberAttribute('number_of_external_nodes');
  }
  public set numberOfExternalNodes(value: number) {
    this._numberOfExternalNodes = value;
  }
  public resetNumberOfExternalNodes() {
    this._numberOfExternalNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfExternalNodesInput() {
    return this._numberOfExternalNodes;
  }

  // number_of_pipeline_nodes - computed: false, optional: true, required: false
  private _numberOfPipelineNodes?: number; 
  public get numberOfPipelineNodes() {
    return this.getNumberAttribute('number_of_pipeline_nodes');
  }
  public set numberOfPipelineNodes(value: number) {
    this._numberOfPipelineNodes = value;
  }
  public resetNumberOfPipelineNodes() {
    this._numberOfPipelineNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfPipelineNodesInput() {
    return this._numberOfPipelineNodes;
  }

  // time_to_live - computed: false, optional: true, required: false
  private _timeToLive?: number; 
  public get timeToLive() {
    return this.getNumberAttribute('time_to_live');
  }
  public set timeToLive(value: number) {
    this._timeToLive = value;
  }
  public resetTimeToLive() {
    this._timeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInput() {
    return this._timeToLive;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#path DataFactoryIntegrationRuntimeAzureSsis#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#self_hosted_integration_runtime_name DataFactoryIntegrationRuntimeAzureSsis#self_hosted_integration_runtime_name}
  */
  readonly selfHostedIntegrationRuntimeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#staging_storage_linked_service_name DataFactoryIntegrationRuntimeAzureSsis#staging_storage_linked_service_name}
  */
  readonly stagingStorageLinkedServiceName: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisProxyToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference | DataFactoryIntegrationRuntimeAzureSsisProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    self_hosted_integration_runtime_name: cdktf.stringToTerraform(struct!.selfHostedIntegrationRuntimeName),
    staging_storage_linked_service_name: cdktf.stringToTerraform(struct!.stagingStorageLinkedServiceName),
  }
}


export function dataFactoryIntegrationRuntimeAzureSsisProxyToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference | DataFactoryIntegrationRuntimeAzureSsisProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_hosted_integration_runtime_name: {
      value: cdktf.stringToHclTerraform(struct!.selfHostedIntegrationRuntimeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    staging_storage_linked_service_name: {
      value: cdktf.stringToHclTerraform(struct!.stagingStorageLinkedServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._selfHostedIntegrationRuntimeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfHostedIntegrationRuntimeName = this._selfHostedIntegrationRuntimeName;
    }
    if (this._stagingStorageLinkedServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingStorageLinkedServiceName = this._stagingStorageLinkedServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._selfHostedIntegrationRuntimeName = undefined;
      this._stagingStorageLinkedServiceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._selfHostedIntegrationRuntimeName = value.selfHostedIntegrationRuntimeName;
      this._stagingStorageLinkedServiceName = value.stagingStorageLinkedServiceName;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
    return this._selfHostedIntegrationRuntimeName;
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
    return this._stagingStorageLinkedServiceName;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#create DataFactoryIntegrationRuntimeAzureSsis#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#delete DataFactoryIntegrationRuntimeAzureSsis#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#read DataFactoryIntegrationRuntimeAzureSsis#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#update DataFactoryIntegrationRuntimeAzureSsis#update}
  */
  readonly update?: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisTimeoutsToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function dataFactoryIntegrationRuntimeAzureSsisTimeoutsToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisVnetIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#public_ips DataFactoryIntegrationRuntimeAzureSsis#public_ips}
  */
  readonly publicIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_id DataFactoryIntegrationRuntimeAzureSsis#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_name DataFactoryIntegrationRuntimeAzureSsis#subnet_name}
  */
  readonly subnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#vnet_id DataFactoryIntegrationRuntimeAzureSsis#vnet_id}
  */
  readonly vnetId?: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisVnetIntegrationToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference | DataFactoryIntegrationRuntimeAzureSsisVnetIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publicIps),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    vnet_id: cdktf.stringToTerraform(struct!.vnetId),
  }
}


export function dataFactoryIntegrationRuntimeAzureSsisVnetIntegrationToHclTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference | DataFactoryIntegrationRuntimeAzureSsisVnetIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.publicIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_id: {
      value: cdktf.stringToHclTerraform(struct!.vnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisVnetIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIps = this._publicIps;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._vnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetId = this._vnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIps = undefined;
      this._subnetId = undefined;
      this._subnetName = undefined;
      this._vnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIps = value.publicIps;
      this._subnetId = value.subnetId;
      this._subnetName = value.subnetName;
      this._vnetId = value.vnetId;
    }
  }

  // public_ips - computed: false, optional: true, required: false
  private _publicIps?: string[]; 
  public get publicIps() {
    return this.getListAttribute('public_ips');
  }
  public set publicIps(value: string[]) {
    this._publicIps = value;
  }
  public resetPublicIps() {
    this._publicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpsInput() {
    return this._publicIps;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subnet_name - computed: false, optional: true, required: false
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  public resetSubnetName() {
    this._subnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // vnet_id - computed: false, optional: true, required: false
  private _vnetId?: string; 
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
  public set vnetId(value: string) {
    this._vnetId = value;
  }
  public resetVnetId() {
    this._vnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIdInput() {
    return this._vnetId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis azurerm_data_factory_integration_runtime_azure_ssis}
*/
export class DataFactoryIntegrationRuntimeAzureSsis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_factory_integration_runtime_azure_ssis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFactoryIntegrationRuntimeAzureSsis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFactoryIntegrationRuntimeAzureSsis to import
  * @param importFromId The id of the existing DataFactoryIntegrationRuntimeAzureSsis that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFactoryIntegrationRuntimeAzureSsis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_data_factory_integration_runtime_azure_ssis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_integration_runtime_azure_ssis azurerm_data_factory_integration_runtime_azure_ssis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryIntegrationRuntimeAzureSsisConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryIntegrationRuntimeAzureSsisConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_integration_runtime_azure_ssis',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialName = config.credentialName;
    this._dataFactoryId = config.dataFactoryId;
    this._description = config.description;
    this._edition = config.edition;
    this._id = config.id;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._maxParallelExecutionsPerNode = config.maxParallelExecutionsPerNode;
    this._name = config.name;
    this._nodeSize = config.nodeSize;
    this._numberOfNodes = config.numberOfNodes;
    this._catalogInfo.internalValue = config.catalogInfo;
    this._copyComputeScale.internalValue = config.copyComputeScale;
    this._customSetupScript.internalValue = config.customSetupScript;
    this._expressCustomSetup.internalValue = config.expressCustomSetup;
    this._expressVnetIntegration.internalValue = config.expressVnetIntegration;
    this._packageStore.internalValue = config.packageStore;
    this._pipelineExternalComputeScale.internalValue = config.pipelineExternalComputeScale;
    this._proxy.internalValue = config.proxy;
    this._timeouts.internalValue = config.timeouts;
    this._vnetIntegration.internalValue = config.vnetIntegration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // data_factory_id - computed: false, optional: false, required: true
  private _dataFactoryId?: string; 
  public get dataFactoryId() {
    return this.getStringAttribute('data_factory_id');
  }
  public set dataFactoryId(value: string) {
    this._dataFactoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryIdInput() {
    return this._dataFactoryId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
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
    return this._location;
  }

  // max_parallel_executions_per_node - computed: false, optional: true, required: false
  private _maxParallelExecutionsPerNode?: number; 
  public get maxParallelExecutionsPerNode() {
    return this.getNumberAttribute('max_parallel_executions_per_node');
  }
  public set maxParallelExecutionsPerNode(value: number) {
    this._maxParallelExecutionsPerNode = value;
  }
  public resetMaxParallelExecutionsPerNode() {
    this._maxParallelExecutionsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelExecutionsPerNodeInput() {
    return this._maxParallelExecutionsPerNode;
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
    return this._name;
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
    return this._nodeSize;
  }

  // number_of_nodes - computed: false, optional: true, required: false
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  public resetNumberOfNodes() {
    this._numberOfNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
  }

  // catalog_info - computed: false, optional: true, required: false
  private _catalogInfo = new DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference(this, "catalog_info");
  public get catalogInfo() {
    return this._catalogInfo;
  }
  public putCatalogInfo(value: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo) {
    this._catalogInfo.internalValue = value;
  }
  public resetCatalogInfo() {
    this._catalogInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInfoInput() {
    return this._catalogInfo.internalValue;
  }

  // copy_compute_scale - computed: false, optional: true, required: false
  private _copyComputeScale = new DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference(this, "copy_compute_scale");
  public get copyComputeScale() {
    return this._copyComputeScale;
  }
  public putCopyComputeScale(value: DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale) {
    this._copyComputeScale.internalValue = value;
  }
  public resetCopyComputeScale() {
    this._copyComputeScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyComputeScaleInput() {
    return this._copyComputeScale.internalValue;
  }

  // custom_setup_script - computed: false, optional: true, required: false
  private _customSetupScript = new DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference(this, "custom_setup_script");
  public get customSetupScript() {
    return this._customSetupScript;
  }
  public putCustomSetupScript(value: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript) {
    this._customSetupScript.internalValue = value;
  }
  public resetCustomSetupScript() {
    this._customSetupScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSetupScriptInput() {
    return this._customSetupScript.internalValue;
  }

  // express_custom_setup - computed: false, optional: true, required: false
  private _expressCustomSetup = new DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference(this, "express_custom_setup");
  public get expressCustomSetup() {
    return this._expressCustomSetup;
  }
  public putExpressCustomSetup(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup) {
    this._expressCustomSetup.internalValue = value;
  }
  public resetExpressCustomSetup() {
    this._expressCustomSetup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressCustomSetupInput() {
    return this._expressCustomSetup.internalValue;
  }

  // express_vnet_integration - computed: false, optional: true, required: false
  private _expressVnetIntegration = new DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference(this, "express_vnet_integration");
  public get expressVnetIntegration() {
    return this._expressVnetIntegration;
  }
  public putExpressVnetIntegration(value: DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration) {
    this._expressVnetIntegration.internalValue = value;
  }
  public resetExpressVnetIntegration() {
    this._expressVnetIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressVnetIntegrationInput() {
    return this._expressVnetIntegration.internalValue;
  }

  // package_store - computed: false, optional: true, required: false
  private _packageStore = new DataFactoryIntegrationRuntimeAzureSsisPackageStoreList(this, "package_store", false);
  public get packageStore() {
    return this._packageStore;
  }
  public putPackageStore(value: DataFactoryIntegrationRuntimeAzureSsisPackageStore[] | cdktf.IResolvable) {
    this._packageStore.internalValue = value;
  }
  public resetPackageStore() {
    this._packageStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageStoreInput() {
    return this._packageStore.internalValue;
  }

  // pipeline_external_compute_scale - computed: false, optional: true, required: false
  private _pipelineExternalComputeScale = new DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference(this, "pipeline_external_compute_scale");
  public get pipelineExternalComputeScale() {
    return this._pipelineExternalComputeScale;
  }
  public putPipelineExternalComputeScale(value: DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale) {
    this._pipelineExternalComputeScale.internalValue = value;
  }
  public resetPipelineExternalComputeScale() {
    this._pipelineExternalComputeScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineExternalComputeScaleInput() {
    return this._pipelineExternalComputeScale.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataFactoryIntegrationRuntimeAzureSsisProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFactoryIntegrationRuntimeAzureSsisTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vnet_integration - computed: false, optional: true, required: false
  private _vnetIntegration = new DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference(this, "vnet_integration");
  public get vnetIntegration() {
    return this._vnetIntegration;
  }
  public putVnetIntegration(value: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration) {
    this._vnetIntegration.internalValue = value;
  }
  public resetVnetIntegration() {
    this._vnetIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIntegrationInput() {
    return this._vnetIntegration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_name: cdktf.stringToTerraform(this._credentialName),
      data_factory_id: cdktf.stringToTerraform(this._dataFactoryId),
      description: cdktf.stringToTerraform(this._description),
      edition: cdktf.stringToTerraform(this._edition),
      id: cdktf.stringToTerraform(this._id),
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      max_parallel_executions_per_node: cdktf.numberToTerraform(this._maxParallelExecutionsPerNode),
      name: cdktf.stringToTerraform(this._name),
      node_size: cdktf.stringToTerraform(this._nodeSize),
      number_of_nodes: cdktf.numberToTerraform(this._numberOfNodes),
      catalog_info: dataFactoryIntegrationRuntimeAzureSsisCatalogInfoToTerraform(this._catalogInfo.internalValue),
      copy_compute_scale: dataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleToTerraform(this._copyComputeScale.internalValue),
      custom_setup_script: dataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptToTerraform(this._customSetupScript.internalValue),
      express_custom_setup: dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupToTerraform(this._expressCustomSetup.internalValue),
      express_vnet_integration: dataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationToTerraform(this._expressVnetIntegration.internalValue),
      package_store: cdktf.listMapper(dataFactoryIntegrationRuntimeAzureSsisPackageStoreToTerraform, true)(this._packageStore.internalValue),
      pipeline_external_compute_scale: dataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleToTerraform(this._pipelineExternalComputeScale.internalValue),
      proxy: dataFactoryIntegrationRuntimeAzureSsisProxyToTerraform(this._proxy.internalValue),
      timeouts: dataFactoryIntegrationRuntimeAzureSsisTimeoutsToTerraform(this._timeouts.internalValue),
      vnet_integration: dataFactoryIntegrationRuntimeAzureSsisVnetIntegrationToTerraform(this._vnetIntegration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_name: {
        value: cdktf.stringToHclTerraform(this._credentialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_factory_id: {
        value: cdktf.stringToHclTerraform(this._dataFactoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edition: {
        value: cdktf.stringToHclTerraform(this._edition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_parallel_executions_per_node: {
        value: cdktf.numberToHclTerraform(this._maxParallelExecutionsPerNode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_size: {
        value: cdktf.stringToHclTerraform(this._nodeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_nodes: {
        value: cdktf.numberToHclTerraform(this._numberOfNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      catalog_info: {
        value: dataFactoryIntegrationRuntimeAzureSsisCatalogInfoToHclTerraform(this._catalogInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryIntegrationRuntimeAzureSsisCatalogInfoList",
      },
      copy_compute_scale: {
        value: dataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleToHclTerraform(this._copyComputeScale.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleList",
      },
      custom_setup_script: {
        value: dataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptToHclTerraform(this._customSetupScript.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptList",
      },
      express_custom_setup: {
        value: dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupToHclTerraform(this._expressCustomSetup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupList",
      },
      express_vnet_integration: {
        value: dataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationToHclTerraform(this._expressVnetIntegration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationList",
      },
      package_store: {
        value: cdktf.listMapperHcl(dataFactoryIntegrationRuntimeAzureSsisPackageStoreToHclTerraform, true)(this._packageStore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryIntegrationRuntimeAzureSsisPackageStoreList",
      },
      pipeline_external_compute_scale: {
        value: dataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleToHclTerraform(this._pipelineExternalComputeScale.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleList",
      },
      proxy: {
        value: dataFactoryIntegrationRuntimeAzureSsisProxyToHclTerraform(this._proxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryIntegrationRuntimeAzureSsisProxyList",
      },
      timeouts: {
        value: dataFactoryIntegrationRuntimeAzureSsisTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFactoryIntegrationRuntimeAzureSsisTimeouts",
      },
      vnet_integration: {
        value: dataFactoryIntegrationRuntimeAzureSsisVnetIntegrationToHclTerraform(this._vnetIntegration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
