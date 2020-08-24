// https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageBlobConfig extends TerraformMetaArguments {
  readonly accessTier?: string;
  readonly contentType?: string;
  readonly metadata?: { [key: string]: string };
  readonly name: string;
  readonly parallelism?: number;
  readonly size?: number;
  readonly source?: string;
  readonly sourceContent?: string;
  readonly sourceUri?: string;
  readonly storageAccountName: string;
  readonly storageContainerName: string;
  readonly type: string;
  /** timeouts block */
  readonly timeouts?: StorageBlobTimeouts;
}
export interface StorageBlobTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class StorageBlob extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageBlobConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_blob',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessTier = config.accessTier;
    this._contentType = config.contentType;
    this._metadata = config.metadata;
    this._name = config.name;
    this._parallelism = config.parallelism;
    this._size = config.size;
    this._source = config.source;
    this._sourceContent = config.sourceContent;
    this._sourceUri = config.sourceUri;
    this._storageAccountName = config.storageAccountName;
    this._storageContainerName = config.storageContainerName;
    this._type = config.type;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_tier - computed: true, optional: true, required: false
  private _accessTier?: string;
  public get accessTier() {
    return this._accessTier ?? this.getStringAttribute('access_tier');
  }
  public set accessTier(value: string | undefined) {
    this._accessTier = value;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this._contentType;
  }
  public set contentType(value: string | undefined) {
    this._contentType = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }
  public get metadata(): { [key: string]: string } | undefined {
    return this._metadata; // Getting the computed value is not yet implemented
  }
  public set metadata(value: { [key: string]: string } | undefined) {
    this._metadata = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number;
  public get parallelism() {
    return this._parallelism;
  }
  public set parallelism(value: number | undefined) {
    this._parallelism = value;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number;
  public get size() {
    return this._size;
  }
  public set size(value: number | undefined) {
    this._size = value;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string;
  public get source() {
    return this._source;
  }
  public set source(value: string | undefined) {
    this._source = value;
  }

  // source_content - computed: false, optional: true, required: false
  private _sourceContent?: string;
  public get sourceContent() {
    return this._sourceContent;
  }
  public set sourceContent(value: string | undefined) {
    this._sourceContent = value;
  }

  // source_uri - computed: false, optional: true, required: false
  private _sourceUri?: string;
  public get sourceUri() {
    return this._sourceUri;
  }
  public set sourceUri(value: string | undefined) {
    this._sourceUri = value;
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName: string;
  public get storageAccountName() {
    return this._storageAccountName;
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }

  // storage_container_name - computed: false, optional: false, required: true
  private _storageContainerName: string;
  public get storageContainerName() {
    return this._storageContainerName;
  }
  public set storageContainerName(value: string) {
    this._storageContainerName = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageBlobTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StorageBlobTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_tier: this._accessTier,
      content_type: this._contentType,
      metadata: this._metadata,
      name: this._name,
      parallelism: this._parallelism,
      size: this._size,
      source: this._source,
      source_content: this._sourceContent,
      source_uri: this._sourceUri,
      storage_account_name: this._storageAccountName,
      storage_container_name: this._storageContainerName,
      type: this._type,
      timeouts: this._timeouts,
    };
  }
}
