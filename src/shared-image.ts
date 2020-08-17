// https://www.terraform.io/docs/providers/azurerm/r/shared_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SharedImageConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly eula?: string;
  readonly galleryName: string;
  readonly location: string;
  readonly name: string;
  readonly osType: string;
  readonly privacyStatementUri?: string;
  readonly releaseNoteUri?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** identifier block */
  readonly identifier: SharedImageIdentifier[];
  /** timeouts block */
  readonly timeouts?: SharedImageTimeouts;
}
export interface SharedImageIdentifier {
  readonly offer: string;
  readonly publisher: string;
  readonly sku: string;
}
export interface SharedImageTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SharedImage extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SharedImageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_shared_image',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._eula = config.eula;
    this._galleryName = config.galleryName;
    this._location = config.location;
    this._name = config.name;
    this._osType = config.osType;
    this._privacyStatementUri = config.privacyStatementUri;
    this._releaseNoteUri = config.releaseNoteUri;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._identifier = config.identifier;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // eula - computed: false, optional: true, required: false
  private _eula?: string;
  public get eula() {
    return this._eula;
  }
  public set eula(value: string | undefined) {
    this._eula = value;
  }

  // gallery_name - computed: false, optional: false, required: true
  private _galleryName: string;
  public get galleryName() {
    return this._galleryName;
  }
  public set galleryName(value: string) {
    this._galleryName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // os_type - computed: false, optional: false, required: true
  private _osType: string;
  public get osType() {
    return this._osType;
  }
  public set osType(value: string) {
    this._osType = value;
  }

  // privacy_statement_uri - computed: false, optional: true, required: false
  private _privacyStatementUri?: string;
  public get privacyStatementUri() {
    return this._privacyStatementUri;
  }
  public set privacyStatementUri(value: string | undefined) {
    this._privacyStatementUri = value;
  }

  // release_note_uri - computed: false, optional: true, required: false
  private _releaseNoteUri?: string;
  public get releaseNoteUri() {
    return this._releaseNoteUri;
  }
  public set releaseNoteUri(value: string | undefined) {
    this._releaseNoteUri = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier: SharedImageIdentifier[];
  public get identifier() {
    return this._identifier;
  }
  public set identifier(value: SharedImageIdentifier[]) {
    this._identifier = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SharedImageTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SharedImageTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      eula: this._eula,
      gallery_name: this._galleryName,
      location: this._location,
      name: this._name,
      os_type: this._osType,
      privacy_statement_uri: this._privacyStatementUri,
      release_note_uri: this._releaseNoteUri,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      identifier: this._identifier,
      timeouts: this._timeouts,
    };
  }
}
