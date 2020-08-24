// https://www.terraform.io/docs/providers/azurerm/r/eventhub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EventhubConfig extends TerraformMetaArguments {
  readonly messageRetention: number;
  readonly name: string;
  readonly namespaceName: string;
  readonly partitionCount: number;
  readonly resourceGroupName: string;
  /** capture_description block */
  readonly captureDescription?: EventhubCaptureDescription[];
  /** timeouts block */
  readonly timeouts?: EventhubTimeouts;
}
export interface EventhubCaptureDescriptionDestination {
  readonly archiveNameFormat: string;
  readonly blobContainerName: string;
  readonly name: string;
  readonly storageAccountId: string;
}
export interface EventhubCaptureDescription {
  readonly enabled: boolean;
  readonly encoding: string;
  readonly intervalInSeconds?: number;
  readonly sizeLimitInBytes?: number;
  readonly skipEmptyArchives?: boolean;
  /** destination block */
  readonly destination: EventhubCaptureDescriptionDestination[];
}
export interface EventhubTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class Eventhub extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // message_retention - computed: false, optional: false, required: true
  private _messageRetention: number;
  public get messageRetention() {
    return this._messageRetention;
  }
  public set messageRetention(value: number) {
    this._messageRetention = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
  public get namespaceName() {
    return this._namespaceName;
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }

  // partition_count - computed: false, optional: false, required: true
  private _partitionCount: number;
  public get partitionCount() {
    return this._partitionCount;
  }
  public set partitionCount(value: number) {
    this._partitionCount = value;
  }

  // partition_ids - computed: true, optional: false, required: true
  public get partitionIds() {
    return this.getListAttribute('partition_ids');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // capture_description - computed: false, optional: true, required: false
  private _captureDescription?: EventhubCaptureDescription[];
  public get captureDescription() {
    return this._captureDescription;
  }
  public set captureDescription(value: EventhubCaptureDescription[] | undefined) {
    this._captureDescription = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventhubTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EventhubTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      message_retention: this._messageRetention,
      name: this._name,
      namespace_name: this._namespaceName,
      partition_count: this._partitionCount,
      resource_group_name: this._resourceGroupName,
      capture_description: this._captureDescription,
      timeouts: this._timeouts,
    };
  }
}
