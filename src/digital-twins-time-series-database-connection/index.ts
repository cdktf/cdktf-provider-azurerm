// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DigitalTwinsTimeSeriesDatabaseConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#digital_twins_id DigitalTwinsTimeSeriesDatabaseConnection#digital_twins_id}
  */
  readonly digitalTwinsId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#eventhub_consumer_group_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_consumer_group_name}
  */
  readonly eventhubConsumerGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#eventhub_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_name}
  */
  readonly eventhubName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_endpoint_uri DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_endpoint_uri}
  */
  readonly eventhubNamespaceEndpointUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_id DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_id}
  */
  readonly eventhubNamespaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#id DigitalTwinsTimeSeriesDatabaseConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_id DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_id}
  */
  readonly kustoClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_uri DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_uri}
  */
  readonly kustoClusterUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#kusto_database_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_database_name}
  */
  readonly kustoDatabaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#kusto_table_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_table_name}
  */
  readonly kustoTableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#name DigitalTwinsTimeSeriesDatabaseConnection#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#timeouts DigitalTwinsTimeSeriesDatabaseConnection#timeouts}
  */
  readonly timeouts?: DigitalTwinsTimeSeriesDatabaseConnectionTimeouts;
}
export interface DigitalTwinsTimeSeriesDatabaseConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#create DigitalTwinsTimeSeriesDatabaseConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#delete DigitalTwinsTimeSeriesDatabaseConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#read DigitalTwinsTimeSeriesDatabaseConnection#read}
  */
  readonly read?: string;
}

