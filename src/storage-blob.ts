// https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageBlobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#access_tier StorageBlob#access_tier}
  */
  readonly accessTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#cache_control StorageBlob#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#content_md5 StorageBlob#content_md5}
  */
  readonly contentMd5?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#content_type StorageBlob#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#metadata StorageBlob#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#name StorageBlob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#parallelism StorageBlob#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#size StorageBlob#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#source StorageBlob#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#source_content StorageBlob#source_content}
  */
  readonly sourceContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#source_uri StorageBlob#source_uri}
  */
  readonly sourceUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#storage_account_name StorageBlob#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#storage_container_name StorageBlob#storage_container_name}
  */
  readonly storageContainerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#type StorageBlob#type}
  */
  readonly type: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#timeouts StorageBlob#timeouts}
  */
  readonly timeouts?: StorageBlobTimeouts;
}
export interface StorageBlobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#create StorageBlob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#delete StorageBlob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#read StorageBlob#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html#update StorageBlob#update}
  */
  readonly update?: string;
}

function storageBlobTimeoutsToTerraform(struct?: StorageBlobTimeoutsOutputReference | StorageBlobTimeouts): any {
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

export class StorageBlobTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html azurerm_storage_blob}
*/
export class StorageBlob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_blob";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob.html azurerm_storage_blob} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageBlobConfig
  */
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
    this._cacheControl = config.cacheControl;
    this._contentMd5 = config.contentMd5;
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
  private _accessTier?: string | undefined; 
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }
  public set accessTier(value: string | undefined) {
    this._accessTier = value;
  }
  public resetAccessTier() {
    this._accessTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTierInput() {
    return this._accessTier
  }

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string | undefined; 
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string | undefined) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl
  }

  // content_md5 - computed: false, optional: true, required: false
  private _contentMd5?: string | undefined; 
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }
  public set contentMd5(value: string | undefined) {
    this._contentMd5 = value;
  }
  public resetContentMd5() {
    this._contentMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentMd5Input() {
    return this._contentMd5
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string | undefined; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string | undefined) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number | undefined; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number | undefined) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism
  }

  // size - computed: false, optional: true, required: false
  private _size?: number | undefined; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number | undefined) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size
  }

  // source - computed: false, optional: true, required: false
  private _source?: string | undefined; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string | undefined) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // source_content - computed: false, optional: true, required: false
  private _sourceContent?: string | undefined; 
  public get sourceContent() {
    return this.getStringAttribute('source_content');
  }
  public set sourceContent(value: string | undefined) {
    this._sourceContent = value;
  }
  public resetSourceContent() {
    this._sourceContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceContentInput() {
    return this._sourceContent
  }

  // source_uri - computed: false, optional: true, required: false
  private _sourceUri?: string | undefined; 
  public get sourceUri() {
    return this.getStringAttribute('source_uri');
  }
  public set sourceUri(value: string | undefined) {
    this._sourceUri = value;
  }
  public resetSourceUri() {
    this._sourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUriInput() {
    return this._sourceUri
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName
  }

  // storage_container_name - computed: false, optional: false, required: true
  private _storageContainerName?: string; 
  public get storageContainerName() {
    return this.getStringAttribute('storage_container_name');
  }
  public set storageContainerName(value: string) {
    this._storageContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerNameInput() {
    return this._storageContainerName
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
    return this._type
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageBlobTimeouts | undefined; 
  private __timeoutsOutput = new StorageBlobTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: StorageBlobTimeouts | undefined) {
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
      access_tier: cdktf.stringToTerraform(this._accessTier),
      cache_control: cdktf.stringToTerraform(this._cacheControl),
      content_md5: cdktf.stringToTerraform(this._contentMd5),
      content_type: cdktf.stringToTerraform(this._contentType),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      parallelism: cdktf.numberToTerraform(this._parallelism),
      size: cdktf.numberToTerraform(this._size),
      source: cdktf.stringToTerraform(this._source),
      source_content: cdktf.stringToTerraform(this._sourceContent),
      source_uri: cdktf.stringToTerraform(this._sourceUri),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      storage_container_name: cdktf.stringToTerraform(this._storageContainerName),
      type: cdktf.stringToTerraform(this._type),
      timeouts: storageBlobTimeoutsToTerraform(this._timeouts),
    };
  }
}
