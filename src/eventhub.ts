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
  * capture_description block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#capture_description Eventhub#capture_description}
  */
  readonly captureDescription?: EventhubCaptureDescription[];
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

function eventhubCaptureDescriptionDestinationToTerraform(struct?: EventhubCaptureDescriptionDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    archive_name_format: cdktf.stringToTerraform(struct!.archiveNameFormat),
    blob_container_name: cdktf.stringToTerraform(struct!.blobContainerName),
    name: cdktf.stringToTerraform(struct!.name),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}

export interface EventhubCaptureDescription {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#enabled Eventhub#enabled}
  */
  readonly enabled: boolean;
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
  readonly skipEmptyArchives?: boolean;
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html#destination Eventhub#destination}
  */
  readonly destination: EventhubCaptureDescriptionDestination[];
}

function eventhubCaptureDescriptionToTerraform(struct?: EventhubCaptureDescription): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_limit_in_bytes: cdktf.numberToTerraform(struct!.sizeLimitInBytes),
    skip_empty_archives: cdktf.booleanToTerraform(struct!.skipEmptyArchives),
    destination: cdktf.listMapper(eventhubCaptureDescriptionDestinationToTerraform)(struct!.destination),
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

function eventhubTimeoutsToTerraform(struct?: EventhubTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub.html azurerm_eventhub}
*/
export class Eventhub extends cdktf.TerraformResource {

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
  private _messageRetention: number;
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
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
  private _partitionCount: number;
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

  // capture_description - computed: false, optional: true, required: false
  private _captureDescription?: EventhubCaptureDescription[];
  public get captureDescription() {
    return this.interpolationForAttribute('capture_description') as any;
  }
  public set captureDescription(value: EventhubCaptureDescription[] ) {
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
  private _timeouts?: EventhubTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EventhubTimeouts ) {
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
      capture_description: cdktf.listMapper(eventhubCaptureDescriptionToTerraform)(this._captureDescription),
      timeouts: eventhubTimeoutsToTerraform(this._timeouts),
    };
  }
}