export function digitalTwinsTimeSeriesDatabaseConnectionTimeoutsToTerraform(struct?: DigitalTwinsTimeSeriesDatabaseConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function digitalTwinsTimeSeriesDatabaseConnectionTimeoutsToHclTerraform(struct?: DigitalTwinsTimeSeriesDatabaseConnectionTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DigitalTwinsTimeSeriesDatabaseConnectionTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DigitalTwinsTimeSeriesDatabaseConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection azurerm_digital_twins_time_series_database_connection}
*/
export class DigitalTwinsTimeSeriesDatabaseConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_digital_twins_time_series_database_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DigitalTwinsTimeSeriesDatabaseConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DigitalTwinsTimeSeriesDatabaseConnection to import
  * @param importFromId The id of the existing DigitalTwinsTimeSeriesDatabaseConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DigitalTwinsTimeSeriesDatabaseConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_digital_twins_time_series_database_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/digital_twins_time_series_database_connection azurerm_digital_twins_time_series_database_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DigitalTwinsTimeSeriesDatabaseConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DigitalTwinsTimeSeriesDatabaseConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_digital_twins_time_series_database_connection',
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
    this._digitalTwinsId = config.digitalTwinsId;
    this._eventhubConsumerGroupName = config.eventhubConsumerGroupName;
    this._eventhubName = config.eventhubName;
    this._eventhubNamespaceEndpointUri = config.eventhubNamespaceEndpointUri;
    this._eventhubNamespaceId = config.eventhubNamespaceId;
    this._id = config.id;
    this._kustoClusterId = config.kustoClusterId;
    this._kustoClusterUri = config.kustoClusterUri;
    this._kustoDatabaseName = config.kustoDatabaseName;
    this._kustoTableName = config.kustoTableName;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // digital_twins_id - computed: false, optional: false, required: true
  private _digitalTwinsId?: string; 
  public get digitalTwinsId() {
    return this.getStringAttribute('digital_twins_id');
  }
  public set digitalTwinsId(value: string) {
    this._digitalTwinsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinsIdInput() {
    return this._digitalTwinsId;
  }

  // eventhub_consumer_group_name - computed: false, optional: true, required: false
  private _eventhubConsumerGroupName?: string; 
  public get eventhubConsumerGroupName() {
    return this.getStringAttribute('eventhub_consumer_group_name');
  }
  public set eventhubConsumerGroupName(value: string) {
    this._eventhubConsumerGroupName = value;
  }
  public resetEventhubConsumerGroupName() {
    this._eventhubConsumerGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubConsumerGroupNameInput() {
    return this._eventhubConsumerGroupName;
  }

  // eventhub_name - computed: false, optional: false, required: true
  private _eventhubName?: string; 
  public get eventhubName() {
    return this.getStringAttribute('eventhub_name');
  }
  public set eventhubName(value: string) {
    this._eventhubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubNameInput() {
    return this._eventhubName;
  }

  // eventhub_namespace_endpoint_uri - computed: false, optional: false, required: true
  private _eventhubNamespaceEndpointUri?: string; 
  public get eventhubNamespaceEndpointUri() {
    return this.getStringAttribute('eventhub_namespace_endpoint_uri');
  }
  public set eventhubNamespaceEndpointUri(value: string) {
    this._eventhubNamespaceEndpointUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubNamespaceEndpointUriInput() {
    return this._eventhubNamespaceEndpointUri;
  }

  // eventhub_namespace_id - computed: false, optional: false, required: true
  private _eventhubNamespaceId?: string; 
  public get eventhubNamespaceId() {
    return this.getStringAttribute('eventhub_namespace_id');
  }
  public set eventhubNamespaceId(value: string) {
    this._eventhubNamespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubNamespaceIdInput() {
    return this._eventhubNamespaceId;
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

  // kusto_cluster_id - computed: false, optional: false, required: true
  private _kustoClusterId?: string; 
  public get kustoClusterId() {
    return this.getStringAttribute('kusto_cluster_id');
  }
  public set kustoClusterId(value: string) {
    this._kustoClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kustoClusterIdInput() {
    return this._kustoClusterId;
  }

  // kusto_cluster_uri - computed: false, optional: false, required: true
  private _kustoClusterUri?: string; 
  public get kustoClusterUri() {
    return this.getStringAttribute('kusto_cluster_uri');
  }
  public set kustoClusterUri(value: string) {
    this._kustoClusterUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kustoClusterUriInput() {
    return this._kustoClusterUri;
  }

  // kusto_database_name - computed: false, optional: false, required: true
  private _kustoDatabaseName?: string; 
  public get kustoDatabaseName() {
    return this.getStringAttribute('kusto_database_name');
  }
  public set kustoDatabaseName(value: string) {
    this._kustoDatabaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kustoDatabaseNameInput() {
    return this._kustoDatabaseName;
  }

  // kusto_table_name - computed: false, optional: true, required: false
  private _kustoTableName?: string; 
  public get kustoTableName() {
    return this.getStringAttribute('kusto_table_name');
  }
  public set kustoTableName(value: string) {
    this._kustoTableName = value;
  }
  public resetKustoTableName() {
    this._kustoTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustoTableNameInput() {
    return this._kustoTableName;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DigitalTwinsTimeSeriesDatabaseConnectionTimeouts) {
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
      digital_twins_id: cdktf.stringToTerraform(this._digitalTwinsId),
      eventhub_consumer_group_name: cdktf.stringToTerraform(this._eventhubConsumerGroupName),
      eventhub_name: cdktf.stringToTerraform(this._eventhubName),
      eventhub_namespace_endpoint_uri: cdktf.stringToTerraform(this._eventhubNamespaceEndpointUri),
      eventhub_namespace_id: cdktf.stringToTerraform(this._eventhubNamespaceId),
      id: cdktf.stringToTerraform(this._id),
      kusto_cluster_id: cdktf.stringToTerraform(this._kustoClusterId),
      kusto_cluster_uri: cdktf.stringToTerraform(this._kustoClusterUri),
      kusto_database_name: cdktf.stringToTerraform(this._kustoDatabaseName),
      kusto_table_name: cdktf.stringToTerraform(this._kustoTableName),
      name: cdktf.stringToTerraform(this._name),
      timeouts: digitalTwinsTimeSeriesDatabaseConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digital_twins_id: {
        value: cdktf.stringToHclTerraform(this._digitalTwinsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventhub_consumer_group_name: {
        value: cdktf.stringToHclTerraform(this._eventhubConsumerGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventhub_name: {
        value: cdktf.stringToHclTerraform(this._eventhubName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventhub_namespace_endpoint_uri: {
        value: cdktf.stringToHclTerraform(this._eventhubNamespaceEndpointUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventhub_namespace_id: {
        value: cdktf.stringToHclTerraform(this._eventhubNamespaceId),
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
      kusto_cluster_id: {
        value: cdktf.stringToHclTerraform(this._kustoClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kusto_cluster_uri: {
        value: cdktf.stringToHclTerraform(this._kustoClusterUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kusto_database_name: {
        value: cdktf.stringToHclTerraform(this._kustoDatabaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kusto_table_name: {
        value: cdktf.stringToHclTerraform(this._kustoTableName),
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
      timeouts: {
        value: digitalTwinsTimeSeriesDatabaseConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DigitalTwinsTimeSeriesDatabaseConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
