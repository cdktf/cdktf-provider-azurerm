// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsOutputEventhubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#authentication_mode StreamAnalyticsOutputEventhub#authentication_mode}
  */
  readonly authenticationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#eventhub_name StreamAnalyticsOutputEventhub#eventhub_name}
  */
  readonly eventhubName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#id StreamAnalyticsOutputEventhub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#name StreamAnalyticsOutputEventhub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#partition_key StreamAnalyticsOutputEventhub#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#property_columns StreamAnalyticsOutputEventhub#property_columns}
  */
  readonly propertyColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#resource_group_name StreamAnalyticsOutputEventhub#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#servicebus_namespace StreamAnalyticsOutputEventhub#servicebus_namespace}
  */
  readonly servicebusNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#shared_access_policy_key StreamAnalyticsOutputEventhub#shared_access_policy_key}
  */
  readonly sharedAccessPolicyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#shared_access_policy_name StreamAnalyticsOutputEventhub#shared_access_policy_name}
  */
  readonly sharedAccessPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#stream_analytics_job_name StreamAnalyticsOutputEventhub#stream_analytics_job_name}
  */
  readonly streamAnalyticsJobName: string;
  /**
  * serialization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#serialization StreamAnalyticsOutputEventhub#serialization}
  */
  readonly serialization: StreamAnalyticsOutputEventhubSerialization;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#timeouts StreamAnalyticsOutputEventhub#timeouts}
  */
  readonly timeouts?: StreamAnalyticsOutputEventhubTimeouts;
}
export interface StreamAnalyticsOutputEventhubSerialization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#encoding StreamAnalyticsOutputEventhub#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#field_delimiter StreamAnalyticsOutputEventhub#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#format StreamAnalyticsOutputEventhub#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#type StreamAnalyticsOutputEventhub#type}
  */
  readonly type: string;
}

export function streamAnalyticsOutputEventhubSerializationToTerraform(struct?: StreamAnalyticsOutputEventhubSerializationOutputReference | StreamAnalyticsOutputEventhubSerialization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    format: cdktf.stringToTerraform(struct!.format),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function streamAnalyticsOutputEventhubSerializationToHclTerraform(struct?: StreamAnalyticsOutputEventhubSerializationOutputReference | StreamAnalyticsOutputEventhubSerialization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamAnalyticsOutputEventhubSerializationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamAnalyticsOutputEventhubSerialization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamAnalyticsOutputEventhubSerialization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encoding = undefined;
      this._fieldDelimiter = undefined;
      this._format = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encoding = value.encoding;
      this._fieldDelimiter = value.fieldDelimiter;
      this._format = value.format;
      this._type = value.type;
    }
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface StreamAnalyticsOutputEventhubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#create StreamAnalyticsOutputEventhub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#delete StreamAnalyticsOutputEventhub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#read StreamAnalyticsOutputEventhub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#update StreamAnalyticsOutputEventhub#update}
  */
  readonly update?: string;
}

