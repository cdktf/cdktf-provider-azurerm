// https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryIntegrationRuntimeManagedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#data_factory_name DataFactoryIntegrationRuntimeManaged#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#description DataFactoryIntegrationRuntimeManaged#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#edition DataFactoryIntegrationRuntimeManaged#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#license_type DataFactoryIntegrationRuntimeManaged#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#location DataFactoryIntegrationRuntimeManaged#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#max_parallel_executions_per_node DataFactoryIntegrationRuntimeManaged#max_parallel_executions_per_node}
  */
  readonly maxParallelExecutionsPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#name DataFactoryIntegrationRuntimeManaged#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#node_size DataFactoryIntegrationRuntimeManaged#node_size}
  */
  readonly nodeSize: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#number_of_nodes DataFactoryIntegrationRuntimeManaged#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#resource_group_name DataFactoryIntegrationRuntimeManaged#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * catalog_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#catalog_info DataFactoryIntegrationRuntimeManaged#catalog_info}
  */
  readonly catalogInfo?: DataFactoryIntegrationRuntimeManagedCatalogInfo;
  /**
  * custom_setup_script block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#custom_setup_script DataFactoryIntegrationRuntimeManaged#custom_setup_script}
  */
  readonly customSetupScript?: DataFactoryIntegrationRuntimeManagedCustomSetupScript;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#timeouts DataFactoryIntegrationRuntimeManaged#timeouts}
  */
  readonly timeouts?: DataFactoryIntegrationRuntimeManagedTimeouts;
  /**
  * vnet_integration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#vnet_integration DataFactoryIntegrationRuntimeManaged#vnet_integration}
  */
  readonly vnetIntegration?: DataFactoryIntegrationRuntimeManagedVnetIntegration;
}
export interface DataFactoryIntegrationRuntimeManagedCatalogInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#administrator_login DataFactoryIntegrationRuntimeManaged#administrator_login}
  */
  readonly administratorLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#administrator_password DataFactoryIntegrationRuntimeManaged#administrator_password}
  */
  readonly administratorPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#pricing_tier DataFactoryIntegrationRuntimeManaged#pricing_tier}
  */
  readonly pricingTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#server_endpoint DataFactoryIntegrationRuntimeManaged#server_endpoint}
  */
  readonly serverEndpoint: string;
}

function dataFactoryIntegrationRuntimeManagedCatalogInfoToTerraform(struct?: DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference | DataFactoryIntegrationRuntimeManagedCatalogInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrator_login: cdktf.stringToTerraform(struct!.administratorLogin),
    administrator_password: cdktf.stringToTerraform(struct!.administratorPassword),
    pricing_tier: cdktf.stringToTerraform(struct!.pricingTier),
    server_endpoint: cdktf.stringToTerraform(struct!.serverEndpoint),
  }
}

export class DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryIntegrationRuntimeManagedCustomSetupScript {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#blob_container_uri DataFactoryIntegrationRuntimeManaged#blob_container_uri}
  */
  readonly blobContainerUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#sas_token DataFactoryIntegrationRuntimeManaged#sas_token}
  */
  readonly sasToken: string;
}

function dataFactoryIntegrationRuntimeManagedCustomSetupScriptToTerraform(struct?: DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference | DataFactoryIntegrationRuntimeManagedCustomSetupScript): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_container_uri: cdktf.stringToTerraform(struct!.blobContainerUri),
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
  }
}

export class DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryIntegrationRuntimeManagedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#create DataFactoryIntegrationRuntimeManaged#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#delete DataFactoryIntegrationRuntimeManaged#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#read DataFactoryIntegrationRuntimeManaged#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#update DataFactoryIntegrationRuntimeManaged#update}
  */
  readonly update?: string;
}

function dataFactoryIntegrationRuntimeManagedTimeoutsToTerraform(struct?: DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference | DataFactoryIntegrationRuntimeManagedTimeouts): any {
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

export class DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryIntegrationRuntimeManagedVnetIntegration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#subnet_name DataFactoryIntegrationRuntimeManaged#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#vnet_id DataFactoryIntegrationRuntimeManaged#vnet_id}
  */
  readonly vnetId: string;
}

function dataFactoryIntegrationRuntimeManagedVnetIntegrationToTerraform(struct?: DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference | DataFactoryIntegrationRuntimeManagedVnetIntegration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    vnet_id: cdktf.stringToTerraform(struct!.vnetId),
  }
}

export class DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // subnet_name - computed: false, optional: false, required: true
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName
  }

  // vnet_id - computed: false, optional: false, required: true
  private _vnetId?: string; 
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
  public set vnetId(value: string) {
    this._vnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIdInput() {
    return this._vnetId
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html azurerm_data_factory_integration_runtime_managed}
*/
export class DataFactoryIntegrationRuntimeManaged extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_integration_runtime_managed";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html azurerm_data_factory_integration_runtime_managed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryIntegrationRuntimeManagedConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryIntegrationRuntimeManagedConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_integration_runtime_managed',
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
  private _catalogInfo?: DataFactoryIntegrationRuntimeManagedCatalogInfo | undefined; 
  private __catalogInfoOutput = new DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference(this as any, "catalog_info", true);
  public get catalogInfo() {
    return this.__catalogInfoOutput;
  }
  public putCatalogInfo(value: DataFactoryIntegrationRuntimeManagedCatalogInfo | undefined) {
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
  private _customSetupScript?: DataFactoryIntegrationRuntimeManagedCustomSetupScript | undefined; 
  private __customSetupScriptOutput = new DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference(this as any, "custom_setup_script", true);
  public get customSetupScript() {
    return this.__customSetupScriptOutput;
  }
  public putCustomSetupScript(value: DataFactoryIntegrationRuntimeManagedCustomSetupScript | undefined) {
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
  private _timeouts?: DataFactoryIntegrationRuntimeManagedTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryIntegrationRuntimeManagedTimeouts | undefined) {
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
  private _vnetIntegration?: DataFactoryIntegrationRuntimeManagedVnetIntegration | undefined; 
  private __vnetIntegrationOutput = new DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference(this as any, "vnet_integration", true);
  public get vnetIntegration() {
    return this.__vnetIntegrationOutput;
  }
  public putVnetIntegration(value: DataFactoryIntegrationRuntimeManagedVnetIntegration | undefined) {
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
      catalog_info: dataFactoryIntegrationRuntimeManagedCatalogInfoToTerraform(this._catalogInfo),
      custom_setup_script: dataFactoryIntegrationRuntimeManagedCustomSetupScriptToTerraform(this._customSetupScript),
      timeouts: dataFactoryIntegrationRuntimeManagedTimeoutsToTerraform(this._timeouts),
      vnet_integration: dataFactoryIntegrationRuntimeManagedVnetIntegrationToTerraform(this._vnetIntegration),
    };
  }
}
