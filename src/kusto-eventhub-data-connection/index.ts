// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoEventhubDataConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#cluster_name KustoEventhubDataConnection#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#compression KustoEventhubDataConnection#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#consumer_group KustoEventhubDataConnection#consumer_group}
  */
  readonly consumerGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#data_format KustoEventhubDataConnection#data_format}
  */
  readonly dataFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#database_name KustoEventhubDataConnection#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#database_routing_type KustoEventhubDataConnection#database_routing_type}
  */
  readonly databaseRoutingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#event_system_properties KustoEventhubDataConnection#event_system_properties}
  */
  readonly eventSystemProperties?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#eventhub_id KustoEventhubDataConnection#eventhub_id}
  */
  readonly eventhubId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#id KustoEventhubDataConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#identity_id KustoEventhubDataConnection#identity_id}
  */
  readonly identityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#location KustoEventhubDataConnection#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#mapping_rule_name KustoEventhubDataConnection#mapping_rule_name}
  */
  readonly mappingRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#name KustoEventhubDataConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#resource_group_name KustoEventhubDataConnection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#table_name KustoEventhubDataConnection#table_name}
  */
  readonly tableName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#timeouts KustoEventhubDataConnection#timeouts}
  */
  readonly timeouts?: KustoEventhubDataConnectionTimeouts;
}
export interface KustoEventhubDataConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#create KustoEventhubDataConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#delete KustoEventhubDataConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#read KustoEventhubDataConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#update KustoEventhubDataConnection#update}
  */
  readonly update?: string;
}

export function kustoEventhubDataConnectionTimeoutsToTerraform(struct?: KustoEventhubDataConnectionTimeouts | cdktf.IResolvable): any {
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


export function kustoEventhubDataConnectionTimeoutsToHclTerraform(struct?: KustoEventhubDataConnectionTimeouts | cdktf.IResolvable): any {
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

export class KustoEventhubDataConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KustoEventhubDataConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KustoEventhubDataConnectionTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection azurerm_kusto_eventhub_data_connection}
*/
export class KustoEventhubDataConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_kusto_eventhub_data_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KustoEventhubDataConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KustoEventhubDataConnection to import
  * @param importFromId The id of the existing KustoEventhubDataConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KustoEventhubDataConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_kusto_eventhub_data_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_eventhub_data_connection azurerm_kusto_eventhub_data_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KustoEventhubDataConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: KustoEventhubDataConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_eventhub_data_connection',
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
    this._clusterName = config.clusterName;
    this._compression = config.compression;
    this._consumerGroup = config.consumerGroup;
    this._dataFormat = config.dataFormat;
    this._databaseName = config.databaseName;
    this._databaseRoutingType = config.databaseRoutingType;
    this._eventSystemProperties = config.eventSystemProperties;
    this._eventhubId = config.eventhubId;
    this._id = config.id;
    this._identityId = config.identityId;
    this._location = config.location;
    this._mappingRuleName = config.mappingRuleName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tableName = config.tableName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // consumer_group - computed: false, optional: false, required: true
  private _consumerGroup?: string; 
  public get consumerGroup() {
    return this.getStringAttribute('consumer_group');
  }
  public set consumerGroup(value: string) {
    this._consumerGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupInput() {
    return this._consumerGroup;
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat?: string; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  public resetDataFormat() {
    this._dataFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // database_routing_type - computed: false, optional: true, required: false
  private _databaseRoutingType?: string; 
  public get databaseRoutingType() {
    return this.getStringAttribute('database_routing_type');
  }
  public set databaseRoutingType(value: string) {
    this._databaseRoutingType = value;
  }
  public resetDatabaseRoutingType() {
    this._databaseRoutingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRoutingTypeInput() {
    return this._databaseRoutingType;
  }

  // event_system_properties - computed: true, optional: true, required: false
  private _eventSystemProperties?: string[]; 
  public get eventSystemProperties() {
    return this.getListAttribute('event_system_properties');
  }
  public set eventSystemProperties(value: string[]) {
    this._eventSystemProperties = value;
  }
  public resetEventSystemProperties() {
    this._eventSystemProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSystemPropertiesInput() {
    return this._eventSystemProperties;
  }

  // eventhub_id - computed: false, optional: false, required: true
  private _eventhubId?: string; 
  public get eventhubId() {
    return this.getStringAttribute('eventhub_id');
  }
  public set eventhubId(value: string) {
    this._eventhubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubIdInput() {
    return this._eventhubId;
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

  // identity_id - computed: false, optional: true, required: false
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  public resetIdentityId() {
    this._identityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
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

  // mapping_rule_name - computed: false, optional: true, required: false
  private _mappingRuleName?: string; 
  public get mappingRuleName() {
    return this.getStringAttribute('mapping_rule_name');
  }
  public set mappingRuleName(value: string) {
    this._mappingRuleName = value;
  }
  public resetMappingRuleName() {
    this._mappingRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingRuleNameInput() {
    return this._mappingRuleName;
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
    return this._resourceGroupName;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KustoEventhubDataConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KustoEventhubDataConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      compression: cdktf.stringToTerraform(this._compression),
      consumer_group: cdktf.stringToTerraform(this._consumerGroup),
      data_format: cdktf.stringToTerraform(this._dataFormat),
      database_name: cdktf.stringToTerraform(this._databaseName),
      database_routing_type: cdktf.stringToTerraform(this._databaseRoutingType),
      event_system_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventSystemProperties),
      eventhub_id: cdktf.stringToTerraform(this._eventhubId),
      id: cdktf.stringToTerraform(this._id),
      identity_id: cdktf.stringToTerraform(this._identityId),
      location: cdktf.stringToTerraform(this._location),
      mapping_rule_name: cdktf.stringToTerraform(this._mappingRuleName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      table_name: cdktf.stringToTerraform(this._tableName),
      timeouts: kustoEventhubDataConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compression: {
        value: cdktf.stringToHclTerraform(this._compression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_group: {
        value: cdktf.stringToHclTerraform(this._consumerGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_format: {
        value: cdktf.stringToHclTerraform(this._dataFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_routing_type: {
        value: cdktf.stringToHclTerraform(this._databaseRoutingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_system_properties: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventSystemProperties),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      eventhub_id: {
        value: cdktf.stringToHclTerraform(this._eventhubId),
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
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
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
      mapping_rule_name: {
        value: cdktf.stringToHclTerraform(this._mappingRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: kustoEventhubDataConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KustoEventhubDataConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