export function streamAnalyticsOutputEventhubTimeoutsToTerraform(struct?: StreamAnalyticsOutputEventhubTimeouts | cdktf.IResolvable): any {
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


export function streamAnalyticsOutputEventhubTimeoutsToHclTerraform(struct?: StreamAnalyticsOutputEventhubTimeouts | cdktf.IResolvable): any {
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

export class StreamAnalyticsOutputEventhubTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamAnalyticsOutputEventhubTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StreamAnalyticsOutputEventhubTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub azurerm_stream_analytics_output_eventhub}
*/
export class StreamAnalyticsOutputEventhub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_stream_analytics_output_eventhub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamAnalyticsOutputEventhub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamAnalyticsOutputEventhub to import
  * @param importFromId The id of the existing StreamAnalyticsOutputEventhub that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamAnalyticsOutputEventhub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_stream_analytics_output_eventhub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_output_eventhub azurerm_stream_analytics_output_eventhub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsOutputEventhubConfig
  */
  public constructor(scope: Construct, id: string, config: StreamAnalyticsOutputEventhubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_output_eventhub',
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
    this._authenticationMode = config.authenticationMode;
    this._eventhubName = config.eventhubName;
    this._id = config.id;
    this._name = config.name;
    this._partitionKey = config.partitionKey;
    this._propertyColumns = config.propertyColumns;
    this._resourceGroupName = config.resourceGroupName;
    this._servicebusNamespace = config.servicebusNamespace;
    this._sharedAccessPolicyKey = config.sharedAccessPolicyKey;
    this._sharedAccessPolicyName = config.sharedAccessPolicyName;
    this._streamAnalyticsJobName = config.streamAnalyticsJobName;
    this._serialization.internalValue = config.serialization;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_mode - computed: false, optional: true, required: false
  private _authenticationMode?: string; 
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }
  public set authenticationMode(value: string) {
    this._authenticationMode = value;
  }
  public resetAuthenticationMode() {
    this._authenticationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode;
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

  // property_columns - computed: false, optional: true, required: false
  private _propertyColumns?: string[]; 
  public get propertyColumns() {
    return this.getListAttribute('property_columns');
  }
  public set propertyColumns(value: string[]) {
    this._propertyColumns = value;
  }
  public resetPropertyColumns() {
    this._propertyColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyColumnsInput() {
    return this._propertyColumns;
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

  // servicebus_namespace - computed: false, optional: false, required: true
  private _servicebusNamespace?: string; 
  public get servicebusNamespace() {
    return this.getStringAttribute('servicebus_namespace');
  }
  public set servicebusNamespace(value: string) {
    this._servicebusNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicebusNamespaceInput() {
    return this._servicebusNamespace;
  }

  // shared_access_policy_key - computed: false, optional: true, required: false
  private _sharedAccessPolicyKey?: string; 
  public get sharedAccessPolicyKey() {
    return this.getStringAttribute('shared_access_policy_key');
  }
  public set sharedAccessPolicyKey(value: string) {
    this._sharedAccessPolicyKey = value;
  }
  public resetSharedAccessPolicyKey() {
    this._sharedAccessPolicyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessPolicyKeyInput() {
    return this._sharedAccessPolicyKey;
  }

  // shared_access_policy_name - computed: false, optional: true, required: false
  private _sharedAccessPolicyName?: string; 
  public get sharedAccessPolicyName() {
    return this.getStringAttribute('shared_access_policy_name');
  }
  public set sharedAccessPolicyName(value: string) {
    this._sharedAccessPolicyName = value;
  }
  public resetSharedAccessPolicyName() {
    this._sharedAccessPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessPolicyNameInput() {
    return this._sharedAccessPolicyName;
  }

  // stream_analytics_job_name - computed: false, optional: false, required: true
  private _streamAnalyticsJobName?: string; 
  public get streamAnalyticsJobName() {
    return this.getStringAttribute('stream_analytics_job_name');
  }
  public set streamAnalyticsJobName(value: string) {
    this._streamAnalyticsJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAnalyticsJobNameInput() {
    return this._streamAnalyticsJobName;
  }

  // serialization - computed: false, optional: false, required: true
  private _serialization = new StreamAnalyticsOutputEventhubSerializationOutputReference(this, "serialization");
  public get serialization() {
    return this._serialization;
  }
  public putSerialization(value: StreamAnalyticsOutputEventhubSerialization) {
    this._serialization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationInput() {
    return this._serialization.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StreamAnalyticsOutputEventhubTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StreamAnalyticsOutputEventhubTimeouts) {
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
      authentication_mode: cdktf.stringToTerraform(this._authenticationMode),
      eventhub_name: cdktf.stringToTerraform(this._eventhubName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      partition_key: cdktf.stringToTerraform(this._partitionKey),
      property_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyColumns),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      servicebus_namespace: cdktf.stringToTerraform(this._servicebusNamespace),
      shared_access_policy_key: cdktf.stringToTerraform(this._sharedAccessPolicyKey),
      shared_access_policy_name: cdktf.stringToTerraform(this._sharedAccessPolicyName),
      stream_analytics_job_name: cdktf.stringToTerraform(this._streamAnalyticsJobName),
      serialization: streamAnalyticsOutputEventhubSerializationToTerraform(this._serialization.internalValue),
      timeouts: streamAnalyticsOutputEventhubTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_mode: {
        value: cdktf.stringToHclTerraform(this._authenticationMode),
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
      property_columns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyColumns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicebus_namespace: {
        value: cdktf.stringToHclTerraform(this._servicebusNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_access_policy_key: {
        value: cdktf.stringToHclTerraform(this._sharedAccessPolicyKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_access_policy_name: {
        value: cdktf.stringToHclTerraform(this._sharedAccessPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_analytics_job_name: {
        value: cdktf.stringToHclTerraform(this._streamAnalyticsJobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serialization: {
        value: streamAnalyticsOutputEventhubSerializationToHclTerraform(this._serialization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StreamAnalyticsOutputEventhubSerializationList",
      },
      timeouts: {
        value: streamAnalyticsOutputEventhubTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StreamAnalyticsOutputEventhubTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
