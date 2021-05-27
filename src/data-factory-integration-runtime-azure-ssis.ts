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
  readonly catalogInfo?: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo[];
  /**
  * custom_setup_script block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#custom_setup_script DataFactoryIntegrationRuntimeAzureSsis#custom_setup_script}
  */
  readonly customSetupScript?: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript[];
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
  readonly vnetIntegration?: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration[];
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#pricing_tier DataFactoryIntegrationRuntimeAzureSsis#pricing_tier}
  */
  readonly pricingTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#server_endpoint DataFactoryIntegrationRuntimeAzureSsis#server_endpoint}
  */
  readonly serverEndpoint: string;
}

function dataFactoryIntegrationRuntimeAzureSsisCatalogInfoToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    administrator_login: cdktf.stringToTerraform(struct!.administratorLogin),
    administrator_password: cdktf.stringToTerraform(struct!.administratorPassword),
    pricing_tier: cdktf.stringToTerraform(struct!.pricingTier),
    server_endpoint: cdktf.stringToTerraform(struct!.serverEndpoint),
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

function dataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    blob_container_uri: cdktf.stringToTerraform(struct!.blobContainerUri),
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
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

function dataFactoryIntegrationRuntimeAzureSsisTimeoutsToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface DataFactoryIntegrationRuntimeAzureSsisVnetIntegration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#subnet_name DataFactoryIntegrationRuntimeAzureSsis#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html#vnet_id DataFactoryIntegrationRuntimeAzureSsis#vnet_id}
  */
  readonly vnetId: string;
}

function dataFactoryIntegrationRuntimeAzureSsisVnetIntegrationToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    vnet_id: cdktf.stringToTerraform(struct!.vnetId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis.html azurerm_data_factory_integration_runtime_azure_ssis}
*/
export class DataFactoryIntegrationRuntimeAzureSsis extends cdktf.TerraformResource {

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
    this._timeouts = config.timeouts;
    this._vnetIntegration = config.vnetIntegration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName: string;
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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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
  private _edition?: string;
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string ) {
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
  private _licenseType?: string;
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string ) {
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
  private _location: string;
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
  private _maxParallelExecutionsPerNode?: number;
  public get maxParallelExecutionsPerNode() {
    return this.getNumberAttribute('max_parallel_executions_per_node');
  }
  public set maxParallelExecutionsPerNode(value: number ) {
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
  private _name: string;
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
  private _nodeSize: string;
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
  private _numberOfNodes?: number;
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number ) {
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
  private _resourceGroupName: string;
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
  private _catalogInfo?: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo[];
  public get catalogInfo() {
    return this.interpolationForAttribute('catalog_info') as any;
  }
  public set catalogInfo(value: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo[] ) {
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
  private _customSetupScript?: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript[];
  public get customSetupScript() {
    return this.interpolationForAttribute('custom_setup_script') as any;
  }
  public set customSetupScript(value: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript[] ) {
    this._customSetupScript = value;
  }
  public resetCustomSetupScript() {
    this._customSetupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSetupScriptInput() {
    return this._customSetupScript
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryIntegrationRuntimeAzureSsisTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryIntegrationRuntimeAzureSsisTimeouts ) {
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
  private _vnetIntegration?: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration[];
  public get vnetIntegration() {
    return this.interpolationForAttribute('vnet_integration') as any;
  }
  public set vnetIntegration(value: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration[] ) {
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
      catalog_info: cdktf.listMapper(dataFactoryIntegrationRuntimeAzureSsisCatalogInfoToTerraform)(this._catalogInfo),
      custom_setup_script: cdktf.listMapper(dataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptToTerraform)(this._customSetupScript),
      timeouts: dataFactoryIntegrationRuntimeAzureSsisTimeoutsToTerraform(this._timeouts),
      vnet_integration: cdktf.listMapper(dataFactoryIntegrationRuntimeAzureSsisVnetIntegrationToTerraform)(this._vnetIntegration),
    };
  }
}
