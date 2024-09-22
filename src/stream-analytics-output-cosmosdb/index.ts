// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsOutputCosmosdbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb#container_name StreamAnalyticsOutputCosmosdb#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb#cosmosdb_account_key StreamAnalyticsOutputCosmosdb#cosmosdb_account_key}
  */
  readonly cosmosdbAccountKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb#cosmosdb_sql_database_id StreamAnalyticsOutputCosmosdb#cosmosdb_sql_database_id}
  */
  readonly cosmosdbSqlDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb#document_id StreamAnalyticsOutputCosmosdb#document_id}
  */
  readonly documentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb#id StreamAnalyticsOutputCosmosdb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb#name StreamAnalyticsOutputCosmosdb#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb#partition_key StreamAnalyticsOutputCosmosdb#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb#stream_analytics_job_id StreamAnalyticsOutputCosmosdb#stream_analytics_job_id}
  */
  readonly streamAnalyticsJobId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb#timeouts StreamAnalyticsOutputCosmosdb#timeouts}
  */
  readonly timeouts?: StreamAnalyticsOutputCosmosdbTimeouts;
}
export interface StreamAnalyticsOutputCosmosdbTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb#create StreamAnalyticsOutputCosmosdb#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb#delete StreamAnalyticsOutputCosmosdb#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb#read StreamAnalyticsOutputCosmosdb#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb#update StreamAnalyticsOutputCosmosdb#update}
  */
  readonly update?: string;
}

export function streamAnalyticsOutputCosmosdbTimeoutsToTerraform(struct?: StreamAnalyticsOutputCosmosdbTimeouts | cdktf.IResolvable): any {
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


export function streamAnalyticsOutputCosmosdbTimeoutsToHclTerraform(struct?: StreamAnalyticsOutputCosmosdbTimeouts | cdktf.IResolvable): any {
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

export class StreamAnalyticsOutputCosmosdbTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamAnalyticsOutputCosmosdbTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StreamAnalyticsOutputCosmosdbTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb azurerm_stream_analytics_output_cosmosdb}
*/
export class StreamAnalyticsOutputCosmosdb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_stream_analytics_output_cosmosdb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamAnalyticsOutputCosmosdb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamAnalyticsOutputCosmosdb to import
  * @param importFromId The id of the existing StreamAnalyticsOutputCosmosdb that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamAnalyticsOutputCosmosdb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_stream_analytics_output_cosmosdb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_cosmosdb azurerm_stream_analytics_output_cosmosdb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsOutputCosmosdbConfig
  */
  public constructor(scope: Construct, id: string, config: StreamAnalyticsOutputCosmosdbConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_output_cosmosdb',
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
    this._containerName = config.containerName;
    this._cosmosdbAccountKey = config.cosmosdbAccountKey;
    this._cosmosdbSqlDatabaseId = config.cosmosdbSqlDatabaseId;
    this._documentId = config.documentId;
    this._id = config.id;
    this._name = config.name;
    this._partitionKey = config.partitionKey;
    this._streamAnalyticsJobId = config.streamAnalyticsJobId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // cosmosdb_account_key - computed: false, optional: false, required: true
  private _cosmosdbAccountKey?: string; 
  public get cosmosdbAccountKey() {
    return this.getStringAttribute('cosmosdb_account_key');
  }
  public set cosmosdbAccountKey(value: string) {
    this._cosmosdbAccountKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosdbAccountKeyInput() {
    return this._cosmosdbAccountKey;
  }

  // cosmosdb_sql_database_id - computed: false, optional: false, required: true
  private _cosmosdbSqlDatabaseId?: string; 
  public get cosmosdbSqlDatabaseId() {
    return this.getStringAttribute('cosmosdb_sql_database_id');
  }
  public set cosmosdbSqlDatabaseId(value: string) {
    this._cosmosdbSqlDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosdbSqlDatabaseIdInput() {
    return this._cosmosdbSqlDatabaseId;
  }

  // document_id - computed: false, optional: true, required: false
  private _documentId?: string; 
  public get documentId() {
    return this.getStringAttribute('document_id');
  }
  public set documentId(value: string) {
    this._documentId = value;
  }
  public resetDocumentId() {
    this._documentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentIdInput() {
    return this._documentId;
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

  // partition_key - computed: false, optional: true, required: false
  private _partitionKey?: string; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }
  public resetPartitionKey() {
    this._partitionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey;
  }

  // stream_analytics_job_id - computed: false, optional: false, required: true
  private _streamAnalyticsJobId?: string; 
  public get streamAnalyticsJobId() {
    return this.getStringAttribute('stream_analytics_job_id');
  }
  public set streamAnalyticsJobId(value: string) {
    this._streamAnalyticsJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAnalyticsJobIdInput() {
    return this._streamAnalyticsJobId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StreamAnalyticsOutputCosmosdbTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StreamAnalyticsOutputCosmosdbTimeouts) {
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
      container_name: cdktf.stringToTerraform(this._containerName),
      cosmosdb_account_key: cdktf.stringToTerraform(this._cosmosdbAccountKey),
      cosmosdb_sql_database_id: cdktf.stringToTerraform(this._cosmosdbSqlDatabaseId),
      document_id: cdktf.stringToTerraform(this._documentId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      partition_key: cdktf.stringToTerraform(this._partitionKey),
      stream_analytics_job_id: cdktf.stringToTerraform(this._streamAnalyticsJobId),
      timeouts: streamAnalyticsOutputCosmosdbTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_name: {
        value: cdktf.stringToHclTerraform(this._containerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cosmosdb_account_key: {
        value: cdktf.stringToHclTerraform(this._cosmosdbAccountKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cosmosdb_sql_database_id: {
        value: cdktf.stringToHclTerraform(this._cosmosdbSqlDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_id: {
        value: cdktf.stringToHclTerraform(this._documentId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_key: {
        value: cdktf.stringToHclTerraform(this._partitionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_analytics_job_id: {
        value: cdktf.stringToHclTerraform(this._streamAnalyticsJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: streamAnalyticsOutputCosmosdbTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StreamAnalyticsOutputCosmosdbTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
