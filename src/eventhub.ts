// https://www.terraform.io/docs/providers/azurerm/r/eventhub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventhubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#message_retention Eventhub#message_retention}
  */
  readonly messageRetention: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#name Eventhub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#namespace_name Eventhub#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#partition_count Eventhub#partition_count}
  */
  readonly partitionCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#resource_group_name Eventhub#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#status Eventhub#status}
  */
  readonly status?: string;
  /**
  * capture_description block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#capture_description Eventhub#capture_description}
  */
  readonly captureDescription?: EventhubCaptureDescription;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#timeouts Eventhub#timeouts}
  */
  readonly timeouts?: EventhubTimeouts;
}
export interface EventhubCaptureDescriptionDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#archive_name_format Eventhub#archive_name_format}
  */
  readonly archiveNameFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#blob_container_name Eventhub#blob_container_name}
  */
  readonly blobContainerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#name Eventhub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#storage_account_id Eventhub#storage_account_id}
  */
  readonly storageAccountId: string;
}

function eventhubCaptureDescriptionDestinationToTerraform(struct?: EventhubCaptureDescriptionDestinationOutputReference | EventhubCaptureDescriptionDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_name_format: cdktf.stringToTerraform(struct!.archiveNameFormat),
    blob_container_name: cdktf.stringToTerraform(struct!.blobContainerName),
    name: cdktf.stringToTerraform(struct!.name),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}

export class EventhubCaptureDescriptionDestinationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // archive_name_format - computed: false, optional: false, required: true
  private _archiveNameFormat?: string; 
  public get archiveNameFormat() {
    return this.getStringAttribute('archive_name_format');
  }
  public set archiveNameFormat(value: string) {
    this._archiveNameFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveNameFormatInput() {
    return this._archiveNameFormat
  }

  // blob_container_name - computed: false, optional: false, required: true
  private _blobContainerName?: string; 
  public get blobContainerName() {
    return this.getStringAttribute('blob_container_name');
  }
  public set blobContainerName(value: string) {
    this._blobContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blobContainerNameInput() {
    return this._blobContainerName
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

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
  }
}
export interface EventhubCaptureDescription {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#enabled Eventhub#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#encoding Eventhub#encoding}
  */
  readonly encoding: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#interval_in_seconds Eventhub#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#size_limit_in_bytes Eventhub#size_limit_in_bytes}
  */
  readonly sizeLimitInBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#skip_empty_archives Eventhub#skip_empty_archives}
  */
  readonly skipEmptyArchives?: boolean | cdktf.IResolvable;
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#destination Eventhub#destination}
  */
  readonly destination: EventhubCaptureDescriptionDestination;
}

function eventhubCaptureDescriptionToTerraform(struct?: EventhubCaptureDescriptionOutputReference | EventhubCaptureDescription): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_limit_in_bytes: cdktf.numberToTerraform(struct!.sizeLimitInBytes),
    skip_empty_archives: cdktf.booleanToTerraform(struct!.skipEmptyArchives),
    destination: eventhubCaptureDescriptionDestinationToTerraform(struct!.destination),
  }
}

export class EventhubCaptureDescriptionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // encoding - computed: false, optional: false, required: true
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding
  }

  // interval_in_seconds - computed: false, optional: true, required: false
  private _intervalInSeconds?: number | undefined; 
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number | undefined) {
    this._intervalInSeconds = value;
  }
  public resetIntervalInSeconds() {
    this._intervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInSecondsInput() {
    return this._intervalInSeconds
  }

  // size_limit_in_bytes - computed: false, optional: true, required: false
  private _sizeLimitInBytes?: number | undefined; 
  public get sizeLimitInBytes() {
    return this.getNumberAttribute('size_limit_in_bytes');
  }
  public set sizeLimitInBytes(value: number | undefined) {
    this._sizeLimitInBytes = value;
  }
  public resetSizeLimitInBytes() {
    this._sizeLimitInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInBytesInput() {
    return this._sizeLimitInBytes
  }

  // skip_empty_archives - computed: false, optional: true, required: false
  private _skipEmptyArchives?: boolean | cdktf.IResolvable | undefined; 
  public get skipEmptyArchives() {
    return this.getBooleanAttribute('skip_empty_archives') as any;
  }
  public set skipEmptyArchives(value: boolean | cdktf.IResolvable | undefined) {
    this._skipEmptyArchives = value;
  }
  public resetSkipEmptyArchives() {
    this._skipEmptyArchives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipEmptyArchivesInput() {
    return this._skipEmptyArchives
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: EventhubCaptureDescriptionDestination; 
  private __destinationOutput = new EventhubCaptureDescriptionDestinationOutputReference(this as any, "destination", true);
  public get destination() {
    return this.__destinationOutput;
  }
  public putDestination(value: EventhubCaptureDescriptionDestination) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }
}
export interface EventhubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#create Eventhub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#delete Eventhub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#read Eventhub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#update Eventhub#update}
  */
  readonly update?: string;
}

function eventhubTimeoutsToTerraform(struct?: EventhubTimeoutsOutputReference | EventhubTimeouts): any {
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

export class EventhubTimeoutsOutputReference extends cdktf.ComplexObject {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html azurerm_eventhub}
*/
export class Eventhub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_eventhub";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html azurerm_eventhub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventhubConfig
  */
  public constructor(scope: Construct, id: string, config: EventhubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventhub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._messageRetention = config.messageRetention;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._partitionCount = config.partitionCount;
    this._resourceGroupName = config.resourceGroupName;
    this._status = config.status;
    this._captureDescription = config.captureDescription;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message_retention - computed: false, optional: false, required: true
  private _messageRetention?: number; 
  public get messageRetention() {
    return this.getNumberAttribute('message_retention');
  }
  public set messageRetention(value: number) {
    this._messageRetention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionInput() {
    return this._messageRetention
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName
  }

  // partition_count - computed: false, optional: false, required: true
  private _partitionCount?: number; 
  public get partitionCount() {
    return this.getNumberAttribute('partition_count');
  }
  public set partitionCount(value: number) {
    this._partitionCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionCountInput() {
    return this._partitionCount
  }

  // partition_ids - computed: true, optional: false, required: false
  public get partitionIds() {
    return this.getListAttribute('partition_ids');
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

  // status - computed: false, optional: true, required: false
  private _status?: string | undefined; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string | undefined) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // capture_description - computed: false, optional: true, required: false
  private _captureDescription?: EventhubCaptureDescription | undefined; 
  private __captureDescriptionOutput = new EventhubCaptureDescriptionOutputReference(this as any, "capture_description", true);
  public get captureDescription() {
    return this.__captureDescriptionOutput;
  }
  public putCaptureDescription(value: EventhubCaptureDescription | undefined) {
    this._captureDescription = value;
  }
  public resetCaptureDescription() {
    this._captureDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureDescriptionInput() {
    return this._captureDescription
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventhubTimeouts | undefined; 
  private __timeoutsOutput = new EventhubTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: EventhubTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      message_retention: cdktf.numberToTerraform(this._messageRetention),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      partition_count: cdktf.numberToTerraform(this._partitionCount),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      status: cdktf.stringToTerraform(this._status),
      capture_description: eventhubCaptureDescriptionToTerraform(this._captureDescription),
      timeouts: eventhubTimeoutsToTerraform(this._timeouts),
    };
  }
}
