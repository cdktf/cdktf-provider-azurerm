// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_kubernetes_service_versions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermKubernetesServiceVersionsConfig extends TerraformMetaArguments {
  readonly includePreview?: boolean;
  readonly location: string;
  readonly versionPrefix?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermKubernetesServiceVersionsTimeouts;
}
export interface DataAzurermKubernetesServiceVersionsTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermKubernetesServiceVersions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermKubernetesServiceVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_service_versions',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._includePreview = config.includePreview;
    this._location = config.location;
    this._versionPrefix = config.versionPrefix;
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

  // include_preview - computed: false, optional: true, required: false
  private _includePreview?: boolean;
  public get includePreview() {
    return this._includePreview;
  }
  public set includePreview(value: boolean | undefined) {
    this._includePreview = value;
  }

  // latest_version - computed: true, optional: false, required: true
  public get latestVersion() {
    return this.getStringAttribute('latest_version');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // version_prefix - computed: false, optional: true, required: false
  private _versionPrefix?: string;
  public get versionPrefix() {
    return this._versionPrefix;
  }
  public set versionPrefix(value: string | undefined) {
    this._versionPrefix = value;
  }

  // versions - computed: true, optional: false, required: true
  public get versions() {
    return this.getListAttribute('versions');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKubernetesServiceVersionsTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermKubernetesServiceVersionsTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      include_preview: this._includePreview,
      location: this._location,
      version_prefix: this._versionPrefix,
      timeouts: this._timeouts,
    };
  }
}
