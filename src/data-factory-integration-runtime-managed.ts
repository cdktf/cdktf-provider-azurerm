// https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataFactoryIntegrationRuntimeManagedConfig extends TerraformMetaArguments {
  readonly dataFactoryName: string;
  readonly description?: string;
  readonly edition?: string;
  readonly licenseType?: string;
  readonly location: string;
  readonly maxParallelExecutionsPerNode?: number;
  readonly name: string;
  readonly nodeSize: string;
  readonly numberOfNodes?: number;
  readonly resourceGroupName: string;
  /** catalog_info block */
  readonly catalogInfo?: DataFactoryIntegrationRuntimeManagedCatalogInfo[];
  /** custom_setup_script block */
  readonly customSetupScript?: DataFactoryIntegrationRuntimeManagedCustomSetupScript[];
  /** timeouts block */
  readonly timeouts?: DataFactoryIntegrationRuntimeManagedTimeouts;
  /** vnet_integration block */
  readonly vnetIntegration?: DataFactoryIntegrationRuntimeManagedVnetIntegration[];
}
export interface DataFactoryIntegrationRuntimeManagedCatalogInfo {
  readonly administratorLogin: string;
  readonly administratorPassword: string;
  readonly pricingTier?: string;
  readonly serverEndpoint: string;
}
export interface DataFactoryIntegrationRuntimeManagedCustomSetupScript {
  readonly blobContainerUri: string;
  readonly sasToken: string;
}
export interface DataFactoryIntegrationRuntimeManagedTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface DataFactoryIntegrationRuntimeManagedVnetIntegration {
  readonly subnetName: string;
  readonly vnetId: string;
}

// Resource

export class DataFactoryIntegrationRuntimeManaged extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _dataFactoryName: string;
  public get dataFactoryName() {
    return this._dataFactoryName;
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // edition - computed: false, optional: true, required: false
  private _edition?: string;
  public get edition() {
    return this._edition;
  }
  public set edition(value: string | undefined) {
    this._edition = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string;
  public get licenseType() {
    return this._licenseType;
  }
  public set licenseType(value: string | undefined) {
    this._licenseType = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // max_parallel_executions_per_node - computed: false, optional: true, required: false
  private _maxParallelExecutionsPerNode?: number;
  public get maxParallelExecutionsPerNode() {
    return this._maxParallelExecutionsPerNode;
  }
  public set maxParallelExecutionsPerNode(value: number | undefined) {
    this._maxParallelExecutionsPerNode = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // node_size - computed: false, optional: false, required: true
  private _nodeSize: string;
  public get nodeSize() {
    return this._nodeSize;
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }

  // number_of_nodes - computed: false, optional: true, required: false
  private _numberOfNodes?: number;
  public get numberOfNodes() {
    return this._numberOfNodes;
  }
  public set numberOfNodes(value: number | undefined) {
    this._numberOfNodes = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // catalog_info - computed: false, optional: true, required: false
  private _catalogInfo?: DataFactoryIntegrationRuntimeManagedCatalogInfo[];
  public get catalogInfo() {
    return this._catalogInfo;
  }
  public set catalogInfo(value: DataFactoryIntegrationRuntimeManagedCatalogInfo[] | undefined) {
    this._catalogInfo = value;
  }

  // custom_setup_script - computed: false, optional: true, required: false
  private _customSetupScript?: DataFactoryIntegrationRuntimeManagedCustomSetupScript[];
  public get customSetupScript() {
    return this._customSetupScript;
  }
  public set customSetupScript(value: DataFactoryIntegrationRuntimeManagedCustomSetupScript[] | undefined) {
    this._customSetupScript = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryIntegrationRuntimeManagedTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataFactoryIntegrationRuntimeManagedTimeouts | undefined) {
    this._timeouts = value;
  }

  // vnet_integration - computed: false, optional: true, required: false
  private _vnetIntegration?: DataFactoryIntegrationRuntimeManagedVnetIntegration[];
  public get vnetIntegration() {
    return this._vnetIntegration;
  }
  public set vnetIntegration(value: DataFactoryIntegrationRuntimeManagedVnetIntegration[] | undefined) {
    this._vnetIntegration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      data_factory_name: this._dataFactoryName,
      description: this._description,
      edition: this._edition,
      license_type: this._licenseType,
      location: this._location,
      max_parallel_executions_per_node: this._maxParallelExecutionsPerNode,
      name: this._name,
      node_size: this._nodeSize,
      number_of_nodes: this._numberOfNodes,
      resource_group_name: this._resourceGroupName,
      catalog_info: this._catalogInfo,
      custom_setup_script: this._customSetupScript,
      timeouts: this._timeouts,
      vnet_integration: this._vnetIntegration,
    };
  }
}
